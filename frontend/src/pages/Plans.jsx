import { useState } from "react";

function Plans() {

  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <div className="p-10 bg-gray-100 min-h-screen">

      <h1 className="text-4xl font-bold text-center text-blue-600">
        Subscription Plans
      </h1>

      <div className="grid md:grid-cols-3 gap-8 mt-10">

        {/* Basic Plan */}
        <div className="shadow-lg p-6 rounded-lg text-center bg-white">

          <h2 className="text-2xl font-bold">
            Basic
          </h2>

          <p className="text-4xl mt-4 font-bold text-blue-600">
            ₹499
          </p>

          <p className="mt-4 text-gray-600">
            Monthly snacks and surprise items
          </p>

          <button
            onClick={() =>
              setSelectedPlan({
                name: "Basic",
                price: "₹499",
                desc: "Monthly snacks and surprise items",
              })
            }
            className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
          >
            Choose Plan
          </button>

        </div>

        {/* Premium Plan */}
        <div className="shadow-lg p-6 rounded-lg text-center bg-white">

          <h2 className="text-2xl font-bold">
            Premium
          </h2>

          <p className="text-4xl mt-4 font-bold text-blue-600">
            ₹999
          </p>

          <p className="mt-4 text-gray-600">
            Premium beauty and gadget products
          </p>

          <button
            onClick={() =>
              setSelectedPlan({
                name: "Premium",
                price: "₹999",
                desc: "Premium beauty and gadget products",
              })
            }
            className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
          >
            Choose Plan
          </button>

        </div>

        {/* Deluxe Plan */}
        <div className="shadow-lg p-6 rounded-lg text-center bg-white">

          <h2 className="text-2xl font-bold">
            Deluxe
          </h2>

          <p className="text-4xl mt-4 font-bold text-blue-600">
            ₹1499
          </p>

          <p className="mt-4 text-gray-600">
            Luxury monthly subscription box
          </p>

          <button
            onClick={() =>
              setSelectedPlan({
                name: "Deluxe",
                price: "₹1499",
                desc: "Luxury monthly subscription box",
              })
            }
            className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
          >
            Choose Plan
          </button>

        </div>

      </div>

      {/* Selected Plan */}

      {selectedPlan && (
        <div className="mt-10 bg-white shadow-lg p-8 rounded-xl text-center max-w-xl mx-auto">

          <h2 className="text-3xl font-bold text-green-600">
            Plan Selected Successfully ✅
          </h2>

          <h3 className="text-2xl mt-4 font-bold">
            {selectedPlan.name}
          </h3>

          <p className="text-4xl text-blue-600 font-bold mt-2">
            {selectedPlan.price}
          </p>

        <p className="mt-4 text-gray-600">
          {selectedPlan.desc}
         </p>
            <div className="mt-6 text-left">

           <h4 className="text-xl font-bold mb-3">
           Items Included 🎁
           </h4>

         {/* Basic Plan Items */}
          {selectedPlan.name === "Basic" && (
         <>
          <div className="bg-gray-100 p-4 rounded-lg mb-2 flex justify-between">             <span>🍫 Chocolate Snacks Box</span>
            <span className="font-bold">₹199</span>
           </div>
         <div className="bg-gray-100 p-4 rounded-lg mb-2 flex justify-between">
            <span>🍪 Cookies Combo</span>
            <span className="font-bold">₹99</span>
           </div>

            <div className="bg-blue-100 p-4 rounded-lg mt-4 flex justify-between font-bold">
               <span>Total Value</span>
                <span>₹298</span>
                </div>
               </>
                )}

          {/* Premium Plan Items */}
          {selectedPlan.name === "Premium" && (
          <>
      <div className="bg-gray-100 p-4 rounded-lg mb-2 flex justify-between">
        <span>💄 Beauty Kit</span>
        <span className="font-bold">₹499</span>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg mb-2 flex justify-between">
        <span>🎧 Mini Gadget</span>
        <span className="font-bold">₹399</span>
      </div>

      <div className="bg-blue-100 p-4 rounded-lg mt-4 flex justify-between font-bold">
        <span>Total Value</span>
        <span>₹898</span>
         </div>
        </>
         )}

       {/* Deluxe Plan Items */}
        {selectedPlan.name === "Deluxe" && (
    <>
      <div className="bg-gray-100 p-4 rounded-lg mb-2 flex justify-between">
        <span>⌚ Luxury Watch</span>
        <span className="font-bold">₹999</span>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg mb-2 flex justify-between">
        <span>👜 Premium Accessories</span>
        <span className="font-bold">₹799</span>
      </div>

         <div className="bg-blue-100 p-4 rounded-lg mt-4 flex justify-between font-bold">
        <span>Total Value</span>
        <span>₹1798</span>
         </div>
        </>
        )}

      </div>
     </div>
      )}

    </div>
  );
}

export default Plans;