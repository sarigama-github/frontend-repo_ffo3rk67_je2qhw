import { ShieldCheck, Cpu, LineChart, Zap } from 'lucide-react'

export default function ProblemSolution() {
  return (
    <section className="relative py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">The problem</h2>
            <p className="mt-4 text-blue-100/90">
              Retail investors are stuck with static ETFs and few reliable quant tools. Professional research requires code, infrastructure and deep expertise. "No‑code" AI tools are pricey and opaque. Copy‑trading suffers human variability; robo‑advisors deliver passive returns.
            </p>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our solution</h2>
            <p className="mt-4 text-blue-100/90">
              NeuralShift offers an accessible, AI‑powered trading platform. No code — launch strategies in clicks. Adaptive models learn from market data, automatically rebalance and scale across all U.S. equities with embedded risk control and full transparency.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[{icon:Cpu,label:'AI-first'}, {icon:LineChart,label:'Active alpha'}, {icon:ShieldCheck,label:'Governed'}, {icon:Zap,label:'GPU-accelerated'}].map((it, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                  <it.icon className="w-5 h-5 text-blue-300" />
                  <span className="text-white/90">{it.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
