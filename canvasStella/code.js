const canvas = document.getElementById("star");
const star = canvas.getContext("2d");
star.lineWidth=2;
star.strokeStyle = "#000080";
star.beginPath();

star.moveTo(25,645);

star.lineTo(225,0);

star.lineTo(375,450);

star.lineTo(0,150);

star.lineTo(450,150);

star.lineTo(25,500);

star.stroke();

