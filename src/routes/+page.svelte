<script lang="ts">
    import NavBar from "$lib/components/NavBar.svelte";
    import Konami from "$lib/components/Konami.svelte";
    import Skill from "$lib/components/Skill.svelte";
    import { ScrollTo } from "$lib/ScrollTo";
</script>

<svelte:head>
    <title>Home | Maxx's Portfolio</title>
    <meta name="description" content="Home | Maxx's Portfolio"/>
</svelte:head>

<Konami />

<div>
    <NavBar />
    <div class="flex flex-col w-screen" id="#home">
        <div class="flex flex-row justify-center items-center h-screen gap-x-20" id="#Home">
            <div>
                <img class="w-44 h-44 rounded-full" src="/images/profile-pic.jpg" alt="profile pic" />
            </div>
            <div class="flex flex-col gap-y-3">
                <h1 class="font-bold text-4xl text-center hover:text-6xl transition-all duration-500 hover:9xl hover:text-accent hover:animate-shake hover:animate-infinite hover:animate-duration-[1ms] hover:animate-delay-0">Maxx</h1>
                <h2 class="text-3xl text-center">Full stack developer</h2>
                <div class="flex flex-row justify-center gap-x-5">
                    <a class="btn btn-neutral hover:btn-accent text-lg" href="/">Download CV</a>
                    <button class="btn btn-neutral hover:btn-accent text-lg px-12" on:click={() => ScrollTo("#Contact")}>Contact</button>
                </div>
                <div class="flex flex-row justify-between">
                    <a class="hover:animate-wiggle-more hover:animate-infinite" href="https://github.com/Maxxxxxx-x">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 127.14 96.36" fill="currentColor">
                            <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
                        </svg>
                    </a>
                    <a class="hover:animate-wiggle-more hover:animate-infinite" href="https://discordapp.com/users/413689179940323328">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 127.14 96.36" fill="currentColor">
                            <path class="cls-1" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
                        </svg>
                    </a>
                    <a class="hover:animate-wiggle-more hover:animate-infinite" href="https://www.instagram.com/maxx_with_two_x/">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="80" width="80" viewBox="0 0 169.0312 194.9835">
                            <path d="M65.033 0C37.891 0 29.953.028 28.41.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468-4.125 4.282-6.625 9.55-7.53 15.812-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28a27.22 27.22 0 0017.75-14.53c1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624-4.3-4.108-9.56-6.608-15.829-7.512C102.338.157 101.733.027 86.193 0z" fill="url(#c)"/>
                            <path d="M65.033 0C37.891 0 29.953.028 28.41.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468-4.125 4.282-6.625 9.55-7.53 15.812-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28a27.22 27.22 0 0017.75-14.53c1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624-4.3-4.108-9.56-6.608-15.829-7.512C102.338.157 101.733.027 86.193 0z" fill="url(#d)"/>
                            <path d="M65.003 17c-13.036 0-14.672.057-19.792.29-5.11.234-8.598 1.043-11.65 2.23-3.157 1.226-5.835 2.866-8.503 5.535-2.67 2.668-4.31 5.346-5.54 8.502-1.19 3.053-2 6.542-2.23 11.65C17.06 50.327 17 51.964 17 65s.058 14.667.29 19.787c.235 5.11 1.044 8.598 2.23 11.65 1.227 3.157 2.867 5.835 5.536 8.503 2.667 2.67 5.345 4.314 8.5 5.54 3.054 1.187 6.543 1.996 11.652 2.23 5.12.233 6.755.29 19.79.29 13.037 0 14.668-.057 19.788-.29 5.11-.234 8.602-1.043 11.656-2.23 3.156-1.226 5.83-2.87 8.497-5.54 2.67-2.668 4.31-5.346 5.54-8.502 1.18-3.053 1.99-6.542 2.23-11.65.23-5.12.29-6.752.29-19.788 0-13.036-.06-14.672-.29-19.792-.24-5.11-1.05-8.598-2.23-11.65-1.23-3.157-2.87-5.835-5.54-8.503-2.67-2.67-5.34-4.31-8.5-5.535-3.06-1.187-6.55-1.996-11.66-2.23-5.12-.233-6.75-.29-19.79-.29zm-4.306 8.65c1.278-.002 2.704 0 4.306 0 12.816 0 14.335.046 19.396.276 4.68.214 7.22.996 8.912 1.653 2.24.87 3.837 1.91 5.516 3.59 1.68 1.68 2.72 3.28 3.592 5.52.657 1.69 1.44 4.23 1.653 8.91.23 5.06.28 6.58.28 19.39s-.05 14.33-.28 19.39c-.214 4.68-.996 7.22-1.653 8.91-.87 2.24-1.912 3.835-3.592 5.514-1.68 1.68-3.275 2.72-5.516 3.59-1.69.66-4.232 1.44-8.912 1.654-5.06.23-6.58.28-19.396.28-12.817 0-14.336-.05-19.396-.28-4.68-.216-7.22-.998-8.913-1.655-2.24-.87-3.84-1.91-5.52-3.59-1.68-1.68-2.72-3.276-3.592-5.517-.657-1.69-1.44-4.23-1.653-8.91-.23-5.06-.276-6.58-.276-19.398s.046-14.33.276-19.39c.214-4.68.996-7.22 1.653-8.912.87-2.24 1.912-3.84 3.592-5.52 1.68-1.68 3.28-2.72 5.52-3.592 1.692-.66 4.233-1.44 8.913-1.655 4.428-.2 6.144-.26 15.09-.27zm29.928 7.97a5.76 5.76 0 105.76 5.758c0-3.18-2.58-5.76-5.76-5.76zm-25.622 6.73c-13.613 0-24.65 11.037-24.65 24.65 0 13.613 11.037 24.645 24.65 24.645C78.616 89.645 89.65 78.613 89.65 65S78.615 40.35 65.002 40.35zm0 8.65c8.836 0 16 7.163 16 16 0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16 0-8.837 7.163-16 16-16z" fill="currentColor"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div class="flex flex-col items-center h-screen" id="#Skills">
            <h1 class="font-bold text-4xl">Skills</h1>
            <div class="flex flex-col justify-center">
                <div class="flex flex-row">
                    <!--Tree-->
                    <div class="flex flex-col">
                        <div>

                        </div>
                        <div class="divider">Front end</div>
                    </div>
                    <div class="flex flex-col">
                        <div>

                        </div>
                        <div class="divider">Back end</div>
                    </div>
                    <div class="flex flex-col">
                        <div>

                        </div>
                        <div class="divider">Database</div>
                    </div>
                    <div class="flex flex-col">
                        <div>

                        </div>
                        <div class="divider">Mobile</div>
                    </div>
                    <div class="flex flex-col">
                        <div>

                        </div>
                        <div class="divider">DevOps</div>
                    </div>
                </div>
                <div class="flex justify-center">
                    <!--Profile pic-->
                    <img class="w-20 h-20 rounded-full" src="/images/profile-pic.jpg" alt="profile pic" />
                </div>
            </div>
        </div>
        <div class="flex justify-center items-center h-screen" id="#Projects">
            <h1 class="font-bold text-4xl">Projects</h1>
        </div>
        <div class="flex justify-center items-center h-screen" id="#About">
            <h1 class="font-bold text-4xl">About</h1>
        </div>
        <div class="flex justify-center items-center h-screen" id="#Contact">
            <h1 class="font-bold text-4xl">Contact</h1>
        </div>
    </div>
</div>
