import { defineStore } from 'pinia'

import { Game } from "../game/game"

import { GameType, PlayerData } from '../types/'

export const useGame = defineStore({
    id: 'useGame',
    state: () => ({
        game: {} as GameType
    }),
    getters: {
    },
    actions: {
        newGame(playersNumber: number): void {
            this.game = new Game(playersNumber)
        },
        initGame(): void {
            if (this.game.players.length) {

                this.game.initPlayers()
            }
            else {
                console.log(`Game instance doesn't exist`)
            }
        }
    }
})