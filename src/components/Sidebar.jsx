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
        
        const openSubMenus = sidebarRef.current?.getElementsByClassName('show');
        if (openSubMenus) {
            Array.from(openSubMenus).forEach(ul => ul.classList.remove('show'));
        }

        const dropdownButtons = sidebarRef.current?.getElementsByClassName('dropdown-btn');
        if (dropdownButtons) {
            Array.from(dropdownButtons).forEach(btn => btn.classList.remove('rotate'))
        }

    };

    const toggleSubMenu = (button) => {
        const nextUl = button.nextElementSibling;
        if (nextUl && nextUl.classList.contains('sub-menu')) {
            nextUl.classList.toggle('show');
            button.classList.toggle('rotate');
        }

        if (sidebarRef.current && sidebarRef.current.classList.contains('close')) {
            sidebarRef.current.classList.remove('close')
            toggleButtonRef.current.classList.remove('rotate')
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
                <button onClick={() => setPage('balance')} className='sidebar-link'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M160-120q-17 0-28.5-11.5T120-160q0-17 11.5-28.5T160-200h40v-240h-40q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h40v-240h-40q-17 0-28.5-11.5T120-800q0-17 11.5-28.5T160-840h640q17 0 28.5 11.5T840-800q0 17-11.5 28.5T800-760h-40v240h40q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440h-40v240h40q17 0 28.5 11.5T840-160q0 17-11.5 28.5T800-120H160Zm120-80h400v-240q-17 0-28.5-11.5T640-480q0-17 11.5-28.5T680-520v-240H280v240q17 0 28.5 11.5T320-480q0 17-11.5 28.5T280-440v240Zm200-120q50 0 85-34.5t35-83.5q0-39-22.5-67T480-620q-75 86-97.5 114.5T360-438q0 49 35 83.5t85 34.5ZM280-200v-560 560Z"/></svg>
                    <span>Бочки у клиентов</span>
                </button>
            </li>
            <li>
                <button onClick={() => setPage('out')} className='sidebar-link'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"/></svg>
                    <span>Расходы</span>
                </button>
            </li>
            <li>
                <button onClick={() => setPage('return')} className='sidebar-link'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"/></svg>
                    <span>Вернули бочек</span>
                </button>
            </li>
            <li>
                <button onClick={(e) => toggleSubMenu(e.currentTarget)} className="dropdown-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M160-200h80v-320h480v320h80v-426L480-754 160-626v426Zm-80 80v-560l400-160 400 160v560H640v-320H320v320H80Zm280 0v-80h80v80h-80Zm80-120v-80h80v80h-80Zm80 120v-80h80v80h-80ZM240-520h480-480Z"/></svg>
                    <span>Склад</span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m280-400 200-200 200 200H280Z"/></svg>
                </button>
                <ul className="sub-menu">
                    <div>
                        <li>
                            <button onClick={(e) => toggleSubMenu(e.currentTarget)} className="dropdown-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"/></svg>
                                <span>Приход</span>
                            </button>
                        </li>                    
                        <li>
                            <button onClick={(e) => toggleSubMenu(e.currentTarget)} className="dropdown-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"/></svg>
                                <span>Расход</span>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setPage('warehouse')} className='dropdown-btn'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"/></svg>
                                <span>Остаток</span>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setPage('products')} className='dropdown-btn'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"/></svg>
                                <span>Номенклатура</span>
                            </button>
                        </li>
                    </div>
                </ul>
            </li>
        </ul>
    </nav>
  );
}

export default Sidebar;
