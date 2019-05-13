<template>
  <div :class="$style.featuredProject1">
    <Banner :disable-particles="false"></Banner>
    <About></About>
    <vue-headline level="2" appearance-level="1" :class="$style.featuresHeadline">Implemented Features</vue-headline>
    <ImplementedFeatures image="/images/mended-suggestions-legal.png" alternative>
      <br />
      <br />
      <vue-headline level="3">Easy to Scroll Suggestions</vue-headline>
      <p>
        Looking through the list takes a simple swipe to horizontally scroll the different suggestions. Clicking on a
        suggestion opens a page with further information.
      </p>
      <br />
      <!-- <vue-headline level="3">Progressive Choices</vue-headline>
      <p>A user can either add or remove each suggestion and work their way through each list.</p>
      <br /> -->
    </ImplementedFeatures>
    <ImplementedFeatures image="/images/mended-suggestion-page.png" flip>
      <br />
      <br />
      <vue-headline level="3">Interactive List</vue-headline>
      <p>If a user either adds or clicks 'remove,' that suggestion is removed from the suggestion list.</p>
      <br />
    </ImplementedFeatures>
    <ImplementedFeatures image="/images/mended-goal-list-selected.png" alternative>
      <br />
      <br />
      <vue-headline level="3">View Selected Choices</vue-headline>
      <p>Added suggestions rendor on the goals list, where they can be selected for futher detail.</p>
      <br />
    </ImplementedFeatures>
    <ImplementedFeatures image="/images/mended-subgoal-options.png" flip>
      <br />
      <br />
      <vue-headline level="3">Schedule and Complete</vue-headline>
      <p>A goal can be have a date set for when a user plans on completing the task, or mark a goal a complete.</p>
      <br />
    </ImplementedFeatures>
    <ImplementedFeatures image="/images/mended-calendar.png" alternative>
      <br />
      <br />
      <vue-headline level="3">Calendar</vue-headline>
      <p>
        All uncompleted scheduled goals show on a calendar. Each goal is also color coordinated according to its
        category type.
      </p>
      <br />
    </ImplementedFeatures>
    <ImplementedFeatures image="/images/mended-progress.png" flip>
      <br />
      <br />
      <vue-headline level="3">Overall Progress</vue-headline>
      <p>Overall progress is automatically calcuated and conditionaly rendered.</p>
      <br />
    </ImplementedFeatures>
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex';
import { registerModule } from '@/app/store';
import { FeaturedProject1Module } from '../module';
import { IPreLoad } from '@/server/isomorphic';
import VueGrid from '@/app/shared/components/VueGrid/VueGrid.vue';
import VueGridItem from '@/app/shared/components/VueGridItem/VueGridItem.vue';
import VueButton from '@/app/shared/components/VueButton/VueButton.vue';
import VueGridRow from '@/app/shared/components/VueGridRow/VueGridRow.vue';
import VueHeadline from '@/app/shared/components/VueHeadline/VueHeadline.vue';
import Banner from '../components/Banner/Banner.vue';
import About from '../components/About/About.vue';
import ImplementedFeatures from '../components/ImplementedFeatures/ImplementedFeatures.vue';

export default {
  metaInfo: {
    title: 'FeaturedProject1',
  },
  components: {
    VueGrid,
    VueGridItem,
    VueButton,
    VueGridRow,
    VueHeadline,
    Banner,
    About,
    ImplementedFeatures,
  },
  methods: {
    ...mapActions('featuredProject1', ['increment', 'decrement']),
  },
  computed: {
    ...mapGetters('featuredProject1', ['count', 'incrementPending', 'decrementPending']),
  },
  beforeCreate() {
    registerModule('featuredProject1', FeaturedProject1Module);
  },
  prefetch: (options: IPreLoad) => {
    registerModule('featuredProject1', FeaturedProject1Module);
    return options.store.dispatch('featuredProject1/increment');
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.featuredProject1 {
  margin-top: $nav-bar-height;
  min-height: 500px;
}
.featuresHeadline {
  text-align: center;
  margin-top: $space-48;
  margin-bottom: 0px;
}
</style>
