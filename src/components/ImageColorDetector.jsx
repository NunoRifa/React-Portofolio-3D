import React, { useRef, useEffect, useState } from "react";

const ImageColorDetector = ({ imageUrl }) => {
  const [color, setColor] = useState();
  const canvasRef = useRef();

  useEffect(() => {
    // Buat elemen img
    const img = new Image();
    // Atur sumber gambar
    img.src = imageUrl;
    // Tunggu hingga gambar selesai dimuat
    img.onload = () => {
      // Buat elemen canvas
      const canvas = document.createElement("canvas");
      // Set ukuran canvas sesuai dengan gambar
      canvas.width = img.width;
      canvas.height = img.height;
      // Ambil konteks gambar 2D
      const ctx = canvas.getContext("2d");
      // Gambar gambar ke dalam canvas
      ctx.drawImage(img, 0, 0);
      // Ambil data piksel dari gambar
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      // Loop melalui data piksel
      for (let i = 0; i < data.length; i += 4) {
        if (i === 59996) {
          // Karena setiap 4 data adalah 1 piksel, maka data ke-15000 adalah 4 x 15000 - 4 = 59996
          // Dapatkan nilai merah, hijau, dan biru dari piksel
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          // Lakukan operasi yang diperlukan dengan nilai RGB ini
          // Contohnya:
          console.log(`Piksel ke-15000: R=${r}, G=${g}, B=${b}`);
          break; // Berhenti loop setelah data ke-15000 ditemukan
        }
      }
    };
  });

  return (
    <div className="bg-tertiary">
      <canvas
        ref={canvasRef}
        width="100"
        height="100"
        style={{ display: "none" }}
      />
      {color && (
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
          }}
        />
      )}
    </div>
  );
};

export default ImageColorDetector;
