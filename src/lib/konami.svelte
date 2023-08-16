<script lang="ts">
    let konambiCombo = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; 
    let pressed : number[] = [];
    let startTime = Date.now();

    function konami({ keyCode } : { keyCode : number }) {
        const now = Date.now();
        
        if (!konambiCombo.includes(keyCode)) return;
        if (now - startTime > 2000) {
            pressed = [];
        }
        pressed.push(keyCode);
        startTime = now;
        if (JSON.stringify(konambiCombo) === JSON.stringify(pressed)) {
            window.location.assign("/easter-egg");
        }
    }
</script>

<svelte:window on:keyup={konami} />