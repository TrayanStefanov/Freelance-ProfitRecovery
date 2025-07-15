import React from 'react'
import { useTranslation } from "react-i18next";
const Calculator = () => {

    const {t} = useTranslation();
    const Calc = (e) => {
		e.preventDefault();
        let industry = document.getElementById("industry").value;
        let turnover = document.getElementById("turnover").value;
        let savings = document.getElementById("savings");
        savings.innerHTML = t("calculator.savings") + Number(turnover * industry).toFixed(2) + "€";
	};

    return (
        <div>
            <div id="calc" className="min-h-[30vh] bg-secondary align-middle p-10 justify-items-center border-y-4 border-primary content-center text-center">
                <h2 className="text-3xl lg:text-4xl text-primary">{t("calculator.title2")}</h2>
                <form onSubmit={Calc} className="m-7">
                    <select id="industry" className="bg-primary text-white p-3 align-middle justify-items-center m-3 rounded-md">
                        <option className="hidden">{t("calculator.industry.1")}</option>
                        <option value="0.005">{t("calculator.industry.2")}</option>
                        <option value="0.007">{t("calculator.industry.3")}</option>
                        <option value="0.007">{t("calculator.industry.4")}</option>
                        <option value="0.004">{t("calculator.industry.5")}</option>
                        <option value="0.004">{t("calculator.industry.6")}</option>
                        <option value="0.002">{t("calculator.industry.7")}</option>
                        <option value="0.004">{t("calculator.industry.8")}</option>
                        <option value="0.006">{t("calculator.industry.9")}</option>
                        <option value="0.003">{t("calculator.industry.10")}</option>
                        <option value="0.005">{t("calculator.industry.11")}</option>
                        <option value="0.003">{t("calculator.industry.12")}</option>
                        <option value="0.002">{t("calculator.industry.13")}</option>
                        <option value="0.004">{t("calculator.industry.14")}</option>
                    </select>
                    <input type="text" id="turnover" className="bg-primary text-white p-3 align-middle justify-items-center m-3 rounded-md" placeholder={t("calculator.turnover")}></input>

                    {/* <input type="submit" id="calculate" name="calculate" className="bg-primary text-white p-3 align-middle justify-items-center m-3 btn-accent" value="Изчисли"></input>
                     */}
                     <button type="submit" className="btn btn-accent text-white p-3 align-middle justify-items-center m-3 rounded-md">{t("calculator.btn")}</button>
                </form>
                <div id="savings" className="text-2xl text-primary font-bold">
                </div>
            </div>
        </div>
    )
}

export default Calculator;