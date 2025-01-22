var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.lineWidth = 2;
ctx.strokeStyle = "#000080";
ctx.beginPath();
ctx.arc(225, 225, 200, 0, 2 * Math.PI);
ctx.stroke();

const star = c.getContext("2d");
star.lineWidth = 2;
star.strokeStyle = "#000080";
star.beginPath();
star.moveTo(225,100);
star.lineTo(225,100);
star.lineTo(325,335);
star.lineTo(78,180);
star.lineTo(370,180);
star.lineTo(125,335);
star.lineTo(226,100);
star.stroke();





