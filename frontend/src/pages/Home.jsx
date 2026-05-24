import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Discover Something New Every Month 🎁
        </motion.h1>

        <p className="mt-4 text-lg">
          Curated subscription boxes delivered to your doorstep
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <button
          onClick={() => window.location.href = "/plans"}
         className="bg-white text-blue-600 px-6 py-2 rounded-xl font-semibold"
        >
        Explore Plans
        </button>

         <button
         onClick={() =>
         document.getElementById("how-it-works").scrollIntoView({ behavior: "smooth" })
         }
         className="border border-white px-6 py-2 rounded-xl"
         >
          How It Works
          </button>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-6 px-6 max-w-5xl mx-auto">
          {[
            { icon: "🛒", title: "Choose Plan" },
            { icon: "📦", title: "We Curate Your Box" },
            { icon: "🚚", title: "Delivered Monthly" },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow hover:scale-105 transition">
              <div className="text-4xl">{item.icon}</div>
              <h3 className="mt-4 font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 bg-blue-600 text-white">
        © 2026 Subscription Box Project
      </footer>
    </div>
  );
}