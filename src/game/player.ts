import { PlayerData, SingleCard, Lives, Status } from "../types"

export class Player implements PlayerData {

    public card: SingleCard | null;
    public lives: Lives;
    public position: number
    public status: Status

    constructor(lives: Lives, position: number, card?: SingleCard, isDealer?: boolean) {

        this.card = card ? card : null

        if (card) {
            this.status = [9, 10].includes(this.card!.rank) ? 'isDone' : 'isWaiting'
        }
        else {
            this.status = 'isWaiting'
        }

        this.position = position
        this.lives = lives
    }

    public removeCard(receivingCard: SingleCard): void {
        this.card = receivingCard
    }

    public removeLife(): void {
        this.lives--
    }

}