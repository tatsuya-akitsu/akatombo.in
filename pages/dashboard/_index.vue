<template>
  <div>
    <section class="section dashboard">
      <div class="wrapper">
        <h2>WORKS POST</h2>
        <div class="inner">
          <form
            id="postForm"
            name="postForm"
            class="form"
            method="post"
            @submit.prevent="contributionPost">
            <div class="form-item">
              <label>タイトル</label>
              <div class="form-item__inner">
                <input
                  v-model="work.title"
                  type="text"
                  name="title"
                  placeholder="POiDER.me">
              </div>
            </div>
            <div class="form-item">
              <label>URL</label>
              <div class="form-item__inner">
                <input
                  v-model="work.url"
                  type="url"
                  name="url"
                  placeholder="https://poider.me">
              </div>
            </div>
            <div class="form-item form-item__doc">
              <label>本文</label>
              <div class="form-item__inner">
                <textarea id="editor"/>
              </div>
            </div>
            <div class="form-item">
              <label>タグ</label>
              <div class="form-item__inner">
                <vue-tags-input
                  v-model="work.workTag"
                  :tags="work.workTags"
                  @tags-changed="newTags => work.workTags = newTags"
                />
              </div>
            </div>
            <div class="form-item">
              <label>サムネイル</label>
              <div class="form-item__inner">
                <div class="thumbnail-input__box">
                  <div class="thumbnail-input__inner">
                    <p class="thumbnail__note">
                      <img
                        src="/img/icons/cloud.svg"
                        alt="" >
                      クリックして画像をアップロードしてください
                    </p>
                    <input
                      type="file"
                      name="file"
                      @change="inputThumbnail"
                    >
                    <div
                      :style="{ backgroundImage: 'url(' + workThumbnail + ')' }"
                      class="thumbnail-preview__box"/>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-item form-item__time">
              <label>制作時間</label>
              <div class="form-item__inner">
                <span>デザイン</span>
                <input
                  v-model="work.times.design"
                  type="number"
                  name="designTime">
                <span>h</span>
                <span>コーディング</span>
                <input
                  v-model="work.times.coding"
                  type="number"
                  name="codingTime">
                <span>h</span>
              </div>
            </div>
            <div class="form-item">
              <label>ツール</label>
              <div class="form-item__inner">
                <vue-tags-input
                  v-model="work.toolTag"
                  :tags="work.toolTags"
                  @tags-changed="newTags => work.toolTags = newTags"
                />
              </div>
            </div>
            <div class="form-item">
              <label>カテゴリ</label>
              <div class="form-item__inner">
                <select
                  v-model="work.category"
                  name="category">
                  <option value="Photoshop">Photoshop</option>
                  <option value="Illustrator">Illustrator</option>
                  <option value="Lightroom">Lightroom</option>
                  <option value="web">web</option>
                  <option value="client">client</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              class="c-button c-button--primary">Post</button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SimpleMDE from 'simplemde'
import('simplemde/dist/simplemde.min.css')
import VueTagsInput from '@johmun/vue-tags-input'
import { mapGetters } from 'vuex'
import { T as G } from '../../store/global/types'

let editor

export default {
  name: 'Dashboard',
  head() {
    return {
      title: 'ダッシュボード'
    }
  },
  components: {
    VueTagsInput
  },
  computed: {
    ...mapGetters('global', {
      work: 'getRegistrationWork',
      workThumbnail: 'getWorkThumbnail'
    })
  },
  watch: {
    $route() {
      this.$store.dispatch(`global/${G.SET_ROUTES}`, 'dashboard')
    }
  },
  mounted() {
    this.$store.dispatch(`global/${G.SET_ROUTES}`, 'dashboard')
    editor = new SimpleMDE({ element: document.getElementById('editor') })

    const tag = document.querySelectorAll('.input')
    console.log(tag)
    tag[0].style.padding = '.8rem 1rem'
    tag[0].style.backgroundColor = '#f4f7f6'
    tag[0].style.borderRadius = '0.3rem'
    tag[0].style.border = 'none'

    tag[1].style.padding = '.8rem 1rem'
    tag[1].style.backgroundColor = '#f4f7f6'
    tag[1].style.borderRadius = '0.3rem'
    tag[1].style.border = 'none'

    const tagItem = document.querySelectorAll('.new-tag-input-wrapper')
    tagItem[0].style.margin = '0'
    tagItem[0].style.padding = '0'
    tagItem[1].style.margin = '0'
    tagItem[1].style.padding = '0'
  },
  methods: {
    inputThumbnail(e) {
      let files = e.target.files || e.dataTransfer.files
      this.$store.dispatch(`global/${G.AJAX_GET_WORK_THUMBNAIL}`, files)
    },
    contributionPost() {
      const postdata = {
        title: this.work.title,
        url: this.work.url,
        doc: editor.value(),
        worksTag: this.work.workTags,
        photo: this.workThumbnail,
        design: this.work.times.design,
        coding: this.work.times.coding,
        tool: this.work.toolTags,
        category: this.work.category
      }

      this.$store.dispatch(`global/${G.AJAX_POST_WORK_DATA}`, postdata)
      this.$router.push(`/dashboard/complete`)
    }
  }
}
</script>

