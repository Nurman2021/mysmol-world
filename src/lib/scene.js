import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const clock = new THREE.Clock();
const smolLoader = new GLTFLoader();
let renderer;
let mixer;

camera.position.z = 5;

smolLoader.load('src/model/smol-home/scene.gltf', gltf =>{
    const model = gltf.scene;
    const animations = gltf.animations;
    scene.add(model);
    console.log(model);

    mixer = new THREE.AnimationMixer(model);
    animations.forEach((clip) => {
        mixer.clipAction(clip).play();
    });
   

});

const animate = ()=>{
    requestAnimationFrame(animate);
    const delta = clock.getDelta();
    mixer.update(delta);

    renderer.render(scene, camera);

    
}

const resize = ()=>{
    renderer.setSize(window.innerWidth / window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

}

export const createScene = (el) =>{
    renderer = new THREE.WebGLRenderer({antialias: true, canvas: el});
}

window.addEventListener('resize', resize);

