import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', audience: 'B2C', message: '' })
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'website' })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to submit')
      setStatus('success')
      setForm({ name: '', email: '', company: '', audience: 'B2C', message: '' })
    } catch (err) {
      setStatus(err.message)
    }
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-3xl font-bold text-white">Get in touch</h2>
          <p className="mt-2 text-blue-100/90">Request a demo, ask about managed accounts, or join the retail waitlist.</p>
          <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white outline-none" placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
            <input className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white outline-none" placeholder="Email" type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
            <input className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white outline-none" placeholder="Company (optional)" value={form.company} onChange={e=>setForm({...form, company:e.target.value})} />
            <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white outline-none" value={form.audience} onChange={e=>setForm({...form, audience:e.target.value})}>
              <option value="B2C">B2C (Retail)</option>
              <option value="B2B">B2B (Institutional)</option>
            </select>
            <textarea className="md:col-span-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white outline-none min-h-[120px]" placeholder="Message" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} required />
            <div className="md:col-span-2 flex items-center gap-3">
              <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2 rounded-lg">Send</button>
              {status === 'loading' && <span className="text-blue-200">Sending…</span>}
              {status === 'success' && <span className="text-green-300">Thanks — we’ll be in touch!</span>}
              {status && status !== 'loading' && status !== 'success' && <span className="text-red-300">{String(status)}</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
