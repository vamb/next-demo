'use client'

import { redirect, useRouter } from 'next/navigation'
import { Suspense } from 'react'
import Loading from '@/app/loading'

const AboutLayout = ({children}) => {
  const router = useRouter()

  return (
    <Suspense fallback={<Loading title={'about'} />}>
      <div className={'flex flex-col gap-1 min-h-screen'}>
        <div
          className={'bg-green-400 cursor-pointer'}
          onClick={()=>{
            console.log('111')
            // redirect('/', 'replace')
            router.replace('/')
          }}
        >go Back</div>
        <div className={'flex-grow flex'}>{children}</div>
      </div>
    </Suspense>
  )
}

export default AboutLayout
