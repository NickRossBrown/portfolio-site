<template>
  <div :class="$style.homeFeatured">
    <vue-grid>
      <vue-headline level="1" :class="$style.projectHeader">Featured</vue-headline>
      <vue-grid>
        <vue-grid-row>
          <vue-grid>
            <vue-grid-row>
              <router-link to="/DivorceMended">
                <vue-grid-item :class="$style.projectSection">
                  <vue-image
                    :class="$style.image"
                    src="/images/divorce-mended-phones-layout.png"
                    alt="project placeholder image"
                    native="true"
                  />
                  <vue-headline level="3" :class="$style.projectSection__title">Divorce Mended</vue-headline>
                  <br />
                </vue-grid-item>
              </router-link>
              <!-- <vue-grid-item :class="$style.projectSection">
                <vue-image
                  :class="$style.image"
                  src="/images/projectBackground.png"
                  alt="project placeholder image"
                  native="true"
                />
                <vue-headline level="3">Featured Project 2</vue-headline>
                <br />
              </vue-grid-item>
            </vue-grid-row>
            <vue-grid-row>
              <vue-grid-item :class="$style.projectSection">
                <vue-image
                  :class="$style.image"
                  src="/images/projectBackground.png"
                  alt="project placeholder image"
                  native="true"
                />
                <vue-headline level="3">Featured Project 3</vue-headline>
                <br />
              </vue-grid-item>
              <vue-grid-item :class="$style.projectSection">
                <vue-image
                  :class="$style.image"
                  src="/images/projectBackground.png"
                  alt="project placeholder image"
                  native="true"
                />
                <vue-headline level="3">Featured Project 4</vue-headline>
                <br />
              </vue-grid-item> -->
            </vue-grid-row>
          </vue-grid>
        </vue-grid-row>
      </vue-grid>
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
  text-align: center;
}

.projectSection {
  margin-bottom: $space-32;
  background: white;
  margin-left: 10px;
  margin-right: 10px;
  padding-top: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &:active,
  &:focus,
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 14px rgba(93, 93, 93, 0.1);
    color: $brand-secondary;
  }
  &__title {
    color: black;
    text-decoration: none !important;
  }
}

.image {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;

  @include mediaMin(tabletPortrait) {
    margin-bottom: 0;
  }

  @include mediaMax(largeDesktop) {
    max-width: 300px;
  }
}
</style>
