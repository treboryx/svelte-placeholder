<script>
  import { onMount } from "svelte";

  export let placeholder = "skeleton";
  export let src;
  export let alt;
  export let width;
  export let height;
  export let style;
  export let className;
  export let darkMode = "browser";
  export let loading = "lazy";

  $: nSrc = placeholder;
  $: loading = true;

  let skeletonWidth = "64";
  let skeletonHeight = "64";

  onMount(() => {
    if (darkMode === "browser") {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        darkMode = true;
      } else darkMode = false;
    }

    const img = new Image();
    img.src = src;
    skeletonWidth = width ? width : img.naturalWidth;
    skeletonHeight = height ? height : img.naturalHeight;
    img.onload = () => {
      loading = false;
      nSrc = src;
    };
  });
</script>

{#if loading && placeholder === "skeleton"}
  <img
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII="
    {alt}
    style="width: {skeletonWidth}px; height: {skeletonHeight}px;"
    class={darkMode ? "skeleton-dark" : "skeleton"}
  />
{:else}
  <img src={nSrc} {alt} {width} {height} class={className} {style} {loading} />
{/if}

<style>
  .skeleton {
    -webkit-animation: skeleton-loading 1s linear infinite alternate;
    animation: skeleton-loading 1s linear infinite alternate;
  }

  @-webkit-keyframes skeleton-loading {
    0% {
      background-color: #c2cfd6;
    }
    100% {
      background-color: #f0f3f5;
    }
  }

  @keyframes skeleton-loading {
    0% {
      background-color: #c2cfd6;
    }
    100% {
      background-color: #f0f3f5;
    }
  }

  .skeleton-dark {
    -webkit-animation: skeleton-loading-dark 1s linear infinite alternate;
    animation: skeleton-loading-dark 1s linear infinite alternate;
  }

  @-webkit-keyframes skeleton-loading-dark {
    0% {
      background-color: #7a7a7a;
    }
    100% {
      background-color: #5e5e5e;
    }
  }

  @keyframes skeleton-loading-dark {
    0% {
      background-color: #7a7a7a;
    }
    100% {
      background-color: #5e5e5e;
    }
  }
</style>
