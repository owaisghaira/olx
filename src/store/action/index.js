
const set_data = (data)=>{
    return(dispatch)=>{
        console.log(data)
        dispatch({type:"SETDATA",data:data})
        
    }
}
const adds_data = (data)=>{
    return(dispatch)=>{
        console.log(data)
        dispatch({type:"ADDATA",data:data})
        
    }
}
export{
    set_data,
    adds_data
}