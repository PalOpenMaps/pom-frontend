<script>
	import { browser } from '$app/environment';
	import Compare from '$lib/vendor/compare';
	
	export let mapLeft;
	export let mapRight;
	
	let mapCompare;
	let mapsContainer;

	function addCompare() {
		mapCompare = new Compare(mapLeft, mapRight, mapsContainer, {});
	}
	$: if (browser && mapsContainer && mapLeft && mapRight && !mapCompare) addCompare();

	function removeCompare() {
		mapCompare.remove();
		mapCompare = null;
	}
	$: if (mapCompare && (!mapLeft || !mapRight)) removeCompare();
</script>

<svelte:head>
  <link href="https://unpkg.com/@maplibre/maplibre-gl-compare@0.5.0/dist/maplibre-gl-compare.css" rel="stylesheet"/>
</svelte:head>

<div id="comparison-container" bind:this={mapsContainer}>
	<slot/>
</div>

<style>
  #comparison-container {
    position: relative;
    width: 100%;
    height: 100%;
		direction: ltr;
  }
  :global(.map) {
    position: absolute !important;
    top: 0;
    bottom: 0;
  }
	:global(.maplibregl-compare) {
		background: black !important;
	}
	:global(.compare-swiper-vertical) {
		background-color: white !important;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' version='1.1' viewBox='0 0 60 60'%3E%3Cpath style='fill:black;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' d='M 25 24 L 16 30 L 25 36 L 25 24 z M 35 24 L 35 36 L 44 30 L 35 24 z'/%3E%3C/svg%3E") !important;
		color: black !important;
		box-shadow: inset 0 0 0 2px black !important;
	}
</style>