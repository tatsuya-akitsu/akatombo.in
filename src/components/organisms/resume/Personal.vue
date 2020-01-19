<template>
  <div class="l-resume_personal">
    <div class="l-wrapper">
      <h3>{{ title }}</h3>
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <a :href="item.target" target="_blank">
            <template v-if="item.icon !== undefined">
              <img :src="item.icon | src" alt="" />
            </template>
            <template v-else>
              <span class="p-personal_emoji">👐</span>
            </template>
            <span>{{ item.label }}</span>
          </a>
        </li>
      </ul>
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
      title: "",
      list: []
    };
  },
  mounted() {
    this.title = labels.about.personal.title;
    this.list = labels.about.personal.data;
  }
};
</script>

<style lang="scss" scoped>
.l-resume_personal {
  padding-bottom: 64px;
}

.l-wrapper {
  @include inner();
}

h3 {
  padding-bottom: 32px;
  font-size: 32px;
}

ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 50%;
}

li {
  a {
    padding: 8px 0;
    font-size: 0;
  }

  img,
  span {
    display: inline-block;
    vertical-align: middle;
  }

  img {
    width: 20px;
  }

  .p-personal_emoji {
    font-size: 24px;
  }

  span:nth-last-of-type(1) {
    padding-left: 10px;
    font-family: $rubik;
    font-size: 16px;
    font-weight: normal;
    color: $base-text-color;
  }
}
</style>
