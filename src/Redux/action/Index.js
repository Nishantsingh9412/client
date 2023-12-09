export const UpdateWindows = (data) => async(dispatch) =>  {
    try{
         dispatch({type:'WINDOWS_DATA',payload:data})
    }catch(err){
        console.log( "Windows Action Error : ",err.message)
        console.log( "Windows Action Error Stack : ",err.stack)
    }
}
export const UpdateGarden = (data) => async(dispatch) => {
    try{
        dispatch({type:'GARDEN_DATA',payload:data})
    }catch(err){
        console.log( "Garden Action Error : ",err.message)
        console.log("Garden Action Error Stack : ",err.stack)
    }
}
export const UpdateResidential = (data) => async(dispatch) => {
    try{
        dispatch({type:'RESIDENTIAL_DATA',payload:data})
    }catch(err){
        console.log( "Residential Action Error : ",err.message)
        console.log("Residential Action Error Stack : ",err.stack)
    }
}
export const UpdateCommercial = (data) => async(dispatch) => {
    try{
        dispatch({type:'COMMERCIAL_DATA',payload:data})
    }catch(err){
        console.log( "Commercial Action Error : ",err.message)
        console.log("Commercial Action Error Stack : ",err.stack)
    }
}

export const UpdateHour = (data) => async(dispatch) => {
    try{
        dispatch({type:'HOUR_DATA',payload:data})
    }catch(err){
        console.log( "Hour Action Error : ",err.message)
        console.log("Hour Action Error Stack : ",err.stack)
    }
}

export const AddressData = (data) => async(dispatch) => {
    try{
        dispatch({type:'ADDRESS_DATA',payload:data})
    }catch(err){
        console.log( "Address Action Error : ",err.message)
        console.log("Address Action Error Stack : ",err.stack)
    }
}
