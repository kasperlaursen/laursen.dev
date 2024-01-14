<script lang="ts">
  export let name: string;
  export let period: [number, number];
  export let imageUrl: string;

  const getPeriodMessage = (years: [number, number]) => {
    const current = new Date().getFullYear();
    if (current === years[1]) {
      return `Since ${years[0]}`;
    }
    return `${years[0]} to ${years[1]}`;
  };
</script>

<div class={`text-sm grid gap-4 grid-cols-[2.5rem,1fr] items-center`}>
  <img src={imageUrl} alt={name + " logo"} />
  <div>
    <h2 class={`bold !text-base`}>{name}</h2>
    <p class={`text-text-subtle !text-xs}`}>
      {getPeriodMessage(period)}
    </p>
  </div>
</div>
