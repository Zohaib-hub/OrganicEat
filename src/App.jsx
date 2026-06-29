import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ScrollToTop from './components/ScrollToTop';
import TopProgressBar from './components/TopProgressBar';
import './index.css';

import Home1Page from './pages/Home1Page';
import Home2Page from './pages/Home2Page';
import Home3Page from './pages/Home3Page';
import Home4Page from './pages/Home4Page';
import About1Page from './pages/About1Page';

const HomePage          = lazy(() => import('./pages/HomePage'));
const Cart              = lazy(() => import('./pages/Cart'));
const ProductsPage      = lazy(() => import('./pages/ProductsPage'));
const TurmericPage      = lazy(() => import('./pages/TurmericPage'));
const PalakMurghPage    = lazy(() => import('./pages/PalakMurghPage'));
const ChickenBiryaniPage= lazy(() => import('./pages/ChickenBiryaniPage'));
const PizzaDoughPage    = lazy(() => import('./pages/PizzaDoughPage'));
const ContactPage       = lazy(() => import('./pages/ContactPage'));
const AboutPage         = lazy(() => import('./pages/AboutPage'));
const FAQPage           = lazy(() => import('./pages/FAQPage'));
const DeliveryPage      = lazy(() => import('./pages/DeliveryPage'));
const HowToOrderPage    = lazy(() => import('./pages/HowToOrderPage'));
const Blog              = lazy(() => import('./components/Blog'));
const NotFoundPage      = lazy(() => import('./pages/NotFoundPage'));

function PageLoader() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-[#214D41] border-t-transparent animate-spin" />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen w-full flex flex-col mt-16">
        <ScrollToTop />
        <TopProgressBar />
        <Navbar />
        <div className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home1" element={<Home1Page />} />
              <Route path="/home2" element={<Home2Page />} />
              <Route path="/home3" element={<Home3Page />} />
              <Route path="/home4" element={<Home4Page />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/turmeric" element={<TurmericPage />} />
              <Route path="/products/palak-murgh" element={<PalakMurghPage />} />
              <Route path="/products/chicken-biryani" element={<ChickenBiryaniPage />} />
              <Route path="/products/pizza-dough-masala-powder" element={<PizzaDoughPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/about1" element={<About1Page />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/delivery" element={<DeliveryPage />} />
              <Route path="/how-to-order" element={<HowToOrderPage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
        <BackToTop />
      </div>
    </CartProvider>
  )
}

export default App
