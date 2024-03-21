import Image from "next/image"
import Socials from "./Socials"

const Footer = () => {
  return (
    <footer className="bg-[#222336] py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          { /* socials */}
          <Socials containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4" iconsStyles="text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all" />
          { /* copyright */}
          <div className="text-muted-foreground">
            Copyright &copy; Peter Ahlgren. All rights reserved.
          </div>
          { /* Tech Stack */ }
          <div className="flex mt-4 gap-x-4 text-muted-foreground">
            This webesite is created with:
            <Image src="/footer/nextjs2.png" height={20} width={22} alt="Next JS" />
            <Image src="/footer/js.png" height={20} width={22} alt="Javascript" />
            <Image src="/footer/git.png" height={20} width={22} alt="Git" />
            <Image src="/footer/figma.png" height={20} width={22} alt="Figma" />
            <Image src="/footer/vscode.png" height={20} width={22} alt="VS Code" />
          </div>
          <div className="flex mt-4 gap-x-4 text-muted-foreground">
            <a href="https://github.com/ahlgren1234/portfolio2021" target="_blank">You can study the code at Github</a>
            <Image src="/footer/github.png" height={20} width={22} alt="GitHub" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer