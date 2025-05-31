// components/Sidebar.jsx
import React from 'react';

function Sidebar({ setPage }) {
  return (
    <nav id="sidebar">
        <ul>
            <li className="active">
                <a href="#index">
                    <span>Home</span>
                </a>
            </li>
            <li>
                <a href="#dashboard">
                    <span>Home</span>
                </a>
            </li>
            <li>
                <a href="#shipment">
                    <span>Home</span>
                </a>
            </li>            
            <li>
                <a href="#refund">                    
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
                <button className="dropdown-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-360 280-560h400L480-360Z"/></svg>
                    <span>Тест</span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m280-400 200-200 200 200H280Z"/></svg>
                </button>
                <ul className="sub-menu">
                    <li><a href="#">Приход</a></li>                    
                    <li><a href="#">Расход</a></li>
                    <li><a href="#">Остаток</a></li>
                </ul>
            </li>
        </ul>
    </nav>
  );
}

export default Sidebar;
