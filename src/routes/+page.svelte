<script global>
    import Sidebar from '../components/Sidebar.svelte';
    import Box from '../components/Box.svelte';
    import 'normalize.css'
    import '$lib/global.css'
    import logo from '$lib/images/Avatar.png'
</script>
<svelte:head>
    <title>My Smol | Nurman</title>
    <link rel="shortcut icon" href={logo} type="image/x-icon">
</svelte:head>
<body>
    <Sidebar className="batu"/>
    <!-- <Box /> -->
</body>

    


