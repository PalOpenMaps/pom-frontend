<script>
  import { getContext } from "svelte";
  import { afterNavigate } from "$app/navigation";
  import Menu from "$lib/ui/Menu.svelte";
  import VPLogo from "$lib/ui/VPLogo.svelte";

  export let data;

  const data_url = getContext("data_url");
  const rtl = getContext("rtl");
  const menu_active = getContext("menu_active");
	const t = getContext("t");

  afterNavigate(() => menu_active.set(false));
</script>

<svelte:head>
  <meta property="og:image" content="{data_url}/assets/img/haifa-crop.jpg" />
</svelte:head>

<Menu items={data.config.pages}/>
<main class:rtl={$rtl}>
  <article>
    <slot/>
  </article>
  <footer>
    {$t('Initiated and supported by')} <a href="https://visualizingpalestine.org" target="_blank" title={$t('Visualizing Palestine')}><VPLogo/></a>
  </footer>
</main>

<style>
  main {
    width: 640px;
    max-width: calc(100% - 24px);
    margin-top: 70px;
    margin-bottom: 0;
    margin-inline-start: 64px;
    margin-inline-end: auto;
  }
  @media (max-width: 716px) {
    main {
      margin-inline-start: auto !important;
      margin-inline-end: 12px !important;
    }
  }
  footer {
    margin: 30px 0 12px;
    padding-top: 10px; 
    border-top: 1px solid black;
    color: #555;
    font-size: 0.9em;
  }
</style>