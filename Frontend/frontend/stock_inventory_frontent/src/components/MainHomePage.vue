<template>

  <div class="for-mainContent">

    <contentOne />
    <contentTwo />
    <contentThree />
    <contentFour />
  </div>
</template>

<script>
import contentOne from '@/components/For_HomePage/contentOne.vue'
import contentTwo from '@/components/For_HomePage/contentTwo.vue'
import contentThree from '@/components/For_HomePage/contentThree.vue'
import contentFour from '@/components/For_HomePage/contentFour.vue'

export default {
  name: 'HelloWorld',

    mounted() {
        this.clearSessionStorage();
    },

    methods: {
        clearSessionStorage() {
            sessionStorage.clear();
        }
    },

    components: {
        contentOne,
        contentTwo,
        contentThree,
        contentFour,
    }

}
</script>
