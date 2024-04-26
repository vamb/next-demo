'use client'

import { useRouter } from 'next/navigation'
import { Suspense } from 'react'
import Loading from '@/loading'

export default function PhotoPageLayout({children}) {
  const router = useRouter()

  return (
    <Suspense callback={<Loading title={'Photo'} />}>
      <div>
        <div onClick={()=>router.back()} className={'cursor-pointer'}>返回</div>
        <div>{children}</div>
      </div>
    </Suspense>
  )
}
