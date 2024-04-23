'use client'

// /post/a/b/c
export default function ({ params }){
  return (
    <div>
      <p>{`slug: ${params?.['slug']}`}</p>
    </div>
  )
}
