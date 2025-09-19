import { useState } from "react"

export  const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1>
            <span className="text-5xl">Hi,  </span>
            <span className="text- text-5xl">Kieu Quy Hung </span>
          </h1>
          <h2>
            <span className="text-primary text-2xl"> You're Gay</span>
          </h2>
        </div>
      </div>

    </section>
  )
}