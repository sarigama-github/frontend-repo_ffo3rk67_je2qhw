import { Gauge, Shield, Rocket, Cpu, Eye, Workflow } from 'lucide-react'

export default function Differentiators() {
  const items = [
    { icon: Gauge, title: 'One‑click intelligence', desc: 'Strategies without manual rules.' },
    { icon: Eye, title: 'Institutional transparency', desc: 'Clear metrics and audit trails.' },
    { icon: Cpu, title: 'GPU retraining', desc: 'NVIDIA‑accelerated continual learning.' },
    { icon: Shield, title: 'Embedded risk', desc: 'Stops, sizing and drawdown guards.' },
    { icon: Workflow, title: 'Unified interface', desc: 'Multi‑asset, multi‑style in one place.' },
    { icon: Rocket, title: 'FCA‑ready', desc: 'Deterministic training & governance.' },
  ]

  return (
    <section className="relative py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Why NeuralShift</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <it.icon className="w-6 h-6 text-blue-300" />
              <h4 className="mt-3 text-white font-semibold">{it.title}</h4>
              <p className="text-blue-200/80 text-sm mt-1">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
