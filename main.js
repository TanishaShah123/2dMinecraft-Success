var canvas = new fabric.Canvas("myCanvas");
var alexX = 10;
var alexY = 10;
var alex = "";
var block = "";





function loadalex() {
    fabric.Image.fromURL("Alex_SSBL.png", function (Img) {
        alex = Img;
        alex.scaleToWidth(120);
        alex.scaleToHeight(150);
        alex.set({
            top: alexY,
            left: alexX
        });
        canvas.add(alex);
    });
}




function loadblock(selectedblock) {
    fabric.Image.fromURL(selectedblock, function (Img) {
        block = Img;
        block.scaleToWidth(50);
        block.scaleToHeight(50);
        block.set({
            top: alexY,
            left: alexX
        });
        canvas.add(block);
    });
}
window.addEventListener("keydown", keydownF);
function keydownF(ed) {
    var pressedkeycode = ed.keyCode;
    console.log(pressedkeycode);



    if (pressedkeycode == "38") {
        up();
        console.log("goingup")
    }

    if (pressedkeycode == "40") {
        down();
        console.log("goingdown")
    }

    if (pressedkeycode == "37") {
        left();
        console.log("goingleft")
    }

    if (pressedkeycode == "39") {
        right();
        console.log("goingright")
    }
    if (pressedkeycode == "66") {
        loadblock("B.jpg");
        console.log("Bpressed");
    }
    if (pressedkeycode == "68") {
        loadblock("D.png");
        console.log("dpressed");
    }


    if (pressedkeycode == "71") {
        loadblock("G.png");
        console.log("gpressed");
    }


    if (pressedkeycode=="73"){
        loadblock("I.jpg");
        console.log("ipressed"); 
    }

    if (pressedkeycode=="76"){
    loadblock("L.png");
     console.log("lpressed");
    }

    
    if (pressedkeycode=="83"){
        loadblock("S.png");
         console.log("spressed");
        }

        
    if (pressedkeycode=="84"){
        loadblock("T.jpg");
         console.log("tpressed");
        }

        
    if (pressedkeycode=="86"){
        loadblock("V.png");
         console.log("vpressed");
        }

        
    if (pressedkeycode=="87"){
        loadblock("W.jpg");
         console.log("wpressed");
        }
}

function up(){
if(alexY>0){
        alexY=alexY-10;
        console.log("alexY: "+alexY);
        canvas.remove(alex);
        loadalex();
    }
}

function down(){
    if(alexY<800){
            alexY=alexY+10;
            console.log("alexY: "+alexY);
            canvas.remove(alex);
            loadalex();
    }
}

function right(){
    if(alexX<1100){
            alexX=alexX+10;
            console.log("alexX: "+alexX);
            canvas.remove(alex);
            loadalex();
    }
}

function left(){
    if(alexX>0){
            alexX=alexX-10;
            console.log("alexX: "+alexX);
            canvas.remove(alex);
            loadalex();
    }
}
