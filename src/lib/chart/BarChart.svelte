<script>
  export let data;
  export let groups;
  export let t = text => text;

  const isNull = (val) => val == null ? 0 : val;
</script>

<div class="chart-container">
  <div class="chart">
    <div class="bar-group" style:height="60px">
      {#if data.p2016.pal}<div class="bar" style:left="0" style:width="{data.p2016.pal}%" style:background-color="{groups['Palestinian'].color}"/>{/if}
      {#if data.p2016.oth}<div class="bar" style:left="{isNull(data.p2016.pal)}%" style:width="{data.p2016.oth}%" style:background-color="{groups['Mixed'].color}"/>{/if}
      {#if data.p2016.jsh}<div class="bar" style:left="{isNull(data.p2016.pal + data.p2016.oth)}%" style:width="{data.p2016.jsh}%" style:background-color="{groups['Jewish'].color}"/>{/if}
      <div class="bar-label white">2016{#if !data.p2016.pop}: {$t('No data')}{/if}</div>
    </div>
    <div class="bar-group" style:height="20px" style:margin-top="2px">
      {#if data.p1945.pal}<div class="bar" style:left="0" style:width="{data.p1945.pal}%" style:background-color="{groups['Palestinian'].color}"/>{/if}
      {#if data.p1945.jsh}<div class="bar" style:left="{isNull(data.p1945.pal)}%" style:width="{data.p1945.jsh}%" style:background-color="{groups['Jewish'].color}"/>{/if}
      <div class="bar-label white">1945{#if !data.p1945.pop}: {$t('No data')}{/if}</div>
    </div>
  </div>
  <table class="table">
    <thead>
      <tr>
        <th>%</th>
        <th class="end">1945</th>
        <th class="end">2016</th>
      </tr>
    </thead>
    <tbody>
      {#if data.p1945.pal || data.p2016.pal}
      <tr>
        <td><div class="bullet" style:background-color="{groups['Palestinian'].color}"/> {$t('Palestinian')}</td>
        <td class="end" class:muted={!data.p1945.pal}>{data.p1945.pal ? data.p1945.pal.toFixed(0) : $t('N/A')}</td>
        <td class="end" class:muted={!data.p2016.pal}>{data.p2016.pal ? data.p2016.pal.toFixed(0) : $t('N/A')}</td>
      </tr>
      {/if}
      {#if data.p1945.jsh || data.p2016.jsh}
      <tr>
        <td><div class="bullet" style:background-color="{groups['Jewish'].color}"/> {$t('Jewish')}</td>
        <td class="end" class:muted={!data.p1945.jsh}>{data.p1945.jsh ? data.p1945.jsh.toFixed(0) : $t('N/A')}</td>
        <td class="end" class:muted={!data.p2016.jsh}>{data.p2016.jsh ? data.p2016.jsh.toFixed(0) : $t('N/A')}</td>
      </tr>
      {/if}
      {#if data.p2016.oth}
      <tr>
        <td><div class="bullet" style:background-color="{groups['Mixed'].color}"/> {$t('Other')}</td>
        <td class="end muted">{$t('N/A')}</td>
        <td class="end" class:muted={!data.p2016.oth}>{data.p2016.oth ? data.p2016.oth.toFixed(0) : $t('N/A')}</td>
      </tr>
      {/if}
    </tbody>
  </table>
</div>

<style>
  .chart-container, .chart, .table, .bar-group {
    position: relative;
    width: 100%;
    margin: 0;
    padding: 0;
    color: #444;
  }
  .bar-group {
    display: block;
    background-color: #bbb;
    box-sizing: border-box;
  }
  .bar, .bar-label {
    position: absolute;
    top: 0;
    height: 100%;
  }
  .bar-label {
    left: 2px;
  }
  th {
    text-align: start;
    font-weight: normal;
    color: #444;
  }
  .end {
    text-align: end;
  }
  .muted {
    color: rgba(0,0,0,0.4);
    font-weight: normal;
    font-size: 0.9em;
  }
  .white {
    color: white;
    font-weight: normal;
    font-size: 0.9em;
  }
  .bullet {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
</style>