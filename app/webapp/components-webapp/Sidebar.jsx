import { useState } from "react"
import { MdOutlineDashboardCustomize, MdOutlineAnalytics } from "react-icons/md"
import { HiOutlineFolder, HiOutlinePlusCircle } from "react-icons/hi2"
import { FaRegUserCircle, FaRegQuestionCircle } from "react-icons/fa"
import { IoSettingsOutline } from "react-icons/io5"
import { LuLayoutDashboard } from "react-icons/lu"
import { IoMenu, IoClose } from "react-icons/io5"

function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 z-50 text-white text-3xl md:hidden bg-[#1F1F1F] p-2 rounded-lg"
      >
        {open ? <IoClose /> : <IoMenu />}
      </button>

      <div
        className={`fixed md:static top-0 left-0 z-40 h-full md:h-[98vh] bg-[#121212] p-2 rounded-2xl flex flex-col justify-between transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 w-[70vw] sm:w-[50vw] md:w-[17vw]`}
      >
        <div className="top flex flex-col gap-4">
          <div className="bottom flex items-center gap-3 p-3 bg-[#1F1F1F] rounded-xl mt-4">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZMfraI81_QCr29PrFj5TdPi50BBmJwB9dbg&s"
              alt="Michael Robinson"
            />
            <div className="flex flex-col">
              <h4 className="text-white text-sm font-medium">Michael Robinson</h4>
              <span className="text-[#6D6D6D] text-xs">michaelrobinson@email.com</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-[#6D6D6D]">
            <h3 className="text-xs font-semibold uppercase mb-1">Main Menu</h3>

            <div className="flex items-center gap-3 p-2 rounded-lg bg-[#2D2D2D] text-white cursor-pointer transition-all duration-200">
              <MdOutlineDashboardCustomize className="text-xl" />
              <span className="text-sm">Home</span>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#2D2D2D] cursor-pointer transition-all duration-200">
              <HiOutlineFolder className="text-xl" />
              <span className="text-sm">Projects</span>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#2D2D2D] cursor-pointer transition-all duration-200">
              <FaRegUserCircle className="text-xl" />
              <span className="text-sm">Profile</span>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#2D2D2D] cursor-pointer transition-all duration-200">
              <LuLayoutDashboard className="text-xl" />
              <span className="text-sm">Board</span>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#2D2D2D] cursor-pointer transition-all duration-200">
              <MdOutlineAnalytics className="text-xl" />
              <span className="text-sm">Dashboard</span>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#2D2D2D] cursor-pointer transition-all duration-200">
              <HiOutlinePlusCircle className="text-xl" />
              <span className="text-sm">Create New Project</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 border-t border-zinc-800 absolute bottom-0 left-0 w-full py-2 text-[#6D6D6D]">
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#2D2D2D] cursor-pointer transition-all duration-200">
              <IoSettingsOutline className="text-xl" />
              <span className="text-sm">Settings</span>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#2D2D2D] cursor-pointer transition-all duration-200">
              <FaRegQuestionCircle className="text-xl" />
              <span className="text-sm">Help</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
