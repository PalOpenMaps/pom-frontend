<script>
	import "../app.css";
  import { writable } from 'svelte/store';
	import { setContext } from "svelte";
	import { page } from '$app/stores';
  import { base_url } from "$lib/config";
  import { i18n } from "$lib/utils";
	import AnalyticsBanner from "$lib/ui/AnalyticsBanner.svelte";
  import Header from "$lib/ui/Header.svelte";

  export let data;

  setContext("data_url", data.data_url);

  const lang = writable();
  $: lang.set($page.params.lang ? $page.params.lang : "en");
  setContext("lang", lang);

  const rtl = writable();
  $: rtl.set($lang === "ar");
  setContext("rtl", rtl);

  const t = writable();
  $: t.set((key) => i18n(key, data.config.translations, $lang));
  setContext("t", t);

  const menu_active = writable(false);
  setContext("menu_active", menu_active);
</script>

<svelte:head>
  <meta name="description" content="{$t('Explore, search and download historical maps and spatial data on Palestine')}" />
  <meta property="og:description" content="{$t('Explore, search and download historical maps and spatial data on Palestine')}" />
  <meta property="og:type" content="website" />
  <link rel="canonical" href="{base_url}{$page.url.pathname}" />
  <meta property="og:url" content="{base_url}{$page.url.pathname}" />
  <meta name="twitter:card" content="summary_large_image" />
	{#if $rtl}
	<style>
		html {
			direction: rtl;
		}
	</style>
	{/if}
</svelte:head>

<AnalyticsBanner/>
<Header/>
<slot/>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}
</style>