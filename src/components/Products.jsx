// src/components/Products.jsx
import React, { useEffect, useState } from "react";
import ProductsAdd from "./ProductsAdd";

function Products() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);

  const fetchProducts = async () => {
    const result = await window.electronAPI.getProductTable();
    setProducts(result);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditProduct(null)
    fetchProducts();
  };

  const handleEdit = (product) => {
    setEditProduct(product);
    setIsModalOpen(true);
  };

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
            {products.length === 0 ? (
              <tr>
                <td colSpan={4}>Нет данных</td>
              </tr>
            ) : (
              products.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.product_id_su}</td>
                  <td>{item.liters}</td>
                  <td>
                    <button className="edit-button" onClick={() => handleEdit(item)}>
                      ✏️
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>

      {isModalOpen && (
        <ProductsAdd onClose={handleModalClose} productToEdit={editProduct} />
      )}
    </div>
  );
}

export default Products;
