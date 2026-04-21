// Konfigurasi tampilan grid
const GRID_CONFIG = {
  cellWidth:  120,
  cellHeight: 80,
  skew:       0.55,  // kemiringan perspektif (0.5–0.6)
  lineColor:  'rgba(190, 80, 80, 0.28)',
  lineWidth:  0.8,
};
const canvas = document.getElementById('hexCanvas'); 
const ctx = canvas.getContext('2d');

function drawGrid() {
  const W = canvas.offsetWidth  || 900;
  const H = canvas.offsetHeight || 600;
  canvas.width  = W;
  canvas.height = H;
  ctx.clearRect(0, 0, W, H);

  const { cellWidth, cellHeight, skew, lineColor, lineWidth } = GRID_CONFIG;
  const rows    = Math.ceil(H / cellHeight) + 4;
  const cols    = Math.ceil(W / cellWidth)  + 4;
  const xOffset = skew * (H + cellHeight * 4) + cellWidth;

  ctx.strokeStyle = lineColor;
  ctx.lineWidth   = lineWidth;

  // Garis horizontal miring
  for (let r = -2; r < rows + 2; r++) {
    const y = r * cellHeight;
    ctx.beginPath();
    ctx.moveTo(-xOffset, y + H);
    ctx.lineTo(-xOffset + W + xOffset * 2 + cellWidth * 2, y - skew * (H + cellHeight * 4));
    ctx.stroke();
  }

  // Garis vertikal miring
  for (let c = -2; c < cols + 4; c++) {
    const x = c * cellWidth;
    ctx.beginPath();
    ctx.moveTo(x, H + cellHeight);
    ctx.lineTo(x + skew * (H + cellHeight * 2), -cellHeight);
    ctx.stroke();
  }
}

drawGrid();
window.addEventListener('resize', drawGrid);

// Duplikasi #techTrack untuk efek marquee/loop

const techTrack = document.getElementById('techTrack');
if (techTrack && !techTrack.nextElementSibling) {
  const trackClone = techTrack.cloneNode(true);
  trackClone.setAttribute('aria-hidden', 'true');
  techTrack.parentNode.appendChild(trackClone);
}

  document.querySelectorAll('.sidebar-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.sidebar-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });