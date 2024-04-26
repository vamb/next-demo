'use client'

import { useRouter } from "next/navigation";

export default function Error({error, reset}) {
  const router = useRouter()

  console.log('error', error)
  return (
    <div>
      <div>错误提示页面</div>
      <button onClick={()=>reset()}>重试一下</button>
      <div onClick={()=>router.back()}>返回</div>
    </div>
  )
}
