import { createSlice, configureStore, createSelector } from "@reduxjs/toolkit"
import { memoize } from "proxy-memoize"
const personSlice = createSlice({
  name: "person",
  initialState: {
    firstName: "liuxiaofan",
    age: 18,
  },
  reducers: {
    addAge: (state) => {
      state.age += 1
    },
  },
})

export const { addAge } = personSlice.actions

const store = configureStore({
  reducer: personSlice.reducer,
})

const nameAndAge = memoize((state) => {
  console.log(state, "state")
  return state.firstName + state.age
})

// console.log(selectSubtotal(store), "123")

// init
export function setupReduxPerson(element: HTMLButtonElement) {
  const el = document.createElement("div")

  // 更新视图
  const changeName = () => {
    el.innerHTML = `<div>
                      <div>名字：${store.getState().firstName}</div>
                      <div>年龄：${store.getState().age}</div>
                      <div>名字+年龄：${nameAndAge(store.getState())}</div>
                    </div>`
  }

  // 可以订阅 store
  store.subscribe(() => {
    console.log(store.getState(), "订阅")
    console.log(nameAndAge(store.getState()), "123")
    changeName()
  })

  element.appendChild(el)
  element.addEventListener("click", () => store.dispatch(addAge()))
  changeName()
}
