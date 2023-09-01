import { generateId } from "../utils/generateId.js"

export class Trivia {
    //NOTE you can call the properties whatever you want, but you do need to map to their naming conventions
    constructor({ category, type, difficulty, question, correct_answer, incorrect_answers }) {
        this.id = generateId()
        this.category = category
        this.type = type
        this.difficulty = difficulty
        this.question = question
        this.correctAnswer = correct_answer
        this.incorrectAnswers = incorrect_answers || []
    }

    get TriviaCardsList() {
        return /*html*/ `
        <div class="col-6 col-md-4" onclick="app.TriviasController.pullACard('${this.id}')">
        <div class=" card p-0">
        <h4 class="text-center fw-bold text-primary">${this.category}</h4>
        <h4 class="text-center fw-bold text-primary">${this.type}</h4>
        <p class="text-center mb-1">🗺${this.question}</p>
        </div>
        </div>
        `
    }

    get PullACard() {
        return /*html*/ `
        <div class="col-6 col-md-4">
        <div class=" card p-0">
        <h4 class="text-center fw-bold text-primary">${this.category}</h4>
        <h4 class="text-center fw-bold text-primary">${this.type}</h4>
        <p class="text-center mb-1">🗺${this.question}</p>
        <p class="text-center mb-1">${this.correctAnswer}${this.incorrectAnswers}</p>
        </div>
        </div>
        `
    }
}


// // Mick built this here, and it goes..?
// get TriviaCard() {
//     return `<div class="col-6 col-md-4"> Top Div of Trivia Card
//     <div class=" card p-0">
//       <h4 class="text-center fw-bold text-primary">${this.name}</h4>
//       <img class="img-fluid" src="${this.image}"
//         alt="picture of ${this.name}">
//       <div class="px-2">
//         <p class="text-center fw-bold mb-1">🗺️ ${this.LocationButtons}</p>
//         <p class="text-center fw-bold">💼${this.drops}</p>
//         <p>${this.description}</p>
//       </div>
//     </div>
//   </div>`
// }

// for secondary or additional functionality
// get CategoryButtons(){

// }