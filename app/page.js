'use client'

import Link from "next/link"
// 因为这个是客户端才能知道的，服务端是不知道的，所以要加上 'use client' ，否则报错
// import { usePathname } from 'next/navigation'
import { Suspense } from 'react'
import Loading from './loading'
import { getUser, getUserById, submitUser } from './api/route'

export default function Home() {
  // const pathname = usePathname()
  // console.log('pathname', pathname)

  const handleAllUser = () => {
    getUser().then(res=>{
      console.log('handleAllUser res', res)
    })
  }

  const fetchUserById = reqParam => {
    getUserById(reqParam).then(res=>{
      console.log('fetchUserById res', res)
    })
  }

  const newUser = newUser => {
    submitUser(newUser).then(res=>{
      console.log('newUser res', res)
    })
  }

  return (
    <div className={'flex flex-row justify-between'}>
      <Suspense fallback={<Loading title={'app'} />}>
        <div className={'flex flex-col gap-3 p-5'}>
          <Link href="/hello">/hello</Link>
          <Link href="/about">/about</Link>
          <Link href="/account">/account</Link>
          <Link href="/cart">/cart</Link>
          <Link href="/goods">/goods</Link>
          <Link href="/post/a/b/c">/post/a/b/c</Link>
          <Link href="/post/abcdef">/post/abcdef</Link>
          <Link href="/error">/error</Link>
          <Link href="/photo/1">/photo/1</Link>
          <Link href="/telGroup/template1">layout 和 template 的区别</Link>
        </div>
      </Suspense>
      <div className={'flex flex-col gap-3 p-5'}>
        <button onClick={handleAllUser}>UserAll</button>
        <button onClick={()=>fetchUserById({id: 1})}>user1</button>
        <button onClick={()=>newUser({id: 7, username: 'testUser7', age: 77})}>
          new user
        </button>
      </div>
    </div>
  );
}
