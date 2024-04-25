"use client"
import { useRouter } from 'next/navigation'

export default function PidLayout({children}) {
  const router = useRouter()

  return (
    <div className={'flex flex-col gap-1 min-h-screen'}>
      <div className={'cursor-pointer'} onClick={()=>router.back()}>{'<<'}pid layout, go back</div>
      <div className={'flex-grow flex'}>{children}</div>
    </div>
  )
}