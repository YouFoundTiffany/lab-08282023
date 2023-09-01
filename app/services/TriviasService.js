import { AppState } from "../AppState.js"
import { Trivia } from "../models/TriviaModel.js"



class TriviasService {
    pullACard(cardId) {
        throw new Error("Method not implemented.")
    }
    async getTrivia() {
        console.log('getting trivia')
        let response = await fetch('https://opentdb.com/api.php?amount=10&category=20&type=multiple')
        //Wait for the fetch to comeback before you csonsole log the response
        const data = await response.json()
        console.log(data.results)
        // review make sure to console log the data you are looking for at the level it is.
        let newTrivias = data.results.map(trivia => new Trivia(trivia))
        console.log('🤯', newTrivias)
        AppState.trivias = newTrivias
    }
}

export const triviasService = new TriviasService()