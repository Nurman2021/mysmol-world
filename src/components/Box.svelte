<script>
    import { onMount } from 'svelte';
    import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
    import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
    let mixers = [];
    let mixer;
    
    
    onMount(async ()=>{
            import('three').then(THREE =>{
            const clock = new THREE.Clock();
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({antialias: true, canvas: document.querySelector('#bg')});
            const SmolLoader = new GLTFLoader();
            const controls = new OrbitControls(camera, renderer.domElement);

            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setClearColor(0x000000, 0);
            renderer.shadowMap.enabled = true;

            camera.position.x = -1.5;
            camera.position.y = 1;
            camera.position.z = 4;


            const ambientlight = new THREE.AmbientLight(0xffffff, 2);
            // scene.add(ambientlight);
            const dirLight = new THREE.DirectionalLight(0xffffff, 2);
            dirLight.position.set(-5, 3.4, 2.2);
            dirLight.castShadow = true;
            dirLight.intensity = 6;
            // dirLight.shadow.darkness = 0.5;
            scene.add(dirLight);
            const pointLightHelper = new THREE.DirectionalLightHelper( dirLight);
            // scene.add( pointLightHelper );

            const grid = new THREE.GridHelper(100, 100);
            // scene.add(grid);

            
            const points = [
                new THREE.Vector3(-10, 0, 10),
                new THREE.Vector3(-5, 5, 5),
                new THREE.Vector3(0, 0, 0),
                new THREE.Vector3(5, -5, 5),
                new THREE.Vector3(10, 0, 10)

            ];

            const path = new THREE.CatmullRomCurve3(points);

            const planeGeo = new THREE.PlaneGeometry(100, 100);
            const PlaneMath = new THREE.MeshPhongMaterial({color: 0x58adbf, dithering: true});
            const plane = new THREE.Mesh(planeGeo, PlaneMath);
            plane.receiveShadow = true;
            plane.rotation.x = -0.5 * Math.PI;
            scene.add(plane);

            function loadModel(modelPath, position){
                SmolLoader.load(modelPath, gltf =>{
                const model = gltf.scene;
                const animations = gltf.animations;

                // model.position.set(0.9, 0.04, -0.1);
                model.position.copy(position);
                model.rotation.y = -1.02;

                model.traverse(function(node){
                    if(node.isMesh)
                    node.castShadow = true;

                })
                model.castShadow = true;
                model.receiveShadow = true;

                scene.add(model);
                console.log('home',model);

                mixer = new THREE.AnimationMixer(model);

                mixers.push(mixer);
                animations.forEach((clip) => {
                    mixer.clipAction(clip).play();
                });
               

            });
            }
            loadModel('src/model/smol_ame_-_amelia_watson_holomyth/scene.gltf', new THREE.Vector3(0, 0, 0));
            loadModel('src/model/smol-home/scene.gltf', new THREE.Vector3(0.9, 0.04, -0.1));

            

            function updateAnimation(deltaTime){
                for (let i = 0; i<mixers.length; i++){
                    mixers[i].update(deltaTime);
                }
            }

            const animate = function (){
                requestAnimationFrame(animate);
                const deltaTime = clock.getDelta();

                updateAnimation(deltaTime);
                

                renderer.render(scene, camera);
            };


            const resize = ()=>{
                renderer.setSize(window.innerWidth, window.innerHeight);
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
            };

            animate();
            window.addEventListener('resize', resize)


        })
    });
  
</script>
<canvas id="bg"></canvas>
<style>
    canvas{
position: fixed;
  top: 0;
  left: 0;
    }
</style>