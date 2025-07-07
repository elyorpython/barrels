import React from "react";
import { createRoot } from "react-dom/client";
import BarrelsOutAdd from "../components/BarrelsOutAdd.jsx";

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("add-barrel-root");
    if (container) {
        const root = createRoot(container);
        root.render(<BarrelsOutAdd />);
    } else {
        console.error("Container #add-barrel-root not found");
    }
});

export default BarrelsOutAdd;