import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { BRAND } from "../config/constants";

// Add this helper function inside or above the Cart component:
function buildWhatsAppMessage(cartItems, cartTotalAmount) {
  if (cartItems.length === 0) return BRAND.whatsappOrderMessage;
  const lines = cartItems.map(
    (item) => `• ${item.name} x${item.quantity} — Rs. ${(item.price * item.quantity).toLocaleString()}`
  );
  const message = [
    "Hi! I want to place an order from Organic Eat:",
    "",
    ...lines,
    "",
    `Total: Rs. ${cartTotalAmount.toLocaleString()}`,
    "",
    "Please confirm availability. Thank you!"
  ].join("\n");
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/* ─────────────────────────────────────────────────────────
   WHATSAPP CHECKOUT MODAL
───────────────────────────────────────────────────────── */
function CheckoutModal({
  cartItems,
  cartTotalAmount,
  cartTotalItems,
  onClose,
  onConfirm,
}) {
  return (
    <div className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden animate-slide-up">
        {/* Header */}
        <div className="bg-[#25D366] px-6 pt-6 pb-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-bold text-base leading-tight">
                Order via WhatsApp
              </p>
              <p className="text-white/80 text-xs">
                Review your order before sending
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors focus:outline-none"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 max-h-[55vh] overflow-y-auto">
          {/* Message Preview Label */}
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
            Your Order Summary
          </p>

          {/* Items */}
          <div className="flex flex-col gap-3 mb-5">
            {cartItems.map((item, index) => (
              <div
                key={item.id}
                className="flex items-center gap-3 bg-gray-50 rounded-2xl p-3"
              >
                {/* Number Badge */}
                <div className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                  <span className="text-white text-[10px] font-bold">
                    {index + 1}
                  </span>
                </div>

                {/* Product Image */}
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-white border border-gray-100 shrink-0">
                  <img
                    src={
                      item.image ||
                      "https://placehold.co/56x56/FDF5E6/014D40?text=Food"
                    }
                    alt={item.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src =
                        "https://placehold.co/56x56/FDF5E6/014D40?text=Food";
                    }}
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-gray-900 text-sm truncate">
                    {item.name}
                  </p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs text-gray-400">
                      Qty: {item.quantity}
                    </span>
                    <span className="text-[10px] text-gray-300">•</span>
                    <span className="text-xs font-semibold text-[#25D366]">
                      Rs. {(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Per item price */}
                <div className="text-right shrink-0">
                  <p className="text-xs text-gray-400">Per item</p>
                  <p className="text-xs font-semibold text-gray-600">
                    Rs. {item.price.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Total Row */}
          <div className="flex items-center justify-between bg-[#014D40]/5 rounded-2xl px-4 py-3 mb-4 border border-[#014D40]/10">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Total Amount
              </p>
              <p className="text-xs text-gray-400 mt-0.5">
                {cartTotalItems} item{cartTotalItems > 1 ? "s" : ""}
              </p>
            </div>
            <p className="text-2xl font-black text-[#014D40]">
              Rs. {cartTotalAmount.toLocaleString()}
            </p>
          </div>

          {/* WhatsApp message preview */}
          <div className="bg-[#ECF8F1] border border-[#25D366]/30 rounded-2xl p-4">
            <p className="text-[10px] font-bold text-[#25D366] uppercase tracking-widest mb-2">
              📱 Message Preview
            </p>
            <div className="font-mono text-xs text-gray-600 leading-relaxed whitespace-pre-wrap">
              {`Hi! I want to order the following items from Organic Eat:

${cartItems
  .map(
    (item, i) =>
      `${i + 1}. ${item.name} (Qty: ${item.quantity}) - Rs. ${(item.price * item.quantity).toLocaleString()}`,
  )
  .join("\n")}

*Total Amount: Rs. ${cartTotalAmount.toLocaleString()}*`}
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="px-6 pb-6 pt-4 flex flex-col gap-3 border-t border-gray-100">
          <button
            onClick={onConfirm}
            className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 hover:-translate-y-0.5 transform"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            Send Order on WhatsApp
          </button>
          <button
            onClick={onClose}
            className="w-full border-2 border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700 font-semibold text-sm py-3 rounded-2xl transition-all duration-200"
          >
            Back to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   MAIN CART PAGE
───────────────────────────────────────────────────────── */
export default function Cart() {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    cartTotalAmount,
    cartTotalItems,
  } = useCart();
  const [showModal, setShowModal] = useState(false);

  const handleCheckoutClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (cartItems.length === 0) return;
    setShowModal(true);
  };

  const handleConfirmWhatsApp = () => {
    // Build WhatsApp checkout message
    let messageText =
      "Hi! I want to order the following items from Organic Eat:\n\n";
    cartItems.forEach((item, index) => {
      messageText += `${index + 1}. ${item.name} (Qty: ${item.quantity}) - Rs. ${(item.price * item.quantity).toLocaleString()}\n`;
    });
    messageText += `\n*Total Amount: Rs. ${cartTotalAmount.toLocaleString()}*`;

    const encodedMsg = encodeURIComponent(messageText);
    window.open(`https://wa.me/923184267192?text=${encodedMsg}`, "_blank");
    setShowModal(false);
  };

  return (
    <>
      <SEO title="Your Cart" description="Review your Organic Eat order and place it via WhatsApp." />
      {/* Checkout Modal */}
      {showModal && (
        <CheckoutModal
          cartItems={cartItems}
          cartTotalAmount={cartTotalAmount}
          cartTotalItems={cartTotalItems}
          onClose={() => setShowModal(false)}
          onConfirm={handleConfirmWhatsApp}
        />
      )}

      <div
        className="min-h-[85vh] mt-16 py-16 lg:py-24 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundColor: "#FDF5E6",
          fontFamily: '"Inter", sans-serif',
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-12 w-full">
          <h1
            className="text-4xl md:text-5xl font-extrabold text-[#214D41] text-center md:text-left tracking-tight"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Your Shopping Cart
          </h1>

          {cartItems.length === 0 ? (
            <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-sm p-12 md:p-20 text-center flex flex-col items-center justify-center border border-white">
              <div className="w-24 h-24 mb-6 rounded-full bg-[#214D41]/5 flex items-center justify-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#214D41"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </div>
              <h2
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                Your cart is empty
              </h2>
              <p className="text-gray-500 mb-10 max-w-md">
                Looks like you haven't added any delicious food to your cart
                yet.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-3 bg-[#214D41] text-white font-semibold text-sm tracking-wide uppercase px-9 py-4 rounded-full hover:bg-[#01352c] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:outline-none"
              >
                CONTINUE SHOPPING
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
              {/* Main Cart Area */}
              <div className="w-full lg:flex-1 bg-white rounded-3xl shadow-sm p-6 sm:p-8 md:p-10 border border-gray-50">
                {/* Header Row (Desktop) */}
                <div className="hidden md:flex justify-between border-b-2 border-gray-100 pb-5 mb-6">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest w-[45%]">
                    Product
                  </span>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest w-[20%] text-center">
                    Price
                  </span>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest w-[20%] text-center">
                    Quantity
                  </span>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest w-[15%] text-right">
                    Total
                  </span>
                </div>

                {/* Items List */}
                <div className="flex flex-col gap-8">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-gray-100 last:border-0 last:pb-0 gap-6 md:gap-4 relative group"
                    >
                      {/* 1. Product visual info */}
                      <div className="flex items-start md:items-center gap-5 w-full md:w-[45%] relative">
                        {/* Mobile Remove Button */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="md:hidden absolute top-0 right-0 text-gray-300 hover:text-black transition-colors p-2 -m-2 focus:outline-none"
                          aria-label="Remove item"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          </svg>
                        </button>

                        {/* Desktop Remove Button */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="hidden md:flex text-gray-400 hover:text-black transition-colors focus:outline-none shrink-0 opacity-0 group-hover:opacity-100 absolute -left-8"
                          aria-label="Remove item"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>

                        {/* Image */}
                        <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-2xl overflow-hidden bg-[#FDF5E6] border border-gray-100 flex items-center justify-center p-2">
                          <img
                            src={
                              item.image ||
                              "https://placehold.co/150x150/FDF5E6/014D40?text=Food"
                            }
                            alt={item.name || "Product"}
                            className="w-full h-full object-cover rounded-xl"
                            onError={(e) => {
                              e.target.src =
                                "https://placehold.co/150x150/FDF5E6/014D40?text=Food";
                            }}
                          />
                        </div>

                        <div className="flex flex-col gap-1.5 pt-1 md:pt-0 pr-6 md:pr-0">
                          <span className="font-bold text-gray-900 text-base sm:text-lg leading-tight">
                            {item.name}
                          </span>
                          <span className="text-xs font-semibold text-[#548E0A] uppercase tracking-wider">
                            Organic Eat
                          </span>
                          {/* Mobile Price */}
                          <span className="md:hidden font-bold text-gray-500 mt-1">
                            Rs. {item.price.toLocaleString()}
                          </span>
                        </div>
                      </div>

                      {/* 2. Price (desktop only) */}
                      <div className="hidden md:block w-[20%] text-center font-bold text-gray-600 text-[17px]">
                        Rs. {item.price.toLocaleString()}
                      </div>

                      {/* Left/Right splitting on mobile for Qty & Total */}
                      <div className="flex items-center justify-between w-full md:w-[35%] gap-4">
                        {/* 3. Quantity controls */}
                        <div className="flex items-center justify-between w-[130px] border-[1.5px] border-gray-200 rounded-xl overflow-hidden h-12 focus-within:border-[#214D41] transition-colors shrink-0">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="px-4 h-full bg-gray-50/50 hover:bg-gray-100 text-gray-600 font-bold transition-colors focus:outline-none"
                          >
                            −
                          </button>
                          <span className="w-full text-center font-bold text-gray-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="px-4 h-full bg-gray-50/50 hover:bg-gray-100 text-gray-600 font-bold transition-colors focus:outline-none"
                          >
                            +
                          </button>
                        </div>

                        {/* 4. Row total */}
                        <div className="md:w-[50%] md:justify-end flex font-black text-xl text-[#214D41]">
                          <span className="md:hidden text-gray-400 text-sm font-normal uppercase tracking-wider mr-3 self-center">
                            Total
                          </span>
                          Rs. {(item.price * item.quantity).toLocaleString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary Card */}
              <div className="w-full lg:w-[400px] xl:w-[440px] bg-white rounded-3xl shadow-sm p-6 sm:p-8 md:p-10 sticky top-[100px] border border-gray-50">
                <h3
                  className="text-2xl font-bold text-[#111827] border-b-2 border-gray-100 pb-5 mb-6 tracking-tight"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  Order Summary
                </h3>

                <div className="flex flex-col gap-5 mb-8">
                  <div className="flex justify-between items-center text-gray-600">
                    <span className="font-medium">
                      Subtotal{" "}
                      <span className="text-sm bg-gray-100 text-gray-600 py-0.5 px-2 rounded-md ml-1">
                        {cartTotalItems}
                      </span>
                    </span>
                    <span className="font-bold text-gray-900">
                      Rs. {cartTotalAmount.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-gray-600 pb-4 border-b border-gray-100">
                    <span className="font-medium">Shipping</span>
                    <span className="text-xs font-bold text-[#214D41] uppercase tracking-wider bg-[#214D41]/10 px-3 py-1 rounded-full">
                      Confirmed via WhatsApp
                    </span>
                  </div>
                  <div className="pt-2 flex justify-between items-end">
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-widest leading-none pb-1">
                      Total
                    </span>
                    <span className="text-[2.2rem] leading-none font-black text-[#214D41] tracking-tight">
                      Rs. {cartTotalAmount.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  {/* WhatsApp Checkout Button */}
                  {cartTotalItems === 0 ? (
                    <button
                      disabled
                      className="w-full font-bold text-sm tracking-widest px-6 py-4 xl:py-5 rounded-2xl transition-all duration-300 transform uppercase flex items-center justify-center gap-3 focus:outline-none bg-gray-200 text-gray-400 cursor-not-allowed"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                      </svg>
                      Checkout via WhatsApp
                    </button>
                  ) : (
                    <a
                      href={buildWhatsAppMessage(cartItems, cartTotalAmount)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full font-bold text-sm tracking-widest px-6 py-4 xl:py-5 rounded-2xl transition-all duration-300 transform uppercase flex items-center justify-center gap-3 focus:outline-none bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-lg shadow-[#25D366]/25 hover:shadow-[#25D366]/40 hover:-translate-y-0.5"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                      </svg>
                      Checkout via WhatsApp
                    </a>
                  )}

                  {/* Helper text */}
                  <p className="text-center text-xs text-gray-400 leading-relaxed">
                    A preview of your order will appear before sending to
                    WhatsApp
                  </p>

                  <div className="flex items-center justify-center gap-2 mt-1">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Secure & Fast Ordering
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal animation style */}
      <style>{`
        @keyframes slide-up {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slide-up 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </>
  );
}
