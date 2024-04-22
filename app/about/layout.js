const AboutLayout = ({children}) => {
  return (
    <div className={'flex flex-col gap-1 min-h-screen'}>
      <div className={'bg-green-400'}>About Layout</div>
      <div className={'flex-grow flex'}>{children}</div>
    </div>
  )
}

export default AboutLayout
