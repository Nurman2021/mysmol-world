<script global>
    import Sidebar from '../components/Sidebar.svelte';
    import Box from '../components/Box.svelte';
    import { onMount } from 'svelte';
    // import { createScene } from '$lib/scene.js'
    import 'normalize.css'
    import '$lib/global.css'
    // let sceneContainer;

    // let el;
    // onMount(async ()=>{
    //     createScene(el);
    // })
</script>
<svelte:head>
    <title>My Smol | Nurman</title>
</svelte:head>
<Sidebar />

<Box />
<main>
    <!-- <div class="main-container"> -->
    <!-- <Box {sceneContainer}/> -->
    
    <section id="home" class="home">
        <div class="home-text">
            <h1>Hi, I',m <br> Nurman Awaluddin</h1>
            <p>Turn imagination into reality, Creative and Warm</p>
        </div>
        <div></div>

    </section>
</main>

    


