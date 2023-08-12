<script lang="ts">
    import NavBar from "$lib/components/NavBar.svelte";
    
    function ScrollTo(id : string) {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }

</script>

<svelte:head>
    <title>Home | Maxx's Portfolio</title>
    <meta name="description" content="Home | Maxx's Portfolio"/>
</svelte:head>

<NavBar />
