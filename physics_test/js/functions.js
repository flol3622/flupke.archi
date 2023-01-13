// module aliases
var Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Events = Matter.Events;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
  canvas: document.getElementById("canvas"),
  engine: engine,
  options: {
    wireframes: false,
    width: window.innerWidth,
    height: window.innerHeight,
    background: "#fff",
  },
});

// get the canvas size
var canvas = render.canvas;

// create boundaries around the edge of the canvas
var boundaries = [
  // top boundary
  Bodies.rectangle(canvas.width / 2, 0, canvas.width, 5, {
    isStatic: true,
    render: {
      fillStyle: "#FFFFFF",
    },
  }),
  // bottom boundary
  Bodies.rectangle(canvas.width / 2, canvas.height, canvas.width, 5, {
    isStatic: true,
    render: {
      fillStyle: "#FFFFFF",
    },
  }),
  // left boundary
  Bodies.rectangle(0, canvas.height / 2, 5, canvas.height, {
    isStatic: true,
    render: {
      fillStyle: "#FFFFFF",
    },
  }),
  // right boundary
  Bodies.rectangle(canvas.width, canvas.height / 2, 5, canvas.height, {
    isStatic: true,
    render: {
      fillStyle: "#FFFFFF",
    },
  }),
];

// add the boundaries to the world
World.add(engine.world, boundaries);

// create necessary bodies
var bodiesDom = document.getElementsByClassName("bubble");
var bodies = [];

for (var i = 0, l = bodiesDom.length; i < l; i++) {
  var body = Bodies.circle(
    Math.floor(Math.random() * canvas.width),
    Math.floor(Math.random() * canvas.height),
    50,
    {
      restitution: 0.4,

      // style the body
      render: {
        fillStyle: "#ffffff00",
        //   strokeStyle: "blue",
        //   lineWidth: 10,
      },

      // add custom link to body
      url: bodiesDom[i].dataset.url,
    }
  );
  bodiesDom[i].id = body.id;
  bodies.push(body);
}
console.log(bodies);
World.add(engine.world, bodies);

// add mouse control (dragging)
var mouse = Matter.Mouse.create(render.canvas),
  mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false,
      },
    },
  });

World.add(engine.world, mouseConstraint);

// add mouse control (clicking)
var startTime = null;
Events.on(mouseConstraint, "mousedown", function (event) {
  startTime = Date.now();
});

Events.on(mouseConstraint, "mouseup", function (event) {
  var endTime = Date.now();
  var timeInterval = endTime - startTime;
  var maxTimeInterval = 100; // maximum time interval in milliseconds

  if (timeInterval <= maxTimeInterval) {
    // Execute the action you want to perform on click
    var mouseConstraint = event.source;
    var bodies = engine.world.bodies;
    if (!mouseConstraint.bodyB) {
      for (i = 0; i < bodies.length; i++) {
        var body = bodies[i];
        if (
          Matter.Bounds.contains(body.bounds, mouseConstraint.mouse.position)
        ) {
          var bodyUrl = body.url;
          console.log("Body.Url >> " + bodyUrl);

          // Hyperlinking feature
          if (bodyUrl != undefined) {
            window.open(bodyUrl, "_blank");
            console.log("Hyperlink was opened");
          }
          break;
        }
      }
    }
  }
});

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);

// update position divs with position bodies
window.requestAnimationFrame(update);
function update() {
  for (var i = 0, l = bodiesDom.length; i < l; i++) {
    var bodyDom = bodiesDom[i];
    var body = null;
    for (var j = 0, k = bodies.length; j < k; j++) {
      if (bodies[j].id == bodyDom.id) {
        body = bodies[j];
        break;
      }
    }

    if (body === null) continue;

    bodyDom.style.transform =
      "translate( " +
      (body.position.x - bodyDom.offsetWidth / 2) +
      "px, " +
      (body.position.y - bodyDom.offsetHeight / 2) +
      "px )";
  }
  window.requestAnimationFrame(update);
}
