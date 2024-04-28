"use client"

import { useState } from 'react'

export default function TelTemplate({ children }) {
  const [ telText, setTelText ] = useState(null)

  return (
    <div className={'flex flex-col gap-2'}>
      <div className={'flex flex-row gap-5'}>
        <div>
          <input value={telText} onChange={e=>setTelText(e.target.value)} placeholder={'template input'} />
        </div>
        <div>每次路由改变都会创建一个新的实例，因而每次路由改变都会将 值清空</div>
      </div>
      <div>{children}</div>
    </div>
  )
}
