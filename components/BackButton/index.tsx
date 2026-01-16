import React from 'react'
import { useRouter } from 'next/navigation'

interface BackButtonProps {
  className?: string;
}

export default function BackButton({ className = '' }: BackButtonProps) {
  const router = useRouter()

  const handleBack = () => {
    router.push('/')
  }

  return (
    <div className={`text-sm font-bold ${className}`}>
      <button onClick={handleBack}>Back to Home</button>
    </div>
  )
}
