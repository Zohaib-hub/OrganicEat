import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Logo from "../assets/organic-eat-logo.png";

const searchProducts = [
  {
    name: "Palak Murgh",
    slug: "/products/palak-murgh",
    desc: "Traditional • No Additives",
    image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=100&q=80",
    price: "Rs. 1,299"
  },
  {
    name: "Chicken Biryani",
    slug: "/products/chicken-biryani",
    desc: "Whole Spices • Saffron Blend",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=100&q=80",
    price: "Rs. 1,399"
  },
  {
    name: "Pizza Dough Masala Powder",
    slug: "/products/pizza-dough-masala-powder",
    desc: "Italian Herbs • 100% Natural",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=100&q=80",
    price: "Rs. 999"
  }
];

const homeLinks = [
  { name: "Home 1", slug: "/home1", desc: "Dark Glassmorphic Layout" },
  { name: "Home 2", slug: "/home2", desc: "Editorial Magazine Layout" },
  { name: "Home 3", slug: "/home3", desc: "Premium Warm Organic Layout" },
  { name: "Home 4", slug: "/home4", desc: "Premium Warm Organic Layout" },
];

const productLinks = [
  { name: "Palak Murgh", slug: "/products/palak-murgh", desc: "Traditional • No Additives" },
  { name: "Chicken Biryani", slug: "/products/chicken-biryani", desc: "Whole Spices • Saffron Blend" },
  { name: "Pizza Dough Masala Powder", slug: "/products/pizza-dough-masala-powder", desc: "Italian Herbs • 100% Natural" },
];

const aboutLinks = [
  { name: "About Us", slug: "/about", desc: "Our Story and Values" },
  { name: "About Us 1", slug: "/about1", desc: "Upgraded Premium Layout" },
];

