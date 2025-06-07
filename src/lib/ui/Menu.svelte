<script>
  import { getContext } from "svelte";
  import { base } from "$app/paths";
	import { page } from "$app/stores";
  import Links from "./Links.svelte";
  import Icon from "./Icon.svelte";

	export let items;

  const lang = getContext("lang");
	const rtl = getContext("rtl");
	const menu_active = getContext("menu_active");
	const t = getContext("t");
</script>

<nav id="menu" class:shadow={$menu_active} style:left={$rtl ? 'auto' : $menu_active ? '0' : '-320px'} style:right={!rtl ? 'auto' : $menu_active ? '0' : '-320px'}>
	<slot/>
	<Links>
		{#each Object.values(items) as item}
			{@const href = item?.href?.slice(0, 6) === "https:" ? item.href : item.href ? `${base}/${$lang}/${item.href}` : `${base}/${$lang}`}
			<a {href} class:active={$page.url.pathname === href}><Icon type="{item.icon}"/><span>{$t(item)}</span></a>
		{/each}
	</Links>
</nav>

<style>
  #menu {
		position: fixed;
		top: 49px;
		width: 320px;
		height: calc(100vh - 50px);
    overflow-y: auto;
		background-color: white;
		transition-duration: 0.3s;
		z-index: 1;
	}
	.shadow {
		box-shadow: 0 0 8px rgba(0,0,0,0.5);
	}
	a.active {
		color: black;
		font-weight: bold;
	}
	a span {
		margin: 0 11px;
	}
	:global(#menu label) {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		width: 100%;
	}
	:global(#menu label span) {
		margin: 0 11px;
	}
	:global(#menu label button) {
		display: inline-flex;
		margin-inline-start: auto;
		border: none;
		background: none;
		padding: 3px;
	}
	:global(#menu label button:disabled) {
		color: #ccc;
	}
	:global(#menu input[type=radio], #menu input[type=checkbox]) {
		margin: 5px 1px 3px;
	}
</style>