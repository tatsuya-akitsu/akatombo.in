<template>
  <footer class="l-footer">
    <div class="l-wrapper">
      <div class="m-footer_box">
        <img src="@/static/images/footer_thumbnail.svg" alt="" />
        <span><small v-html="copyright"></small></span>
      </div>
      <div class="m-footer_box">
        <div class="m-footer_link_box">
          <p>{{ labels.contents }}</p>
          <ul>
            <li>
              <nuxt-link :to="resume">{{ labels.resume }}</nuxt-link>
            </li>
            <li>
              <a :href="note" target="_blank">{{ labels.note }}</a>
            </li>
          </ul>
        </div>
        <div class="m-footer_link_box">
          <p>{{ labels.works }}</p>
          <ul>
            <li>
              <nuxt-link :to="develop">{{ labels.web }}</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="illustration">{{
                labels.illustration
              }}</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="graphic">{{ labels.graphic }}</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="photograph">{{ labels.photographic }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import labels from "@/documents/index";

export default {
  data: () => {
    return {
      copyright: "",
      labels: {},
      resume: "",
      note: "",
      develop: "",
      illustration: "",
      graphic: "",
      photograph: ""
    };
  },
  mounted() {
    this.copyright = labels.common.copyright;
    this.labels = labels.common.labels.footer;
    this.resume = labels.common.targets.resume;
    this.note = labels.common.targets.note;
    this.develop = labels.common.targets.develop;
    this.illustration = labels.common.targets.illustration;
    this.graphic = labels.common.targets.graphic;
    this.photograph = labels.common.targets.photograph;
  }
};
</script>

<style lang="scss" scoped>
.l-footer {
  padding: 96px 0;
  background: $white-ratio10;
}

.l-wrapper {
  @include inner();
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.m-footer_box:nth-of-type(1) {
  padding-right: 62px;
  width: 25%;

  img {
    display: block;
    margin-bottom: 48px;
    width: 100%;
  }

  span {
    display: block;
    text-align: center;
    font-family: $rubik;
    font-size: 12px;
    letter-spacing: 0.25px;
    color: #a9a9a9;
  }
}
.m-footer_box:nth-of-type(2) {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 62px;
  width: 75%;
}

.m-footer_link_box {
  &:nth-of-type(1) {
    padding-right: 96px;
  }

  p {
    padding-bottom: 8px;
    font-family: $rubik;
    font-size: 18px;
    font-weight: 500;
    color: #a9a9a9;
  }

  a {
    display: block;
    padding: 8px 0;
    font-size: 14px;
    font-weight: normal;
    color: $base-text-color;
  }
}
</style>
