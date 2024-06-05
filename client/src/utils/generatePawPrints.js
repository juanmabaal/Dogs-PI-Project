const generatePawPrints = (count) => {
    const pawPrints = [];
    const gridSize = Math.ceil(Math.sqrt(count));
    const cellSize = 100 / gridSize;
    const margin = cellSize * 0.3; // Margen de seguridad para evitar superposición

    for (let i = 0; i < count; i++) {
        const row = Math.floor(i / gridSize);
        const col = i % gridSize;

        // Centro de la celda con variación dentro del margen
        const top = row * cellSize + (cellSize / 2) + (Math.random() * margin - margin / 2);
        const left = col * cellSize + (cellSize / 2) + (Math.random() * margin - margin / 2);

        pawPrints.push({ top, left });
    }

    return pawPrints;
};

export default generatePawPrints;