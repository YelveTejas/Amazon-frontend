import React from 'react'

const Option = () => {
  return (
    <div style={{display:"flex"}}>
        <select>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
    
        </select>
        <p  style={{cursor:'pointer'}}>Delete</p><span>|</span>
        <p  className='forremovemedia'>Save or Later</p><span>|</span>
        <p  className='forremovemedia'>See More like this</p>
    </div>
  )
}

export default Option