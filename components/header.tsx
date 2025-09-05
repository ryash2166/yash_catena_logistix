"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Truck, ChevronDown } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-primary rounded-lg p-2">
              <Truck className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Catena Logistix</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <div className="relative group">
              <button className="flex items-center text-foreground hover:text-primary transition-colors">
                Our Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Our Programs
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="ghost">Login</Button>
            <Button>Request a Demo</Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Our Services
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Our Programs
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <div className="pt-4 space-y-2">
                <div className="flex justify-center pb-2">
                  <ThemeToggle />
                </div>
                <Button variant="ghost" className="w-full">
                  Login
                </Button>
                <Button className="w-full">Request a Demo</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
