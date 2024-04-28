'use client'

import { useRouter } from 'next/navigation'
import { Suspense } from 'react'
import Loading from '@/app/loading'

export default function PhotoPageLayout({children}) {
  const router = useRouter()

  return (
    <Suspense callback={<Loading title={'Photo'} />}>
      <div>
        <div onClick={()=>router.replace('/')} className={'cursor-pointer'}>返回</div>
        <div>{children}</div>
      </div>
    </Suspense>
  )
}
