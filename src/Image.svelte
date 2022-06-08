<script>
  export let placeholder;
  export let src;
  export let alt;
  export let width;
  export let height;

  import { onMount } from "svelte";
  $: nSrc = placeholder;

  onMount(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      nSrc = src;
    };
  });
</script>

<img src={nSrc} {alt} {width} {height} />
