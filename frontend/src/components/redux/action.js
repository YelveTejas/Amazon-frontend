import axios from 'axios'
export const Getproducts=()=>async(dispatch)=>{
  try {
    const data = await fetch('/get',{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
    });

    const res = await data.json();
    // console.log('res',res);
    dispatch({type:"Success_get_data",payload:res});
} catch (error) {
    dispatch({type:"Fail_data",payload:error.response});
}
}

