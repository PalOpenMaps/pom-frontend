<script>
  import { getContext } from "svelte";
	import { goto } from "$app/navigation";
	import { base } from "$app/paths";
  import Select from "$lib/ui/Select.svelte";
  import Tile from "$lib/ui/Tile.svelte";
  import Icon from "$lib/ui/Icon.svelte";

  export let data;
  let  { places } = data;
  $: ({ places } = data);

  const data_url = getContext("data_url");
  const lang = getContext("lang");
  const rtl = getContext("rtl");
  const t = getContext("t");

  function doSelect(e) {
		let place = places.features.find((f) => f.properties.slug == e.detail.slug);
		goto(`${base}/${$lang}/maps/${place.properties.slug}/`);
	}
</script>

<svelte:head>
  <title>{$t('Palestine Open Maps')}</title>
  <meta property="og:title" content="{$t('Palestine Open Maps')}" />
  <meta property="og:image" content="{data_url}/assets/img/haifa-crop.jpg" />
</svelte:head>

<h1>{@html $t('Welcome to<br>Palestine Open Maps')}</h1>

<p class="text-big">{$t('Explore, search and download historical maps and spatial data on Palestine')}</p>

<div class="buttons">
  <a class="btn btn-primary" class:rtl={$rtl} href="{base}/{$lang}/maps/"><Icon type="map" scale={1.5}/><span>{$t('Explore maps')}</span></a>
  <a class="btn" class:rtl={$rtl} href="{base}/{$lang}/about/"><Icon type="info" scale={1.5}/><span>{$t('Read more')}</span></a>
  <div class="select">
    <Select
      items={places.features.map((f) => f.properties).sort((a, b) => a[`name_${$lang}`].localeCompare(b[`name_${$lang}`]))}
      on:select={doSelect}
      colorBorder="#333" colorIndicator="#333"/>
  </div>
</div>

<div class="grid">
  <Tile image="{data_url}/assets/img/tile-map1870.jpg">{$t('Explore historical maps from the 1870s onwards')}</Tile>
  <Tile image="{data_url}/assets/img/tile-places.jpg">{$t('View data on over 2,000 places, past and present')}</Tile>
  <Tile image="{data_url}/assets/img/tile-map1946.jpg">{$t('Download hundreds of historical map sheets')}</Tile>
  <Tile image="{data_url}/assets/img/tile-splitscreen.jpg">{$t('View past and present maps side-by-side')}</Tile>
  <Tile image="{data_url}/assets/img/tile-map3d.jpg">{$t('View the topography of Palestine in 3D')}</Tile>
  <Tile image="{data_url}/assets/img/tile-overlay.jpg">{$t('Overlay historical and present day maps')}</Tile>
</div>

<style>
  .grid, .buttons {
    width: 800px;
    max-width: calc(100vw - 24px);
  }
  .grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)) !important;
    grid-gap: 20px;
		margin: 50px 0 0;
	}
  .buttons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
  }
  .buttons > * {
    display: inline-block;
  }
  .btn {
    background-color: white;
    color: #333;
    border: 2px solid #333;
    height: 50px;
    margin: 4px 4px 0 0;
    padding: 10px 12px;
    font-weight: bold;
    text-decoration: none;
    white-space: nowrap;
  }
  .btn.rtl {
    margin: 4px 0 0 4px !important;
  }
  .btn-primary {
    background-color: #333;
    color: white;
  }
  .btn:hover {
    background-color: black;
    border-color: black;
    color: white;
  }
  .btn > span {
    margin-left: 8px;
  }
  .btn.rtl > span {
    margin-left: 0 !important;
    margin-right: 8px;
  }
  h1 {
    font-size: 2.8em;
    line-height: 1.25;
  }
  p.text-big {
    font-size: 1.4em;
    margin: 20px 0 35px 0;
  }
  .select {
    margin-top: 3px;
    flex-grow: 1;
    min-width: 200px;
    max-width: 100%;
  }
</style>