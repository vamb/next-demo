'use client'
import { useRouter } from 'next/navigation'

const AboutLayout = ({children}) => {
  const router = useRouter()

  return (
    <div className={'flex flex-col gap-1 min-h-screen'}>
      <div className={'bg-green-400 cursor-pointer'} onClick={()=>router.back()}>go Back</div>
      <div className={'flex-grow flex'}>{children}</div>
    </div>
  )
}

export default AboutLayout
