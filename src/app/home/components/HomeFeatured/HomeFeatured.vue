<template>
  <div :class="$style.homeFeatured">
    <vue-grid>
      <vue-grid-row >
        <vue-headline level="1">vuesion</vue-headline>
        <vue-grid>
          <vue-grid-row >
            <vue-grid-item :class="$style.projectSection ">
              <vue-image :class="$style.image" src="/images/projectBackground.png" alt="project placeholder image" native="true"/>
              <vue-headline level="3">Featured Project 1</vue-headline>
                <br />
            </vue-grid-item>
            <vue-grid-item :class="$style.projectSection ">
              <vue-image :class="$style.image" src="/images/projectBackground.png" alt="project placeholder image" native="true"/>
              <vue-headline level="3">Featured Project 2</vue-headline>
                <br />
            </vue-grid-item>
            <!-- <vue-grid-item :class="$style.text"><slot /></vue-grid-item> -->
          </vue-grid-row>
          <vue-grid-row >
            <vue-grid-item :class="$style.projectSection ">
              <vue-image :class="$style.image" src="/images/projectBackground.png" alt="project placeholder image" native="true"/>
              <vue-headline level="3">Featured Project 3</vue-headline>
                <br />
            </vue-grid-item>
            <vue-grid-item :class="$style.projectSection ">
              <vue-image :class="$style.image" src="/images/projectBackground.png" alt="project placeholder image" native="true"/>
              <vue-headline level="3">Featured Project 4</vue-headline>
                <br />
            </vue-grid-item>
            <!-- <vue-grid-item :class="$style.text"><slot /></vue-grid-item> -->
          </vue-grid-row>
        </vue-grid>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
import VueGrid from '@components/VueGrid/VueGrid.vue';
import VueGridRow from '@components/VueGridRow/VueGridRow.vue';
import VueGridItem from '@components/VueGridItem/VueGridItem.vue';
import VueImage from '@components/VueImage/VueImage.vue';
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';

export default {
  name: 'HomeFeatured',
  components: { VueImage, VueGridItem, VueGridRow, VueGrid, VueHeadline },
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

.homeFeatured {
  display: block;
}

.projectSection {
  margin-bottom: $space-32;
}

.image {

  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;


  @include mediaMin(tabletPortrait) {

    margin-bottom: 0;
  }
}
</style>
