// import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import { Link } from '@nextui-org/link'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar'

import { greeting } from '../portfolioData'

export default function Nav() {
  return (
    <Navbar shouldHideOnScroll maxWidth="full" className="bg-transparent px-12" isBlurred={false}>
      <NavbarBrand>
        <a>
          <span className="text-3xl font-semibold text-primary">&lt;</span>
          <span
            className="text-4xl font-semibold text-primary"
            style={{ fontFamily: 'Cedarville Cursive, cursive', lineHeight: '1.8' }}
          >
            {greeting.username}
          </span>
          <span className="text-3xl font-semibold text-primary"> /&gt;</span>
        </a>
      </NavbarBrand>
      <NavbarContent className="hidden gap-4 sm:flex" justify="end">
        <NavbarItem>
          <Link href="#career-goals" className="text-xl font-semibold text-white  hover:text-primary">
            Career Goals
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#projects" className="text-xl font-semibold text-white hover:text-primary">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#contact" className="text-xl font-semibold text-white hover:text-primary">
            Contact Me
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
