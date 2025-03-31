import React, { useState, useEffect } from 'react'
import { Code, Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 text-indigo-600 font-bold text-xl">
          <Code size={24} />
          <span>DevPortfolio</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-800 hover:text-indigo-600 transition-colors">Home</a>
          <a href="#about" className="text-gray-800 hover:text-indigo-600 transition-colors">About</a>
          <a href="#skills" className="text-gray-800 hover:text-indigo-600 transition-colors">Skills</a>
          <a href="#projects" className="text-gray-800 hover:text-indigo-600 transition-colors">Projects</a>
          <a href="#contact" className="text-gray-800 hover:text-indigo-600 transition-colors">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800 focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#home" className="text-gray-800 hover:text-indigo-600 transition-colors py-2" onClick={toggleMenu}>Home</a>
            <a href="#about" className="text-gray-800 hover:text-indigo-600 transition-colors py-2" onClick={toggleMenu}>About</a>
            <a href="#skills" className="text-gray-800 hover:text-indigo-600 transition-colors py-2" onClick={toggleMenu}>Skills</a>
            <a href="#projects" className="text-gray-800 hover:text-indigo-600 transition-colors py-2" onClick={toggleMenu}>Projects</a>
            <a href="#contact" className="text-gray-800 hover:text-indigo-600 transition-colors py-2" onClick={toggleMenu}>Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
