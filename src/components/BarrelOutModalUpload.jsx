import React, { useState } from "react";

function BarrelOutModalUpload({onClose}) {
    const [fileData, setFileData] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file)

        const reader = new FileReader();
        reader.onload = (event) => {
            const text = event.target.result;
            const rows = text.split("\n");
            const data = rows.map((row) => {
                const [покупатель, товар, количество, дата] = row.split(";");
                return {покупатель, товар, количество, дата};
            });
            setFileData(data);
        };
        reader.readAsText(file);
    };
    
    const handleSave = () => {
        console.log("Сохраняем в БД:", fileData);
        // TODO: сохранить в базу данных
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-window">
                <ul className="title-barrel-out">
                    <li>
                        <h3>Добавить реализацию</h3>
                    </li>
                    <li>
                        <button onClick={onClose}>X</button>
                    </li>
                </ul>
                <input type="file" accept=".csv" onChange={handleFileChange} />

                {fileData.length > 0 && (
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
                    {fileData.map((row, index) => (
                        <tr key={index}>
                        <td>{row.покупатель}</td>
                        <td>{row.товар}</td>
                        <td>{row.количество}</td>
                        <td>{row.дата}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                )}

                <footer className="modal-actions">
                <button onClick={handleSave} disabled={fileData.length === 0}>
                    Сохранить
                </button>
                <button onClick={onClose}>Отмена</button>
                </footer>
            </div>
        </div>
    );
}

export default BarrelOutModalUpload;

// import React from "react";

// function BarrelOutModalUpload({ onClose }) {
//   return (
//     <div className="modal-overlay">
//       <div className="modal-window">
//         <header className="modal-header">
//           <h3>Загрузка данных</h3>
//           <button className="modal-close" onClick={onClose}>×</button>
//         </header>

//         <div className="modal-body">
//           <p>Здесь будет форма загрузки файла...</p>
//         </div>

//         <footer className="modal-footer">
//           <button onClick={onClose}>Отмена</button>
//           <button onClick={() => alert("Сохранено!")}>Сохранить</button>
//         </footer>
//       </div>
//     </div>
//   );
// }

// export default BarrelOutModalUpload;
