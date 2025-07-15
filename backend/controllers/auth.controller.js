import { redis } from "../lib/redis.js";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const generateTokens = (userId) => {
    const accessToken = jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
    const refreshToken = jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });

    return { accessToken, refreshToken };
};

export const storeRefreshToken = async (userId, refreshToken) => {
    try {
        await redis.set(`refresh_token:${userId}`, refreshToken, "EX", 7 * 24 * 60 * 60); //7 days
    } catch (error) {
        console.log("Error in storing refresh token", error.message);
    }
};

export const setCookies = (res, accessToken, refreshToken) => {

    res.cookie("accessToken", accessToken, {
        httpOnly: true, // prevent XSS attacks, cross site scripting attack
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict", // prevents CSRF attack, cross-site request forgery attack
        maxAge: 15 * 60 * 1000, // 15 minutes
    });
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true, // prevent XSS attacks, cross site scripting attack
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict", // prevents CSRF attack, cross-site request forgery attack
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
};

export const signup = async (req, res) => {
    const { email, password, name } = req.body;
    try {
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }
        const user = await User.create({ email, password, name });
        const { accessToken, refreshToken } = generateTokens(user._id);
        await storeRefreshToken(user._id, refreshToken);

        setCookies(res, accessToken, refreshToken);

        res.status(201).json({
            _id: user._id,
            email: user.email,
            name: user.name
        });
    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const { email, password} = req.body;
        const user = await User.findOne({ email }).select("+password");
        
        if(user && (await user.comparePassword(password))){
            const { accessToken, refreshToken } = generateTokens(user._id);
            await storeRefreshToken(user._id, refreshToken);
            setCookies(res, accessToken, refreshToken);
            res.json({
                _id: user._id,
                email: user.email,
                name: user.name,
                role: user.role
            });
        } else {
            res.status(400).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({ message: error.message });
    }
};

export const logout = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if(refreshToken) {
            const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
            await redis.del(`refresh_token:${req.user._id}`); // delete refresh token from redis
        }
        res.clearCookie("accessToken");
        res.clearCookie("refreshToken");
        res.json({ message: "Logout successfull" });
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const refreshToken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) {
            return res.status(401).json({ message: "Not authorized - no refresh token" });
        }
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        const storedToken = await redis.get(`refresh_token:${decoded.id}`);
        if(!storedToken !== refreshToken) {
            return res.status(401).json({ message: "Invalid refresh token" });
        }
        
        const accessToken  = jwt.sign({ id: decoded.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });

        res.cookie("accessToken", accessToken, {
            httpOnly: true, // prevent XSS attacks, cross site scripting attack
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict", // prevents CSRF attack, cross-site request forgery attack
            maxAge: 15 * 60 * 1000, // 15 minutes
        });
        res.json({ accessToken });
    } catch (error) {
        console.log("Error in refreshToken controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const getProfile = async (req, res) => {
    try {
        res.json(req.user);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};