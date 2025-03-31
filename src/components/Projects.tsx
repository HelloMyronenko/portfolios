import React, { useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart functionality, and payment processing.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
    category: 'fullstack'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
    category: 'frontend'
  },
  {
    id: 3,
    title: 'Real Estate Listing Platform',
    description: 'A platform for real estate listings with advanced search, filtering, and user authentication.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1773&q=80',
    tags: ['Next.js', 'PostgreSQL', 'Mapbox', 'AWS'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
    category: 'fullstack'
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays current and forecasted weather data for multiple locations.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    tags: ['React', 'OpenWeather API', 'Chart.js'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
    category: 'frontend'
  },
  {
    id: 5,
    title: 'Content Management System',
    description: 'A custom CMS for managing blog posts, pages, and media with user roles and permissions.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
    category: 'backend'
  },
  {
    id: 6,
    title: 'API Gateway Service',
    description: 'A microservice gateway that handles routing, authentication, and rate limiting for multiple backend services.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80',
    tags: ['Node.js', 'Express', 'Redis', 'Docker'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
    category: 'backend'
  }
]

const Projects = () => {
  const [filter, setFilter] = useState('all')
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve a specific problem
            and demonstrates different aspects of my skills and expertise.
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 p-1 rounded-lg">
            <button 
              onClick={() => setFilter('all')} 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${filter === 'all' ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setFilter('frontend')} 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${filter === 'frontend' ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
            >
              Frontend
            </button>
            <button 
              onClick={() => setFilter('backend')} 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${filter === 'backend' ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
            >
              Backend
            </button>
            <button 
              onClick={() => setFilter('fullstack')} 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${filter === 'fullstack' ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
            >
              Full Stack
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 transition-transform hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between pt-2">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1 text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-900 transition-colors"
          >
            <Github size={20} />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
