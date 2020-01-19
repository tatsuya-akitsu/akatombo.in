<template>
  <section class="l-main_works">
    <div class="l-wrapper">
      <img src="@/static/images/home/dot.svg" alt="" />
      <div class="p-main_works_area">
        <div class="m-main_works_box">
          <div class="p-main_works_thumb">
            <img src="@/static/images/home/image_works_graphic.jpg" alt="" />
          </div>
        </div>
        <div class="m-main_works_box">
          <h2>
            <img src="@/static/images/icon/icon_works_graphic.svg" alt="" />
            <span v-html="labels.title"></span>
          </h2>
          <p v-html="labels.text"></p>
          <app-link-text
            :target="targets.develop"
            :label="target"
          ></app-link-text>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import labels from "@/documents/index";

export default {
  components: {
    AppLinkText: () => import("@/components/atoms/AppLinkText.vue")
  },
  data: () => {
    return {
      target: labels.common.labels.target,
      targets: labels.common.targets,
      labels: labels.home.graphic
    };
  }
};
</script>

<style lang="scss" scoped>
.l-main_works {
  padding: 124px 0;
}

.l-wrapper {
  @include inner();
  position: relative;

  > img {
    position: absolute;
    top: -64px;
    right: 64px;
    width: 27%;
    z-index: 100;
  }
}

.p-main_works_area {
  display: flex;
  position: relative;
  z-index: 150;
}

.m-main_works_box {
  width: 50%;

  &:nth-of-type(1) {
    padding-right: 32px;
  }
  &:nth-of-type(2) {
    padding-left: 32px;
  }

  h2 {
    padding-bottom: 36px;
    font-size: 0;
  }
  h2 > img {
    display: inline-block;
    vertical-align: top;
    margin-top: 8px;
    width: 32px;
  }
  h2 > span {
    display: inline-block;
    vertical-align: top;
    padding-left: 16px;
    font-size: 32px;
    font-weight: 700;
    line-height: 1.4;
  }

  p {
    padding-bottom: 32px;
    font-size: 14px;
  }
}

.p-main_works_thumb {
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    padding-top: 56.25%;
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
}
</style>
