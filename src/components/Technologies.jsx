import { RiReactjsFill } from "react-icons/ri"
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const Technologies = () => {
  return (
    <div className="h-screen pb-24 ">
        <h2 className="py-20 text-center text-4xl lg:text-5xl uppercase tracking-wide">
          Technologies
        </h2>
        <div className="flex flex-wrap justify-center items-center">
          <div className="p-4 lg:p-10">
            <BiLogoMongodb className="text-8xl text-[#02ed60]" />
          </div>
          
          <div className="p-4 lg:p-10">
            <SiExpress className="text-8xl text-gray-300" />
          </div>
          <div className="p-4 lg:p-10">
            <RiReactjsFill className="text-8xl text-cyan-400"/>
          </div>
          <div className="p-4 lg:p-10">
            <TbBrandNodejs className="text-8xl text-[#75b940]" />
          </div>
          <div className="p-4 lg:p-10">
            <GrMysql className="text-8xl text-[#05586a]" />
          </div>
          <div className="p-4 lg:p-10">
            <IoLogoJavascript className="text-8xl text-[#f7e018]" />
          </div>
          <div className="p-4">
            <FaJava className="text-8xl "/>
          </div>
        </div>
    </div>
  )
}

export default Technologies