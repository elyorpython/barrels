// src/components/ProductsAdd.jsx
import React, { useState } from "react";

function ProductsAdd({ onClose }) {
  const [name, setName] = useState("");
  const [product_id_su, setProductIdSmartUp] = useState("");
  const [liters, setliters] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !liters) return;

    const success = await window.electronAPI.addBarrelType(name, parseInt(product_id_su), parseInt(liters));
    if (success) {
        alert("Товар успешно добавлен")
        onClose();
    } else {
      alert("Ошибка при добавлении");
    }
  };

  return (
    <div className="modal-add-window">
      <div className="modal-content">
        <p className="title-product-block">
          <p>Добавить товар</p>
          <button className="close-btn" type="button" onClick={onClose}>
            <svg viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.70711 8.29289C9.31658 7.90237 8.68342 7.90237 8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711L10.5858 12L8.29289 14.2929C7.90237 14.6834 7.90237 15.3166 8.29289 15.7071C8.68342 16.0976 9.31658 16.0976 9.70711 15.7071L12 13.4142L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L13.4142 12L15.7071 9.70711C16.0976 9.31658 16.0976 8.68342 15.7071 8.29289C15.3166 7.90237 14.6834 7.90237 14.2929 8.29289L12 10.5858L9.70711 8.29289Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12Z" fill="#ffffff"></path> </g></svg>
          </button>
        </p>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Название</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label type="">Код продукта в SmartUp</label>
            <input type="number" value={product_id_su} onChange={(e) => setProductIdSmartUp(e.target.value)} />
            <label>Объём (л)</label>
            <input type="number" value={liters} onChange={(e) => setliters(e.target.value)} />
          </div>
          <div className="modal-actions">
            <button type="submit">Сохранить</button>
            <button type="button" onClick={onClose}>Отмена</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductsAdd;
