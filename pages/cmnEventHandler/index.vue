<template>
  <div/>
</template>

<script>
import { T as G } from '../../store/global/types'
import { mapGetters } from 'vuex'

export default {
  name: 'CmnEventHandler',
  head: () => {
    return {
      title: '読み込み中'
    }
  },
  computed: {
    ...mapGetters('global', {
      myUserInfo: 'getUserInfo'
    })
  },
  mounted() {
    this.$store.dispatch(`global/${G.GET_USER_INFO}`)
    this.$router.push(`/dashboard/${this.myUserInfo.uid}`)
  }
}
</script>
