'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useState } from "react"

function LoginPage() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => setLoading(false), 1500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black px-4">
      <Card className="w-full max-w-md border border-white/10 bg-zinc-900/60 backdrop-blur-xl shadow-[0_0_40px_rgba(255,255,255,0.05)]">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-semibold text-white">Welcome Back</CardTitle>
          <CardDescription className="text-gray-400">Sign in to your account to continue</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300">Email</Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="you@example.com"
                className="bg-zinc-800 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-white/30"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-300">Password</Label>
              <Input
                id="password"
                type="password"
                required
                placeholder="••••••••"
                className="bg-zinc-800 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-white/30"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-black hover:bg-zinc-200 transition-all duration-300"
            >
              {loading ? "Signing in..." : "Sign in"}
            </Button>

            <div className="text-center text-sm text-gray-400">
              Don’t have an account?{" "}
              <a href="#" className="text-white hover:underline">Sign up</a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default LoginPage
