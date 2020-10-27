
const set_data = (data)=>{
    return(dispatch)=>{
        console.log(data)
        dispatch({type:"SETDATA",data:data})
        
    }
}
export{
    set_data
}