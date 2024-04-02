<script>
    import { onMount } from 'svelte';
    import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
    import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
    let mixer;
    let smolhome_action


    onMount(async ()=>{
            import('three').then(THREE =>{
            const clock = new THREE.Clock();
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer();
            const SmolLoader = new GLTFLoader();
            const controls = new OrbitControls(camera, renderer.domElement);

        

            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setClearColor(0x000000, 0);
            document.body.appendChild(renderer.domElement);

            camera.position.z = 5;
     

            SmolLoader.load('src/model/smol-home/scene.gltf', gltf =>{
                const model = gltf.scene;
                const animations = gltf.animations;
                scene.add(model);
                console.log(model);

                mixer = new THREE.AnimationMixer(model);
                // animations.array.forEach((clip)) => {
                //     mixer.clipAction(clip).play(),
                // };
                animations.forEach((clip) => {
                    mixer.clipAction(clip).play();
                });
               

            });

            const animate = function (){
                requestAnimationFrame(animate);
                const delta = clock.getDelta();

                mixer.update(delta);
                

                renderer.render(scene, camera);
            };

            animate();


        })
    });
  
</script>