function NavDropdown({ name, mainSlug, links, dropdownRef, activeMenu, setActiveMenu }) {
  const isOpen = activeMenu === name.toLowerCase();
  return (
    <div className="relative" ref={dropdownRef}>
      <div
        onMouseEnter={() => setActiveMenu(name.toLowerCase())}
        onMouseLeave={() => setActiveMenu(null)}
        className="flex items-center gap-0.5"
      >
        <Link
          to={mainSlug}
          onClick={() => setActiveMenu(null)}
          className="flex items-center text-[#111827] font-bold text-[11px] lg:text-[12px] xl:text-[13px] tracking-wide xl:tracking-widest uppercase hover:text-[#214D41] transition-colors duration-200 focus:outline-none whitespace-nowrap"
        >
          {name}
        </Link>
        <button
          type="button"
          onClick={() => setActiveMenu(isOpen ? null : name.toLowerCase())}
          className="text-[#111827] hover:text-[#214D41] transition-colors focus:outline-none p-1"
        >
          <svg
            width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </div>

      <div
        onMouseEnter={() => setActiveMenu(name.toLowerCase())}
        onMouseLeave={() => setActiveMenu(null)}
        className={`absolute top-full left-0 pt-3 transition-all duration-200 ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        style={{ minWidth: "260px", zIndex: 999 }}
      >
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {links.map((item, index) => (
            <Link
              key={item.slug}
              to={item.slug}
              className={`flex flex-col px-5 py-3.5 hover:bg-[#FDF5E6] transition-colors duration-150 group ${index !== links.length - 1 ? "border-b border-gray-100" : ""
                }`}
              onClick={() => setActiveMenu(null)}
            >
              <span className="font-semibold text-sm group-hover:text-[#214D41] transition-colors text-[#1a1a1a]">
                {item.name}
              </span>
              <span className="text-xs text-gray-400 mt-0.5">{item.desc}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileNavDropdown({ name, mainSlug, links, activeMenu, setActiveMenu, setMenuOpen }) {
  const isOpen = activeMenu === name.toLowerCase();
  return (
    <div className="border-b border-[#E8DCC2]">
      <div className="w-full flex items-center justify-between py-3">
        <Link
          to={mainSlug}
          onClick={() => { setMenuOpen(false); setActiveMenu(null); }}
          className="text-[#111827] font-bold text-sm tracking-widest hover:text-[#214D41] transition-colors uppercase focus:outline-none flex-1 text-left"
        >
          {name}
        </Link>
        <button
          type="button"
          onClick={() => setActiveMenu(isOpen ? null : name.toLowerCase())}
          className="p-2 text-[#111827] hover:text-[#214D41] transition-colors focus:outline-none"
        >
          <svg
            width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            className={`transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : ""}`}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[400px] pb-3" : "max-h-0"
          }`}
      >
        <div className="flex flex-col gap-1 pl-2">
          {links.map((item) => (
            <Link
              key={item.slug}
              to={item.slug}
              onClick={() => { setMenuOpen(false); setActiveMenu(null); }}
              className="flex flex-col py-2.5 px-3 rounded-xl hover:bg-[#E8DCC2] transition-colors"
            >
              <span className="font-semibold text-sm text-[#214D41]">{item.name}</span>
              <span className="text-xs text-gray-400 mt-0.5">{item.desc}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const homeDropdownRef = useRef(null);
  const dropdownRef = useRef(null);
  const aboutDropdownRef = useRef(null);
  const location = useLocation();
  const { cartTotalItems } = useCart();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        (homeDropdownRef.current && !homeDropdownRef.current.contains(e.target)) &&
        (dropdownRef.current && !dropdownRef.current.contains(e.target)) &&
        (aboutDropdownRef.current && !aboutDropdownRef.current.contains(e.target))
      ) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setActiveMenu(null);
    setMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  // Smart Reveal Scroll Logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos < 80) {
        setVisible(true);
      } else {
        const isScrollingUp = prevScrollPos > currentScrollPos;
        setVisible(isScrollingUp);
      }
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 right-0 z-50 font-sans shadow-md transition-transform duration-300 ease-in-out ${visible ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        {/* ── Top Bar ── */}
        <div className="bg-[#214D41] hidden lg:flex flex-row items-center justify-center text-white py-2.5 px-4 text-center text-xs md:text-sm font-medium tracking-wide">
          PERK UP WITH OUR LIMITED-TIME OFFER!{" "}
          <Link
            to="/products"
            className="underline font-semibold ml-1 hover:text-gray-200 transition-colors"
          >
            SHOP NOW
          </Link>
        </div>

        {/* ── Main Navigation ── */}
        <nav className="bg-[#FDF5E6]/90 backdrop-blur-md w-full shadow-sm relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center w-full gap-4">

            {/* Left: Desktop Nav Links OR Mobile Spacer — flex-1 keeps logo centered */}
            <div className="flex-1 lg:flex hidden items-center justify-start">
              <div className="hidden lg:flex items-center gap-3 xl:gap-6">
                <NavDropdown name="Home" mainSlug="/" links={homeLinks} dropdownRef={homeDropdownRef} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
                <NavDropdown name="Products" mainSlug="/products" links={productLinks} dropdownRef={dropdownRef} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
                <NavDropdown name="About" mainSlug="/about" links={aboutLinks} dropdownRef={aboutDropdownRef} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

                {/* BLOG */}
                <Link
                  to="/blog"
                  className="text-[#111827] font-bold text-[11px] lg:text-[12px] xl:text-[13px] tracking-wide xl:tracking-widest uppercase hover:text-[#214D41] transition-colors duration-200 whitespace-nowrap"
                >
                  BLOG
                </Link>

                {/* CONTACT */}
                <Link
                  to="/contact"
                  className="text-[#111827] font-bold text-[11px] lg:text-[12px] xl:text-[13px] tracking-wide xl:tracking-widest uppercase hover:text-[#214D41] transition-colors duration-200 whitespace-nowrap"
                >
                  CONTACT
                </Link>
              </div>
            </div>

            {/* Center: Logo — flex-none keeps it perfectly centered */}
            <div className="flex items-center justify-center flex-none">
              <Link to="/">
                <img
                  src={Logo}
                  alt="Organic Eat Logo"
                  className="h-9 sm:h-10 md:h-11 lg:h-12 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Right: Icons + Hamburger — flex-1 justify-end mirrors the left */}
            <div className="flex-1 flex items-center justify-end gap-3 sm:gap-4">

              {/* Search Icon */}
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                aria-label="Search Products"
                className="text-[#111827] hover:text-[#548E0A] transition-colors p-1 focus:outline-none"
              >
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Cart Icon */}
              <Link
                to="/cart"
                aria-label="Shopping Bag"
                className="text-[#111827] hover:text-[#214D41] transition-colors p-1 relative focus:outline-none"
              >
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 6h18" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 10a4 4 0 0 1-8 0" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {cartTotalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#548E0A] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartTotalItems}
                  </span>
                )}
              </Link>

              {/* Hamburger — visible on all screens below lg (1024px) */}
              <button
                className="lg:hidden flex flex-col justify-center items-center w-9 h-9 focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle Menu"
                aria-expanded={menuOpen}
              >
                <span
                  className={`bg-[#111827] block h-[2px] w-6 rounded transition-all duration-300 ease-out ${menuOpen ? "rotate-45 translate-y-[8px]" : "-translate-y-[4px]"
                    }`}
                />
                <span
                  className={`bg-[#111827] block h-[2px] w-6 rounded transition-all duration-300 ease-out ${menuOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
                    }`}
                />
                <span
                  className={`bg-[#111827] block h-[2px] w-6 rounded transition-all duration-300 ease-out ${menuOpen ? "-rotate-45 -translate-y-[8px]" : "translate-y-[4px]"
                    }`}
                />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* ── Mobile Overlay Backdrop ── */}
      <div
        className={`fixed inset-0 bg-black/50 lg:hidden transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        style={{ zIndex: 998 }}
        onClick={() => setMenuOpen(false)}
      />

      {/* ── Mobile / Tablet Slide-in Menu Panel ── */}
      <div
        className={`fixed inset-y-0 right-0 w-[280px] sm:w-[320px] bg-[#FDF5E6] lg:hidden flex flex-col shadow-2xl overflow-y-auto transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        style={{ zIndex: 999, paddingTop: "1.5rem", paddingLeft: "1.25rem", paddingRight: "1.25rem" }}
      >
        {/* Panel Header */}
        <div className="flex items-center justify-between border-b border-[#E8DCC2]/60 pb-4 mb-2">
          <img src={Logo} alt="Organic Eat" className="h-10 w-auto object-contain" />
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="text-[#214D41] hover:text-[#548E0A] transition-colors p-1 rounded-lg hover:bg-[#E8DCC2]"
            aria-label="Close Menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Mobile Nav Links */}
        <nav className="flex flex-col pt-2 pb-8">

          <MobileNavDropdown name="Home" mainSlug="/" links={homeLinks} activeMenu={activeMenu} setActiveMenu={setActiveMenu} setMenuOpen={setMenuOpen} />
          <MobileNavDropdown name="Products" mainSlug="/products" links={productLinks} activeMenu={activeMenu} setActiveMenu={setActiveMenu} setMenuOpen={setMenuOpen} />
          <MobileNavDropdown name="About" mainSlug="/about" links={aboutLinks} activeMenu={activeMenu} setActiveMenu={setActiveMenu} setMenuOpen={setMenuOpen} />

          {/* BLOG */}
          <Link
            to="/blog"
            onClick={() => setMenuOpen(false)}
            className="py-4 border-b border-[#E8DCC2] text-[#111827] font-bold text-sm tracking-widest hover:text-[#214D41] transition-colors uppercase block"
          >
            BLOG
          </Link>

          {/* CONTACT */}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="py-4 border-b border-[#E8DCC2] text-[#111827] font-bold text-sm tracking-widest hover:text-[#214D41] transition-colors uppercase block"
          >
            CONTACT
          </Link>

          {/* CTA in mobile menu */}
          <div className="mt-6">
            <Link
              to="/products"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center w-full py-3.5 px-6 bg-[#214D41] text-white font-bold text-sm tracking-widest uppercase rounded-xl hover:bg-[#548E0A] transition-colors duration-200"
            >
              SHOP NOW
            </Link>
          </div>
        </nav>
      </div>

      {/* ── Search Overlay ── */}
      {searchOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-24 px-4 sm:px-6"
          style={{ zIndex: 1000 }}
        >
          <div className="bg-[#FDF5E6] w-full max-w-2xl rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col max-h-[80vh]">
            {/* Search Input Area */}
            <div className="p-4 sm:p-5 border-b border-gray-200/60 flex items-center gap-3">
              <svg width="22" height="22" fill="none" stroke="#214D41" strokeWidth="2.5" viewBox="0 0 24 24" className="shrink-0">
                <circle cx="11" cy="11" r="8" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <input
                type="text"
                autoFocus
                placeholder="Search organic products, biryani, turmeric..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-gray-900 placeholder-gray-400 font-semibold text-base outline-none"
              />
              <button
                type="button"
                onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 shrink-0"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Results Area */}
            <div className="overflow-y-auto p-4 flex flex-col gap-2 max-h-[50vh]">
              {searchQuery.trim() === "" ? (
                <div className="text-center py-8 text-gray-400 text-sm font-medium">
                  Type to search our organic products...
                </div>
              ) : (() => {
                const filtered = searchProducts.filter(p =>
                  p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  p.desc.toLowerCase().includes(searchQuery.toLowerCase())
                );
                if (filtered.length === 0) {
                  return (
                    <div className="text-center py-8 text-gray-400 text-sm font-medium">
                      No products found matching "{searchQuery}"
                    </div>
                  );
                }
                return filtered.map(p => (
                  <Link
                    key={p.slug}
                    to={p.slug}
                    onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                    className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white transition-colors group"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden bg-white shrink-0 border border-gray-100 flex items-center justify-center p-1">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="flex-1 flex flex-col min-w-0">
                      <span className="font-bold text-gray-900 group-hover:text-[#548E0A] transition-colors text-sm sm:text-base truncate">{p.name}</span>
                      <span className="text-xs text-gray-400 mt-0.5">{p.desc}</span>
                    </div>
                    <span className="font-black text-[#214D41] text-sm shrink-0">{p.price}</span>
                  </Link>
                ));
              })()}
            </div>
          </div>
        </div>
      )}
    </>
  );
}