// canvas html elementis gamotana
const canvas = document.getElementById("myCanvas");

// canvasis 2D contextis ageba
const ctx = canvas.getContext("2d");


// dila-gamis mdgomareoba
let isNight = false;



// fonis daxatvis funqcia
function drawBackground() {

  // tu dila aris
  if (isNight == false) {

    // cis feri
    ctx.fillStyle = "#87ceeb";
  }

  // tu game aris
  else {

    // gamecis feri
    ctx.fillStyle = "#0b0f2a";
  }

  // cis daxatva
  ctx.fillRect(
    0,
    0,
    canvas.width,
    canvas.height
  );


  // balaxis feri
  ctx.fillStyle = "green";

  // balaxis daxatva
  ctx.fillRect(
    0,
    canvas.height * 0.76,
    canvas.width,
    canvas.height * 0.24
  );


  // tu game aris
  if (isNight == true) {

    // varskvlavebis daxatva
    drawStars();
  }
}



// varskvlavebis funqcia
function drawStars() {

  // loop varskvlavebistvis
  for (let i = 0; i < 80; i++) {

    // random x koordinata
    const x =
      Math.random() * canvas.width;

    // random y koordinata
    const y =
      Math.random() * 300;

    // random zomis sheqmna
    const size =
      Math.random() * 3;


    // axali pathis dawyeba
    ctx.beginPath();

    // wreis daxatva
    ctx.arc(
      x,
      y,
      size,
      0,
      Math.PI * 2
    );

    // varskvlavis feri
    ctx.fillStyle = "white";

    // varskvlavis shevseba
    ctx.fill();
  }
}



// mzis monacemebi
const sunObj = {

  // mzis x koordinata
  x: 300,

  // mzis y koordinata
  y: 200,

  // mzis radiusi
  sunRadius: 40,

  // mzis feri
  sunColor: "yellow",


  // sxivebis array
  rays: [

    // pirveli shre
    {
      innerRadius: 50,
      outerRadius: 70,

      color: "orange",

      width: 2,

      angleOffset: 0
    },


    // meore shre
    {
      innerRadius: 55,
      outerRadius: 90,

      color: "gold",

      width: 2,

      angleOffset: 15
    },


    // mesame shre
    {
      innerRadius: 65,
      outerRadius: 100, //sxivebis sidide

      color: "yellow",

      width: 2,

      angleOffset: 30
    }
  ]
};



// mzis daxatvis funqcia
function drawSun(data) {

  // axali pathis dawyeba
  ctx.beginPath();

  // mzis wris daxatva
  ctx.arc(
    data.x,
    data.y,
    data.sunRadius,
    0,
    Math.PI * 2
  );

  // mzis feris minicheba
  ctx.fillStyle = data.sunColor;

  // mzis shevseba
  ctx.fill();


  // sxivebis loop
  for (
    let i = 0;
    i < data.rays.length;
    i++
  ) {

    // current sxivis monacemebi
    let rayData = data.rays[i];


    // sxivis daxatva
    drawRayLayer({

      // mzis x koordinata
      x: data.x,

      // mzis y koordinata
      y: data.y,

      // sawyisi radiusi
      innerRadius: rayData.innerRadius,

      // saboloo radiusi
      outerRadius: rayData.outerRadius,

      // sxivis feri
      color: rayData.color,

      // sxivis sisqe
      width: rayData.width,

      // kutxis gadatana
      angleOffset: rayData.angleOffset
    });
  }
}



// sxivebis daxatvis funqcia
function drawRayLayer(data) {

  // sxivis feri
  ctx.strokeStyle = data.color;

  // sxivis sisqe
  ctx.lineWidth = data.width;


  // kutxeebis loop
  for (
    let angle = 0;
    angle < 360;
    angle += 45
  ) {

    // saboloo kutxis gamotvla
    let finalAngle =
      angle + data.angleOffset;


    // radianebshi gadayvana
    let rad =
      finalAngle * Math.PI / 180;


    // sawyisi x koordinata
    let x1 =
      data.x +
      Math.cos(rad) *
      data.innerRadius;


    // sawyisi y koordinata
    let y1 =
      data.y +
      Math.sin(rad) *
      data.innerRadius;


    // saboloo x koordinata
    let x2 =
      data.x +
      Math.cos(rad) *
      data.outerRadius;


    // saboloo y koordinata
    let y2 =
      data.y +
      Math.sin(rad) *
      data.outerRadius;


    // axali pathis dawyeba
    ctx.beginPath();

    // sawyis wertilze gadasvla
    ctx.moveTo(x1, y1);

    // xazis gavleba
    ctx.lineTo(x2, y2);

    // xazis daxatva
    ctx.stroke();
  }
}



