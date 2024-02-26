const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera();
const renderer = new THREE.WebGLRenderer();

renderer.setSize(800,800);
document.body.appendChild(renderer.domElement);
camera.position.z = 5;

const dvdgeometry = new THREE.PlaneGeometry(0.4,0.3);
const dvdmaterial = new THREE.MeshBasicMaterial();
const dvd = new THREE.Mesh(dvdgeometry,dvdmaterial);
scene.add(dvd);

dvd.position.set(0,0,0);
yspeed = 0.0023;
xspeed = 0.0023;
bouncesleft = Math.floor((Math.random() * 8) + 1);
if (bouncesleft <= 5){
    bouncesleft = 5
}
console.log(bouncesleft);
dvd.material.color.setRGB(Math.random(256),Math.random(256),Math.random(256));
 
function animate(){
    requestAnimationFrame(animate);

    dvd.position.x += xspeed;
    dvd.position.y += yspeed;

if (bouncesleft > 0){
    if (dvd.position.x > 0.8){
        xspeed = -0.0023;
        dvd.material.color.setRGB(Math.random(256),Math.random(256),Math.random(256));
        dvd.scale.x -= 0.1;
        dvd.scale.y -= 0.1;
        bouncesleft -= 1;
    }
    else if (dvd.position.x < -0.8){
    xspeed = 0.0023;
    dvd.material.color.setRGB(Math.random(256),Math.random(256),Math.random(256));
    dvd.scale.x -= 0.1;
    dvd.scale.y -= 0.1;
    bouncesleft -= 1;
    }
   if (dvd.position.y > 0.8){
            yspeed = -0.0023;
            dvd.material.color.setRGB(Math.random(256),Math.random(256),Math.random(256));
            dvd.scale.x -= 0.1;
            dvd.scale.y -= 0.1;
            bouncesleft -= 1;
    }
        else if (dvd.position.y < -0.8){
        yspeed = 0.0023;
        dvd.material.color.setRGB(Math.random(256),Math.random(256),Math.random(256));
        dvd.scale.x -= 0.1;
        dvd.scale.y -= 0.1;
        bouncesleft -= 1;
     }
}
else{
    dvd.visible = false;
    xspeed = 0;
}

    renderer.render(scene,camera);

}

animate();
