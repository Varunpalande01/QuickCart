export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-14 text-gray-800">
      <h1 className="text-4xl font-bold text-blue-700 mb-6 border-b pb-2">About QuickCart</h1>

      <section className="space-y-6 text-lg leading-relaxed">
        <p>
          <strong>QuickCart</strong> is India’s emerging online destination for modern, affordable, and reliable electronics.
          Built with a vision to simplify how people shop for gadgets, we combine quality products, intuitive experiences,
          and fast delivery — all in one seamless platform.
        </p>

        <p>
          Whether you're looking for the latest smartphone, a high-performance laptop, smart home gadgets, or daily tech accessories,
          QuickCart offers a carefully curated selection from trusted brands — backed by secure payments, genuine warranties,
          and responsive customer support.
        </p>

        <div className="bg-gray-100 p-5 rounded-md shadow-sm">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">What We Offer</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>✔️ 100% original electronics from verified sellers</li>
            <li>🚚 Fast & reliable nationwide delivery</li>
            <li>🔒 Secure checkout with multiple payment options</li>
            <li>📦 Easy returns & responsive customer care</li>
          </ul>
        </div>

        <p>
          Our team is made up of tech enthusiasts, e-commerce specialists, and customer-first professionals who are passionate about innovation.
          Every feature we build and every product we list is focused on providing a smooth, transparent, and enjoyable shopping experience.
        </p>

        <p>
          At QuickCart, we believe in empowering customers by making technology accessible to everyone — no confusion, no compromise.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 italic text-blue-800 rounded">
          “We’re not just selling gadgets — we’re building India’s most trusted tech marketplace.”
        </div>

        <p className="mt-6 font-semibold text-lg text-gray-900">
          Thank you for being a part of our journey.  
          <br />
          — The QuickCart Team 💙
        </p>
      </section>
    </main>
  );
}
