<template>
  <v-app>
    <v-main>
      <!-- <navbarT v-if="!isLoginPage" /> -->
      <navbarT />
      <router-view />
      <footerV />
      <!-- <footerV v-if="!isLoginPage" /> -->
    </v-main>
  </v-app>
</template>

<script>
import navbarT from '@/components/For_App/navbar.vue'
import footerV from '@/components/For_App/footer.vue'
export default {
  name: 'App',

  data: () => ({
    //
  }),

  computed: {
    // Compute whether the current route is 'login'
    isLoginPage() {
      return this.$route.name === 'login' || this.$route.name === 'register';
    }
  },

  components: {
    navbarT,
    footerV
  }
}
</script>
