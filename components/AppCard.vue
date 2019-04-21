<template>
  <div class="ordinal-card">
    <a
      v-if="worksitem.url"
      :href="worksitem.url"
      target="_blank">
      <div class="thumbnail">
        <img
          :src="worksitem.photo"
          alt="" >
      </div>
      <div class="body">
        <p class="title">{{ worksitem.title }}</p>
        <p class="description">{{ worksitem.doc }}</p>
        <ul>
          <li
            v-for="(tag, i) in worksitem.worksTag"
            :key="i">{{ tag.text }}</li>
        </ul>
      </div>
    </a>
    <a
      v-else-if="worksitem.route"
      @click="$router.push(worksitem.route)">
      <div class="thumbnail">
        <img
          :src="worksitem.photo"
          alt="" >
      </div>
      <div class="body">
        <p class="title">{{ worksitem.title }}</p>
        <p class="description">{{ worksitem.doc }}</p>
        <ul>
          <li
            v-for="(tag, i) in worksitem.worksTag"
            :key="i">{{ tag.text }}</li>
        </ul>
      </div>
    </a>
    <a
      v-else
      :index="worksitem.key"
      :category="worksitem.category"
      @click="$router.push(`/${worksitem.category}/work/${worksitem.key}`)">
      <div class="thumbnail">
        <img
          :src="worksitem.photo"
          alt="" >
      </div>
      <div class="body">
        <p class="title">{{ worksitem.title }}</p>
        <p class="description">{{ worksitem.doc }}</p>
        <ul>
          <li
            v-for="(tag, i) in worksitem.worksTag"
            :key="i">{{ tag.text }}</li>
        </ul>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    worksitem: { type: Object, required: true }
  }
}
</script>

<style lang="scss" scoped>
.ordinal-card {
  cursor: pointer;
  margin-top: 3rem;
  padding: 1rem;
  width: 30%;
  background-color: $color-white;
  transition: $easeInOutQuart;

  @include mobile-window {
    width: 100%;
  }

  a {
    display: block;
  }

  &:hover {
    box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.08);
    transition: $easeInOutQuart;
  }
}

.thumbnail {
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;

  img {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: auto;
  }

  &::before {
    content: '';
    display: block;
    padding-top: 18.3rem;
  }

  &::after {
    content: '';
    cursor: pointer;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: #f7fbfe;
    opacity: 0.85;
    transition: $easeInOutQuart;
  }
}

.ordinal-card:hover {
  .thumbnail::after {
    width: 100%;
    transition: $easeInOutQuart;
  }
}

.ordinal-card:nth-last-of-type(1),
.ordinal-card:nth-last-of-type(2) {
  .thumbnail {
    img {
      margin: 0 auto;
      width: auto;
      height: 18.3rem;
    }
  }
}

.body {
  padding: 2rem 0 0;
}
.title {
  font-family: $asap, $font-init;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.22rem;
  color: $color-black;
}
.description {
  padding: 1rem 0 0;
  font-family: $font-init;
  font-size: 1rem;
  font-weight: normal;
  color: $color-black;
  letter-spacing: 0.25rem;
  line-height: 1.8;
}

ul {
  list-style-type: none;
  padding-top: 2rem;
}

ul > li {
  display: inline-block;
  vertical-align: middle;
  margin-right: 0.5rem;
  padding: 0.6rem 1rem;
  font-family: $asap;
  font-size: 0.8rem;
  font-weight: normal;
  color: $color-white;
  letter-spacing: 0.1rem;
  line-height: 1;
  border-radius: 0.3rem;
  background-color: #df4b3b;
}
</style>
