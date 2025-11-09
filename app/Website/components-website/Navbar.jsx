import { Button } from "@/components/ui/button"
import Link from "next/link"

function Navbar() {
  return (
    <nav className="w-[90%] z-40 backdrop-blur-3xl fixed   left-40 sm:w-[85%] md:w-[80%] mx-auto mt-4 rounded-full bg-transparent transition-transform duration-300 hover:scale-[1.01]">
      <div className="flex items-center justify-between px-5 sm:px-8 py-3">
        <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-white select-none">
          Osiko
        </h1>

        <Link href="/login">
          <Button className="rounded-full px-5 sm:px-7 py-2 sm:py-3 text-xs sm:text-sm font-medium bg-white text-black hover:bg-zinc-100 active:scale-95 transition">
            Login
          </Button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
