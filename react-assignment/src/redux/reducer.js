
let initialState = ""

export const reducer = (state = initialState,action)=>{
    switch(action.type){
        case "SET_DATA": return action.payload
    }
}