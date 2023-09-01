import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { TriviasController } from "./controllers/TriviasController.js"
export const router = [
  {
    path: '',
    controller: TriviasController,
    view: /*html*/`
    <div class="container-fluid">
    <button onclick="app.TriviasController.getTrivias()" class="btn btn-success"> get all trivias again </button>
    <section id="trivias" class="row g-1">
      

    </section>
    </div>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]