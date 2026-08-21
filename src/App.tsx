import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ThemeProvider } from './components/ThemeProvider'
import { About } from './pages/About'
import { Careers } from './pages/Careers'
import { Contact } from './pages/Contact'
import { Hire } from './pages/Hire'
import { Home } from './pages/Home'
import { Industries } from './pages/Industries'
import { IndustryDetail } from './pages/IndustryDetail'
import { InsightDetail } from './pages/InsightDetail'
import { Insights } from './pages/Insights'
import { NotFound } from './pages/NotFound'
import { Privacy } from './pages/Privacy'
import { Process } from './pages/Process'
import { ServiceDetail } from './pages/ServiceDetail'
import { Services } from './pages/Services'
import { Technologies } from './pages/Technologies'
import { Terms } from './pages/Terms'
import { Work } from './pages/Work'
import { WorkDetail } from './pages/WorkDetail'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<WorkDetail />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/:slug" element={<IndustryDetail />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<InsightDetail />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/hire" element={<Hire />} />
            <Route path="/process" element={<Process />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
