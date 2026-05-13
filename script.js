const canvas = document.getElementById("myCanvas"); 
const ctx = canvas.getContext("2d");

let isNight = false; // day/night mode


// background
function drawBackground() { // fonis daxatvis funqcia

  // day sky
  if (isNight == false) {
    ctx.fillStyle = "#87ceeb"; // cis feri
  }
//aq tu game araa magshemtxvevashi cisferia anu dilaa tu gamea shavia
  // night sky
  else {
    ctx.fillStyle = "#0b0f2a"; // gamis cis feri
  }

  ctx.fillRect(0, 0, canvas.width, canvas.height); //mtliani cis dafarva

  ctx.fillStyle = "green"; // balaxis feri
  ctx.fillRect(0, canvas.height * 0.76, canvas.width, canvas.height * 0.24); //balaxis daxatva qvemot

  // stars
  if (isNight == true) {
    drawStars();
  }
}


// stars
function drawStars() { // varskvlavebis daxatva

  for (let i = 0; i < 80; i++) {

    const x = Math.random() * canvas.width; // random horizontali
    const y = Math.random() * 300; // random vertikali

    const size = Math.random() * 3; // random zomma

    ctx.beginPath(); // axali figura
    ctx.arc(x, y, size, 0, Math.PI * 2); // varskvlavi

    ctx.fillStyle = "white"; // varskvlavis feri
    ctx.fill(); // shevseba
  }
}


// ray layer function
function drawRayLayer(x, y, startDistance, endDistance, color, width) {

  ctx.strokeStyle = color; // sxivis feri
  ctx.lineWidth = width; // sisqe

  for (let angle = 0; angle < 360; angle += 45) {

    ctx.beginPath(); // axali xazi

    // sawyisi wertili
    ctx.moveTo(
      x + Math.cos(angle * Math.PI / 180) * startDistance,
      y + Math.sin(angle * Math.PI / 180) * startDistance
    );

    // saboloo wertili
    ctx.lineTo(
      x + Math.cos(angle * Math.PI / 180) * endDistance,
      y + Math.sin(angle * Math.PI / 180) * endDistance
    );

    ctx.stroke(); // daxatva
  }
}

// SUN
function drawSun(x, y) { // mzis daxatva

  ctx.beginPath(); // axali figuris dawyeba
  ctx.arc(x, y, 50, 0, Math.PI * 2); //mzis daxatva
  ctx.fillStyle = "yellow"; //mzis feri
  ctx.fill(); // shevseba

  // pirveli fenis sxivebi
  drawRayLayer(x, y, 65, 90, "#ff8c00", 2);

  // meore fenis sxivebi
  drawRayLayer(x, y, 95, 120, "#ffb347", 3);

  // mesame fenis sxivebi
  drawRayLayer(x, y, 125, 150, "#fff176", 3);
}


// moon
function drawMoon(x, y) { // mtvaris daxatva

  ctx.beginPath(); // axali figura
  ctx.arc(x, y, 45, 0, Math.PI * 2); // mtvare

  ctx.fillStyle = "#c0c0c0"; // mtvaris feri
  ctx.fill(); // shevseba

  // mtvaris ლაქები
  ctx.beginPath();

  ctx.arc(x - 10, y - 5, 8, 0, Math.PI * 2);
  ctx.arc(x + 15, y + 10, 6, 0, Math.PI * 2);

  ctx.fillStyle = "#999";
  ctx.fill();
}


// HOUSE FUNCTION
function drawHouse(x0, y0, width, height) { // saxlis daxatvis funqcia

  // walls
  ctx.fillStyle = "#fff704"; // kedlebis feri
  ctx.fillRect(x0, y0, width, height); // saxlis kedlebi

  // roof
  ctx.beginPath(); // saxuravis dawyeba
  ctx.moveTo(x0 - 1, y0); //marcxena kutxe
  ctx.lineTo(x0 + width / 2, y0 - height / 2); // saxuravis wveri
  ctx.lineTo(x0 + width + 1, y0); // marjvena kutx
  ctx.closePath(); // figuris daxurva
  ctx.fillStyle = "red"; // saxuravis feri
  ctx.fill(); // shevseba

  // door
  ctx.fillStyle = "#654321"; // karis feri
  ctx.fillRect(x0 + width * 0.45, y0 + height * 0.55, width * 0.2, height * 0.45); // door

  // handle
  ctx.beginPath(); // saxeluriswre
  ctx.arc(x0 + width * 0.48, y0 + height * 0.75, 5, 0, Math.PI * 2); // saxeluri
  ctx.fillStyle = "white"; // saxeluris feri
  ctx.fill(); // shevseba

  // window
  ctx.fillStyle = "#fff"; // fanjris feri
  ctx.fillRect(x0 + width * 0.1, y0 + height * 0.3, width * 0.2, height * 0.25); // fanjara

  ctx.strokeStyle = "black"; // charchos feri
  ctx.strokeRect(x0 + width * 0.1, y0 + height * 0.3, width * 0.2, height * 0.25); //fanjris charcho

  // fanjris xazebi
  ctx.beginPath(); // fanjris xazebis dawyeba

  ctx.moveTo(x0 + width * 0.2, y0 + height * 0.3); // zeda vertikaluri xazi
  ctx.lineTo(x0 + width * 0.2, y0 + height * 0.55); // qveda vertikaluri xazi

  ctx.moveTo(x0 + width * 0.1, y0 + height * 0.425); // horizontaluri xazi marcxnidan
  ctx.lineTo(x0 + width * 0.3, y0 + height * 0.425); // horizontaluri xazi marjvnidan

  ctx.stroke(); // xazebi
}

// draw everything
function drawScene() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawBackground(); // foni

  // day
  if (isNight == false) {
    drawSun(700, 80); // mzis daxatva
  }

  // night
  else {
    drawMoon(700, 80); // mtvaris daxatva
  }

  drawHouse(50, 200, 200, 180); // pirveli house
  drawHouse(300, 210, 160, 170); // meore house
  drawHouse(560, 180, 200, 200); // mesame
}


// button function
function toggleDayNight() { // dila-gamis gadartva

  isNight = !isNight;

  drawScene();
}


// first draw
drawScene();