import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO';
import SchemaOrg from '../components/SchemaOrg';

import { TbArrowBigRightLine, TbArrowBigDownLine } from "react-icons/tb";
import { GiCheckMark } from "react-icons/gi";
import { useTranslation } from "react-i18next";


const AboutUs = () => {

  const { t } = useTranslation();

  const seoData = {
    title: t("about.meta.title"),
    description: t("about.meta.description"),
    keywords: t("about.meta.keywords"),
    author: t("about.meta.author"),
    canonicalUrl: "https://profitrecoverybg.eu/about-us",
    previewImage: "https://profitrecoverybg.eu/profitback_bulgarian.png",
  }


  return (
    <div className='min-h-screen overflow-hidden'>
      <SEO {...seoData} />
      <SchemaOrg page="about" />
      <Navbar />
      <div className='md:min-h-[70vh] flex flex-col md:flex-row'>
        <img className='lg:w-1/2 max-h-[40vh] lg:max-h-[70vh] object-cover' src="./about-us.jpg" alt="" />
        <div className='lg:w-1/2 p-10 lg:p-20 text-primary'>
          <h1 className='text-8xl md:text-7xl lg:text-6xl text-center mb-6'>{t("about.intro.title")}</h1>
          <p className='text-2xl my-2'>{t("about.intro.paragraph.1")}</p>
          <p className='text-2xl my-2'>{t("about.intro.paragraph.2")}</p>
          <h3 className='text-3xl my-6'>{t("about.intro.subtitle")}</h3>
          <ul className='list-none list-inside text-2xl'>
            <li>{t("about.intro.list.1")}</li>
            <li>{t("about.intro.list.2")}</li>
            <li>{t("about.intro.list.3")}</li>
          </ul>
        </div>
      </div>
      <div className='text-primary'>
        <h2 className='text-7xl md:text-6xl lg:text-5xl text-center mb-6 p-10'>{t("about.issues.title")}</h2>
        <div className='max-w-[80vw] hidden lg:flex sm:flex-col lg:flex-row m-auto justify-around justify-self-center'>
          <div className='xl:w-1/5 p-10 border-primary border-4 rounded-xl border-double justify-items-center text-center bg-secondary m-2'>
            <h6 className='text-3xl lg:text-xl font-bold mb-4 underline underline-offset-8 decoration-accent'>{t("about.issues.factors.1.title")}</h6>
            <p className='text-l'>{t("about.issues.factors.1.text")}</p>
          </div>
          <div className='xl:w-1/5 p-10 border-primary border-4 rounded-xl border-double justify-items-center text-center bg-secondary m-2'>
            <h6 className='text-3xl lg:text-xl font-bold mb-4 underline underline-offset-8 decoration-accent'>{t("about.issues.factors.2.title")}</h6>
            <p className='text-l'>{t("about.issues.factors.2.text")}</p>
          </div>
          <div className='xl:w-1/5 p-10 border-primary border-4 rounded-xl border-double justify-items-center text-center bg-secondary m-2'>
            <h6 className='text-3xl lg:text-xl font-bold mb-4 underline underline-offset-8 decoration-accent'>{t("about.issues.factors.3.title")}</h6>
            <p className='text-l'>{t("about.issues.factors.3.text")}</p>
          </div>
          <div className='xl:w-1/5 p-10 border-primary border-4 rounded-xl border-double justify-items-center text-center bg-secondary m-2'>
            <h6 className='text-3xl lg:text-xl font-bold mb-4 underline underline-offset-8 decoration-accent'>{t("about.issues.factors.4.title")}</h6>
            <p className='text-l'>{t("about.issues.factors.4.text")}</p>
          </div>
        </div>
        <div className='max-w-[90vw] flex md:hidden flex-col lg:hidden m-auto justify-around justify-self-center'>
            <div className='min-h-[30vh] p-4 border-primary border-4 rounded-xl border-double justify-items-center text-center bg-secondary m-2'>
              <h6 className='text-xl font-bold mb-4 underline underline-offset-8 decoration-accent'>{t("about.issues.factors.1.title")}</h6>
              <p className='text-l'>{t("about.issues.factors.1.text")}</p>
            </div>
            <div className='min-h-[30vh] p-4 border-primary border-4 rounded-xl border-double justify-items-center text-center bg-secondary m-2'>
              <h6 className='text-xl font-bold mb-4 underline underline-offset-8 decoration-accent'>{t("about.issues.factors.2.title")}</h6>
              <p className='text-l'>{t("about.issues.factors.2.text")}</p>
            </div>
            <div className='min-h-[30vh] p-4 border-primary border-4 rounded-xl border-double justify-items-center text-center bg-secondary m-2'>
              <h6 className='text-xl font-bold mb-4 underline underline-offset-8 decoration-accent'>{t("about.issues.factors.3.title")}</h6>
              <p className='text-l'>{t("about.issues.factors.3.text")}</p>
            </div>
            <div className='min-h-[30vh] p-4 border-primary border-4 rounded-xl border-double justify-items-center text-center bg-secondary m-2'>
              <h6 className='text-xl font-bold mb-4 underline underline-offset-8 decoration-accent'>{t("about.issues.factors.4.title")}</h6>
              <p className='text-l'>{t("about.issues.factors.4.text")}</p>
            </div>
        </div>


        <div className='text-center my-10 text-4xl text-primary p-4 mt-10 hidden md:flex flex-row justify-around'>
          <h3>{t("about.section.titles.1")}</h3>
          <h3>{t("about.section.titles.2")}</h3>
        </div>
        <div className="hidden md:grid max-w-[80vw] grid-cols-7 grid-rows-4 gap-4 justify-self-center my-10">
          <div className="p-5 bg-[linear-gradient(90deg,theme(colors.secondary),theme(colors.white))] col-span-3 flex flex-row self-center items-center"><div className="self-center text-accent text-xl p-2"><GiCheckMark /></div>{t("about.section.leftlist.1")}</div>
          <div className="p-5 col-start-4 justify-self-center text-3xl content-evenly"><TbArrowBigRightLine /></div>
          <div className="p-5 bg-[linear-gradient(90deg,theme(colors.secondary),theme(colors.white))] col-span-3 col-start-5 flex flex-row self-center items-center"><div className="self-center text-accent text-xl p-2"><GiCheckMark /></div>{t("about.section.rightlist.1")}</div>
          <div className="p-5 bg-[linear-gradient(90deg,theme(colors.secondary),theme(colors.white))] col-span-3 row-start-2 flex flex-row self-center items-center"><div className="self-center text-accent text-xl p-2"><GiCheckMark /></div>{t("about.section.leftlist.2")}</div>
          <div className="p-5 col-start-4 row-start-2 justify-self-center text-3xl content-evenly"><TbArrowBigRightLine /></div>
          <div className="p-5 bg-[linear-gradient(90deg,theme(colors.secondary),theme(colors.white))] col-span-3 col-start-5 row-start-2 flex flex-row self-center items-center"><div className="self-center text-accent text-xl p-2"><GiCheckMark /></div>{t("about.section.rightlist.2")}</div>
          <div className="p-5 bg-[linear-gradient(90deg,theme(colors.secondary),theme(colors.white))] col-span-3 row-start-3 flex flex-row self-center items-center"><div className="self-center text-accent text-xl p-2"><GiCheckMark /></div>{t("about.section.leftlist.3")}</div>
          <div className="p-5 col-start-4 row-start-3 justify-self-center text-3xl content-evenly"><TbArrowBigRightLine /></div>
          <div className="p-5 bg-[linear-gradient(90deg,theme(colors.secondary),theme(colors.white))] col-span-3 col-start-5 row-start-3 flex flex-row self-center items-center"><div className="self-center text-accent text-xl p-2"><GiCheckMark /></div>{t("about.section.rightlist.3")}</div>
          <div className="p-5 bg-[linear-gradient(90deg,theme(colors.secondary),theme(colors.white))] col-span-3 row-start-4 flex flex-row self-center items-center"><div className="self-center text-accent text-xl p-2"><GiCheckMark /></div>{t("about.section.leftlist.4")}</div>
          <div className="p-5 col-start-4 row-start-4 justify-self-center text-3xl content-evenly"><TbArrowBigRightLine /></div>
          <div className="p-5 bg-[linear-gradient(90deg,theme(colors.secondary),theme(colors.white))] col-span-3 col-start-5 row-start-4 flex flex-row self-center items-center"><div className="self-center text-accent text-xl p-2"><GiCheckMark /></div>{t("about.section.rightlist.4")}</div>
        </div>
        <div className='text-center my-10 text-4xl text-primary p-4 mt-10 flex md:hidden flex-row justify-around'>
          <h3>{t("about.section.titles.mobile")}</h3>
        </div>
        <div className="md:hidden flex flex-col max-w-[100vw] justify-self-center my-10">
          <div className="p-5 bg-[linear-gradient(0deg,theme(colors.secondary),theme(colors.white))] flex flex-row self-center items-center"><div className="self-center text-accent text-xl p-2"><GiCheckMark /></div>{t("about.section.leftlist.1")}</div>
          <div className="p-5 col-start-4 justify-self-center text-3xl place-self-center"><TbArrowBigDownLine /></div>
          <div className="p-5 bg-[linear-gradient(0deg,theme(colors.secondary),theme(colors.white))] flex flex-row self-center items-center"><div className="self-center text-accent text-xl p-2"><GiCheckMark /></div>{t("about.section.rightlist.1")}</div>
          <div className="p-5 mt-2 border-t-2 border-primary bg-[linear-gradient(0deg,theme(colors.secondary),theme(colors.white))] flex flex-row self-center items-center"><div className="self-center text-accent text-xl p-2"><GiCheckMark /></div>{t("about.section.leftlist.2")}</div>
          <div className="p-5 col-start-4 row-start-2 justify-self-center text-3xl place-self-center"><TbArrowBigDownLine /></div>
          <div className="p-5 bg-[linear-gradient(0deg,theme(colors.secondary),theme(colors.white))] flex flex-row self-center items-center"><div className="self-center text-accent text-xl p-2"><GiCheckMark /></div>{t("about.section.rightlist.2")}</div>
          <div className="p-5 mt-2 border-t-2 border-primary bg-[linear-gradient(0deg,theme(colors.secondary),theme(colors.white))] flex flex-row self-center items-center"><div className="self-center text-accent text-xl p-2"><GiCheckMark /></div>{t("about.section.leftlist.3")}</div>
          <div className="p-5 col-start-4 row-start-3 justify-self-center text-3xl place-self-center"><TbArrowBigDownLine /></div>
          <div className="p-5 bg-[linear-gradient(0deg,theme(colors.secondary),theme(colors.white))] flex flex-row self-center items-center"><div className="self-center text-accent text-xl p-2"><GiCheckMark /></div>{t("about.section.rightlist.3")}</div>
          <div className="p-5 mt-2 border-t-2 border-primary bg-[linear-gradient(0deg,theme(colors.secondary),theme(colors.white))] self-center items-center"><div className="self-center text-accent text-xl p-2"><GiCheckMark /></div>{t("about.section.leftlist.4")}</div>
          <div className="p-5 col-start-4 row-start-4 justify-self-center text-3xl place-self-center"><TbArrowBigDownLine /></div>
          <div className="p-5 bg-[linear-gradient(0deg,theme(colors.secondary),theme(colors.white))] flex flex-row self-center items-center"><div className="self-center text-accent text-xl p-2"><GiCheckMark /></div>{t("about.section.rightlist.4")}</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs
