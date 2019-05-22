<template>
  <div :class="$style.featuredProject1">
    <Banner :disable-particles="false"></Banner>
    <About title="Why This Project?">A graphic designer, Eric brought me onto a project he's been designing for years (the application's wire-frame is the image above). I have a positive work history with Eric. Where open, positive, and constant communication feels natural. I joined primarily because I enjoy working on a team. I find myself having more motivation, working harder, and learning more when I part of a group working towards a common goal. When I am part of a team works well together I find myself 'getting into the zone.' Entering a state of mind where anything feels possible. The fact that I personally had very little knowledge or experience about divorce didn't matter. Or the fact that either of I never made a native phone application before. We started by deciding on what technology to build the application with (all of which we haven't heard of before).</About>
    <About title="Implemented Features" flipColor>Below is a list of screenshots shows current features in the applicated that are completed.</About>
    <ImplementedFeatures image="/images/mended-suggestions-legal.png"  :class="$style.featureHeadline" alternative>
      <vue-headline level="3">Scroll Through Suggestions</vue-headline>
      <p>
        Looking through the list takes a simple swipe to horizontally scroll the different suggestions. Clicking on a
        suggestion opens a page with further information.
      </p>
    </ImplementedFeatures>
    <ImplementedFeatures image="/images/mended-suggestion-page.png" flip :class="$style.featureHeadline">
      <vue-headline level="3">Progress Through The List</vue-headline>
      <p>If a user either adds or clicks 'remove,' that suggestion is removed from the suggestion list.</p>
    </ImplementedFeatures>
    <ImplementedFeatures image="/images/mended-goal-list-selected.png" alternative :class="$style.featureHeadline">
      <vue-headline level="3">View Selected Choices</vue-headline>
      <p>Added suggestions rendor on the goals list, where they can be selected for futher detail.</p>
    </ImplementedFeatures>
    <ImplementedFeatures image="/images/mended-subgoal-options.png" flip :class="$style.featureHeadline">
      <vue-headline level="3">Schedule or Mark Complete</vue-headline>
      <p>A goal can be have a date set for when a user plans on completing the task, or mark a goal a complete.</p>
    </ImplementedFeatures>
    <ImplementedFeatures image="/images/mended-calendar.png" alternative :class="$style.featureHeadline">
      <vue-headline level="3">View Calendar</vue-headline>
      <p>
        All uncompleted scheduled goals are displayed on a calendar. Each goal is also color coordinated according to its category type.
      </p>
    </ImplementedFeatures>
    <ImplementedFeatures image="/images/mended-progress.png" flip :class="$style.featureHeadline">
 
      <vue-headline level="3">Overall Progress</vue-headline>
      <p>Overall progress is automatically calcuated and conditionaly rendered.</p>
   
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

</style>
