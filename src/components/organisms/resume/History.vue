<template>
  <div class="l-resume_history">
    <div class="l-wrapper">
      <div class="p-resume_tools">
        <div class="m-resume_tool_box">
          <p class="m-resume_tool_title">{{ design.title }}</p>
          <ul>
            <li v-for="(item, index) in design.data" :key="index">
              <img :src="item | src" alt="" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
        <div class="m-resume_tool_box">
          <p class="m-resume_tool_title">{{ analysis.title }}</p>
          <ul>
            <li v-for="(item, index) in analysis.data" :key="index">
              <img src="@/static/images/icon/icon_analytics.svg" alt="" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
        <div class="m-resume_tool_box">
          <p class="m-resume_tool_title">{{ develop.title }}</p>
          <ul>
            <li v-for="(item, index) in develop.data" :key="index">
              <img :src="item | src" alt="" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
        <div class="m-resume_tool_box">
          <p class="m-resume_tool_title">{{ learning.title }}</p>
          <ul>
            <li v-for="(item, index) in learning.data" :key="index">
              <template v-if="item === 'Laravel'">
                <img src="@/static/images/icon/icon_laravel.svg" alt="" />
              </template>
              <template v-if="item === 'Ruby on Rails'">
                <img src="@/static/images/icon/icon_rails.svg" alt="" />
              </template>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import labels from "@/documents/index";

export default {
  filters: {
    src(name) {
      return require(`@/static/images/icon/icon_${name}.svg`);
    }
  },
  data: () => {
    return {
      design: {},
      analysis: {},
      develop: {},
      learning: {}
    };
  },
  mounted() {
    this.design = labels.about.label.design;
    this.analysis = labels.about.label.analysis;
    this.develop = labels.about.label.develop;
    this.learning = labels.about.label.learning;
  }
};
</script>

<style lang="scss" scoped>
.l-resume_history {
  padding: 79px 0;
}

.l-wrapper {
  @include inner();
}

.p-resume_tools {
  width: 100%;
}

.m-resume_tool_box {
  &:not(:nth-last-of-type(1)) {
    padding-bottom: 32px;
  }

  .m-resume_tool_title {
    padding-bottom: 18px;
    font-family: $rubik;
    font-weight: 500;
  }

  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }

  li {
    padding: 8px 24px 8px 0;
    font-size: 0;
  }
  li > img {
    display: inline-block;
    vertical-align: middle;
    width: 24px;
  }
  li > span {
    display: inline-block;
    vertical-align: middle;
    padding-left: 8px;
    font-size: 14px;
    font-weight: normal;
    letter-spacing: 0.25px;
  }
}
</style>
