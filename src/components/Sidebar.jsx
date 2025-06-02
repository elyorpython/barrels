// components/Sidebar.jsx
import React, { useRef } from 'react';

function Sidebar({ setPage }) {
    const sidebarRef = useRef(null);
    const toggleButtonRef = useRef(null);

    const toggleSidebar = () => {
        if (sidebarRef.current && toggleButtonRef.current) {
            sidebarRef.current.classList.toggle('close');
            toggleButtonRef.current.classList.toggle('rotate');
        }
    };

    const toggleSubMenu = (button) => {
        const nextUl = button.nextElementSibling;
        if (nextUl && nextUl.classList.contains('sub-menu')) {
            nextUl.classList.toggle('show');
            button.classList.toggle('rotate');
        }
    };

  return (
    <nav id="sidebar" ref={sidebarRef}>
        <ul>
            <li>
                <span className='logo'>eFinance</span>
                <button onClick={toggleSidebar} ref={toggleButtonRef} id='toggle-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                </button>
            </li>
            <li className="active">
                <a href="#index">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M160-200h80v-320h480v320h80v-426L480-754 160-626v426Zm-80 80v-560l400-160 400 160v560H640v-320H320v320H80Zm280 0v-80h80v80h-80Zm80-120v-80h80v80h-80Zm80 120v-80h80v80h-80ZM240-520h480-480Z"/></svg>
                    <span>Home</span>
                </a>
            </li>
            <li>
                <a href="#dashboard">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M160-200h80v-320h480v320h80v-426L480-754 160-626v426Zm-80 80v-560l400-160 400 160v560H640v-320H320v320H80Zm280 0v-80h80v80h-80Zm80-120v-80h80v80h-80Zm80 120v-80h80v80h-80ZM240-520h480-480Z"/></svg>
                    <span>Home</span>
                </a>
            </li>
            <li>
                <a href="#shipment">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M160-200h80v-320h480v320h80v-426L480-754 160-626v426Zm-80 80v-560l400-160 400 160v560H640v-320H320v320H80Zm280 0v-80h80v80h-80Zm80-120v-80h80v80h-80Zm80 120v-80h80v80h-80ZM240-520h480-480Z"/></svg>
                    <span>Home</span>
                </a>
            </li>            
            <li>
                <a href="#refund">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M160-200h80v-320h480v320h80v-426L480-754 160-626v426Zm-80 80v-560l400-160 400 160v560H640v-320H320v320H80Zm280 0v-80h80v80h-80Zm80-120v-80h80v80h-80Zm80 120v-80h80v80h-80ZM240-520h480-480Z"/></svg>
                    <span>Home</span>
                </a>
            </li>
            <li>
                <a href="#warehouse">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M160-200h80v-320h480v320h80v-426L480-754 160-626v426Zm-80 80v-560l400-160 400 160v560H640v-320H320v320H80Zm280 0v-80h80v80h-80Zm80-120v-80h80v80h-80Zm80 120v-80h80v80h-80ZM240-520h480-480Z"/></svg>
                    <span>Home</span>
                </a>
            </li>
            <li>
                <button onClick={(e) => toggleSubMenu(e.currentTarget)} className="dropdown-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M160-200h80v-320h480v320h80v-426L480-754 160-626v426Zm-80 80v-560l400-160 400 160v560H640v-320H320v320H80Zm280 0v-80h80v80h-80Zm80-120v-80h80v80h-80Zm80 120v-80h80v80h-80ZM240-520h480-480Z"/></svg>
                    <span>Тест</span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m280-400 200-200 200 200H280Z"/></svg>
                </button>
                <ul className="sub-menu">
                    <div>
                        <li><a href="#">Приход</a></li>                    
                        <li><a href="#">Расход</a></li>
                        <li><a href="#">Остаток</a></li>
                    </div>
                </ul>
            </li>
            <li>
                <button onClick={(e) => toggleSubMenu(e.currentTarget)} className="dropdown-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M160-200h80v-320h480v320h80v-426L480-754 160-626v426Zm-80 80v-560l400-160 400 160v560H640v-320H320v320H80Zm280 0v-80h80v80h-80Zm80-120v-80h80v80h-80Zm80 120v-80h80v80h-80ZM240-520h480-480Z"/></svg>
                    <span>Чики Пуки</span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m280-400 200-200 200 200H280Z"/></svg>
                </button>
                <ul className="sub-menu">
                    <div>
                        <li><a href="#">Приход</a></li>                    
                        <li><a href="#">Расход</a></li>
                        <li><a href="#">Остаток</a></li>
                    </div>
                </ul>
            </li>
        </ul>
    </nav>
  );
}

export default Sidebar;
