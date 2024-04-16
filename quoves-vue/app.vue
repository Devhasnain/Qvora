<script setup lang="ts">
</script>

<template>
  <div class="container">
    <navbar />
    <showcase />
  </div>
</template>

<style lang="scss">
@import '~/styles/utils/_variables.scss';

.container {
  margin: auto;
  width: calc(100% - 60px);

  @include screen-sm-and-down {
    width: calc(100% - 60px);
  }
}
</style>
