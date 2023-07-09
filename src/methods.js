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
// import vue from 'vue'

// export function settreelist(arr) {
//   var list = arr
//   var newlist = list.filter((item) => !item.pid)
//   var Secondarylist = list.filter((item) => item.pid)
//   console.log(newlist, Secondarylist)

//   newlist.forEach((item) => {
//     vue.set(item, 'children', [])

//     Secondarylist.forEach((ite) => {
//       if (ite.pid == item.id) {
//         item.children.push(ite)
//       }
//     })
//   })
//   return newlist
// }
