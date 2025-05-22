"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="relative">
      {/* Desktop Menu */}
      <div className="hidden items-center gap-8 md:flex">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="font-raleway text-sm font-medium text-gray-700 transition-colors hover:text-primary"
          >
            {item.label}
          </Link>
        ))}
        <Button className="bg-primary text-white hover:bg-primary/90">Donate Now</Button>
      </div>

      {/* Mobile Menu Button */}
      <button className="p-2 md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
        {isOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
      </button>

      {/* Mobile Menu */}
      <div
        className={cn(
          "absolute left-0 right-0 top-full z-20 bg-white px-4 py-2 shadow-lg md:hidden",
          isOpen ? "block" : "hidden",
        )}
      >
        <div className="flex flex-col space-y-4 pb-4">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-raleway text-sm font-medium text-gray-700 transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button className="bg-primary text-white hover:bg-primary/90">Donate Now</Button>
        </div>
      </div>
    </nav>
  )
}
