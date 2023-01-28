<script lang="ts">
  export let company: string;
  export let period: string;
  export let title: string;
  export let info: string;
</script>

<div class="grid grid-cols-1 sm:grid-cols-[220px,1fr] gap-6">
  <div class="">
    <h2>{company}</h2>
    <p>{period}</p>
  </div>
  <div>
    <h2>{title}</h2>
    <p>
      {info}
    </p>
  </div>
</div>
