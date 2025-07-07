// src/components/Products.jsx
import React, { useState } from "react";
import ProductsAdd from "./ProductsAdd";

function Products() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="main-table">
      <section className="main-table_header">
        <h2>Номенклатура</h2>
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
              <th>Название</th>
              <th>Объём (л)</th>
            </tr>
          </thead>
          <tbody>
            {/* Здесь в будущем будет список товаров из БД */}
          </tbody>
        </table>
      </section>

      {/* Модальное окно */}
      {isModalOpen && <ProductsAdd onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default Products;
