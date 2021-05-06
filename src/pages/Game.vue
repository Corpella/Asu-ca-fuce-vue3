<template>
  <div class="flex w-full">
    <div class="w-1/5 flex justify-center">
      <div>side</div>
    </div>
    <div class="w-3/5 flex justify-center center">
      <div class="game-view">
        <img class="table-view" src="../assets/table/Wood.jpg" alt="" />
        <CardDisplay />
      </div>
    </div>
    <div class="w-1/5 flex justify-center">
      <div>side</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import CardDisplay from '../components/CardDisplay.vue'

export default defineComponent({
  components: { CardDisplay },
  setup: () => {
    return {}
  },
})
</script>

<style lang="css">
.center {
  min-width: 800px;
}
.table-view {
  height: 800px;
  width: 800px;
  border-radius: 50%;
}
.game-view {
  height: 800px;
  position: relative;
}
</style>
