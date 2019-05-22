<template>
  <div :class="[$style.implementedFeatures, alternative ? $style.alternative : null]">
    <vue-grid>
      <vue-grid-row :class="[flip ? $style.flip : null]">
        <vue-grid-item :class="$style.image">
          <vue-image :src="image" :native="false" :class="$style.image" />
        </vue-grid-item>
        <vue-grid-item :class="$style.feature__text"><slot :class="$style.text"/></vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
import VueGrid from '@components/VueGrid/VueGrid.vue';
import VueGridRow from '@components/VueGridRow/VueGridRow.vue';
import VueGridItem from '@components/VueGridItem/VueGridItem.vue';
import VueImage from '@components/VueImage/VueImage.vue';

export default {
  name: 'ImplementedFeatures',
  components: { VueImage, VueGridItem, VueGridRow, VueGrid },
  props: {
    image: {
      type: String,
      required: true,
    },
    alternative: {
      type: Boolean,
    },
    flip: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.implementedFeatures {
  padding: $space-12 0;

  @include mediaMin(tabletPortrait) {
    padding: $space-24 0;
  }
}

.alternative {
  background: rgb(251, 251, 251);
}

.flip {
  @include mediaMin(tabletPortrait) {
    flex-direction: row-reverse;
  }
}

.image {
  min-height: 256px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;

  @include mediaMin(tabletPortrait) {
    min-height: 400px;
    margin-bottom: 0;
  }
}
.feature__text{
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 12rem;
  @include mediaMax(tabletPortrait) {
    padding-top: $space-24;
  }
}
</style>
