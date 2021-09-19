export default function reducers(state, action){
    switch (action.type) {
        case 'ADD_FAV':
            return {...state, favList:[...state.favList, action.payload]}
    
        case 'REMOVE_FAV':
            return {
                ...state,
                favList: state.favList.filter(fav => action.payload !== fav.id)
            }
        default:
            return state;
    };
};