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

  return (
    <div
      className={'flex flex-col items-start justify-start p-2 bg-orange-500 flex-grow gap-1'}
    >
      <div>{`About us search param: ${result? JSON.stringify(result): ''}`}</div>
      <div>{`About us pathname: ${pathname}`}</div>
      <div className={'flex flex-row gap-2'}>
        <div
          className={'self-btn'}
          onClick={()=>handleBtnClick('asc')}
        >sort asc</div>
        <div
          className={'self-btn'}
          onClick={()=>handleBtnClick('desc')}
        >sort desc</div>
      </div>
    </div>
  )
}
