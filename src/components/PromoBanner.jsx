'use client'
import { useState } from 'react'
import { Copy } from 'lucide-react'

export default function PromoBanner() {
  const [copied, setCopied] = useState(false)
  const code = 'FREE25BAC'

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="w-full bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 text-white py-3 px-6 flex items-center justify-center gap-6 shadow-md">
      <span className="font-semibold text-sm md:text-base tracking-wide">
        🎉 Super discount for your first purchase!
      </span>

      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1 rounded-full">
        <span className="font-mono font-bold text-lg tracking-widest">
          {code}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 bg-white text-violet-600 font-medium px-3 py-1 rounded-full hover:bg-gray-100 transition text-sm"
        >
          <Copy size={16} />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  )
}
