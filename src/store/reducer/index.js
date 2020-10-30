const INTITIAL_STATE = {
    pagedata : []
}


export default (state = INTITIAL_STATE,action) => {
   console.log("ACTION",action)
    switch(action.type){
        case "SETDATA":
            return({
                ...state,
                pagedata:[action.data]
            })
    }
    return state;
}