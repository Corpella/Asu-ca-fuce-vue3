<template>
  <button @click="setVisibility">click</button>
  <div class="card-display w-full">
    <template class="card" v-for="(p, i) in game.players" :key="i">
      <div class="card-image" :style="calcRotation(i)">
        <div class="flipper" :class="state.showCards ? 'flip' : ''">
          <img
            :src="p.card.cardImage"
            alt="img"
            :class="state.showCards ? '' : 'hidden'"
          />
          <img
            src="/cards/0.png"
            :class="state.showCards ? 'hidden' : ''"
            alt=""
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import {
  CSSProperties,
  defineComponent,
  onBeforeMount,
  reactive,
  ref,
} from 'vue'

import { Game } from '../game/game'
import { GameType } from '../types'

export default defineComponent({
  setup: () => {
    const setVisibility = () => {
      state.showCards = !state.showCards
    }

    const game = ref<GameType | null>(null)

    const state = reactive({
      showCards: false as Boolean,
    })

    const calcRotation = (index: number): CSSProperties => {
      const itemsCount = game.value!.players.length,
        itemAngle = 360 / itemsCount,
        itemWidth = 88,
        dealerOffset =
          game.value!.dealerIndex * (360 / game.value!.playersNumber),
        uniqueAngle = (index + 1) * itemAngle + dealerOffset

      console.log(dealerOffset)

      return {
        transform: `rotate(${uniqueAngle}deg) translate(${
          itemWidth * 3.5
        }px) rotate(${90}deg)`,
      }
    }

    onBeforeMount(() => {
      game.value = new Game(6)
      game.value.initPlayers()
    })
    return {
      calcRotation,
      state,
      game,
      setVisibility,
    }
  },
})
</script>

<style lang="scss">
.card-display {
  position: absolute;
  top: 330px;
  left: 358px;
  perspective: 1000;
}
.card-image {
  position: absolute;
  transition: 1s cubic-bezier(0, 0, 0, 1.3);
}
.flipper {
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;
}
.hidden {
  visibility: hidden;
}
.flip {
  transform: rotateY(360deg);
}
</style>
