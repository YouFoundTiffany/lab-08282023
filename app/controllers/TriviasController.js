import { AppState } from "../AppState.js"
import { Trivia } from "../models/TriviaModel.js"
import { triviasService } from "../services/TriviasService.js"
import { setHTML } from "../utils/Writer.js"

function _drawTriviaCards() {
    console.log('drawing trivia cards list')
    let content = ''
    let trivias = AppState.trivias
    trivias.forEach(t => content += t.TriviaCardsList)
    setHTML('trivias', content)
}

function _PullACard() {
    console.log('pulling a card')
    let content = ''
    let trivia = AppState.trivias

    setHTML('trivias', content)
}

export class TriviasController {
    constructor() {
        console.log('trivia time!')
        this.getTrivias()
        AppState.on('trivias', _drawTriviaCards)
        // listen to the active and draw it
    }
    async getTrivias() {
        await triviasService.getTrivia()
    }

    async pullACard(cardId) {
        console.log('finding', cardId);
        triviasService.pullACard(cardId)
    }
}