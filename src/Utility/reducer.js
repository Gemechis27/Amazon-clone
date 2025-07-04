import { Type } from './action.type';

export const initialState = {
    basket: [],
    user: null // ← fixed syntax error: was `user:null do not add any thing only debug`
};

export const reducer = (state, action) => {
    switch (action.type) {

        case Type.ADD_TO_BASKET: {
            // Check if item exists
            const existItem = state.basket.find((item) => item.id === action.item.id);
            if (!existItem) {
                return {
                    ...state,
                    basket: [...state.basket, { ...action.item, amount: 1 }]
                };
            } else {
                const updateBasket = state.basket.map((item) =>
                    item.id === action.item.id
                        ? { ...item, amount: item.amount + 1 }
                        : item
                );
                return {
                    ...state,
                    basket: updateBasket
                };
            }
        }

        case Type.REMOVE_FROM_BASKET: {
            const index = state.basket.findIndex((item) => item.id === action.id);
            let newBasket = [...state.basket];

            if (index >= 0) {
                if (newBasket[index].amount > 1) {
                    newBasket[index] = {
                        ...newBasket[index],
                        amount: newBasket[index].amount - 1 // ← fixed logic bug here
                    };
                } else {
                    newBasket.splice(index, 1);
                }
                return {
                    ...state,
                    basket: newBasket // ← fixed typo: was `Basket`
                };
            }
            return state;
        }

        case Type.SET_USER:
            return {
                ...state,
                user: action.user
            };

        default:
            return state;
    }
};
