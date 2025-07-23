import React from 'react'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

import SEO from '../components/SEO';
import SchemaOrg from '../components/SchemaOrg';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Calculator from '../components/Calculator'

const Home = () => {
  
  const { t } = useTranslation();

  const seoData = {
    title: t("home.meta.title"),
    description: t("home.meta.description"),
    keywords: t("home.meta.keywords"),
    author: t("home.meta.author"),
    canonicalUrl: "https://profitrecoverybg.eu/",
    previewImage: "https://profitrecoverybg.eu/profitback_bulgarian.png",
  }
  return (
    <div className="min-h-screen overflow-hidden">
      <SEO {...seoData} />
      <SchemaOrg page="home" />
      <Navbar />
      <div
        className="hero min-h-screen bg-left lg:bg-center"
        style={{ backgroundImage: "url(/home-hero.jpg)" }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center p-8">
          <div className="max-w-9xl justify-between">
            <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl justify-self-center">
              {t("home.greeting")}</h1>
            <h2 className="mb-5 text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl justify-self-center">
              {t("home.title")}</h2>
            <p className="mb-5 text-2xl md:text-3xl lg:text-4xl font-semibold lg:px-20 lg:mt-10 lg:mb-20">
              {t("home.subtitle")}
            </p>
            <button className="btn btn-primary btn-wide rounded-l-lg border border-current"><Link to='/about'>{t("home.btnreadmore")}</Link></button>
            <button className="btn btn-primary btn-wide rounded-r-lg border border-current"><Link to='/services-and-scope'>{t("home.btnservices")}</Link></button>
          </div>
        </div>
      </div>
      <div className='text-center min-h-100 text-3xl lg:text-4xl text-primary p-8'>{t("home.slogan")}</div>
      <Calculator />
      <Footer />
    </div>
  )
}

export default Home
