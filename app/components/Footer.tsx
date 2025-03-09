"use client"

import type React from "react"

import Link from "next/link"

export default function Footer() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {[
            { name: "Services", id: "services" },
            { name: "Privacy", id: "" },
            { name: "Terms", id: "" },
          ].map((item) => (
            <div key={item.name} className="pb-6">
              {item.id ? (
                <a
                  href={`#${item.id}`}
                  className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                  onClick={(e) => item.id && scrollToSection(e, item.id)}
                >
                  {item.name}
                </a>
              ) : (
                <Link href="#" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <p className="mt-10 text-center text-sm leading-5 text-muted-foreground">
          © {new Date().getFullYear()} Sparknova. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

