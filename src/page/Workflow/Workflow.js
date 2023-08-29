import React from 'react'
import "./Workflow.css"
import { HiArrowLongRight } from 'react-icons/hi2'
import { workflow } from '../../data/data'
const Workflow = () => {
  return (
    <div className='workflow'>
        <div className='workflow_title'>
        <h5><HiArrowLongRight />Workflow</h5>
        <h1>A Simple yet effective three <span>step procress.</span></h1>
        </div>
        <div className='workflow_container'
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-duration="500">
            {
                workflow.map((workflowlist,index)=>{
                    return(
                        <div className='workflow_main' key={index}>
                            <h3>{workflowlist.title}</h3><br></br>
                            <span>{index}</span><br></br>
                            <p>{workflowlist.details}</p>
                        </div>
                    )
                })
            }

        </div>
    </div>
  )
}

export default Workflow