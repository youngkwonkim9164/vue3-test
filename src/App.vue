<script setup>
import { RouterLink, RouterView } from 'vue-router'

import { ref, onMounted } from 'vue'

const count = ref(0)
const str = ref('count 10 seconds! : ')

const countdown = ref(10)

let intervalId = null

function startCountdown() {
  countdown.value = 10
  intervalId = setInterval(() => {
    countdown.value--
    if (countdown.value === 0) {
      clearInterval(intervalId)
    }
  }, 1000)
}

function endCountdown() {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
  countdown.value = 0
}

onMounted(() => {})
</script>

<template>
  <RouterView />
  <button @click="startCountdown">start</button> <br />
  <button @click="endCountdown">end</button> <br />
  <span>{{ str }} {{ countdown === 0 ? 'finish!' : countdown }} </span>
</template>

<style lang="scss" scoped></style>
