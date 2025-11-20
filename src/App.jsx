import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import AIPipeline from './components/AIPipeline'
import Differentiators from './components/Differentiators'
import BusinessModel from './components/BusinessModel'
import MarketVision from './components/MarketVision'
import Contact from './components/Contact'

function App() {
  const handleCTAClick = () => {
    const el = document.getElementById('contact')
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Top nav */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-950/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-cyan-500" />
            <span className="text-white font-semibold">NeuralShift</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-blue-100/90">
            <a href="#" className="hover:text-white">Problem</a>
            <a href="#" className="hover:text-white">Solution</a>
            <a href="#" className="hover:text-white">Pipeline</a>
            <a href="#" className="hover:text-white">Pricing</a>
          </nav>
          <a href="#contact" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg">Request Demo</a>
        </div>
      </header>

      <main>
        <Hero onCTAClick={handleCTAClick} />
        <ProblemSolution />
        <AIPipeline />
        <Differentiators />
        <BusinessModel />
        <MarketVision />
        <Contact />

        {/* Closing CTA */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white">Join the trading revolution</h3>
            <p className="mt-3 text-blue-100/90">Be first to access AI‑driven strategies across U.S. equities. Zero‑commission execution via Alpaca API.</p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-3 rounded-lg">Invest Now</a>
              <a href="#contact" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-5 py-3 rounded-lg">Request Demo</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-blue-200/80">
          <p>© {new Date().getFullYear()} NeuralShift — democratises quantitative trading</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-white" href="/test">System Test</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
