import React from 'react'
import { Award, Clock, Coffee, Code } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80" 
                alt="Developer working" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-indigo-600 text-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-xl">5+ Years Experience</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Passionate Developer & Problem Solver</h3>
            <p className="text-gray-600">
              I'm a full-stack developer with a passion for creating elegant, efficient, and user-friendly applications. 
              With over 5 years of experience in the industry, I've worked on a diverse range of projects from small business 
              websites to complex enterprise applications.
            </p>
            <p className="text-gray-600">
              My approach combines technical expertise with creative problem-solving to deliver solutions that not only meet 
              but exceed client expectations. I believe in writing clean, maintainable code and staying up-to-date with the 
              latest technologies and best practices.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <Code size={20} className="text-indigo-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">100+</p>
                  <p className="text-sm text-gray-600">Projects Completed</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <Award size={20} className="text-indigo-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">15+</p>
                  <p className="text-sm text-gray-600">Awards Won</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <Coffee size={20} className="text-indigo-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">5,000+</p>
                  <p className="text-sm text-gray-600">Cups of Coffee</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <Clock size={20} className="text-indigo-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">10,000+</p>
                  <p className="text-sm text-gray-600">Hours Coded</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors inline-block"
              >
                Let's work together
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
