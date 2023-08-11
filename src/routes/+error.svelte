<script lang="ts">
    import { page } from "$app/stores";
</script>

<svelte:head>
    <title>Error Occured! | Maxx's Portfolio</title>
</svelte:head>

<div class="flex flex-col justify-center items-center h-screen gap-y-5">
    <h1 class="font-bold text-3xl">Oops...Seems like an error occured!</h1>
    <h2 class="font-bold text-2xl">Error {$page.status} | {$page.error?.message}</h2>
    <div class="flex flex-row mt-5 gap-5">
        <a class="btn btn-md btn-accent" href="/">Go back</a>
        <a class="btn btn-md btn-neutral" href="https://www.youtube.com/watch?v=GtL1huin9EE&pp=ygUUcmljayByb2xsIGF1dG8gcGxheSA%3D">AI Fix</a>
    </div>
</div>