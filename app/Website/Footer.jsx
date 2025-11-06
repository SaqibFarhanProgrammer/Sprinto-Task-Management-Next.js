const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-white/10 backdrop-blur-md text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Side - Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-semibold tracking-wide">Task Manager</h2>
          <p className="text-gray-400 text-sm mt-2 max-w-sm">
            Manage your workflow efficiently and achieve more with simplicity and precision.
          </p>
        </div>

        {/* Middle - Links */}
        <div className="flex flex-wrap justify-center gap-6 text-gray-300 text-sm">
          <a href="#" className="hover:text-white transition-all duration-300">Home</a>
          <a href="#" className="hover:text-white transition-all duration-300">Features</a>
          <a href="#" className="hover:text-white transition-all duration-300">Pricing</a>
          <a href="#" className="hover:text-white transition-all duration-300">About</a>
          <a href="#" className="hover:text-white transition-all duration-300">Contact</a>
        </div>

        {/* Right Side - Social Icons */}
        <div className="flex gap-5">
          <a href="#" className="text-gray-400 hover:text-white transition-all duration-300">
            <i className="ri-facebook-fill text-2xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-all duration-300">
            <i className="ri-instagram-line text-2xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-all duration-300">
            <i className="ri-twitter-x-line text-2xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-all duration-300">
            <i className="ri-linkedin-fill text-2xl"></i>
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Task Manager. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
