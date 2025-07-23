import React from 'react'
import { TbArrowBigRightLine, TbArrowBigDownLine } from "react-icons/tb";
import { useTranslation } from "react-i18next";

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO';
import SchemaOrg from '../components/SchemaOrg';


const ServiceAndScope = () => {

  const {t} = useTranslation();

  const seoData = {
    title: t("services-and-scope.meta.title"),
    description: t("services-and-scope.meta.description"),
    keywords: t("services-and-scope.meta.keywords"),
    author: t("services-and-scope.meta.author"),
    canonicalUrl: "https://profitrecoverybg.eu/services-and-scope",
    previewImage: "https://profitrecoverybg.eu/profitback_bulgarian.png",
  }
  return (
    <div className='min-h-screen overflow-hidden'>
      <SEO {...seoData} />
      <SchemaOrg page="services" />
      <Navbar />
      <div
        className="hero min-h-[80vh] bg-right md:bg-center"
        style={{ backgroundImage: "url(/S&S-hero.jpg)" }}>
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-9xl">
            <h1 className="my-5 text-4xl md:text-5xl lg:text-6xl  font-bold max-w-4xl justify-self-center">{t("services-and-scope.intro.title")}</h1>
            <p className="mb-5 text-2xl md:text-3xl lg:text-4xl lg:px-20">{t("services-and-scope.intro.text")}</p>
            <p className='mb-5 text-3xl font-semibold'>{t("services-and-scope.intro.text2")}</p>
          </div>
        </div>
      </div>
      <h2 className='text-4xl md:text-5xl lg:text-6xl text-primary p-4 text-center mb-10'>{t("services-and-scope.services.title")}</h2>
        <div className='max-w-[70vw] mx-auto hidden md:block'>
          <div className="grid grid-cols-2 grid-rows-7 bg-primary border-primary border-[2px]">
            <div className='bg-secondary px-8 py-4 text-primary border-b-[2px] border-primary font-bold text-xl flex flex-row justify-between'>
              <p className='self-center'>{t("services-and-scope.services.leftlist.1")}</p>
              <p className='text-3xl self-center'><TbArrowBigRightLine /></p>
            </div>
            <div className='bg-secondary px-8 py-4 text-primary border-b-[2px] border-primary content-center'>{t("services-and-scope.services.rightlist.1")}</div>
            <div className='bg-secondary px-8 py-4 text-primary border-b-[2px] border-primary font-bold text-xl flex flex-row justify-between'>
              <p className='self-center'>{t("services-and-scope.services.leftlist.2")}</p>
              <p className='text-3xl self-center'><TbArrowBigRightLine /></p>
            </div>
            <div className='bg-secondary px-8 py-4 text-primary border-b-[2px] border-primary content-center'>{t("services-and-scope.services.rightlist.2")}</div>
            <div className='bg-secondary px-8 py-4 text-primary border-b-[2px] border-primary font-bold text-xl flex flex-row justify-between'>
              <p className='self-center'>{t("services-and-scope.services.leftlist.3")}</p>
              <p className='text-3xl self-center'><TbArrowBigRightLine /></p>
            </div>
            <div className='bg-secondary px-8 py-4 text-primary border-b-[2px] border-primary content-center'>{t("services-and-scope.services.rightlist.3")}</div>
            <div className='bg-secondary px-8 py-4 text-primary border-b-[2px] border-primary font-bold text-xl flex flex-row justify-between'>
              <p className='self-center'>{t("services-and-scope.services.leftlist.4")}</p>
              <p className='text-3xl self-center'><TbArrowBigRightLine /></p>
            </div>
            <div className='bg-secondary px-8 py-4 text-primary border-b-[2px] border-primary content-center'>{t("services-and-scope.services.rightlist.4")}</div>
            <div className='bg-secondary px-8 py-4 text-primary border-b-[2px] border-primary font-bold text-xl flex flex-row justify-between'>
              <p className='self-center'>{t("services-and-scope.services.leftlist.5")}</p>
              <p className='text-3xl self-center'><TbArrowBigRightLine /></p>
            </div>
            <div className='bg-secondary px-8 py-4 text-primary border-b-[2px] border-primary content-center'>{t("services-and-scope.services.rightlist.5")}</div>
            <div className='bg-secondary px-8 py-4 text-primary border-b-[2px] border-primary font-bold text-xl flex flex-row justify-between'>
              <p className='self-center'>{t("services-and-scope.services.leftlist.6")}</p>
              <p className='text-3xl self-center'><TbArrowBigRightLine /></p>
            </div>
            <div className='bg-secondary px-8 py-4 text-primary border-b-[2px] border-primary content-center'>{t("services-and-scope.services.rightlist.6")}</div>
            <div className='bg-secondary px-8 py-4 text-primary font-bold text-xl flex flex-row justify-between'>
              <p className='self-center'>{t("services-and-scope.services.leftlist.7")}</p>
              <p className='text-3xl self-center'><TbArrowBigRightLine /></p>
            </div>
            <div className='bg-secondary px-8 py-4 text-primary'>{t("services-and-scope.services.rightlist.7")}</div>
          </div>
        </div>
        <div className='max-w-[70vw] mx-auto'>
          <div className="flex flex-col border-primary bg-secondary border-[2px] md:hidden">
            <div className='bg-secondary px-8 py-4 text-primary border-b-[1px] border-primary font-bold text-xl flex flex-row justify-between'>
              <p className='self-center'>{t("services-and-scope.services.leftlist.1")}</p>
            </div>
              <p className='text-3xl self-center bg-secondary my-1'><TbArrowBigDownLine /></p>
            <div className='bg-secondary px-8 py-4 text-primary border-b-[2px] border-primary content-center'>{t("services-and-scope.services.rightlist.1")}</div>
            <div className='bg-secondary px-8 py-4 text-primary border-b-[1px] border-primary font-bold text-xl flex flex-row justify-between'>
              <p className='self-center'>{t("services-and-scope.services.leftlist.2")}</p>
            </div>
              <p className='text-3xl self-center bg-secondary my-1'><TbArrowBigDownLine /></p>
            <div className='bg-secondary px-8 py-4 text-primary border-b-[2px] border-primary content-center'>{t("services-and-scope.services.rightlist.2")}</div>
            <div className='bg-secondary px-8 py-4 text-primary border-b-[1px] border-primary font-bold text-xl flex flex-row justify-between'>
              <p className='self-center'>{t("services-and-scope.services.leftlist.3")}</p>
            </div>
              <p className='text-3xl self-center bg-secondary my-1'><TbArrowBigDownLine /></p>
            <div className='bg-secondary px-8 py-4 text-primary border-b-[2px] border-primary content-center'>{t("services-and-scope.services.rightlist.3")}</div>
            <div className='bg-secondary px-8 py-4 text-primary border-b-[1px] border-primary font-bold text-xl flex flex-row justify-between'>
              <p className='self-center'>{t("services-and-scope.services.leftlist.4")}</p>
            </div>
              <p className='text-3xl self-center bg-secondary my-1'><TbArrowBigDownLine /></p>
            <div className='bg-secondary px-8 py-4 text-primary border-b-[2px] border-primary content-center'>{t("services-and-scope.services.rightlist.4")}</div>
            <div className='bg-secondary px-8 py-4 text-primary border-b-[1px] border-primary font-bold text-xl flex flex-row justify-between'>
              <p className='self-center'>{t("services-and-scope.services.leftlist.5")}</p>
            </div>
              <p className='text-3xl self-center bg-secondary my-1'><TbArrowBigDownLine /></p>
            <div className='bg-secondary px-8 py-4 text-primary border-b-[2px] border-primary content-center'>{t("services-and-scope.services.rightlist.5")}</div>
            <div className='bg-secondary px-8 py-4 text-primary border-b-[1px] border-primary font-bold text-xl flex flex-row justify-between'>
              <p className='self-center'>{t("services-and-scope.services.leftlist.6")}</p>
            </div>
              <p className='text-3xl self-center bg-secondary my-1'><TbArrowBigDownLine /></p>
            <div className='bg-secondary px-8 py-4 text-primary border-b-[2px] border-primary content-center'>{t("services-and-scope.services.rightlist.6")}</div>
            <div className='bg-secondary px-8 py-4 text-primary border-b-[1px] border-primary font-bold text-xl flex flex-row justify-between'>
              <p className='self-center'>{t("services-and-scope.services.leftlist.7")}</p>
            </div>
              <p className='text-3xl self-center bg-secondary my-1'><TbArrowBigDownLine /></p>
            <div className='bg-secondary px-8 py-4 text-primary'>{t("services-and-scope.services.rightlist.7")}</div>
          </div>
        </div>
      <h2 className='text-4xl md:text-5xl lg:text-6xl text-primary p-4 text-center my-10'>{t("services-and-scope.industries.title")}</h2>
      <div className='mb-10'>
        <div className='max-w-[70vw] mx-auto'>
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-7 lg:gap-12">
            <div className='text-primary text-xl flex flex-col lg:flex-row justify-between'>
              <img className='min-m-[80vw] min-h-[40vh] lg:max-w-[15vw] lg:max-h-[20vw] object-cover' src="/sector-production.jpg" alt="" />
              <div className='flex flex-col m-4'>
                <h3 className='font-medium text-2xl text-right'>{t("services-and-scope.industries.list.1.title")}</h3>
                <div className="divider"></div>
                <ul className='list-disc list-inside'>
                  <li>{t("services-and-scope.industries.list.1.details.1")}</li>
                  <li>{t("services-and-scope.industries.list.1.details.2")}</li>
                  <li>{t("services-and-scope.industries.list.1.details.3")}</li>
                </ul>
              </div>
            </div>
            <div className='text-primary text-xl flex flex-col lg:flex-row justify-between'>
              <img className='min-m-[80vw] min-h-[40vh] lg:max-w-[15vw] lg:max-h-[20vw] object-cover' src="/sector-bulk-trade.jpg" alt="" />
              <div className='flex flex-col m-4'>
                <h3 className='font-medium text-2xl text-right'>{t("services-and-scope.industries.list.2.title")}</h3>
                <div className="divider"></div>
                <ul className='list-disc list-inside'>
                  <li>{t("services-and-scope.industries.list.2.details.1")}</li>
                  <li>{t("services-and-scope.industries.list.2.details.2")}</li>
                  <li>{t("services-and-scope.industries.list.2.details.3")}</li>
                </ul>
              </div>
            </div>
            <div className='text-primary text-xl flex flex-col lg:flex-row justify-between'>
              <img className='min-m-[80vw] min-h-[40vh] lg:max-w-[15vw] lg:max-h-[20vw] object-cover' src="/sector-small-trade.jpg" alt="" />
              <div className='flex flex-col m-4'>
                <h3 className='font-medium text-2xl text-right'>{t("services-and-scope.industries.list.3.title")}</h3>
                <div className="divider"></div>
                <ul className='list-disc list-inside'>
                  <li>{t("services-and-scope.industries.list.3.details.1")}</li>
                  <li>{t("services-and-scope.industries.list.3.details.2")}</li>
                  <li>{t("services-and-scope.industries.list.3.details.3")}</li>
                </ul>
              </div>
            </div>
            <div className='text-primary text-xl flex flex-col lg:flex-row justify-between'>
              <img className='min-m-[80vw] min-h-[40vh] lg:max-w-[15vw] lg:max-h-[20vw] object-cover' src="/sector-construction.jpg" alt="" />
              <div className='flex flex-col m-4'>
                <h3 className='font-medium text-2xl text-right'>{t("services-and-scope.industries.list.4.title")}</h3>
                <div className="divider"></div>
                <ul className='list-disc list-inside'>
                  <li>{t("services-and-scope.industries.list.4.details.1")}</li>
                  <li>{t("services-and-scope.industries.list.4.details.2")}</li>
                  <li>{t("services-and-scope.industries.list.4.details.3")}</li>
                </ul>
              </div>
            </div>
            <div className='text-primary text-xl flex flex-col lg:flex-row justify-between'>
              <img className='min-m-[80vw] min-h-[40vh] lg:max-w-[15vw] lg:max-h-[20vw] object-cover' src="/sector-logistics.jpg" alt="" />
              <div className='flex flex-col m-4'>
                <h3 className='font-medium text-2xl text-right'>{t("services-and-scope.industries.list.5.title")}</h3>
                <div className="divider"></div>
                <ul className='list-disc list-inside'>
                  <li>{t("services-and-scope.industries.list.5.details.1")}</li>
                  <li>{t("services-and-scope.industries.list.5.details.2")}</li>
                  <li>{t("services-and-scope.industries.list.5.details.3")}</li>
                </ul>
              </div>
            </div>
            <div className='text-primary text-xl flex flex-col lg:flex-row justify-between'>
              <img className='min-m-[80vw] min-h-[40vh] lg:max-w-[15vw] lg:max-h-[20vw] object-cover' src="/sector-healthcare.jpg" alt="" />
              <div className='flex flex-col m-4'>
                <h3 className='font-medium text-2xl text-right'>{t("services-and-scope.industries.list.6.title")}</h3>
                <div className="divider"></div>
                <ul className='list-disc list-inside'>
                  <li>{t("services-and-scope.industries.list.6.details.1")}</li>
                  <li>{t("services-and-scope.industries.list.6.details.2")}</li>
                  <li>{t("services-and-scope.industries.list.6.details.3")}</li>
                </ul>
              </div>
            </div>
            <div className='text-primary text-xl flex flex-col lg:flex-row justify-between'>
              <img className='min-m-[80vw] min-h-[40vh] lg:max-w-[15vw] lg:max-h-[20vw] object-cover' src="/sector-pharmacy.jpg" alt="" />
              <div className='flex flex-col m-4'>
                <h3 className='font-medium text-2xl text-right'>{t("services-and-scope.industries.list.7.title")}</h3>
                <div className="divider"></div>
                <ul className='list-disc list-inside'>
                  <li>{t("services-and-scope.industries.list.7.details.1")}</li>
                  <li>{t("services-and-scope.industries.list.7.details.2")}</li>
                  <li>{t("services-and-scope.industries.list.7.details.3")}</li>
                </ul>
              </div>
            </div>
            <div className='text-primary text-xl flex flex-col lg:flex-row justify-between'>
              <img className='min-m-[80vw] min-h-[40vh] lg:max-w-[15vw] lg:max-h-[20vw] object-cover' src="/sector-telecom.jpg" alt="" />
              <div className='flex flex-col m-4'>
                <h3 className='font-medium text-2xl text-right'>{t("services-and-scope.industries.list.8.title")}</h3>
                <div className="divider"></div>
                <ul className='list-disc list-inside'>
                  <li>{t("services-and-scope.industries.list.8.details.1")}</li>
                  <li>{t("services-and-scope.industries.list.8.details.2")}</li>
                  <li>{t("services-and-scope.industries.list.8.details.3")}</li>
                </ul>
              </div>
            </div>
            <div className='text-primary text-xl flex flex-col lg:flex-row justify-between'>
              <img className='min-m-[80vw] min-h-[40vh] lg:max-w-[15vw] lg:max-h-[20vw] object-cover' src="/sector-IT.jpg" alt="" />
              <div className='flex flex-col m-4'>
                <h3 className='font-medium text-2xl text-right'>{t("services-and-scope.industries.list.9.title")}</h3>
                <div className="divider"></div>
                <ul className='list-disc list-inside'>
                  <li>{t("services-and-scope.industries.list.9.details.1")}</li>
                  <li>{t("services-and-scope.industries.list.9.details.2")}</li>
                  <li>{t("services-and-scope.industries.list.9.details.3")}</li>
                </ul>
              </div>
            </div>
            <div className='text-primary text-xl flex flex-col lg:flex-row justify-between'>
              <img className='min-m-[80vw] min-h-[40vh] lg:max-w-[15vw] lg:max-h-[20vw] object-cover' src="/sector-energy.jpg" alt="" />
              <div className='flex flex-col m-4'>
                <h3 className='font-medium text-2xl text-right'>{t("services-and-scope.industries.list.10.title")}</h3>
                <div className="divider"></div>
                <ul className='list-disc list-inside'>
                  <li>{t("services-and-scope.industries.list.10.details.1")}</li>
                  <li>{t("services-and-scope.industries.list.10.details.2")}</li>
                  <li>{t("services-and-scope.industries.list.10.details.3")}</li>
                </ul>
              </div>
            </div>
            <div className='text-primary text-xl flex flex-col lg:flex-row justify-between'>
              <img className='min-m-[80vw] min-h-[40vh] lg:max-w-[15vw] lg:max-h-[20vw] object-cover' src="/sector-administration.jpg" alt="" />
              <div className='flex flex-col m-4'>
                <h3 className='font-medium text-2xl text-right'>{t("services-and-scope.industries.list.11.title")}</h3>
                <div className="divider"></div>
                <ul className='list-disc list-inside'>
                  <li>{t("services-and-scope.industries.list.11.details.1")}</li>
                  <li>{t("services-and-scope.industries.list.11.details.2")}</li>
                  <li>{t("services-and-scope.industries.list.11.details.3")}</li>
                </ul>
              </div>
            </div>
            <div className='text-primary text-xl flex flex-col lg:flex-row justify-between'>
              <img className='min-m-[80vw] min-h-[40vh] lg:max-w-[15vw] lg:max-h-[20vw] object-cover' src="/sector-finance.jpg" alt="" />
              <div className='flex flex-col m-4'>
                <h3 className='font-medium text-2xl text-right'>{t("services-and-scope.industries.list.12.title")}</h3>
                <div className="divider"></div>
                <ul className='list-disc list-inside'>
                  <li>{t("services-and-scope.industries.list.12.details.1")}</li>
                  <li>{t("services-and-scope.industries.list.12.details.2")}</li>
                  <li>{t("services-and-scope.industries.list.12.details.3")}</li>
                </ul>
              </div>
            </div>
            <div className='text-primary text-xl flex flex-col lg:flex-row justify-center col-span-2'>
              <img className='min-m-[80vw] min-h-[40vh] lg:max-w-[15vw] lg:max-h-[20vw] object-cover' src="/sector-tourism.jpg" alt="" />
              <div className='flex flex-col m-4'>
                <h3 className='font-medium text-2xl text-right'>{t("services-and-scope.industries.list.13.title")}</h3>
                <div className="divider"></div>
                <ul className='list-disc list-inside'>
                  <li>{t("services-and-scope.industries.list.13.details.1")}</li>
                  <li>{t("services-and-scope.industries.list.13.details.2")}</li>
                  <li>{t("services-and-scope.industries.list.13.details.3")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ServiceAndScope
