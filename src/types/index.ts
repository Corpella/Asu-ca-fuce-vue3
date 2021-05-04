export enum SuitEnum {
    b, c, d, s
}

export type Suit = 'b' | 'c' | 'd' | 's' | ''

export type Rank = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10


export interface SingleCard {
    suit: Suit,
    rank: Rank,
    fullCard: string,
    cardImage: string
}

export type Lives = 0 | 1 | 2 | 3

export type Status = 'isWaiting' | 'isDone' | 'isDead'

export interface DeckType {
    deck: SingleCard[],
    shuffle(): void,
    draw(): SingleCard

}

export interface PlayerData {
    card?: SingleCard | null,
    lives: Lives,
    position: number,
    status: Status,
    removeCard(receivingCard: SingleCard): void
    removeLife(): void
}


export interface GameType {
    players: PlayerData[],
    startGame(): void,
    swapCards(fpIndex: number): void

}
