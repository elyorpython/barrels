import React, { useRef, useState } from "react";
import BarrelOutAdd from "../window/AddBarrelWindow"

function BarrelsOut({setPage}){
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="main-table">
        <section className="main-table_header">
          <h2>Реализация</h2>
          <p>
            <button className="add-realization" onClick={() => window.electronAPI.openAddBarrelWindow()}>
              <span>Добавить</span>
            </button>
          </p>
        </section>
        <section className="main-table_content">
          <table>
          <thead>
            <tr>
              <th>Покупатель</th>
              <th>Товар</th>
              <th>Количество</th>
              <th>Дата</th>
            </tr>
          </thead>
          <tbody>
            {/* Тут потом список данных за день */}
          </tbody>
        </table>
        </section>
        {isModalOpen && (
          <BarrelOutAdd onClose={() => setIsModalOpen(false)} />
        )}
    </div>
  );
}

export default BarrelsOut;
  