<script>
  import { getContext } from "svelte";
  import { base } from '$app/paths';

  export let data;

  const lang = getContext("lang");
	const t = getContext("t");

  // $: console.log(data.page, $lang);
</script>

<svelte:head>
  <title>{data.page[`name_${$lang}`]} - {$t('Palestine Open Maps')}</title>
  <meta property="og:title" content="{data.page[`name_${$lang}`]} - {$t('Palestine Open Maps')}" />
  <meta property="og:image" content="{base}/og-image.jpg" />
</svelte:head>

<h1>{data.page[`name_${$lang}`]}</h1>
{#if data.page[`body_${$lang}`]}
  {@html data.page[`body_${$lang}`]}
{/if}