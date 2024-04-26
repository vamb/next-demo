"use client"
import { useRouter } from 'next/navigation'
import { Suspense } from 'react'
import Loading from '@/loading'

export default function CartLayout({children}) {
  const router = useRouter()

  return (
    <Suspense fallback={<Loading title={'cart'} />}>
      <div className={'flex flex-col gap-1 min-h-screen'}>
        <div className={'cursor-pointer'} onClick={()=>router.back()}>{'<<'}cart layout, go back</div>
        <div className={'flex-grow flex'}>{children}</div>
      </div>
    </Suspense>
  )
}
