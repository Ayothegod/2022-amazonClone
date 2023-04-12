export const initialState = {
    basket : [    ],
user : null,
}

export const getBasketTotal = (basket) => 
        basket?.reduce((amount, item) => item.price + amount , 0)
    



// reducer Function
const reducer = (state, action) => {
    // console.log(action)
    switch(action.type){
        case 'ADD_USER':
            //LOGIC TO ADD USER
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            // LOGIC TO ADD ITEM TO BASKET
            return {
                ...state,
                basket:[...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            // lOGIC TO REMOVE FROM BASKET
            
            // we cloned the basket
            let newBasket = [...state.basket]

            // 
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            )

            if(index >= 0){
                // item exists,then remove it
                newBasket.splice(index,1)
            } else {
                console.warn(`cannot remove (id:${action.id} as its not available`)
            }

            return {
                ...state,
                basket : newBasket
            };
        default:
            return state;
    }
}

export default reducer