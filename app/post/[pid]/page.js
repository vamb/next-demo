'use client'

import { usePathname } from "next/navigation";

const Post = ({ params }) => {
  const pathname = usePathname()

  console.log('params, pathname', params, pathname)

  return (
    <div>
      <p>{`post: ${params?.pid}`}</p>
    </div>
  )
}

export default Post
