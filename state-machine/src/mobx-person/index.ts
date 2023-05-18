import { observable, computed, reaction, action } from "mobx"
// 定义状态仓库
const person = observable({
  firstName: "liuxiaofan",
  age: 18,
})

// action
const addAge = action(function (){
  person.age++
})

// computed
const nameAndAge = computed(() => person.firstName + person.age)

// watch
reaction(
  () => person.age,
  () => console.log(person.age, "年龄变化")
)

// init
export function setupPerson(element: HTMLButtonElement) {
  const el = document.createElement("div")

  // 更新视图
  const changeName = () => {
    el.innerHTML = `<div>
                      <div>名字：${person.firstName}</div>
                      <div>年龄：${person.age}</div>
                      <div>名字+年龄：${nameAndAge}</div>
                    </div>`
  }
  // 年龄发生变化 -> 更新视图
  reaction(
    () => person.age,
    () => changeName()
  )

  element.appendChild(el)
  element.addEventListener("click", addAge)
  changeName()
}
