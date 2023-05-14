<script>
    export const ssr = false
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

<!-- grid grid-rows-[repeat(2,_minmax(100px,_1fr))] grid-cols-[repeat(5,_minmax(100px,_1fr))] gap-4 w-full h-1/2 mx-auto -->

<main class="container mx-auto h-screen max-w-screen-container px-4 flex flex-col w-full">
    <div class="flex justify-center flex-wrap h-1/2 content-center">
        {#each Array(numBlocks) as _, i (i)}
            <div class="bg-red-700 w-[calc(20%_-_25px)] aspect-square m-2" />
        {/each}
    </div>

    <div class="h-1/2">
        <div class="mx-auto w-fit">
            <input class="text-black p-1 px-2" type="number" bind:value={guess} min="1" max="10" />
            <button on:click={resetGame}>Reset</button>
        </div>

        <div class="mx-auto w-fit">{message}</div>
    </div>
</main>
