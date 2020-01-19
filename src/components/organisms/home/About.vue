<template>
  <section class="l-main_about">
    <p class="p-main_about_background_number">{{ about.year }}</p>
    <div class="l-wrapper">
      <h2>{{ titles.about }}</h2>
      <div class="p-main_about_inner">
        <div class="p-main_about_info">
          <div class="m-main_about_box">
            <span>{{ about.label }}</span>
            <p class="p-main_about_name">{{ about.name }}</p>
            <p v-html="about.intro" class="p-main_about_text"></p>
          </div>
          <div class="m-main_about_box">
            <img src="@/static/images/home/stripe.svg" alt="" />
            <img src="@/static/images/home/portrait.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import labels from "@/documents/index";

export default {
  data: () => {
    return {
      titles: {},
      about: {}
    };
  },
  mounted() {
    this.titles = labels.home.titles;
    this.about = labels.home.about;
  }
};
</script>

<style lang="scss" scoped>
.l-main_about {
  position: relative;
  padding: 124px 0;
  overflow: hidden;
}

.p-main_about_background_number {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: $rubik;
  font-size: 48rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: $white-ratio12;
  width: 128%;
  z-index: 50;
}

.l-wrapper {
  @include inner();
  position: relative;
  z-index: 100;
}

h2 {
  padding-bottom: 48px;
  font-family: $rubik;
  font-weight: 500;
  font-size: 36px;
  text-align: center;
}

.p-main_about_info {
  display: flex;
}

.m-main_about_box {
  position: relative;
  width: 50%;

  &:nth-of-type(1) {
    padding-right: 32px;
  }
  &:nth-of-type(2) {
    padding-left: 32px;
  }

  span {
    display: block;
    padding: 48px 0 64px;
    font-family: $rubik;
    font-size: 16px;
    color: $white-ratio26;
    line-height: 1;
  }

  .p-main_about_name {
    padding-bottom: 32px;
    font-family: $rubik;
    font-weight: 500;
    font-size: 48px;
    line-height: 1;
  }

  .p-main_about_text {
    padding-bottom: 78px;
    font-size: 14px;
    line-height: 1.6;
  }

  img {
    display: block;
  }
  img:nth-of-type(1) {
    width: 100%;
  }
  img:nth-of-type(2) {
    position: absolute;
    top: 48px;
    left: 80px;
    width: 40%;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.16);
  }
}
</style>
