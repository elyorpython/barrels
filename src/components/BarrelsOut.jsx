import React, { useRef, useState } from "react";
import BarrelOutModalUpload from "./BarrelOutModalUpload"

function BarrelsOut({setPage}){
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="main-table">
        <section className="main-table_header">
          <h2>Реализация</h2>
          <p>
            <button className="add-realization" onClick={() => setIsModalOpen(true)}>
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
          <BarrelOutModalUpload onClose={() => setIsModalOpen(false)} />
        )}
    </div>
  );
}

export default BarrelsOut;
  