export default function ErrorPage() {
  throw new Error('页面有问题')
  return <div>this is normal Error Page</div>
}
