<template>
  <div :class="$style.vueFooter">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item>
          <vue-headline :class="$style.footerHeadline" level="2">Looking to start a project?</vue-headline>
        </vue-grid-item>
      </vue-grid-row>
      <vue-grid-row>
        <vue-grid-item>
          <small>&copy; {{ year }} Nick Ross Brown</small>
        </vue-grid-item>

        <vue-grid-item>
          <a href="https://github.com/NickRossBrown" target="_blank" rel="noopener" aria-label="github profile">
            <vue-icon-github-alt />
          </a>
          <a href="https://linkedin.com/in/nick-ross-brown" target="_blank" rel="noopener" aria-label="twitter profile">
            <vue-icon-linked-in />
          </a>
          <a href="mailto: nickrossbrown@gmail.com" rel="noopener" aria-label="twitter profile">
            <vue-icon-Mail />
          </a>
        </vue-grid-item>

        <vue-grid-item>
          <small>
            <a
              href="https://github.com/NickRossBrown/portfolio-site/blob/master/LICENSE"
              target="_blank"
              rel="noopener"
            >
              MIT License
            </a>
          </small>
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
import VueGrid from '../VueGrid/VueGrid.vue';
import VueGridItem from '../VueGridItem/VueGridItem.vue';
import VueGridRow from '../VueGridRow/VueGridRow.vue';
import VueIconGithubAlt from '../icons/VueIconGithubAlt/VueIconGithubAlt.vue';
import VueIconTwitterSquare from '../icons/VueIconTwitterSquare/VueIconTwitterSquare.vue';
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';
import VueIconLinkedIn from '../icons/VueIconLinkedIn/VueIconLinkedIn.vue';
import VueIconMail from '../icons/VueIconMail/VueIconMail.vue';

export default {
  name: 'VueFooter',
  components: {
    VueIconTwitterSquare,
    VueIconGithubAlt,
    VueGrid,
    VueGridItem,
    VueGridRow,
    VueHeadline,
    VueIconMail,
    VueIconLinkedIn,
  },
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.vueFooter {
  padding: $footer-padding;
  background: $footer-bg;
  color: $footer-color;
  text-align: center;

  i {
    height: $font-size-h1;
    width: $font-size-h1;
    fill: $footer-link-color;
    margin: 0 $space-12;

    &:hover {
      fill: $footer-link-hover-color;
    }
  }

  small {
    display: inline-block;
    margin: $space-12 0;
  }

  a {
    color: $footer-link-color;
    font-weight: $footer-link-font-weight;

    &:hover {
      color: $footer-link-hover-color;
    }
  }
}

.footerHeadline {
  padding: 30px;
}
</style>
