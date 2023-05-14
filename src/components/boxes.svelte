<script>
    // export const ssr = false
    let numBlocks = Math.floor(Math.random() * 10) + 1
    let guess = ''
    let message = ''

    const resetGame = () => {
        guess = ''
        message = ''
        numBlocks = Math.floor(Math.random() * 10) + 1
    }

    $: {
        if (guess !== '') {
            if (+guess === numBlocks) {
                message = 'Correct!'
            } else {
                message = 'Try again!'
            }
        }
    }
</script>

<main class="container mx-auto h-screen max-w-screen-container px-4 flex flex-col w-full">
    <div class="flex justify-center flex-wrap h-2/3 content-center">
        {#each Array(numBlocks) as _, i (i)}
            <div class="bg-red-700 w-[calc(calc(100%-80px)/5)] aspect-square m-2" />
        {/each}
    </div>
    <div class="h-1/3 flex flex-col">
        <div class="flex flex-row mt-10 mx-auto">
            <input class="text-black p-1 px-2" type="number" bind:value={guess} min="1" max="10" />
            <button class="ml-4" on:click={resetGame}>Reset</button>
        </div>
        <div class="mx-auto mt-2">{message}</div>
    </div>
</main>
