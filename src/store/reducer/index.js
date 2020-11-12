const INTITIAL_STATE = {
    pagedata: [],
    adDetail: [],
    adData: [],
    current_user: [],
    all_user: [],
    search_key: []
}


export default (state = INTITIAL_STATE, action) => {
    switch (action.type) {
        case "SETDATA":
            return ({
                ...state,
                pagedata: [action.data]
            })
        case "ADDATA":
            return ({
                ...state,
                adData: action.payload
            })
        case "ADDETAIL":
            return ({
                ...state,
                adDetail: action.payload
            })
        case "USERADD":
            return ({
                ...state,
                current_user: action.payload
            })
        case "USEROUT":
            return ({
                ...state,
                current_user: action.payload
            })
        case "ALLUSERADD":
            return ({
                ...state,
                all_user: action.payload
            })
        case "SEARCHDATA":
            return ({
                ...state,
                search_key: action.payload
            })
        default:
    }
    return state;
}