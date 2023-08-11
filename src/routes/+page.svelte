<script lang="ts">
	import { onMount } from "svelte";

    function ScrollTo(id : string) {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    
    onMount(() => {
        window.location.assign("/#home");
    })
</script>

<svelte:head>
    <title>Home | Maxx's Portfolio</title>
    <meta name="description" content="Home | Maxx's Portfolio"/>
</svelte:head>

<div>
    <nav class="hidden md:flex lg:flex flex-row absolute w-screen justify-end z-10">
        <div class="flex flex-row items-center mr-5 mt-5 gap-x-7">
            <a href="https://discordapp.com/users/413689179940323328" target="_blank" rel="noreferred">
                <img width="35" height="35" src="/images/discord.png" alt="discord logo"/>
                <span class="sr-only">Discord</span>
            </a>
            <a href="https://github.com/Maxxxxxx-x" target="_blank" rel="noreferred">
                <img width="35" height="35" src="/images/github.png" alt="Github Logo">
                <span class="sr-only">Github</span>
            </a>
        </div>
    </nav>
    <nav class="flex md:hidden lg:hidden flex-row w-screen justify-between">
        <div class="flex"></div>
    </nav>
</div>
<div class="hidden md:flex lg:flex flex-col">
    <div id="home" class="flex flex-col h-screen justify-center items-center gap-y-5">
        <div class="flex flex-col gap-y-3">
            <h1 class="font-bold text-4xl">Hi, I'm <a class="text-accent  hover:text-7xl transition-all duration-200" href="#about-me">Maxx</a>,</h1>
            <h1 class="font-bold text-4xl">I'm a full stack developer.</h1>
        </div>
        <div class="flex flex-row gap-x-5">
            <a class="btn bordered hover:btn-accent duration-300 px-10" href="skills">Skills</a>
            <a class="btn bordered hover:btn-accent duration-300 px-10" href="/projects">Projects</a>
            <button class="btn bordered hover:btn-accent duration-300 px-10" on:click={() => ScrollTo("about-me")}>About</button>
            <button class="btn bordered hover:btn-accent duration-300 px-10" on:click={() => ScrollTo("contact")}>Contact</button>
        </div>
    </div>
    <div id="about-me" class="flex flex-col h-screen justify-center items-center">
        <h1 class="font-bold text-4xl">About Me</h1>
    </div>
    <div id="projects" class="flex flex-col h-screen justify-center items-center">
        <h1 class="font-bold text-4xl">Projects</h1>
    </div>
    <div id="contact" class="flex flex-col h-screen justify-center items-center">
        <h1 class="font-bold text-4xl">Contact</h1>
    </div>
</div>
