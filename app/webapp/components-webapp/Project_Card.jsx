import { GrProjects } from "react-icons/gr"
import { FaChevronDown } from "react-icons/fa"

function Projects_card() {
  return (
    <div className="border border-zinc-800 rounded-2xl shadow-[0_4px_5px_rgba(0,0,0,0.6)] hover:shadow-[0_6px_30px_rgba(0,0,0,0.7)] transition-all duration-300 ease-out hover:scale-[1.01] h-[16vh] flex flex-col justify-between p-3">
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <h2 className="text-lg heading">Blog App</h2>
          <p className="text-gray-400 text-[11px] mt-1 max-w-xl normal leading-snug line-clamp-2">
            A modern blogging platform built with React and Node. Allows users
            to create, edit, and manage articles with a clean interface.
          </p>
        </div>
        <FaChevronDown className="text-base opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
      </div>

      <div className="flex justify-between items-center border-white/10 pt-1">
        <div className="flex items-center gap-2">
          <div className="bg-white/10 p-[6px] rounded-lg flex items-center justify-center">
            <GrProjects className="text-base" />
          </div>
          <div className="flex items-center gap-1 text-gray-300">
            <span className="capitalize text-xs">Tasks</span>
            <span className="font-medium text-white text-xs">12</span>
          </div>
        </div>

        <p className="text-gray-400 text-[10px]">Due: 9/10/2025</p>
      </div>
    </div>
  )
}

export default Projects_card
