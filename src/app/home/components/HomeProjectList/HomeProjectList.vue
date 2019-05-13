<template>
  <div :class="$style.homeProjectList">
    <vue-grid :class="$style.projectList">
      <vue-grid-row>
        <vue-grid-item :class="$style.projectHeader">
          <vue-headline level="3" appearance-level="2">Additional Projects</vue-headline>
        </vue-grid-item>
      </vue-grid-row>

      <vue-grid-row :class="$style.projectList_item">
        <vue-grid-item>
          <vue-headline level="3" :class="$style.projectList_item__header">adventure-game </vue-headline>
          <vue-headline level="4" appearance-level="5"
            >DescriptionDescriptionDescriptionDescriptionDescriptionDescription</vue-headline
          >
          <vue-headline level="4" appearance-level="5"
            >DescriptionDescriptionDescriptionDescriptionDescriptionDescription</vue-headline
          >
        </vue-grid-item>
        <vue-grid-item :class="$style.projectList_item__description">
          <vue-headline level="4" appearance-level="5">language</vue-headline>
        </vue-grid-item>
        <vue-grid-item :class="$style.projectList_item__description">
          <vue-headline level="4" appearance-level="5">Development Design UX</vue-headline>
        </vue-grid-item>
      </vue-grid-row>
      <vue-grid-row :class="$style.projectList_item">
        <vue-grid-item>
          <vue-headline level="3" :class="$style.projectList_item__header">rails_food_reviews </vue-headline>
          <vue-headline level="4" appearance-level="5"
            >DescriptionDescriptionDescriptionDescriptionDescriptionDescription</vue-headline
          >
          <vue-headline level="4" appearance-level="5"
            >DescriptionDescriptionDescriptionDescriptionDescriptionDescription</vue-headline
          >
        </vue-grid-item>
        <vue-grid-item :class="$style.projectList_item__description">
          <vue-headline level="4" appearance-level="5">language</vue-headline>
        </vue-grid-item>
        <vue-grid-item :class="$style.projectList_item__description">
          <vue-headline level="4" appearance-level="5">Development Design UX</vue-headline>
        </vue-grid-item>
      </vue-grid-row>
      <vue-grid-row :class="$style.projectList_item">
        <vue-grid-item>
          <vue-headline level="3" :class="$style.projectList_item__header">fantasy-football draftboard </vue-headline>
          <vue-headline level="4" appearance-level="5"
            >DescriptionDescriptionDescriptionDescriptionDescriptionDescription</vue-headline
          >
          <vue-headline level="4" appearance-level="5"
            >DescriptionDescriptionDescriptionDescriptionDescriptionDescription</vue-headline
          >
        </vue-grid-item>
        <vue-grid-item :class="$style.projectList_item__description">
          <vue-headline level="4" appearance-level="5">language</vue-headline>
        </vue-grid-item>
        <vue-grid-item :class="$style.projectList_item__description">
          <vue-headline level="4" appearance-level="5">Development Design UX</vue-headline>
        </vue-grid-item>
      </vue-grid-row>
      <vue-grid-row :class="$style.projectList_item">
        <vue-grid-item>
          <vue-headline level="3" :class="$style.projectList_item__header">shoe-distribution-company</vue-headline>
          <vue-headline level="4" appearance-level="5"
            >DescriptionDescriptionDescriptionDescriptionDescriptionDescription</vue-headline
          >
          <vue-headline level="4" appearance-level="5"
            >DescriptionDescriptionDescriptionDescriptionDescriptionDescription</vue-headline
          >
        </vue-grid-item>
        <vue-grid-item :class="$style.projectList_item__description">
          <vue-headline level="4" appearance-level="5">language</vue-headline>
        </vue-grid-item>
        <vue-grid-item :class="$style.projectList_item__description">
          <vue-headline level="4" appearance-level="5">Development Design UX</vue-headline>
        </vue-grid-item>
      </vue-grid-row>
      <vue-grid-row :class="$style.projectList_item">
        <vue-grid-item>
          <vue-headline level="3" :class="$style.projectList_item__header">CI-CD pipelines</vue-headline>
          <vue-headline level="4" appearance-level="5"
            >DescriptionDescriptionDescriptionDescriptionDescriptionDescription</vue-headline
          >
          <vue-headline level="4" appearance-level="5"
            >DescriptionDescriptionDescriptionDescriptionDescriptionDescription</vue-headline
          >
        </vue-grid-item>
        <vue-grid-item :class="$style.projectList_item__description">
          <vue-headline level="4" appearance-level="5">language</vue-headline>
        </vue-grid-item>
        <vue-grid-item :class="$style.projectList_item__description">
          <vue-headline level="4" appearance-level="5">Development Design UX</vue-headline>
        </vue-grid-item>
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

.homeProjectList {
  display: block;
}

.projectHeader {
  text-align: center;
}
.projectList_item {
  transform: translateY(0);
  padding: 18px 5% 20px;
  border-bottom: 1px solid #dadada;
  box-shadow: 0 0 0 rgba(93, 93, 93, 0.16);
  background: linear-gradient(#fbfbfb, #fbfbfb);
  transition: all 0.3s ease;
  list-style: none;

  &__header,
  h3 {
    color: $brand-primary;
  }
  &:active,
  &:focus,
  &:hover {
    transform: translateY(-3px);
    border-color: transparent;
    box-shadow: 0 1px 6px rgba(93, 93, 93, 0.16);
    background: linear-gradient(90deg, #2fe0c5, #3bdcc4, #2fe0c5);
    color: #fff;

    h3 {
      color: $brand-secondary;
    }
  }
  &__description {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
}

// .projectList_item__description {
//   display: flex;
//   justify-content: center;
//   align-items: flex-end;
// }
</style>
