import './App.css';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReportList from './pages/admin/Report/ReportList';
import AddReport from './pages/admin/Report/AddReport';
import EditReport from './pages/admin/Report/EditReport';
import AddPressRelease from './pages/admin/PressRelease/AddPressRelease';
import PressReleaseList from './pages/admin/PressRelease/PressReleaseList';
import EditPressRelease from './pages/admin/PressRelease/EditPressRelease';
import { HelmetProvider } from 'react-helmet-async';
import EditPrice from './pages/admin/Price/EditPrice';
import PriceList from './pages/admin/Price/PriceList';
import AddPrice from './pages/admin/Price/AddPrice';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

export const notifySuccess = (value) => toast.success(value);
export const notifyWarning = (value) => toast.warning(value);
export const notifyError = (value) => toast.error(value);
export const notifyInfo = (value) => toast.info(value);

function App() {
  return (
    <HelmetProvider>
      <>

        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/category/:categoryUrl" element={<AllReport />} />
          <Route path="/all-press-release/:categoryUrl" element={<AllPressRelease />} />
          <Route path="/press-release/:pressReleaseUrl" element={<PressRelease />} />
          <Route path="/offering" element={<Offering />} />
          <Route path="/buy-now/:reportId/:buyId" element={<BuyNow />} />
          <Route path="/industry-report/:reportUrl" element={<IndustryReport />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/search/:keyword" element={<SearchList />} /> */}
          <Route path="/report/add" element={<AddReport />} />
          <Route path="/report/list" element={<ReportList />} />
          <Route path="/report/edit/:reportId" element={<EditReport />} />
          <Route path="/press-release/add" element={<AddPressRelease />} />
          <Route path="/press-release/list" element={<PressReleaseList />} />
          <Route path="/press-release/edit/:pressReleaseId" element={<EditPressRelease />} />
          <Route path="/price/add" element={<AddPrice />} />
          <Route path="/price/list" element={<PriceList />} />
          <Route path="/price/edit/:priceId" element={<EditPrice />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <ScrollToTop />
        <ToastContainer
          position='top-center'
          theme='light'
          hideProgressBar />
        {/* <Footer /> */}
      </ >
    </HelmetProvider>
  );
}

export default App;
