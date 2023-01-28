<script lang="ts">
  const customClasses = $$restProps.class;
  export let href: string;
</script>

<a
  {...$$restProps}
  class="{`
    ${customClasses ?? ''}
    text-center underline text-text-colored hover:bg-surface-3 transition rounded-lg p-2 px-4 max-w-max mx-auto
`}"
  href="{href}"
  rel="noreferrer"
>
  <slot />
</a>
