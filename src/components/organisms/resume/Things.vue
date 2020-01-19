<template>
  <section class="l-resume_things">
    <div class="l-wrapper">
      <h2>{{ title }}</h2>
      <div class="p-resume_things_box">
        <p v-html="intro"></p>
        <img src="@/static/images/resume/about_thumbnail.svg" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
import labels from "@/documents/index";

export default {
  data: () => {
    return {
      title: "",
      intro: ""
    };
  },
  mounted() {
    this.title = labels.about.things.title;
    this.intro = labels.about.things.intro;
  }
};
</script>

<style lang="scss" scoped>
.l-resume_things {
  padding: 62px 0 48px;
}

.l-wrapper {
  @include inner();
}

h2 {
  padding-bottom: 64px;
  font-family: $rubik;
  font-size: 124px;
  font-weight: bold;
  text-align: left;
}

.p-resume_things_box {
  font-size: 0;

  img,
  p {
    display: inline-block;
    vertical-align: top;
  }

  p {
    padding-right: 48px;
    font-size: 16px;
    line-height: 1.6;
    width: 80%;
  }

  img {
    width: 20%;
  }
}
</style>
