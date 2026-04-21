function drawGrid() {
  const W = canvas.offsetWidth || 900;
  const H = canvas.offsetHeight || 600;
  canvas.width = W;
  canvas.height = H;
  ctx.clearRect(0, 0, W, H);

  const cellW = 120;  // lebar cell — perbesar/perkecil sesuai selera
  const cellH = 80;   // tinggi cell
  const skew = 0.55;  // kemiringan (sesuai screenshot ~0.5–0.6)

  ctx.strokeStyle = 'rgba(190, 80, 80, 0.28)'; // warna garis
  ctx.lineWidth = 0.8;

  const rows = Math.ceil(H / cellH) + 4;
  const cols = Math.ceil(W / cellW) + 4;

  // Garis horizontal miring
  for (let r = -2; r < rows + 2; r++) {
    const y = r * cellH;
    const xStart = -skew * (H + cellH * 4) - cellW;
    ctx.beginPath();
    ctx.moveTo(xStart, y + H);
    ctx.lineTo(xStart + W + skew * (H + cellH * 4) * 2 + cellW * 2, y - skew * (H + cellH * 4));
    ctx.stroke();
  }

  // Garis vertikal miring
  for (let c = -2; c < cols + 4; c++) {
    const x = c * cellW;
    ctx.beginPath();
    ctx.moveTo(x, H + cellH);
    ctx.lineTo(x + skew * (H + cellH * 2), -(cellH));
    ctx.stroke();
  }
}

drawGrid();
window.addEventListener('resize', drawGrid);

