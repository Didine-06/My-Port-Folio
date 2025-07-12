import React, { useEffect, useState } from 'react'
import './Header.css'
import { HashLink as Link } from 'react-router-hash-link'

function Header() {
  const [Modal, setModal] = useState(false);
  const [theme, settheme] = useState(localStorage.getItem("currentmode") ?? "dark");


  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }

  }, [theme]);



  return (
    <header className='flex' >
      <button className='modal-btn icon-menu btn' onClick={() => setModal(true)}></button>
      <div />
      <nav>
        <ul className='flex'>
          <Link to='#about'><li><a href="">About</a></li></Link>
          <Link to='#skills'><li><a href="">Skills</a></li></Link>
          <Link to='#project'><li><a href="">Project</a></li></Link>
          <Link to='#contact' smooth><li><a href="">Contact</a></li></Link>
        </ul>
      </nav>
      <button className={`btn ${theme === "dark" ? "icon-moon" : "icon-adjust"}`} onClick={() => {
        localStorage.setItem("currentmode", theme === "dark" ? "light" : "dark")
        settheme(localStorage.getItem("currentmode"))
      }}></button>

      {Modal && (
        <div className='fixed'>
          <ul className='modal'>
            <li><button className='icon-delete delete' onClick={() => setModal(false)} ></button></li>

            <Link to='#about'><li><a href="" onClick={() => setModal(false)}>About</a></li></Link>
            <div className='divider' />
            <Link to='#skills'><li><a href="" onClick={() => setModal(false)}>Skills</a></li></Link>
            <div className='divider' />
            <Link to='#project'><li><a href="" onClick={() => setModal(false)}>Project</a></li></Link>
            <div className='divider' />
            <Link to='#contact' smooth><li><a href="" onClick={() => setModal(false)}>Contact</a></li></Link>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header
