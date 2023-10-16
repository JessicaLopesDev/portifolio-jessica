import Image from 'next/image'

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image alt="" height={450} src={'/jessss.png'} width={550} />
    </div>
  )
}

export default Avatar
