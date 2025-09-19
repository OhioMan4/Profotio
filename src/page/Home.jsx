import { Star } from "lucide-react"
import { ThemeToggle } from "../component/ThemeToggle"
import {StarBackground} from "../component/StarBackground"
import { Navbar } from "../page/Navbar"
import {HeroSection} from "./HeroSection"

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle/>

      {}
      <StarBackground/>
      {}
        <Navbar/>

      <main>
        <HeroSection/>
      </main>
      



    </div>
    //Theme
    //Background Effect
    //NavBar
    //main Content
    //Footer

  )
} 