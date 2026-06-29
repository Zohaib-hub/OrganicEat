import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you are looking for does not exist." />
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20">
        <span className="text-8xl font-black text-[#214D41] opacity-10 select-none">404</span>
        <h1 className="text-3xl font-bold text-[#214D41] mt-4">Yeh page nahi mila</h1>
        <p className="text-gray-500 mt-3 max-w-sm">
          Lagta hai aap jo page dhundh rahe hain woh exist nahi karta ya move ho gaya hai.
        </p>
        <div className="flex flex-wrap gap-4 mt-8 justify-center">
          <Link
            to="/"
            className="bg-[#214D41] text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-[#548E0A] transition-colors"
          >
            Home Page
          </Link>
          <Link
            to="/products"
            className="border border-[#214D41] text-[#214D41] px-6 py-3 rounded-full font-medium text-sm hover:bg-[#214D41]/5 transition-colors"
          >
            Our Products
          </Link>
        </div>
      </div>
    </>
  );
}
