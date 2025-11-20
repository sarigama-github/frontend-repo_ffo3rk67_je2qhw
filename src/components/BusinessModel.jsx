export default function BusinessModel() {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Business model & audiences</h2>
        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-white font-semibold text-lg">B2B — Institutions</h3>
            <ul className="mt-4 space-y-2 text-blue-100/90">
              <li>Managed accounts, model portfolios and white‑label strategies</li>
              <li>~0.85% management + 10% performance fees</li>
              <li>FCA‑ready compliance, deterministic training & governance</li>
            </ul>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-white font-semibold text-lg">B2C — Retail</h3>
            <ul className="mt-4 space-y-2 text-blue-100/90">
              <li>Allocate into curated NeuralShift strategies</li>
              <li>Choose risk, view transparent performance metrics</li>
              <li>20% performance fee + optional £9.99/month analytics</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
