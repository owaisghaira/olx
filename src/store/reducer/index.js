const INTITIAL_STATE = {
    users : [
        {
        name : "Sarim",
        email: "sarim@gmail.com"
    },
    {
        name:'owais',
        email:'owais@gmail.com'
    }
]
}


export default (state = INTITIAL_STATE,action) => {
   console.log("ACTION",action)
    switch(action.type){
        case "SETDATA":
            return({
                ...state,
                users:[...state.users,action.data]
            })
    }
    return state;
}