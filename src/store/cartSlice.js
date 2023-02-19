const { createSlice } = require("@reduxjs/toolkit");

let initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalAmount: 0
}

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addItem: (state, action) => {
            let newItem = action.payload

            let existingItem = state.cartItems.find(item => item.id === newItem.id)

            state.totalQuantity++

            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(existingItem.price)
            } else {
                state.cartItems.push({
                    id: newItem.id,
                    title: newItem.title,
                    imgURL: newItem.imgURL,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            }

            state.totalAmount = state.cartItems.reduce((total, item) =>
                total + (Number(item.price) * Number(item.quantity)), 0
            )


            // console.log(state.totalAmount);

        },

        deleteItem: (state, action) => {
            let id = action.payload

            let productToDelete = state.cartItems.find(item => item.id === id)
            state.cartItems = state.cartItems.filter(item => item.id !== id)

            state.totalQuantity = state.totalQuantity - productToDelete.quantity

            state.totalAmount = state.cartItems.reduce((total, item) =>
                total + (Number(item.price) * Number(item.quantity)), 0
            )

        }
    }
})

export default cartSlice.reducer;

export const { addItem, deleteItem } = cartSlice.actions
