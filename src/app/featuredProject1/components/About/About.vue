<template>
  <div :class="$style.about">
    <VueGrid :class="[flipColor ? $style.flipColor : null]"> 
      <VueGridRow> 
        <VueGridItem :class="$style.text"> 
          <vue-headline level="1" >{{  title  }} </vue-headline>
          <br>
          <p>
            <slot />
          </p>
        </VueGridItem> 
      </VueGridRow> 
    </VueGrid> 
    
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
  props: {
    title: {
      type: String,
      required: true,
    },
    flipColor: {
      type: Boolean,
    },
  },
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
  padding-left: 4rem;
  padding-right: 4rem;

  background-color: rgb(251, 251, 251);
}
.flipColor{
  background-color: #ffffff;
}
</style>
