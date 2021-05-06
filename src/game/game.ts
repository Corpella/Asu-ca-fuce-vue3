import { DeckType, GameType, PlayerData, SingleCard, Status } from "../types";

import { Deck } from "./deck";
import { Player } from "./player";

export class Game implements GameType {

    public players: PlayerData[];

    public playersNumber: number

    public deck: DeckType

    public dealerIndex: number

    constructor(playersNumber: number) {
        this.deck = new Deck() as DeckType
        this.deck.shuffle()
        this.playersNumber = playersNumber
        this.players = []
        this.dealerIndex = 0
    }

    public initPlayers(): void {
        for (let p = 1; p <= this.playersNumber; p++) {
            setTimeout(() => {
                this.players.push(new Player(3, p, this.deck.draw() as SingleCard))
            }, 500 * p)
        }
    }

    public giveCards(): void {
        this.players.forEach((p, i) => {
            setTimeout(() => {
                p.card = this.deck.draw()
            }, 500 * i)
        })

    }



    public updatePlayerStatus(playerPosition: number, status: Status) {
        this.players[playerPosition - 1].status = status
    }

    public swapCards(playerPosition: number): void {

        const firstPlayer = { ...this.players[playerPosition - 1] }

        let exitLoop = false
        for (const player of this.players.slice(playerPosition)) {
            switch (player.card?.rank) {
                case 10:
                    exitLoop = true
                    break
                case 9:
                    break

                default:
                    const secondPlayer = { ...this.players[player.position - 1] }
                    this.players[playerPosition - 1].removeCard(secondPlayer.card!)
                    this.players[player.position - 1].removeCard(firstPlayer.card!)
                    exitLoop = true
                    break;
            }
            if (exitLoop) {
                break
            }
        }
    }

}