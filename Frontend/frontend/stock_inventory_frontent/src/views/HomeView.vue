<template>
  <MainHomePage />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import MainHomePage from '../components/MainHomePage.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    MainHomePage,
  },
});
</script>
