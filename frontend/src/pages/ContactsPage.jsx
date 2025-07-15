import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FiPhoneCall,  FiMail  } from "react-icons/fi";
import { TbLocation } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";


const Contacts = () => {
  const {t} = useTranslation();

  return (
    <div className='min-h-screen overflow-hidden'>
      <Helmet>
      <title>{t("contacts.meta.title")}</title>
      <meta charSet='utf-8'/>
      <meta name='description' content={t("contacts.meta.description")}/>
      <meta name='keywords' content={t("contacts.meta.keywords")}/>
      <meta author={t("contacts.meta.author")} />
      </Helmet>
      <Navbar />
      <div className="flex flex-col bg-[radial-gradient(circle,theme(colors.secondary),theme(colors.white))]">
          <div className='flex flex-row'>
            <div className="min-h-[40vh] lg:min-w-[40vw] text-center content-center text-primary">
                <h1 className='text-4xl lg:text-5xl p-5'>{t("contacts.title")}</h1>
                <p className='p-5'>{t("contacts.text.normal")}<b>{t("contacts.text.bold")}</b></p>
            </div>
            <div>
                <img className='max-w-[40vw] lg:min-w-[60vw] min-h-[40vh] max-h-[50vh] object-cover' src="./profitback-contacts-1.jpg" alt="" />
            </div>
          </div>
          <div className='flex flex-row'>
            <div>
                <img className='max-w-[40vw] lg:min-w-[60vw] min-h-[40vh] max-h-[50vh] object-cover' src="./profitback-contacts-2.jpg" alt="" />
            </div>
            <div className="min-h-[40vh] lg:min-w-[40vw] text-center content-center text-primary hidden lg:block">
                <h2 className='text-2xl flex justify-center items-center m-2'><TbLocation /><b className='mx-2'>{t("contacts.location.note")}</b>{t("contacts.location.value")}</h2>
                <h2 className='text-2xl flex justify-center items-center m-2'><FiPhoneCall /><b className='mx-2'>{t("contacts.phone.note")}</b>{t("contacts.phone.value")}</h2>
                <h2 className='text-2xl flex justify-center items-center m-2'><FiMail /><b className='mx-2'>{t("contacts.email.note")}</b>{t("contacts.email.value")}</h2>
            </div>
            <div className="min-h-[40vh] min-w-[60vw] text-center content-center text-primary flex flex-col lg:hidden justify-evenly">
                <h2 className='text-base flex justify-center items-center flex-col'><b className='m-2 flex flex-row'><div className='self-center m-2'><TbLocation /></div><div className='m-2 self-center'>{t("contacts.location.note")}</div></b>{t("contacts.location.value")}</h2>
                <h2 className='text-base flex justify-center items-center flex-col'><b className='m-2 flex flex-row'><div className='self-center m-2'><FiPhoneCall /></div><div className='m-2 self-center'>{t("contacts.phone.note")}</div></b>{t("contacts.phone.value")}</h2>
                <h2 className='text-base flex justify-center items-center flex-col'><b className='m-2 flex flex-row'><div className='self-center m-2'><FiMail /></div><div className='m-2 self-center'>{t("contacts.email.note")}</div></b>{t("contacts.email.value")}</h2>
            </div>
          </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contacts
