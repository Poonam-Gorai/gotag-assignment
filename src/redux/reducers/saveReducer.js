import data from "../store/data"

const SaveReducer = (state = data,action) => {
switch (action.type) {
    case "SAVE_MANAGER":
        {
            state = [...state, action.payload];
            return state;
        }
    case "EDIT_MANAGER":
        {
            const editState = state.map(list => list.id === action.payload.id?
                action.payload : list);
                state = editState;
                return state;
        }
    
    default : return state;
}
}
export default SaveReducer; 