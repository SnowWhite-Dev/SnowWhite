<template>
  <div style="margin-top: 200px;"></div>
  <div class="text-center">
    <v-progress-circular :model-value="value" :rotate="360" :size="45" :width="5" color="teal">
      <v-icon style="cursor:pointer;">mdi-close</v-icon>
    </v-progress-circular>

    <v-progress-circular v-if="display" :model-value="value2" :rotate="360" :size="45" :width="5" color="teal">
      <v-icon style="cursor:pointer;">mdi-close</v-icon>
    </v-progress-circular>

    <v-btn @click="startCountdown" color="primary" class="mr-2">Start</v-btn>
    <v-btn @click="stopCountdown" color="secondary">Stop</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      interval: null,
      value: 100,
      value2: 100,
      display: false,
    }
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
  methods: {
    startCountdown() {
      if (this.interval) return;
      this.interval = setInterval(() => {
        if (this.value > 0) {
          this.value -= 10;
        } else if (!this.display) {
          this.display = true;
        } else if (this.value2 > 0) {
          this.value2 -= 10;
        } else {
          this.resetCountdown();
        }
      }, 1000);
    },
    stopCountdown() {
      clearInterval(this.interval);
      this.interval = null;
    },
    resetCountdown() {
      clearInterval(this.interval);
      this.interval = null;
      this.value = 100;
      this.value2 = 100;
      this.display = false;
    }
  },
}
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>
