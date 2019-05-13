<template>
  <div :class="$style.homePage">
    <stage :disable-particles="disableParticles" />
    <home-featured id="featured"></home-featured>
    <home-project-list></home-project-list>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import Stage from '../components/Stage/Stage.vue';
import HomeSection from '@/app/home/components/HomeSection/HomeSection.vue';
import HomeFeatured from '@/app/home/components/HomeFeatured/HomeFeatured.vue';
import HomeProjectList from '@/app/home/components/HomeProjectList/HomeProjectList.vue';
import { IState } from '@/app/state';
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';

export default {
  metaInfo: {
    title: 'NickRossBrown',
    meta: [
      {
        name: 'description',
        content: 'NickRossBrowns website- A personal portfolio website to showcase projects',
      },
      {
        name: 'robots',
        content: 'INDEX,FOLLOW',
      },
      {
        name: 'keywords',
        content:
          'NickRossBrown, Nick, Ross, Brown, portfolio, vue, nativescript, javascript, seo, server-side-rendering, isomorphic, progressive-web-app',
      },

      { name: 'og:url', content: 'https://nickrossbrown.com/' },
      { name: 'og:site_name', content: 'portfolio' },
      { name: 'og:type', content: 'website' },
      { name: 'og:locale', content: 'en' },
      {
        name: 'og:title',
        content: 'NickRossBrowns website- A personal portfolio website to showcase projects',
      },
      {
        name: 'og:description',
        content: 'NickRossBrowns website- A personal portfolio website to showcase projects',
      },
      { name: 'og:image:url', content: '/logo.png' },
    ],
  },
  components: {
    VueHeadline,
    HomeSection,
    Stage,
    HomeFeatured,
    HomeProjectList,
  },
  computed: {
    ...mapState({
      disableParticles: (state: IState) =>
        (state.app.config && state.app.config.features && state.app.config.features.disableParticles) || false,
    }),
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.homePage {
  background: rgb(251, 251, 251);
}
</style>
