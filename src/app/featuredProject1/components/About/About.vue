<template>
  <div :class="$style.about">
    About
  </div>
</template>

<script lang="ts">
export default {
  name: 'About',
  components: {},
  props: {},
  data(): any {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.about {
  display: block;
}
</style>
