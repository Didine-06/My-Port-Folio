import React, { useState } from 'react'
import './Main.css'
import SkillsCard from './SkillsCard'
import { FrontEnd, BackEnd, ProgrammingLanguages } from './data'
import { FiChevronDown } from "react-icons/fi";
import { FaReact, FaServer, FaCode } from "react-icons/fa";

function Main(props) {

  const [activeCategory, setActiveCategory] = useState("frontend")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const skillsOptions = [
    { id: 'frontend', label: 'Frontend', icon: FaReact },
    { id: 'backend', label: 'Backend', icon: FaServer },
    { id: 'programming', label: 'Programming', icon: FaCode }
  ]

  const getCurrentData = () => {
    switch(activeCategory) {
      case "frontend":
        return FrontEnd;
      case "backend":
        return BackEnd;
      case "programming":
        return ProgrammingLanguages;
      default:
        return FrontEnd;
    }
  }

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setIsDropdownOpen(false);
  }

  const getCurrentSkill = () => {
    return skillsOptions.find(option => option.id === activeCategory)
  }


  return (
    <div className='heroSec' id='skills'>
      <div className='head flex'>
        <span className='icon-skills'></span>
        <h1>My skills </h1>
      </div>
      
      <div className='main-container'>

        <div className='main-left'>
          {/* Dropdown pour mobile */}
          <div className="skills-dropdown mobile-only">
            <button 
              className="dropdown-trigger" 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div className="dropdown-content">
                {React.createElement(getCurrentSkill().icon, { className: "filter-icon" })}
                <span>{getCurrentSkill().label}</span>
              </div>
              <FiChevronDown className={`chevron-icon ${isDropdownOpen ? 'open' : ''}`} />
            </button>
            
            {isDropdownOpen && (
              <div className="dropdown-menu">
                {skillsOptions.map((option) => (
                  <button
                    key={option.id}
                    className={`dropdown-item ${activeCategory === option.id ? 'active' : ''}`}
                    onClick={() => handleCategoryClick(option.id)}
                  >
                    {React.createElement(option.icon, { className: "filter-icon" })}
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Boutons originaux pour desktop */}
          <span 
            className={`span1 desktop-only ${activeCategory === "frontend" ? "active" : ""}`} 
            onClick={() => handleCategoryClick("frontend")}
          >
            Frontend
          </span>
          <span 
            className={`span2 desktop-only ${activeCategory === "backend" ? "active" : ""}`} 
            onClick={() => handleCategoryClick("backend")}
          >
            Backend
          </span>
          <span 
            className={`span3 desktop-only ${activeCategory === "programming" ? "active" : ""}`} 
            onClick={() => handleCategoryClick("programming")}
          >
            Programming
          </span>
        </div>
        <div className='main-right'>
          <div className="skills-container">
            {getCurrentData().map((item) => (
              <SkillsCard
                key={item.key}
                skills={item.skills}
                icon={item.icon} 
                styling={item.skills}
                percentage={item.percentage}
                per={item.pers}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Main