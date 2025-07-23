import { Route, Routes} from "react-router"

import Home from "./pages/HomePage.jsx"
import AboutUs from "./pages/AboutUsPage.jsx"
import PricesAndProcesses from "./pages/PricesAndProcessesPage.jsx"
import ServicesAndScope from "./pages/ServicesAndScopePage.jsx"
import Contacts from "./pages/ContactsPage.jsx"
import Dashboard from "./pages/DashboardPage.jsx"
import Article from "./pages/ArticlePage.jsx"
import NotFoundPage from "./pages/NotFoundPage.jsx"
import ScrollToTop from "./components/ScrollToTop.jsx"

import { Helmet } from 'react-helmet';
import { useTranslation } from "react-i18next"


const App = () => {
  let {t} = useTranslation();
  return (
    <div>
      <Helmet>
      <title>{t("site.title")}</title>
      <meta charSet='utf-8'/>
      <meta name='description' content={t("site.description")}/>
      <meta name='keywords' content={t("site.keywords")}/>
      <meta author={t("site.author")} />
      </Helmet>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/prices-and-processes" element={<PricesAndProcesses />} />
        <Route path="/services-and-scope" element={<ServicesAndScope />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/articles" element={<Article />} />
        <Route path="/articles/:id" element={<Article />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App

