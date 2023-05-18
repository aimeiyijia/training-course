import { createApp, watch } from "vue"
import { createPinia, defineStore } from "pinia"

const pinia = createPinia()
const app = createApp({})

app.use(pinia)
app.mount("#vueApp")

const usePersonStore = defineStore("person", {
  // 定义状态仓库
  state: () => ({
    firstName: "liuxiaofan",
    age: 18,
  }),
  // computed
  getters: {
    nameAndAge: (state) => state.firstName + state.age,
  },
  // action
  actions: {
    addAge() {
      this.age++
    },
  },
})
const UsePersonStore = usePersonStore()

// init
export function setupPiniaPerson() {
  const el = document.querySelector<HTMLDivElement>("#vueApp")!

  // 更新视图
  const changeName = () => {
    el.innerHTML = `<div>
                      <div>名字：${UsePersonStore.firstName}</div>
                      <div>年龄：${UsePersonStore.age}</div>
                      <div>名字+年龄：${UsePersonStore.nameAndAge}</div>
                    </div>`
  }

  el.addEventListener("click", () => {
    console.log(UsePersonStore, "点击")
    UsePersonStore.addAge()
  })

  // 借助vue的watch
  watch(
    () => UsePersonStore.age,
    () => {
      changeName()
    }
  )

  // 订阅
  // UsePersonStore.$subscribe((mutation, state) => {
  //   if (mutation.events.key == "age" && mutation.events.newValue) {
  //     changeName()
  //   }
  // })

  changeName()
}
