<template>
  <div>
    <section class="section article">
      <div class="wrapper">
        <h2 class="c-ttl--h2">{{ myData.work.title }}</h2>
        <div class="inner">
          <img
            :src="myData.work.photo"
            alt="" >
          <p class="description">{{ myData.work.doc }}</p>
          <div class="article-summary">
            <div class="article-summary__box">
              <p class="title">制作時間</p>
              <p class="hour">考案：{{ myData.work.design }}h</p>
              <p class="hour">デザイン：{{ myData.work.coding }}h</p>
            </div>
            <div class="article-summary__box">
              <p class="title">制作ツール</p>
              <ul class="tool">
                <li
                  v-for="(tool, i) in myData.work.tool"
                  :key="i">{{ tool.text }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="other-works">
          <h3 class="c-ttl--h3">OTHER WORKS</h3>
          <div class="other-works__inner">
            <app-card
              v-for="(work, i) in myData.other"
              :key="i"
              :worksitem="work" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppCard from '~/components/AppCard.vue'
import { mapGetters } from 'vuex'
import { T as G } from '../../../store/global/types'

export default {
  name: 'Post',
  head() {
    return {
      title: `${this.myData.work.title}`
    }
  },
  components: {
    AppCard
  },
  computed: {
    ...mapGetters('global', {
      myData: 'getWorkDetail'
    })
  },
  mounted() {
    const _orderObj = {}
    _orderObj.orderId = this.$route.params.index
    _orderObj.category = this.$route.path.split('/')[1]
    this.$store.dispatch(`global/${G.AJAX_GET_WORKS_DETAIL_DATA}`, _orderObj)
    this.$store.dispatch(
      `global/${G.AJAX_GET_DETAIL_ITEMS}`,
      this.$route.path.split('/')[1]
    )
  },
  created() {
    this.$store.dispatch(`global/${G.SET_ROUTES}`, 'Photoshop')
  }
}
</script>

<style lang="scss" scoped>
section.article {
  background-color: #f4f7f6;

  @include mobile-window {
    padding: 10rem 0 5rem;
  }
}

.inner {
  margin: 0 auto;
  max-width: 780px;

  @include mobile-window {
    max-width: 100%;
  }
}

img {
  display: block;
  margin: 0 auto;
  width: 30rem;

  @include mobile-window {
    width: 60%;
  }
}

.description {
  padding: 3rem 0 0;
  font-size: 1.4rem;
  color: $color-black;
  line-height: 1.8;

  @include mobile-window {
    font-size: 1.2rem;
  }
}

.article-summary {
  margin: 2rem 0 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}

.article-summary__box {
  flex: 1;
  margin: 0 2rem 0 0;

  &:nth-last-of-type(1) {
    margin: 0 0 0 2rem;
  }
}

.title {
  padding: 0 0 1.4rem;
  font-size: 1.6rem;
  columns: $color-black;

  @include mobile-window {
    font-size: 1.4rem;
  }
}
.hour {
  font-family: $asap;
  font-size: 1.2rem;
  color: $color-black;

  @include mobile-window {
    font-size: 1rem;
  }

  &:nth-last-of-type(1) {
    padding: 0.5rem 0 0;
  }
}

ul.tool {
  list-style-type: none;
}
ul.tool > li {
  padding: 0.5rem 0 0;
  font-family: $font-init;
  font-size: 1.2rem;
  color: $color-black;

  @include mobile-window {
    font-size: 1rem;
  }

  &:nth-of-type(1) {
    padding: 0;
  }
}

.other-works {
  margin: 15rem 0 0;
}

.other-works__inner {
  margin: 3rem 0 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
