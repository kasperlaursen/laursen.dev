<script lang="ts">
  const customClasses = $$restProps.class;
</script>

<div
  {...$$restProps}
  class="{`
    ${customClasses ?? ''}
    bg-surface-1
    border-surface-3
    border-1
    p-4
    sm:rounded-lg`}"
>
  <slot />
</div>
