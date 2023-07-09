import Vue from 'vue'

export function ProcessingTree(arr) {
  let newArr = arr.filter((i) => !i.pid || i.pid == '0')
  let child = arr.filter((i) => i.pid)
  newArr.forEach((i) => {
    Vue.set(i, 'children', [])
    child.forEach((e) => {
      if (e.pid == i.id) {
        i.children.unshift(e)
      }
    })
  })
  return newArr
}
