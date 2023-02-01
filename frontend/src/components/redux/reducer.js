

const initalstate={
  products:[]
}

export const reducer=(state=initalstate,action)=>{
  const {payload,type} = action
  switch(type){
    case 'Success_get_data':
        return {products:payload}
    case 'Fail_data':
        return {...state}     
    default:
        return state
  }
}