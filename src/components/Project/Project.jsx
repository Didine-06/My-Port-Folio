import React, { useState } from 'react'
import './project.css'
import { AnimatePresence, motion } from "framer-motion"
import { projects } from './myProject'
import ImageCarousel from './ImageCarousel'
import { FiExternalLink, FiChevronDown, FiGrid } from "react-icons/fi";
import { IoCodeSlashOutline } from "react-icons/io5";
import { FaReact, FaLaptopCode } from "react-icons/fa";
import { MdWork } from "react-icons/md";

function Project() {
    const [active, setactive] = useState("all")
    const [travaux, settravaux] = useState(projects)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const filterOptions = [
        { id: 'all', label: 'All Projects', icon: FiGrid },
        { id: 'css', label: 'HTML & CSS', icon: IoCodeSlashOutline },
        { id: 'react', label: 'React', icon: FaReact },
        { id: 'full', label: 'Full-Stack', icon: FaLaptopCode }
    ]

    const handleFilterChange = (filterId) => {
        setactive(filterId)
        setIsDropdownOpen(false)

        if (filterId === 'all') {
            settravaux(projects)
        } else {
            const filterType = filterId === 'css' ? 'html&css' : filterId
            const newArray = projects.filter((item) => {
                return item.type === filterType
            })
            settravaux(newArray)
        }
    }

    const getCurrentFilter = () => {
        return filterOptions.find(option => option.id === active)
    }



    return (
        <div className='flex project' id='project'>
            
            <section className='left-section'>
                <h2 className="section-title">
                    <MdWork className="section-icon" />
                    My Projects
                </h2>
                <div className="filter-dropdown">
                    <button
                        className="dropdown-trigger"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        <div className="dropdown-content">
                            {React.createElement(getCurrentFilter().icon, { className: "filter-icon" })}
                            <span>{getCurrentFilter().label}</span>
                        </div>
                        <FiChevronDown className={`chevron-icon ${isDropdownOpen ? 'open' : ''}`} />
                    </button>

                    {isDropdownOpen && (
                        <div className="dropdown-menu">
                            {filterOptions.map((option) => (
                                <button
                                    key={option.id}
                                    className={`dropdown-item ${active === option.id ? 'active' : ''}`}
                                    onClick={() => handleFilterChange(option.id)}
                                >
                                    {React.createElement(option.icon, { className: "filter-icon" })}
                                    <span>{option.label}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </section>
            <section className=' right-section'>
                <AnimatePresence>
                    {
                        travaux.map((item) => {
                            return (
                                <motion.div key={item.key} className="card"
                                    layout
                                    initial={{ transform: "scale(0)" }}
                                    animate={{ transform: "scale(1)" }}
                                    exit={{ transform: "scale(0)" }}
                                >
                                    <ImageCarousel images={item.pictures} title={item.title} />
                                    <div className="content">
                                        <h1>{item.title}</h1>
                                        <p>{item.subtitle}</p>
                                        {
                                            item.link && (
                                                <a href={item.link} className='external-link' >
                                                    <FiExternalLink />
                                                </a>
                                            )
                                        }
                                    </div>
                                </motion.div>
                            )
                        }
                        )}
                </AnimatePresence>


            </section>
        </div>
    )
}

export default Project
