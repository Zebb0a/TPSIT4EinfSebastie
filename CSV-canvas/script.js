var result = [];

document.getElementById('uploadButton').addEventListener('click', function() {
    document.getElementById('fileInput').click(); 
});

document.getElementById('fileInput').addEventListener('change', function(event) {
    var file = event.target.files[0];
    var reader = new FileReader(); 

    reader.onload = function () {
        result = reader.result.split("\n").slice(1);
        disegna();
    };
    reader.readAsText(file); 
});

function disegna() {
    
    var c = document.getElementById("canva"); 
    var ctx = c.getContext("2d"); 

    //stile
    ctx.strokeStyle = "#ffff0"; 
    ctx.fillStyle = "#2c3e50";   
    ctx.lineWidth = 2;           
    ctx.font = "12px Arial";    

    ctx.fillText("Numero di persone sbarcate per anno", 300, 30);

    ctx.beginPath();
    ctx.moveTo(50, 450); 
    ctx.lineTo(50, 50);
    ctx.moveTo(50, 450); 
    ctx.lineTo(750, 450);
    ctx.stroke();

    //valore massimo
    var max = 0;
    for (var i = 0; i < result.length; i++) {
        var value = Number(result[i].split(",")[1].replace(/"/g, ''));
        if (value > max) max = value;
    }

    // Disegna le linee verticali trasparenti
    for (var i = 0; i < result.length; i++) {
        var x = 50 + (i * 30); //posizione anno 

        //stile
        ctx.strokeStyle = "rgba(44, 62, 80, 0.1)"; 
        ctx.beginPath();
        ctx.moveTo(x, 450);
        ctx.lineTo(x, 50);
        ctx.stroke();
    }
    ctx.strokeStyle = "#908435";

    // linea
    ctx.beginPath();
    for (var i = 0; i < result.length; i++) {
        var row = result[i].split(","); 
        var anno = row[0].replace(/"/g, '');
        var persone = Number(row[1].replace(/"/g, ''));

        var x = 50 + (i * 30); //30px tra anni
        var y = 450 - (persone / max * 400);

        if (i == 0) {
            ctx.moveTo(x, y); 
        } else {
            ctx.lineTo(x, y); 
        }

        //numeri laterali
        ctx.fillText(anno, x - 10, 470);
        if (i == 0) {
            for (var j = 0; j <= 5; j++) {
                var yLabel = (max / 5) * j; 
                var yPos = 450 - (yLabel / max * 400);
                ctx.fillText(Math.round(yLabel).toString(), 5, yPos + 5);
            }
        }
    }
    ctx.stroke(); 
}