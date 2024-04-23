'use client'

// /post/abcdef
import { usePathname } from "next/navigation";

const Post = ({ params }) => {
  const pathname = usePathname()

  console.log('params, pathname', params, pathname)

  return (
    <div>
      <p>{`pid: ${params?.pid}`}</p>
    </div>
  )
}

export default Post
