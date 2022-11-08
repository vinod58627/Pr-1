


const initialState = {
    products: [
        { id: 1, name: "vinod", age: 26, gender: "male" },
        { id: 2, name: "kumar", age: 22, gender: "male" },
        { id: 3, name: "suman", age: 23, gender: "male" },
        { id: 4, name: "hepsi", age: 29, gender: "female"}
    ],
    users: []

}
const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'Register': {
            return {
                ...state,
                users: [state.users, action.payload]
            }
        }
        default:
            return state;




    }

}
export default reducer
