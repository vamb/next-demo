'use client'

import { useRouter } from 'next/navigation'
import { useState } from "react";

export default function TelLayout({ children }) {
  const [ layText, setLayText ] = useState(null)
  const router = useRouter()

  return (
    <div className={'flex flex-col gap-2 p-5'}>
      <div className={'flex flex-row gap-5 border-1'}>
        <div className={'nav-unit'} onClick={()=>router.replace('/')}>返回</div>
        <div className={'nav-unit'} onClick={()=>router.push('/telGroup/template1')}>Template1 Page</div>
        <div className={'nav-unit'} onClick={()=>router.push('/telGroup/template2')}>Template2 Page</div>
      </div>
      <div className={'flex flex-row gap-5'}>
        <div>
          <input value={layText} onChange={e=>setLayText(e.target.value)} placeholder={'layout input'} />
        </div>
        <div>路由的不会导致值被清空</div>
      </div>
      <div>{children}</div>
    </div>
  )
}
