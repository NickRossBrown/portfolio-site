<template>
  <div>
    <div :class="$style.stage" ref="stage">
      <canvas :class="$style.canvas" ref="canvas"></canvas>

      <vue-grid>
        <vue-grid-row>
          <vue-grid-item class="vueGridItem">
            <vue-headline level="1">Divorce Mended</vue-headline>
            <div :class="$style.subTitle">
              <p>Divorce is the second highest stressful life event people experience. This phone application that is a tool centered around empathy and compassion for the user. To help provide guidance through the difficult circumstances that occur from divorce.</p>
            </div>
            <br />
          </vue-grid-item>
        </vue-grid-row>
      </vue-grid>
    </div>
    <img src="/images/mended-wireframe.png" alt="mended wireframe" />
  </div>
</template>

<script lang="ts">
import { CircleAnimation } from '../../../shared/animations/CircleAnimation';
import VueGrid from '@components/VueGrid/VueGrid.vue';
import VueGridRow from '@components/VueGridRow/VueGridRow.vue';
import VueGridItem from '@components/VueGridItem/VueGridItem.vue';
import VueIconGithub from '@components/icons/VueIconGithub/VueIconGithub.vue';
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';

export default {
  components: { VueHeadline, VueIconGithub, VueGridItem, VueGridRow, VueGrid },
  props: {
    disableParticles: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    handleResize() {
      const canvas: HTMLCanvasElement = this.$refs.canvas;
      const stage: HTMLElement = this.$refs.stage;
      const stageRect: ClientRect =
        stage.getClientRects().length > 0
          ? stage.getClientRects().item(0)
          : ({
              width: 0,
              height: 0,
            } as ClientRect);

      canvas.width = stageRect.width;
      canvas.height = stageRect.height;
    },
  },
  beforeMount() {
    window.addEventListener('resize', this.handleResize);
  },
  mounted() {
    this.handleResize();

    if (!this.disableParticles) {
      CircleAnimation(this.$refs.canvas);
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.stage {
  min-height: 80vh;
  overflow: hidden;
  position: relative;
  text-align: center;
  text-shadow: 0 0 5px rgba(15, 15, 15, 0.4);
  padding-top: $space-84;
  margin-bottom: 0px;

  img {
    max-width: 12.8rem;
  }

  h1 {
    margin-bottom: $space-32;
    font-weight: $font-weight-light;
  }

  @include mediaMin(tabletPortrait) {
    min-height: 50vh;
    img {
      max-width: 25.6rem;
    }
  }
}

.canvas {
  min-height: 100vh;
  width: 100%;
  position: absolute;
  background-color: transparent;
  left: 0;
  top: 0;

  @include mediaMin(tabletPortrait) {
    min-height: 50vh;
  }
}
</style>
