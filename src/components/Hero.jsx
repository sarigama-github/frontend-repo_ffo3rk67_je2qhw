import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero({ onCTAClick }) {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient and glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-black tracking-tight text-white"
            >
              NeuralShift democratises quantitative trading
            </motion.h1>
            <p className="mt-6 text-lg md:text-xl text-blue-100/90 max-w-2xl">
              Institutional-grade AI strategies for everyone. Launch adaptive, risk-managed quant ETFs in a few clicks — no code required.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button onClick={onCTAClick} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-3 rounded-lg shadow-sm transition-colors">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>
              <a href="#contact" className="inline-flex items-center gap-2 text-blue-200 hover:text-white">
                Request Demo
              </a>
              <span className="inline-flex items-center gap-2 text-blue-300/80 text-sm">
                <Sparkles className="w-4 h-4" /> FCA-ready governance & transparency
              </span>
            </div>
          </div>

          {/* 3-step card */}
          <div className="lg:col-span-5">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
              <h3 className="text-white font-semibold text-lg">Trade in three steps</h3>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { title: 'Pick market', desc: 'All U.S. equities' },
                  { title: 'Define style', desc: 'Scalp • Day • Swing • LT' },
                  { title: 'Set risk', desc: 'Intuitive levels' },
                ].map((s, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="text-blue-200 text-sm">{s.title}</p>
                    <p className="text-white font-medium">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
