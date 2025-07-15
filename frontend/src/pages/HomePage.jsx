import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Calculator from '../components/Calculator'
import Testimonials from '../components/Testimonials'
import ArticlesRecent from '../components/ArticlesRecent'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router'
import { Helmet } from "react-helmet";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen overflow-hidden">
      <Helmet>
      <title>{t("home.meta.title")}</title>
      <meta charSet='utf-8'/>
      <meta name='description' content={t("home.meta.description")}/>
      <meta name='keywords' content={t("home.meta.keywords")}/>
      <meta author={t("home.meta.author")} />
      </Helmet>
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
      <Testimonials />
      <ArticlesRecent />
      <Footer />
    </div>
  )
}

export default Home
