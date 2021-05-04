import { SingleCard, Suit, Rank, SuitEnum, DeckType } from "../types"


export class Card implements SingleCard {
    public readonly suit: Suit;
    public readonly rank: Rank;

    constructor(suit: Suit, rank: Rank) {
        this.suit = suit
        this.rank = rank
    }

    public get fullCard(): string {
        return `${this.suit}${this.rank}`
    }
    public get cardImage(): string {
        return `/cards/${this.fullCard}.png`
    }
}

export class Deck implements DeckType {
    public deck: Card[]
    constructor() {
        this.deck = []
        for (let s = 0; s < 4; s++) {
            for (let r: Rank = 1; r < 11; r++) {
                this.deck.push(new Card(SuitEnum[s] as Suit, r as Rank))
            }
        }
    }
    public shuffle(): void {
        this.deck.sort(() => Math.floor(Math.random() * 3 - 1));
    }
    public draw(): Card {
        return this.deck.shift() as Card
    }
}


