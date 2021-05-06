import { defineStore } from 'pinia'

import { Game } from "../game/game"

import { GameType } from '../types/'

export const useGame = defineStore({
    id: 'useGame',
    state: () => ({
        // game: {} as GameType
    }),
    getters: {
    },
    actions: {
        newGame(playersNumber: number): void {
            // this.game = new Game(playersNumber)
        },
        // startGame(): void {
        //     this.game.startGame()
        // }
    }
})