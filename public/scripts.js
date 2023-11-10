var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.y = 1;
camera.position.z = 5;

// movement - please calibrate these values
var xSpeed = 0.1;
var ySpeed = 0.1;

function setupKeyLogger() {
	document.onkeydown = function(e) {
	  console.log(e);
	  if (e.key == "ArrowUp") {
		  cube.position.y += ySpeed;
	  } else if (e.key == "ArrowDow") {
		  cube.position.y -= ySpeed;
	  } else if (e.key == "ArrowLeft") {
		  cube.position.x -= xSpeed;
	  } else if (e.key == "ArrowRight") {
		  cube.position.x += xSpeed;
	  } else if (e.key == "Space") {
		  cube.position.set(0, 0, 0);
	  }
	}
  }


var animate = function () {
	requestAnimationFrame( animate );

	// camera.rotation.z += 0.01;

	// cube.rotation.x += 0.1;
	// cube.rotation.y += 0.1;

	renderer.render(scene, camera);
};

setupKeyLogger();
animate();