<style lang="scss" scoped>
section.dashboard {
  width: 100%;
  background-color: $color-white;

  h2 {
    padding-bottom: 3rem;
    font-family: $asap;
    font-size: 1.4rem;
    text-align: center;
    color: $color-primary;
    line-height: 1;
    letter-spacing: 0.15rem;
  }
}

.wrapper {
  max-width: 640px;
  min-width: 640px;
}

form {
  text-align: center;
}

.form-item {
  margin: 2rem 0 0;
  width: 100%;

  &:nth-of-type(1) {
    margin: 0;
  }

  label {
    display: block;
    font-size: 1.4rem;
    color: $color-primary;
    text-align: left;
  }

  &:nth-last-of-type(1) {
    margin-bottom: 5rem;
  }
}

.form-item__inner {
  margin: 1rem 0 0;
}

input[type='text'],
input[type='url'],
input[type='number'] {
  padding: 1.1rem 1rem;
  font-size: 1.6rem;
  font-weight: normal;
  line-height: 1;
  color: $color-black;
  width: 100%;
  background-color: #f4f7f6;
  box-shadow: none;
  outline: none;
  border-radius: 0.3rem;
  transition: $easeInOutQuart;
  text-align: left;

  &::-webkit-input-placeholder {
    color: $color-secondary;
    font-size: 1.4rem;
    font-weight: lighter;

    @include mobile-window {
      font-size: 1.2rem;
    }
  }

  &:-moz-placeholder {
    color: $color-secondary;
    font-size: 1.4rem;
    font-weight: lighter;

    @include mobile-window {
      font-size: 1.2rem;
    }
  }

  &::-moz-placeholder {
    color: $color-secondary;
    font-size: 1.4rem;
    font-weight: lighter;

    @include mobile-window {
      font-size: 1.2rem;
    }
  }

  &:-ms-input-placeholder {
    color: $color-secondary;
    font-size: 1.4rem;
    font-weight: lighter;

    @include mobile-window {
      font-size: 1.2rem;
    }
  }

  &:focus {
    outline: none;
    border: 1px solid $color-primary;
    transition: $easeInOutQuart;
  }
}

.form-item__doc {
  text-align: left;
}

.vue-tags-input {
  max-width: 100% !important;
}

select {
  padding: 1.1rem 1rem;
  font-size: 1.6rem;
  font-weight: normal;
  line-height: 1;
  color: $color-black;
  width: 52rem;
  background-color: #f4f7f6;
  box-shadow: none;
  outline: none;
  border-radius: 0.3rem;
  transition: $easeInOutQuart;
  text-align: left;
}

.thumbnail-input__box {
  position: relative;
  height: 300px;
  border-radius: 5px;
  background-color: #f8f8f8;
}
.thumbnail-input__inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  border: 2px dashed #d1d1d1;
  background-color: transparent;
}
.thumbnail__note {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  font-size: 1.4rem;
  font-weight: bold;
  text-align: center;
  color: #d1d1d1;
  width: 100%;

  img {
    display: block;
    margin: 0 auto;
    margin-bottom: 1rem;
    width: 6rem;
  }
}
input[type='file'] {
  cursor: pointer;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
}
.thumbnail-preview__box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  &::before {
    content: '';
    display: block;
    padding-top: 60%;
  }
}

.form-item__time {
  .form-item__inner {
    font-size: 0;
    text-align: left;
  }

  input {
    display: inline-block;
    vertical-align: middle;
    margin: 0 1rem 0 0;
    width: 6rem;
  }

  span {
    display: inline-block;
    vertical-align: middle;
    margin: 0 1rem 0 0;
    font-family: $asap;
    font-size: 1.6rem;
    color: $color-black;
    line-height: 1;

    &:nth-last-of-type(1) {
      margin: 0;
    }
  }
}
</style>
