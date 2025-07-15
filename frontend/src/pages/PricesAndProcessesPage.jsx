import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Calculator from '../components/Calculator';
import { IoChatbubblesOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { GoChecklist } from "react-icons/go";
import { AiOutlineEuro } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const PricesAndProcesses = () => {
  const { t } = useTranslation();

  return (
    <div className='min-h-screen overflow-hidden'>
      <Helmet>
      <title>{t("prices-and-processes.meta.title")}</title>
      <meta charSet='utf-8'/>
      <meta name='description' content={t("prices-and-processes.meta.description")}/>
      <meta name='keywords' content={t("prices-and-processes.meta.keywords")}/>
      <meta author={t("prices-and-processes.meta.author")} />
      </Helmet>
      <Navbar />
      <div>
        <div className='flex flex-col min-h-[60vh] justify-center items-center text-primary bg-[linear-gradient(315deg,theme(colors.secondary),theme(colors.white))]'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl my-20 text-center'>{t("prices-and-processes.intro.title")}</h1>
          <h2 className='text-3xl md:text-4xl lg:text-5xl mb-10 text-center'>{t("prices-and-processes.intro.subtitle")}</h2>
          <div className='hidden lg:flex flex-row justify-around my-10'>
            <div className='w-1/5 p-10 border-primary border-4 rounded-xl justify-items-center text-center bg-secondary'>
              <div className='text-5xl'><IoChatbubblesOutline /></div><p className='text-2xl'>{t("prices-and-processes.intro.boxes.1.title")}</p>
            </div>
            <div className='w-1/5 p-10 border-primary border-4 rounded-xl justify-items-center text-center bg-secondary'>
              <div className="text-5xl"><RiComputerLine /></div><p className='text-2xl'>{t("prices-and-processes.intro.boxes.2.title")}</p>
            </div>
            <div className='w-1/5 p-10 border-primary border-4 rounded-xl justify-items-center text-center bg-secondary'>
              <div className="text-5xl"><GoChecklist /></div><p className='text-2xl'>{t("prices-and-processes.intro.boxes.3.title")}</p>
            </div>
            <div className='w-1/5 p-10 border-primary border-4 rounded-xl justify-items-center text-center bg-secondary'>
              <div className="text-5xl"><AiOutlineEuro /></div><p className='text-2xl'>{t("prices-and-processes.intro.boxes.4.title")}</p>
            </div>
          </div>
          <div className='flex flex-col justify-around lg:hidden mb-10'>
            <div className='flex flex-row place-content-evenly m-2'>
              <div className='w-2/5 p-10 border-primary border-4 rounded-xl justify-items-center text-center bg-secondary'>
                <div className='text-5xl'><IoChatbubblesOutline /></div><p className='text-xl'>{t("prices-and-processes.intro.boxes.1.title")}</p>
              </div>
              <div className='w-2/5 p-10 border-primary border-4 rounded-xl justify-items-center text-center bg-secondary'>
                <div className="text-5xl"><RiComputerLine /></div><p className='text-xl'>{t("prices-and-processes.intro.boxes.2.title")}</p>
              </div>
            </div>
            <div className="flex flex-row place-content-evenly m-2">
              <div className='w-2/5 p-10 border-primary border-4 rounded-xl justify-items-center text-center bg-secondary'>
                <div className="text-5xl"><GoChecklist /></div><p className='text-xl'>{t("prices-and-processes.intro.boxes.3.title")}</p>
              </div>
              <div className='w-2/5 p-10 border-primary border-4 rounded-xl justify-items-center text-center bg-secondary'>
                <div className="text-5xl"><AiOutlineEuro /></div><p className='text-xl'>{t("prices-and-processes.intro.boxes.4.title")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='min-h-[50vh] grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-2'>
          <div className='min-h-[25vh] border-2 border-primary bg-secondary content-center'>
            <div className='flex flex-col md:flex-row-reverse mx-10 my-4 px-8 py-4 lg:px-14 lg:py-8 bg-primary text-secondary md:items-center md:justify-between border rounded-xl min-h-[25vh]'>
              <h3 className='text-xl lg:text-3xl p-2 lg:p-4 text-primary bg-secondary border rounded-xl m-2 lg:m-8 text-center'>{t("prices-and-processes.intro.boxes.1.number")}</h3>
              <ul className='list-disc list-inside max-w-[50vw] min-w-[50vw] lg:max-w-[20vw] lg:min-w-[20vw]'>
                <li>{t("prices-and-processes.intro.boxes.1.details.1")}</li>
                <li>{t("prices-and-processes.intro.boxes.1.details.2")}</li>
              </ul>
            </div>
          </div>
          <div className='min-h-[25vh] border-2 border-l-0 border-primary bg-secondary content-center'>
            <div className='flex flex-col md:flex-row mx-10 my-4 px-8 py-4 lg:px-14 lg:py-8 bg-primary text-secondary md:items-center md:justify-between border rounded-xl min-h-[25vh]'>
              <h3 className='text-xl lg:text-3xl p-2 lg:p-4 text-primary bg-secondary border rounded-xl m-2 lg:m-8 text-center'>{t("prices-and-processes.intro.boxes.2.number")}</h3>
              <ul className='list-disc list-inside max-w-[50vw] min-w-[50vw] lg:max-w-[20vw] lg:min-w-[20vw]'>
                <li>{t("prices-and-processes.intro.boxes.2.details.1")}</li>
                <li>{t("prices-and-processes.intro.boxes.2.details.2")}</li>
                <li>{t("prices-and-processes.intro.boxes.2.details.3")}</li>
              </ul>
            </div>
          </div>
          <div className='min-h-[25vh] border-2 border-t-0 border-primary bg-secondary content-center'>
            <div className='flex flex-col md:flex-row-reverse mx-10 my-4 px-8 py-4 lg:px-14 lg:py-8 bg-primary text-secondary md:items-center md:justify-between border rounded-xl min-h-[25vh]'>
              <h3 className='text-xl lg:text-3xl p-2 lg:p-4 text-primary bg-secondary border rounded-xl m-2 lg:m-8 text-center'>{t("prices-and-processes.intro.boxes.3.number")}</h3>
              <ul className='list-disc list-inside max-w-[50vw] min-w-[50vw] lg:max-w-[20vw] lg:min-w-[20vw]'>
                <li>{t("prices-and-processes.intro.boxes.3.details.1")}</li>
                <li>{t("prices-and-processes.intro.boxes.3.details.2")}</li>
                <li>{t("prices-and-processes.intro.boxes.3.details.3")}</li>
                <li>{t("prices-and-processes.intro.boxes.3.details.4")}</li>
                <li>{t("prices-and-processes.intro.boxes.3.details.5")}</li>
              </ul>
            </div>
          </div>
          <div className='min-h-[25vh] border-2 border-t-0 border-l-0 border-primary bg-secondary content-center'>
            <div className='flex flex-col md:flex-row mx-10 my-4 px-8 py-4 lg:px-14 lg:py-8 bg-primary text-secondary md:items-center md:justify-between border rounded-xl min-h-[25vh]'>
              <h3 className='text-xl lg:text-3xl p-2 lg:p-4 text-primary bg-secondary border rounded-xl m-2 lg:m-8 text-center'>{t("prices-and-processes.intro.boxes.4.number")}</h3>
              <ul className='list-disc list-inside max-w-[50vw] min-w-[50vw] lg:max-w-[20vw] lg:min-w-[20vw]'>
                <li>{t("prices-and-processes.intro.boxes.4.details.1")}</li>
                <li>{t("prices-and-processes.intro.boxes.4.details.2")}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='flex flex-col min-h-[60vh] justify-center items-center text-primary p-4 md:p-10 bg-[linear-gradient(135deg,theme(colors.secondary),theme(colors.white))]'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl my-20 text-center'>{t("prices-and-processes.prices.title")}</h1>
          <h2 className='text-3xl md:text-4xl lg:text-5xl mb-10 text-center'>{t("prices-and-processes.prices.subtitle")}</h2>
          <p className='text-2xl max-w-[70vw] text-center mb-10'>{t("prices-and-processes.prices.description")}</p>
          <div className='flex flex-col md:flex-row justify-around'>
            <div className='md:w-2/5 self-center m-2 p-10 border-primary border-4 rounded-xl justify-items-center text-center bg-[linear-gradient(90deg,theme(colors.secondary),theme(colors.white))]'>
              <h3 className="text-3xl lg:text-5xl mb-4">{t("prices-and-processes.prices.pricemodels.percent.title")}</h3>
              <div>
                <ul className='list-disc list-inside text-left'>
                  <li>{t("prices-and-processes.prices.pricemodels.percent.list.1")}</li>
                  <li>{t("prices-and-processes.prices.pricemodels.percent.list.2")}</li>
                  <li>{t("prices-and-processes.prices.pricemodels.percent.list.3")}</li>
                </ul>
              </div>
            </div>
            <div className='md:w-2/5 self-center m-2 p-10 border-primary border-4 rounded-xl justify-items-center text-center bg-[linear-gradient(270deg,theme(colors.secondary),theme(colors.white))]'>
              <h3 className="text-3xl lg:text-5xl mb-4">{t("prices-and-processes.prices.pricemodels.mixed.title")}</h3>
              <ul className='list-disc list-inside text-left'>
                <li>{t("prices-and-processes.prices.pricemodels.mixed.list.1")}</li>
                <li>{t("prices-and-processes.prices.pricemodels.mixed.list.2")}</li>
                <li>{t("prices-and-processes.prices.pricemodels.mixed.list.3")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Calculator />
      <Footer />
    </div >
  )
}

export default PricesAndProcesses
