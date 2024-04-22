'use client'

import { useSearchParams, usePathname  } from 'next/navigation'

export default () => {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams.toString())
  console.log('about params', params)
  const pathname = usePathname()
  console.log('about pathname', pathname) // '/about'

  return (
    <div
      className={'lex flex-col items-center justify-between p-2 bg-orange-500 flex-grow'}
    >About us</div>
  )
}
