export default function ({children}) {
  return (
    <div className={"flex flex-col gap-1 min-h-screen"}>
      <div>marketing layout</div>
      <div className={'flex-grow'}>{children}</div>
    </div>
  )
}