import { redirect  } from 'next/navigation'

const HelloLayout = ({children}) => {

  return (
    <div className={'flex flex-col gap-1 min-h-screen'}>
      <div className={'bg-green-400'} onClick={()=>redirect('/')}>go Back</div>
      <div className={'flex-grow flex'}>{children}</div>
    </div>
  )
}

export default HelloLayout
