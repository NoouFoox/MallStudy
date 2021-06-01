export default {
    addCart(context, payload) {
        return new Promise((resolve) => {
            let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
            if (oldProduct) {
                context.commit('addConter', oldProduct)
                resolve('当前的商品数量加一')
            } else {
                payload.count = 1
                context.commit('addToCart', payload)
                resolve('添加了新的商品')
            }
        })
    }
}

