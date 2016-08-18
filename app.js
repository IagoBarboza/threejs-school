function init(){

	// CLOCK
    var clock = new THREE.Clock();
	
	// STATS
    var stats = initStats();

	// SCENE
	var scene = new THREE.Scene();
	
	// CAMERA
	var camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
	camera.position.x = 0;
	camera.position.y = 5;
	camera.position.z = 0;
	camera.lookAt(scene.position);

	var camControls = new THREE.FirstPersonControls(camera);
    camControls.lookSpeed = 0.1;
    camControls.movementSpeed = 20;
    camControls.noFly = true;
    camControls.lookVertical = true;
    camControls.constrainVertical = true;
    camControls.verticalMin = 1.0;
    camControls.verticalMax = 2.0;
    camControls.lon = -150;
    camControls.lat = 120;

	// RENDERER 
	var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0x55acee, 1.0));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;
    // renderer.shadowMapType = THREE.PCFShadowMap;
    
	// AXES
	var axes = new THREE.AxisHelper(20);
	scene.add(axes);

	// PLANE
	var planeGeometry = new THREE.PlaneGeometry(60,60);
	var planeMaterial = new THREE.MeshPhongMaterial({color:0xcccccc});
	var plane = new THREE.Mesh(planeGeometry, planeMaterial);
	plane.rotation.x = -0.5 * Math.PI;
	plane.position.x = 0;
	plane.position.y = 0;
	plane.position.z = 30;
	plane.receiveShadow = true;
	scene.add(plane);

	// FRONT
	// main
	var geometry = new THREE.BoxGeometry(40,7,0.3);
	var front_main = setTexture(geometry, "wall-texture.jpg");
	front_main.position.z = 50;
	front_main.position.y = 6.5;
	front_main.castShadow = true;
	scene.add(front_main);

	// main bottom left
	var geometry = new THREE.BoxGeometry(19,5,0.3);
	var main_bottom_left = setTexture(geometry, "wall-texture.jpg");
	main_bottom_left.position.z = 50;
	main_bottom_left.position.y = 2.5;
	main_bottom_left.position.x = -10.5;
	main_bottom_left.castShadow = true;
	scene.add(main_bottom_left);
	// main bottom right
	var geometry = new THREE.BoxGeometry(19,5,0.3);
	var main_bottom_right = setTexture(geometry, "wall-texture.jpg");
	main_bottom_right.position.z = 50;
	main_bottom_right.position.y = 2.5;
	main_bottom_right.position.x = 10.5;
	main_bottom_right.castShadow = true;
	scene.add(main_bottom_right);
	// top1
	var geometry = new THREE.BoxGeometry(10,1,0.3);
	var front_top1 = setTexture(geometry, "wall-texture.jpg");
	front_top1.position.z = 50;
	front_top1.position.y = 10.5;
	scene.add(front_top1);
	// top2
	var geometry = new THREE.BoxGeometry(8,1,0.3);
	var front_top2 = setTexture(geometry, "wall-texture.jpg");
	front_top2.position.z = 50;
	front_top2.position.y = 11.5;
	scene.add(front_top2);
	// top3
	var geometry = new THREE.BoxGeometry(4,1,0.3);
	var front_top3 = setTexture(geometry, "wall-texture.jpg");
	front_top3.position.z = 50;
	front_top3.position.y = 12.5;
	scene.add(front_top3);
	// top4
	var geometry = new THREE.BoxGeometry(2,5,0.3);
	var front_top4 = setTexture(geometry, "wall-texture.jpg");
	front_top4.position.z = 50;
	front_top4.position.y = 13.5;
	scene.add(front_top4);
	// centralWindow
	var geometry = new THREE.BoxGeometry(2.5,2.5,0.4);
	var centralWindow = setTexture(geometry, "window-texture.jpg");
	centralWindow.position.z = 50;
	centralWindow.position.y = 6;
	scene.add(centralWindow);
	// centralCircle
	var material = new THREE.MeshPhongMaterial({color: 0x23003c});
	var radius = 0.6;
	var segments = 32;
	var circleGeometry = new THREE.CircleGeometry( radius, segments );
	var centralCircle = new THREE.Mesh( circleGeometry, material );
	centralCircle.position.y = 13;
	centralCircle.position.z = 50.2;
	scene.add(centralCircle);

	// LEFT WINDOWS
	// window1
	var geometry = new THREE.BoxGeometry(2.5,1.5,0.4);
	var window1 = setTexture(geometry, "window-texture.jpg");
	window1.position.z = 50;
	window1.position.y = 6;
	window1.position.x = -17;
	window1.aplha = 0.5;
	scene.add(window1);
	// window2
	var geometry = new THREE.BoxGeometry(2.5,1.5,0.4);
	var window2 = setTexture(geometry, "window-texture.jpg");
	window2.position.z = 50;
	window2.position.y = 6;
	window2.position.x = -13;
	scene.add(window2);
	// window3
	var geometry = new THREE.BoxGeometry(2.5,1.5,0.4);
	var window3 = setTexture(geometry, "window-texture.jpg");;
	window3.position.z = 50;
	window3.position.y = 6;
	window3.position.x = -9;
	scene.add(window3);
	// window4
	var geometry = new THREE.BoxGeometry(2.5,1.5,0.4);
	var window4 = setTexture(geometry, "window-texture.jpg");
	window4.position.z = 50;
	window4.position.y = 2;
	window4.position.x = -17;
	scene.add(window4);
	// window5
	var geometry = new THREE.BoxGeometry(2.5,1.5,0.4);
	var window5 = setTexture(geometry, "window-texture.jpg");
	window5.position.z = 50;
	window5.position.y = 2;
	window5.position.x = -13;
	scene.add(window5);
	// window6
	var geometry = new THREE.BoxGeometry(2.5,1.5,0.4);
	var window6 = setTexture(geometry, "window-texture.jpg");
	window6.position.z = 50;
	window6.position.y = 2;
	window6.position.x = -9;
	scene.add(window6);
	// RIGHT WINDOWS
	// window7
	var geometry = new THREE.BoxGeometry(2.5,1.5,0.4);
	var window7 = setTexture(geometry, "window-texture.jpg");
	window7.position.z = 50;
	window7.position.y = 6;
	window7.position.x = 17;
	scene.add(window7);
	// window8
	var geometry = new THREE.BoxGeometry(2.5,1.5,0.4);
	var window8 = setTexture(geometry, "window-texture.jpg");
	window8.position.z = 50;
	window8.position.y = 6;
	window8.position.x = 13;
	scene.add(window8);
	// window9
	var geometry = new THREE.BoxGeometry(2.5,1.5,0.4);
	var window9 = setTexture(geometry, "window-texture.jpg");
	window9.position.z = 50;
	window9.position.y = 6;
	window9.position.x = 9;
	scene.add(window9);
	// window10
	var geometry = new THREE.BoxGeometry(2.5,1.5,0.4);
	var window10 = setTexture(geometry, "window-texture.jpg");
	window10.position.z = 50;
	window10.position.y = 2;
	window10.position.x = 17;
	scene.add(window10);
	// window11
	var geometry = new THREE.BoxGeometry(2.5,1.5,0.4);
	var window11 = setTexture(geometry, "window-texture.jpg");
	window11.position.z = 50;
	window11.position.y = 2;
	window11.position.x = 13;
	scene.add(window11);
	// window12
	var geometry = new THREE.BoxGeometry(2.5,1.5,0.4);
	var window12 = setTexture(geometry, "window-texture.jpg");
	window12.position.z = 50;
	window12.position.y = 2;
	window12.position.x = 9;
	scene.add(window12);
	// DOOR
	var geometry = new THREE.BoxGeometry(2,3,0.3);
	var door = setTexture(geometry, "door-texture.jpg");
	door.position.z = 50;
	door.position.y = 1.5;
	door.position.x = 0;
	door.castShadow = true;
	scene.add(door);
	var open = true;
	window.addEventListener('keydown',onKeyboard,false);
	function onKeyboard(e){
	    if(e.keyCode == 80){
	    	if(open){
	    		door.rotation.y += 0.1;
		    	door.position.x -=0.05;
		    	door.position.z -=0.05;
	    	}
	    	else{
	    		door.rotation.y -= 0.1
	    		door.position.x +=0.05;
		    	door.position.z +=0.05;
	    	}
	    	if(door.rotation.y == 1.5000000000000002) open = false;
	    	if(door.rotation.y == 0.10000000000000003) open = true;
	    } 
	}

	// LEFT
	var geometry = new THREE.BoxGeometry(40,10,0.3);
	var left_main = setTexture(geometry, "wall-texture.jpg");
	left_main.position.z = 30;
	left_main.position.y = 5;
	left_main.rotation.y = Math.PI/2;
	left_main.position.x = -20;
	scene.add(left_main);

	// RIGHT
	var geometry = new THREE.BoxGeometry(40,10,0.3);
	var right_main = setTexture(geometry, "wall-texture.jpg");
	right_main.position.z = 30;
	right_main.position.y = 5;
	right_main.rotation.y = Math.PI/2;
	right_main.position.x = 20;
	scene.add(right_main);

	// BACK
	var geometry = new THREE.BoxGeometry(40,10,0.3);
	var back_main = setTexture(geometry, "wall-texture.jpg");
	back_main.position.z = 10.15;
	back_main.position.y = 5;
	back_main.receiveShadow = true;
	scene.add(back_main);

	// ROOF
	var geometry = new THREE.BoxGeometry(40,40.01,0.3);
	var roof = setTexture(geometry, "roof-texture.jpg");
	roof.position.z = 30;
	roof.position.y = 10;
	roof.rotation.x = Math.PI/2;
	roof.castShadow = true;
	scene.add(roof);

	
	// INSIDE
	
	// PLANE
	var geometry = new THREE.BoxGeometry(40,40,0.1);
	// var material = new THREE.MeshPhongMaterial( {color: 0x3F2C24} );
	// var iPlane = new THREE.Mesh(geometry, material);
	var iPlane = setTexture(geometry, "wood-floor-texture2.jpg");
	iPlane.position.z = 30;
	iPlane.position.y = 0;
	iPlane.rotation.x = Math.PI/2;
	scene.add(iPlane);

	// CROSS
	var geometry = new THREE.BoxGeometry(0.5,5,0.2);
	var cross = setTexture(geometry, "wood-texture4.jpg");
	cross.position.z = 11;
	cross.position.y = 5;
	scene.add(cross);
	var geometry = new THREE.BoxGeometry(0.5,3,0.2);
	var cross = setTexture(geometry, "wood-texture4.jpg");
	cross.position.z = 11;
	cross.position.y = 6;
	cross.rotation.z = Math.PI/2;
	scene.add(cross);

	// CHANTRY
	var geometry = new THREE.BoxGeometry(10,10.01,0.3);
	var chantry = setTexture(geometry, "granite-texture2.jpg");
	chantry.position.z = 15.2;
	chantry.position.y = 0;
	chantry.rotation.x = Math.PI/2;
	scene.add(chantry);

	// TABLE
	var geometry = new THREE.BoxGeometry(3,1,1.5);
	var table = setTexture(geometry, "granite-texture1.jpg");
	table.position.z = 15.5;
	table.position.y = 0.8;
	table.rotation.x = Math.PI/2;
	scene.add(table);

	// BIBBLE
	var geometry = new THREE.BoxGeometry(0.5,1,0.1);
	var material = new THREE.MeshPhongMaterial( {color: 0x800000} );
	var bibble = new THREE.Mesh( geometry, material );
	bibble.position.z = 15.5;
	bibble.position.y = 1.6;
	bibble.rotation.x = Math.PI/2;
	scene.add(bibble);

	// TRIBUNE
	var geometry = new THREE.BoxGeometry(1,1.5,1);
	var tribune = setTexture(geometry, "wood-texture4.jpg");
	tribune.position.z = 18;
	tribune.position.y = 0.8;
	tribune.position.x = -2.5;
	// tribune.rotation.x = Math.PI/2;df
	scene.add(tribune);

	// CANDLE
	var geometry = new THREE.CylinderGeometry(0.1,0.1,1,32);
	var material = new THREE.MeshPhongMaterial( {color: 0xfff68f} );
	var candle = new THREE.Mesh( geometry, material );
	candle.position.z = 15.5;
	candle.position.y = 1.6;
	candle.position.x = 1;
	scene.add(candle);
	var geometry = new THREE.BoxGeometry(0.01,0.1,0.01);
	var material = new THREE.MeshPhongMaterial( {color: 0x000000} );
	var wick = new THREE.Mesh( geometry, material );
	wick.position.z = 15.5;
	wick.position.y = 2.1;
	wick.position.x = 1;
	scene.add(wick);

	// LAMP
	var geometry = new THREE.BoxGeometry(0.5,2,0.1);
	var material = new THREE.MeshBasicMaterial( {color: 0xeceded} );
	var lampBase = new THREE.Mesh( geometry, material );
	lampBase.position.z = 40;
	lampBase.position.y = 9.8;
	lampBase.rotation.x = Math.PI/2;
	scene.add(lampBase);
	var lampBase2 = new THREE.Mesh( geometry, material );
	lampBase2.position.z = 30;
	lampBase2.position.y = 9.8;
	lampBase2.rotation.x = Math.PI/2;
	scene.add(lampBase2);
	var lampBase3 = new THREE.Mesh( geometry, material );
	lampBase3.position.z = 20;
	lampBase3.position.y = 9.8;
	lampBase3.rotation.x = Math.PI/2;
	scene.add(lampBase3);

	// EXTINGUISHER
	var geometry = new THREE.CylinderGeometry(0.20,0.20,1,32);
	var material = new THREE.MeshPhongMaterial( {color: 0x800000} );
	var extinguisher = new THREE.Mesh( geometry, material );
	extinguisher.position.z = 49.45;
	extinguisher.position.y = 1.6;
	extinguisher.position.x = 2;
	scene.add(extinguisher);

	// TRASH
	var geometry = new THREE.CylinderGeometry(0.20,0.20,0.6,40);
	var material = new THREE.MeshPhongMaterial( {color: 0xb1b3b2} );
	var trash = new THREE.Mesh( geometry, material );
	// trash.position.z = 49.4;
	trash.position.z = 40;
	trash.position.y = 0.2;
	trash.position.x = -2;
	scene.add(trash);
	
	// SPOTLIGHT
    var spt = new THREE.SpotLight(0xcccccc);
    // var spt = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);  
    spt.position.set(0, 100, 140);	
    spt.target = front_main;
    spt.intensity = 2;
	spt.angle = 0.40;
	spt.castShadow = true;
    var lightHelper = new THREE.SpotLightHelper( spt );
    scene.add(lightHelper);
    scene.add(spt);	

    // INTERNAL LIGHT 1
    var light1 = new THREE.PointLight(0xcccccc);
    light1.intensity = 0.2;
    light1.position.z = lampBase.position.z;
	light1.position.y = 9.5;
	scene.add(light1);

    // INTERNAL LIGHT 2
    var light2 = new THREE.PointLight(0xcccccc);
    light2.intensity = 0.2;
    light2.position.z = lampBase2.position.z;
	light2.position.y = 9.5;
	scene.add(light2);

    // INTERNAL LIGHT 3
    var light3 = new THREE.PointLight(0xcccccc);
    light3.intensity = 0.2;
    light3.position.z = lampBase3.position.z;
	light3.position.y = 9.5;
	scene.add(light3);

	// CHAIRS
	// LEFT
	var geometry = new THREE.BoxGeometry(8,0.5,0.5);
	var material = new THREE.MeshPhongMaterial({color: 0x3a0108});
	var chair = new THREE.Mesh( geometry, material );
	chair.position.z = 30;
	chair.position.y = 0.1;
	chair.position.x = -5.5;
	scene.add(chair);
	var geometry = new THREE.BoxGeometry(8,1.5,0.1);
	var chair = new THREE.Mesh( geometry, material );
	chair.position.z = 30.2;
	chair.position.y = 0.1;
	chair.position.x = -5.5;
	scene.add(chair);

	var geometry = new THREE.BoxGeometry(8,0.5,0.5);
	var material = new THREE.MeshPhongMaterial({color: 0x3a0108});
	var chair = new THREE.Mesh( geometry, material );
	chair.position.z = 32;
	chair.position.y = 0.1;
	chair.position.x = -5.5;
	scene.add(chair);
	var geometry = new THREE.BoxGeometry(8,1.5,0.1);
	var chair = new THREE.Mesh( geometry, material );
	chair.position.z = 32.2;
	chair.position.y = 0.1;
	chair.position.x = -5.5;
	scene.add(chair);

	var geometry = new THREE.BoxGeometry(8,0.5,0.5);
	var material = new THREE.MeshPhongMaterial({color: 0x3a0108});
	var chair = new THREE.Mesh( geometry, material );
	chair.position.z = 34;
	chair.position.y = 0.1;
	chair.position.x = -5.5;
	scene.add(chair);
	var geometry = new THREE.BoxGeometry(8,1.5,0.1);
	var chair = new THREE.Mesh( geometry, material );
	chair.position.z = 34.2;
	chair.position.y = 0.1;
	chair.position.x = -5.5;
	scene.add(chair);

	var geometry = new THREE.BoxGeometry(8,0.5,0.5);
	var material = new THREE.MeshPhongMaterial({color: 0x3a0108});
	var chair = new THREE.Mesh( geometry, material );
	chair.position.z = 36;
	chair.position.y = 0.1;
	chair.position.x = -5.5;
	scene.add(chair);
	var geometry = new THREE.BoxGeometry(8,1.5,0.1);
	var chair = new THREE.Mesh( geometry, material );
	chair.position.z = 36.2;
	chair.position.y = 0.1;
	chair.position.x = -5.5;
	scene.add(chair);

	var geometry = new THREE.BoxGeometry(8,0.5,0.5);
	var material = new THREE.MeshPhongMaterial({color: 0x3a0108});
	var chair = new THREE.Mesh( geometry, material );
	chair.position.z = 38;
	chair.position.y = 0.1;
	chair.position.x = -5.5;
	scene.add(chair);
	var geometry = new THREE.BoxGeometry(8,1.5,0.1);
	var chair = new THREE.Mesh( geometry, material );
	chair.position.z = 38.2;
	chair.position.y = 0.1;
	chair.position.x = -5.5;
	scene.add(chair);

	var geometry = new THREE.BoxGeometry(8,0.5,0.5);
	var material = new THREE.MeshPhongMaterial({color: 0x3a0108});
	var chair = new THREE.Mesh( geometry, material );
	chair.position.z = 40;
	chair.position.y = 0.1;
	chair.position.x = -5.5;
	scene.add(chair);
	var geometry = new THREE.BoxGeometry(8,1.5,0.1);
	var chair = new THREE.Mesh( geometry, material );
	chair.position.z = 40.2;
	chair.position.y = 0.1;
	chair.position.x = -5.5;
	scene.add(chair);

	var geometry = new THREE.BoxGeometry(8,0.5,0.5);
	var material = new THREE.MeshPhongMaterial({color: 0x3a0108});
	var chair = new THREE.Mesh( geometry, material );
	chair.position.z = 42;
	chair.position.y = 0.1;
	chair.position.x = -5.5;
	scene.add(chair);
	var geometry = new THREE.BoxGeometry(8,1.5,0.1);
	var chair = new THREE.Mesh( geometry, material );
	chair.position.z = 42.2;
	chair.position.y = 0.1;
	chair.position.x = -5.5;
	scene.add(chair);

	// RIGHT
	var geometry = new THREE.BoxGeometry(8,0.5,0.5);
	var material = new THREE.MeshPhongMaterial({color: 0x3a0108});
	var chair = new THREE.Mesh( geometry, material );
	chair.position.z = 30;
	chair.position.y = 0.1;
	chair.position.x = 5.5;
	scene.add(chair);
	var geometry = new THREE.BoxGeometry(8,1.5,0.1);
	var chair = new THREE.Mesh( geometry, material );
	chair.position.z = 30.2;
	chair.position.y = 0.1;
	chair.position.x = 5.5;
	scene.add(chair);

	var geometry = new THREE.BoxGeometry(8,0.5,0.5);
	var material = new THREE.MeshPhongMaterial({color: 0x3a0108});
	var chair = new THREE.Mesh( geometry, material );
	chair.position.z = 32;
	chair.position.y = 0.1;
	chair.position.x = 5.5;
	scene.add(chair);
	var geometry = new THREE.BoxGeometry(8,1.5,0.1);
	var chair = new THREE.Mesh( geometry, material );
	chair.position.z = 32.2;
	chair.position.y = 0.1;
	chair.position.x = 5.5;
	scene.add(chair);

	var geometry = new THREE.BoxGeometry(8,0.5,0.5);
	var material = new THREE.MeshPhongMaterial({color: 0x3a0108});
	var chair = new THREE.Mesh( geometry, material );
	chair.position.z = 34;
	chair.position.y = 0.1;
	chair.position.x = 5.5;
	scene.add(chair);
	var geometry = new THREE.BoxGeometry(8,1.5,0.1);
	var chair = new THREE.Mesh( geometry, material );
	chair.position.z = 34.2;
	chair.position.y = 0.1;
	chair.position.x = 5.5;
	scene.add(chair);

	var geometry = new THREE.BoxGeometry(8,0.5,0.5);
	var material = new THREE.MeshPhongMaterial({color: 0x3a0108});
	var chair = new THREE.Mesh( geometry, material );
	chair.position.z = 36;
	chair.position.y = 0.1;
	chair.position.x = 5.5;
	scene.add(chair);
	var geometry = new THREE.BoxGeometry(8,1.5,0.1);
	var chair = new THREE.Mesh( geometry, material );
	chair.position.z = 36.2;
	chair.position.y = 0.1;
	chair.position.x = 5.5;
	scene.add(chair);

	var geometry = new THREE.BoxGeometry(8,0.5,0.5);
	var material = new THREE.MeshPhongMaterial({color: 0x3a0108});
	var chair = new THREE.Mesh( geometry, material );
	chair.position.z = 38;
	chair.position.y = 0.1;
	chair.position.x = 5.5;
	scene.add(chair);
	var geometry = new THREE.BoxGeometry(8,1.5,0.1);
	var chair = new THREE.Mesh( geometry, material );
	chair.position.z = 38.2;
	chair.position.y = 0.1;
	chair.position.x = 5.5;
	scene.add(chair);

	var geometry = new THREE.BoxGeometry(8,0.5,0.5);
	var material = new THREE.MeshPhongMaterial({color: 0x3a0108});
	var chair = new THREE.Mesh( geometry, material );
	chair.position.z = 40;
	chair.position.y = 0.1;
	chair.position.x = 5.5;
	scene.add(chair);
	var geometry = new THREE.BoxGeometry(8,1.5,0.1);
	var chair = new THREE.Mesh( geometry, material );
	chair.position.z = 40.2;
	chair.position.y = 0.1;
	chair.position.x = 5.5;
	scene.add(chair);

	var geometry = new THREE.BoxGeometry(8,0.5,0.5);
	var material = new THREE.MeshPhongMaterial({color: 0x3a0108});
	var chair = new THREE.Mesh( geometry, material );
	chair.position.z = 42;
	chair.position.y = 0.1;
	chair.position.x = 5.5;
	scene.add(chair);
	var geometry = new THREE.BoxGeometry(8,1.5,0.1);
	var chair = new THREE.Mesh( geometry, material );
	chair.position.z = 42.2;
	chair.position.y = 0.1;
	chair.position.x = 5.5;
	scene.add(chair);

	// WALL
	// FRONT
	var geometry = new THREE.BoxGeometry(24,1.5,0.3);
	var front_main = setTexture(geometry, "wall-texture.jpg");
	front_main.position.z = 54.85;
	front_main.position.y = 0.6;
	front_main.position.x = -13;
	front_main.castShadow = true;
	scene.add(front_main);
	var geometry = new THREE.BoxGeometry(24,1.5,0.3);
	var front_main = setTexture(geometry, "wall-texture.jpg");
	front_main.position.z = 54.85;
	front_main.position.y = 0.6;
	front_main.position.x = 13;
	front_main.castShadow = true;
	scene.add(front_main);
	// LEFT
	var geometry = new THREE.BoxGeometry(50,2.5,0.3);
	var left_main = setTexture(geometry, "wall-texture.jpg");
	left_main.position.z = 30;
	left_main.position.y = 1;
	left_main.rotation.y = Math.PI/2;
	left_main.position.x = -25;
	scene.add(left_main);
	// RIGHT
	var geometry = new THREE.BoxGeometry(50,2.5,0.3);
	var right = setTexture(geometry, "wall-texture.jpg");
	right.position.z = 30;
	right.position.y = 1;
	right.rotation.y = Math.PI/2;
	right.position.x = 25;
	scene.add(right);
	// BACK
	var geometry = new THREE.BoxGeometry(50,2.5,0.3);
	var back = setTexture(geometry, "wall-texture.jpg");
	back.position.z = 5.15;
	back.position.y = 1;
	scene.add(back);
	
	//RENDER
	document.getElementById("output").appendChild(renderer.domElement);
	render();

	function initStats() {
	    var stats = new Stats();
	    stats.setMode(0);
	    stats.domElement.style.position = 'absolute';
	    stats.domElement.style.left = '0px';
	    stats.domElement.style.top = '0px';
	    document.getElementById("Stats-output").appendChild(stats.domElement);
	    return stats;
	}
		
	function render() {
		stats.update();
	    var delta = clock.getDelta();
	    camControls.update(delta);
	    renderer.clear();
	    // render using requestAnimationFrame
	    requestAnimationFrame(render);
	    renderer.render(scene, camera);
	}

	function setTexture(geom, imageFile) {
        var texture = THREE.ImageUtils.loadTexture(imageFile);
        var mat = new THREE.MeshPhongMaterial();
        mat.map = texture;
        var mesh = new THREE.Mesh(geom, mat);
        // mesh.castShadow = true;
        // mesh.receiveShadow = true;
        return mesh;
    }
}

window.onload = init;