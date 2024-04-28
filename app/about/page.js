'use client'

import { useSearchParams, usePathname  } from 'next/navigation'
import { handleQuery } from '@/utils/utils'

export default () => {
  const searchParams = useSearchParams()
  // console.log('about searchParams', searchParams)
  // console.log('about searchParams.toString()', searchParams.toString())
  const params = new URLSearchParams(searchParams.toString())
  // console.log('about params', params)
  // console.log("params.getAll('test')", params.getAll('test'))

  const iterator =  params.entries()
  const result = handleQuery(iterator)
  console.log('result', result)

  const pathname = usePathname()
  console.log('about pathname', pathname) // '/about'

  const handleBtnClick = (sortOrder) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('sort', sortOrder)
    window.history.pushState(null, '', `?${params.toString()}`)
  }

  function switchLocale(locale) {
    // e.g. '/en/about' or '/fr/contact'
    const newPath = `/${locale}${pathname}`
    window.history.replaceState(null, '', newPath)
  }

  return (
    <div
      className={'flex flex-col items-start justify-start p-2 flex-grow gap-1'}
      style={{backgroundColor: '#f9731660'}}
    >
      <div>{`About us search param: ${result? JSON.stringify(result): ''}`}</div>
      <div>{`About us pathname: ${pathname}`}</div>
      <div className={'flex flex-row gap-2'}>
        <div
          className={'purple-btn'}
          onClick={()=>handleBtnClick('asc')}
        >sort asc</div>
        <div
          className={'purple-btn'}
          onClick={()=>handleBtnClick('desc')}
        >sort desc</div>
      </div>
      <div className={'flex flex-row gap-2'}>
        <div
          className={'pink-btn'}
          onClick={()=>switchLocale('en')}
        >English</div>
        <div
          className={'pink-btn'}
          onClick={()=>switchLocale('fr')}
        >French</div>
      </div>
    </div>
  )
}
