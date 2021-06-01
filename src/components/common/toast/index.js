import Toast from "./Toast";

const obj = {}

obj.install = function (Vue) {
    const toastCu = Vue.extend(Toast)
    // console.log(Toast)
    const toast = new toastCu()
    toast.$mount(document.createElement('div'))
    document.body.appendChild(toast.$el)
    Vue.prototype.$toast = toast
}

export default obj
