import React from 'react'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-20 md:pt-36 md:pb-32 bg-gradient-to-br from-indigo-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
              Full-Stack Developer
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Building digital <span className="text-indigo-600">experiences</span> that matter
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              I craft clean, user-friendly applications with modern technologies to solve real-world problems.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
              >
                Get in touch
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 bg-white text-indigo-600 border border-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
              >
                View my work
              </a>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:myronenko.anna11@gmail.com" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-xl mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="Developer Portrait" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 md:bottom-0 md:right-12 bg-white p-3 rounded-lg shadow-lg">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-800">Available for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-16">
          <a href="#about" className="animate-bounce p-2 bg-white rounded-full shadow-md">
            <ArrowDown size={24} className="text-indigo-600" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
