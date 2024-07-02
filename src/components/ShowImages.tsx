
export default function ShowImages({images}:{images:Array<string> | undefined}) {
  return (
    <div className="w-full md:flex md:justify-center md:items-center transition-all duration-1000 ">
    {images && <div className="bg-white w-full grid grid-rows-2 justify-center gap-2  "> {images && images.map((img,index) => {
        return <div className=" rounded-lg row-span-2 max-w-[800px] max-h-[800px] bg-white w-full grid-rows-1 " key={index}>
            <img src={img} className="object-cover rounded-md w-full h-full  " alt="" />
        </div>
      })}
    </div> }
    </div>
     
  )
}
