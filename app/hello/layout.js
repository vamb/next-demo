'use client'
import { useRouter } from 'next/navigation'
import { Suspense } from 'react'
import Loading from '@/app/loading'

const HelloLayout = ({children, test1, test2}) => {
  const router = useRouter()

  return (
    <Suspense fallback={<Loading title={'hello'} />}>
      <div className={'flex flex-col gap-1 min-h-screen'}>
        <div className={'bg-green-400 cursor-pointer'} onClick={()=>router.back()}>go Back</div>
        <Suspense fallback={<Loading title={'hello test1'} />}>
          <div>{test1}</div>
        </Suspense>
        <Suspense fallback={<Loading title={'hello test2'} />}>
          <div>{test2}</div>
        </Suspense>
        <div className={'flex-grow flex'}>{children}</div>
      </div>
    </Suspense>
  )
}

export default HelloLayout
