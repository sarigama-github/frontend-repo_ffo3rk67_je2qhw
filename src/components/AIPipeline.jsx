import { Brain, Layers, BarChart2, Activity, TrendingUp } from 'lucide-react'

export default function AIPipeline() {
  const steps = [
    { title: 'Multi‑timeframe data', desc: 'Tick, 1m, 5m, 1h, 1d inputs', icon: BarChart2 },
    { title: 'Feature encoding', desc: 'RSI, MACD, Bollinger + microstructure', icon: Layers },
    { title: 'Hierarchical peephole LSTM', desc: 'GPU‑trained sequence backbone', icon: Brain },
    { title: 'Multi‑timeframe attention', desc: 'Cross‑scale signal fusion', icon: Activity },
    { title: 'Dual‑heads + confidence gate', desc: 'Direction + size with risk gating', icon: TrendingUp },
  ]

  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Neural AI pipeline</h2>
        <p className="mt-3 text-blue-100/90 max-w-3xl">From raw market data to confidence‑gated execution. Transparent diagrams, not black boxes.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <s.icon className="w-6 h-6 text-blue-300" />
              <h4 className="mt-3 text-white font-semibold">{s.title}</h4>
              <p className="text-blue-200/80 text-sm mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
