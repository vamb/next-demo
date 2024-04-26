// 'use client'

import Link from "next/link"
// 因为这个是客户端才能知道的，服务端是不知道的，所以要加上 'use client' ，否则报错
// import { usePathname } from 'next/navigation'
import { Suspense } from 'react'
import Loading from './loading'

export default function Home() {
  // const pathname = usePathname()
  // console.log('pathname', pathname)

  return (
    <Suspense fallback={<Loading title={'app'} />}>
      <div className={'flex flex-col gap-5 p-5'}>
        <Link href="/hello">/hello</Link>
        <Link href="/about">/about</Link>
        <Link href="/account">/account</Link>
        <Link href="/cart">/cart</Link>
        <Link href="/goods">/goods</Link>
        <Link href="/post/a/b/c">/post/a/b/c</Link>
        <Link href="/post/abcdef">/post/abcdef</Link>
      </div>
    </Suspense>
  );
}
