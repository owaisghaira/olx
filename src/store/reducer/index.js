const INTITIAL_STATE = {
    pagedata: [],
    adDetail:[],
    adData: [
        // {
        //     discript: 'Mint Condition',
        //     rupees: '14000',
        //     make: 'Samsung',
        //     stat: 'karachi',
        //     adtitle: 's7 edge'
        // },
        // {
        //     discript: 'Mint Condition',
        //     rupees: '14000',
        //     make: 'Samsung',
        //     stat: 'karachi',
        //     adtitle: 's7 edge'
        // }
    ]
}


export default (state = INTITIAL_STATE, action) => {
    // console.log("ACTION==>", action)
    switch (action.type) {
        case "SETDATA":
            return ({
                ...state,
                pagedata: [action.data]
            })
        case "ADDATA":
            // console.log("state==>", action.data)
            return ({
                ...state,
                adData: action.payload
            })
        case "ADDETAIL":
            // console.log("state==>", action.data)
            return ({
                ...state,
                adDetail: action.payload
            })
        default:
    }
    return state;
}