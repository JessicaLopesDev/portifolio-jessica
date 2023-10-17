import Image from 'next/image'

const Circles = () => {
  return (
    <div
      className="w-[200px] xl:w-[300px] absolute -right-16 
      -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10"
    >
      <Image alt="" className="w-full h-full" height={200} src={'/circles.png'} width={260} />
    </div>
  )
}

export default Circles
