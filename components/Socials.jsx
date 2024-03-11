"use client"

import { RiYoutubeFill, RiLinkedinFill, RiGithubFill, RiFacebookFill, RiInstagramFill } from "react-icons/ri"
import Link from "next/link"

const icons = [
  {
    path: "https://github.com/ahlgren1234",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.facebook.com/pahlgren1",
    name: <RiFacebookFill />,
  },
  {
    path: "https://www.instagram.com/peterahlgren/",
    name: <RiInstagramFill />,
  },
]

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return <Link href={ icon.path} key={index} target="_blank">
          <div className={`${iconsStyles}`}>{ icon.name}</div>
        </Link>
      })}
    </div>
  )
}

export default Socials