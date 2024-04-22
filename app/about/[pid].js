import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return (
    <div>
      <p>{`post: ${pid}`}</p>
    </div>
  )
}

export default Post
