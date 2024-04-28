"use client"
import { useRouter } from 'next/navigation'
import { Suspense } from 'react'
import Loading from '@/app/loading'

export default function SlugLayout({children}) {
  const router = useRouter()

  return (
    <Suspense fallback={<Loading title={'slug'} />}>
      <div className={'flex flex-col gap-1 min-h-screen'}>
        <div className={'cursor-pointer'} onClick={()=>router.back()}>{'<<'}slug layout, go back</div>
        <div className={'flex-grow flex'}>{children}</div>
      </div>
    </Suspense>
  )
}
