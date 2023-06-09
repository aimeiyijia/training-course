import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { setupPerson } from './mobx-person/index.ts'
import { setupPiniaPerson } from './pinia-person/index.ts'
import {setupReduxPerson}  from './redux-person'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="demoButton" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#demoButton')!)
// setupPerson(document.querySelector<HTMLButtonElement>('#app')!)
setupReduxPerson(document.querySelector<HTMLButtonElement>('#app')!)
setupPiniaPerson()
