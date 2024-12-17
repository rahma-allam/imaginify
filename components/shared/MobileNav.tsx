
"use client"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navLinks } from "@/constants"
import { UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"


const MobileNav = () => {
  const pathname = usePathname()
  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2" >
      <Image src="/assets/images/logo-text.svg"
        alt="logo"
        width={180}
        height={28}
      />

      </Link>


      <nav className="flex gap-4 items-center">
        <UserButton/>
        <Sheet>
        <SheetTrigger>
          <Image src="/assets/icons/menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="cursor-pointer" />
        </SheetTrigger>
        <SheetContent className="sheet-content sm:w-64" >
          <SheetTitle>
          <Image src="/assets/images/logo-text.svg"
              alt="logo"
              width={152}
              height={23}
           />
          </SheetTitle>
          <ul className='header-nav_elements'>
            {navLinks.map((link)=>{
                const isActive = link.route === pathname; 
                return(
                    <li key={link.route} 
                    className={`${isActive && 'gradient-text '}
                    p-18 flex whitespace-nowrap text-dark-700`}>
                        <Link href={link.route} className='sidebar-link cursor-pointer'>
                        <Image src={link.icon} alt='icon' width={24} height={24}/>
                            {link.label}
                        </Link>
                    </li>
                )
            })}
            </ul>
        </SheetContent>
      </Sheet>

      </nav>
    </header>
  )
}

export default MobileNav