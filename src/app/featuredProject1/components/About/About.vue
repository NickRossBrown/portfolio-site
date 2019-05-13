<template>
  <div :class="$style.about">
    <vue-headline level="1">About The Application</vue-headline>
    <p>
      Divorce is the second highest stressful life event people experience. This application that is a tool centeres
      around empathy and compassion for the user. To help that person navigate through the difficult circumstances from
      divorce. Knowing that we are more productive as a team, Eric Shull, the origional designer, brought me on to help
      build the software.
    </p>
  </div>
</template>

<script lang="ts">
import VueGrid from '@components/VueGrid/VueGrid.vue';
import VueGridRow from '@components/VueGridRow/VueGridRow.vue';
import VueGridItem from '@components/VueGridItem/VueGridItem.vue';
import VueIconGithub from '@components/icons/VueIconGithub/VueIconGithub.vue';
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';

export default {
  name: 'About',
  components: { VueHeadline, VueIconGithub, VueGridItem, VueGridRow, VueGrid },
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
  min-height: 20vh;
  overflow: hidden;
  position: relative;
  text-align: center;
  // text-shadow: 0 0 5px rgba(15, 15, 15, 0.4);
  padding-top: $space-48;

  background-color: rgb(251, 251, 251);
}
</style>
