<template>
  <div :class="$style.featuredProject2">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item fill>
          <vue-headline level="1">FeaturedProject2</vue-headline>
        </vue-grid-item>

        <vue-grid-item fill>
          <vue-button color="secondary" :loading="incrementPending" @click="increment">Increment +1 </vue-button>
          <br />
          <br />
        </vue-grid-item>
        <vue-grid-item fill>
          <vue-button color="primary" :loading="decrementPending" @click="decrement">Decrement -1 </vue-button>
          <vue-headline level="3">Count is {{ count }}</vue-headline>
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex';
import { registerModule } from '@/app/store';
import { FeaturedProject2Module } from '../module';
import { IPreLoad } from '@/server/isomorphic';
import VueGrid from '@/app/shared/components/VueGrid/VueGrid.vue';
import VueGridItem from '@/app/shared/components/VueGridItem/VueGridItem.vue';
import VueButton from '@/app/shared/components/VueButton/VueButton.vue';
import VueGridRow from '@/app/shared/components/VueGridRow/VueGridRow.vue';
import VueHeadline from '@/app/shared/components/VueHeadline/VueHeadline.vue';

export default {
  metaInfo: {
    title: 'FeaturedProject2',
  },
  components: {
    VueGrid,
    VueGridItem,
    VueButton,
    VueGridRow,
    VueHeadline,
  },
  methods: {
    ...mapActions('featuredProject2', ['increment', 'decrement']),
  },
  computed: {
    ...mapGetters('featuredProject2', ['count', 'incrementPending', 'decrementPending']),
  },
  beforeCreate() {
    registerModule('featuredProject2', FeaturedProject2Module);
  },
  prefetch: (options: IPreLoad) => {
    registerModule('featuredProject2', FeaturedProject2Module);
    return options.store.dispatch('featuredProject2/increment');
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.featuredProject2 {
  margin-top: $nav-bar-height;
  min-height: 500px;
}
</style>
