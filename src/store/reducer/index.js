const INTITIAL_STATE = {
    pagedata: [],
    adData: [{}]
}


export default (state = INTITIAL_STATE, action) => {
    console.log("ACTION", action)
    switch (action.type) {
        case "SETDATA":
            return ({
                ...state,
                pagedata: [action.data]
            })
        case "ADDATA":
            return ({
                ...state,
                adData: [...state.adData, action.data]
            })
    }
    return state;
}