// mtvaris daxatvis funqcia
function drawMoon(

  // x koordinata
  x,

  // y koordinata
  y,

  // mtvaris radiusi
  moonRadius = 50,

  // mtvaris feri
  moonColor = "#f5f3ce"
) {

  // axali pathis dawyeba
  ctx.beginPath();

  // mtvaris wris daxatva
  ctx.arc(
    x,
    y,
    moonRadius,
    0,
    Math.PI * 2
  );

  // mtvaris feri
  ctx.fillStyle = moonColor;

  // mtvaris shevseba
  ctx.fill();
}



// saxlis daxatvis funqcia
function drawHouse(

  // x koordinata
  x0,

  // y koordinata
  y0,

  // sigane
  width,

  // simagle
  height
) {

  // kedlebis feri
  ctx.fillStyle = "#fff704";

  // kedlebis daxatva
  ctx.fillRect(
    x0,
    y0,
    width,
    height
  );


  // saxuravis pathis dawyeba
  ctx.beginPath();

  // marcxena wertili
  ctx.moveTo(
    x0,
    y0
  );

  // zeda wertili
  ctx.lineTo(
    x0 + width / 2,
    y0 - height * 0.5
  );

  // marjvena wertili
  ctx.lineTo(
    x0 + width,
    y0
  );

  // pathis daxurva
  ctx.closePath();

  // saxuravis feri
  ctx.fillStyle = "red";

  // saxuravis shevseba
  ctx.fill();


  // karis feri
  ctx.fillStyle = "#654321";

  // karis daxatva
  ctx.fillRect(
    x0 + width * 0.45,
    y0 + height * 0.55,
    width * 0.2,
    height * 0.45
  );


  // saxeluris dawyeba
  ctx.beginPath();

  // saxeluris wris daxatva
  ctx.arc(
    x0 + width * 0.48,
    y0 + height * 0.75,
    5,
    0,
    Math.PI * 2
  );

  // saxeluris feri
  ctx.fillStyle = "white";

  // saxeluris shevseba
  ctx.fill();


  // fanjris feri
  ctx.fillStyle = "white";

  // fanjris daxatva
  ctx.fillRect(
    x0 + width * 0.1,
    y0 + height * 0.3,
    width * 0.2,
    height * 0.25
  );


  // fanjris charchos feri
  ctx.strokeStyle = "black";

  // fanjris charchos daxatva
  ctx.strokeRect(
    x0 + width * 0.1,
    y0 + height * 0.3,
    width * 0.2,
    height * 0.25
  );


  // fanjris xazebis dawyeba
  ctx.beginPath();

  // vertikaluri xazi
  ctx.moveTo(
    x0 + width * 0.2,
    y0 + height * 0.3
  );

  ctx.lineTo(
    x0 + width * 0.2,
    y0 + height * 0.55
  );


  // horizontaluri xazi
  ctx.moveTo(
    x0 + width * 0.1,
    y0 + height * 0.425
  );

  ctx.lineTo(
    x0 + width * 0.3,
    y0 + height * 0.425
  );

  // xazebis daxatva
  ctx.stroke();
}



// mtliani scenis daxatva
function drawScene() {

  // canvasis gasuftaveba
  ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );


  // fonis daxatva
  drawBackground();


  // tu dila aris
  if (isNight == false) {

    // pirveli mze
    drawSun({
      ...sunObj,

      x: 700,
      y: 80
    });


    // meore mze
    drawSun({
      ...sunObj,

      x: 100,
      y: 80
    });
  }


  // tu game aris
  else {

    // mtvaris daxatva
    drawMoon(
      700,
      80
    );
  }


  // pirveli saxli
  drawHouse(
    50,
    200,
    200,
    180
  );


  // meore saxli
  drawHouse(
    300,
    210,
    160,
    170
  );


  // mesame saxli
  drawHouse(
    560,
    180,
    200,
    200
  );
}



// dila-gamis gadartvis funqcia
function toggleDayNight() {

  // mdgomareobis shecvala
  isNight = !isNight;

  // scenis xelaxla daxatva
  drawScene();
}



// pirveli gachveneba
drawScene();