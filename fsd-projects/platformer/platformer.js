$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();
        

    // TODO 2 - Create Platforms
    createPlatform(200,285,200,15,"pink")
    createPlatform(0,175,200,15,"pink")
    createPlatform(0,385,200,15,"pink")
    createPlatform(200,485,200,15,"pink")
    createPlatform(0,620,200,15,"pink")
    createPlatform(400,0,10,600, "white")

    createPlatform(550,620,100,15,"pink")
    createPlatform(700,550,100,15,"pink")
    createPlatform(550,430,100,15,"pink")
    createPlatform(700,320,100,15,"pink")
    createPlatform(450,200,100,15,"pink")
    createPlatform(700,100,200,15,"pink")
    createPlatform(900,100,100,15,"pink")
    createPlatform(1000,100,10,700,"white")

    createPlatform(1010,200,190,15,"pink")
    createPlatform(1010,400,190,15,"pink")
    createPlatform(1200,600,200,15,"pink")
    createPlatform(1300,0,10,500,"white")
    createPlatform(1200,500,110,10,"white")



    // TODO 3 - Create Collectables
     createCollectable("steve",350,250);
     createCollectable("steve",0,580);
     createCollectable("steve",730,500)
     createCollectable("steve",730,280);
     createCollectable("steve",480,160);
     createCollectable("steve",1010,360);
     createCollectable("steve",1300,560);

    
    // TODO 4 - Create Cannons
    createCannon("top",400,1000);
    createCannon("right",550,2000);
    createCannon("top",900,1000);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
