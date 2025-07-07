// src/components/ProductsAdd.jsx
import React, { useState } from "react";

function ProductsAdd({ onClose }) {
  const [name, setName] = useState("");
  const [capacity, setCapacity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !capacity) return;

    const success = await window.electronAPI.addBarrelType(name, parseInt(capacity));
    if (success) {
        alert("Товар успешно добавлен")
        onClose();
    } else {
      alert("Ошибка при добавлении");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Добавить товар</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Название</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label>Объём (л)</label>
            <input type="number" value={capacity} onChange={(e) => setCapacity(e.target.value)} />
          </div>
          <div className="modal-actions">
            <button type="submit">Добавить</button>
            <button type="button" onClick={onClose}>Отмена</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductsAdd;
