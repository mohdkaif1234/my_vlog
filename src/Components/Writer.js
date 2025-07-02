import React from 'react'
import person from "../Components/R.jpg"
const Writer = () => {
  return (
    <div className='smallCard-containeer'>
    <div className='smallcard-parent'>
     <div>
     <div className='smallcard-persion-img bg' style={{backgroundImage:`url(${person})`}}>

</div>
     </div>
     <div className='smallcard-userdata write-data '>
     <div className='write-name'>WRITTEN BY </div>
      <div className='h5'>Mohd Kaif</div>
    <div>01 july 2025</div>
    
     </div>
    </div>
  
  </div>
  )
}

export default Writer