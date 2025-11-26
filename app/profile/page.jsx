import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

function Profile() {
  return (
    <div className="h-[82vh] w-full rounded-2xl  transition-all duration-500 ease-out flex flex-col justify-between p-8 backdrop-blur-md">
      
      <div className="flex normal flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full overflow-hidden border border-white/10">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-xl heading text-white mt-4">Saqib Ahmed</h2>
        <p className="text-sm text-zinc-400">Frontend Developer</p>

        <p className="text-zinc-400 text-[13px] mt-3 max-w-sm leading-relaxed">
          Building scalable, high-performance frontends using React and Next.js. Focused on clean architecture, usability, and design systems.
        </p>
      </div>

      <div className="flex flex-col gap-6 mt-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-start bg-zinc-800/40 border border-zinc-700/60 rounded-xl p-4">
            <p className="text-xs text-zinc-400 uppercase tracking-wide">Projects</p>
            <p className="text-white text-lg font-semibold mt-1">8</p>
          </div>
          <div className="flex flex-col items-start bg-zinc-800/40 border border-zinc-700/60 rounded-xl p-4">
            <p className="text-xs text-zinc-400 uppercase tracking-wide">Experience</p>
            <p className="text-white text-lg font-semibold mt-1">2 yrs</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-2">
          <a
            href="https://github.com"
            target="_blank"
            className="text-zinc-400 hover:text-white transition-colors duration-200"
          >
            <FaGithub className="text-lg" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-zinc-400 hover:text-white transition-colors duration-200"
          >
            <FaLinkedin className="text-lg" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="text-zinc-400 hover:text-white transition-colors duration-200"
          >
            <FaInstagram className="text-lg" />
          </a>
        </div>
      </div>

      <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-500">
        <p>Last Active: <span className="text-zinc-300">2 hrs ago</span></p>
        <p>ID: <span className="text-zinc-300">#SAQ-1025</span></p>
      </div>
    </div>
  )
}

export default Profile
