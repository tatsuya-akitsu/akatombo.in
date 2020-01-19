<template>
  <section class="l-resume_intro">
    <div class="l-wrapper">
      <h2>{{ title }}</h2>
      <div class="p-resume_text">
        <img src="@/static/images/resume/about_thumbnail.svg" alt="" />
        <p v-html="intro"></p>
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
    this.title = labels.about.title;
    this.intro = labels.about.intro;
  }
};
</script>

<style lang="scss" scoped>
.l-resume_intro {
  padding: 146px 0 79px;
}

.l-wrapper {
  @include inner();
  text-align: right;
}

h2 {
  padding-bottom: 54px;
  font-family: $rubik;
  font-size: 124px;
  font-weight: bold;
  text-align: left;
}

.p-resume_text {
  margin-left: auto;
  margin-right: 0;
  font-size: 0;
  width: 85%;

  img {
    display: inline-block;
    vertical-align: top;
    width: 20%;
  }
}

p {
  display: inline-block;
  vertical-align: top;
  padding-left: 24px;
  font-size: 16px;
  line-height: 1.6;
  text-align: left;
  width: 80%;
}
</style>
