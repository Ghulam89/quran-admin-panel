import React from 'react'
import Wrapper from './Wrapper'

const StudentDetails = () => {
  return (
    <Wrapper>
     <h2 className="main_title ">Student Details</h2>
 <p className=" text-[#1C1D1D]">Here are details  of the Student</p>


 <div className=' p-3 mt-10 rounded-lg' style={{ boxShadow: '0px 0px 63.44px 0px #00000012' }}>
    <div className=' flex justify-between items-center'>
        <div> 
        <span className=' m-0 text-gray-400 text-sm'>Student Name</span>
        <h6 className=' text-lg'>ghulam mustafa</h6>
        </div>
        <div>
        <span className=' m-0  text-primary text-sm'>Time</span>
        <h6 className=' text-lg'>4:00pm-4:50pm PST</h6> 
        </div>
    </div>
    <span className=' m-0 text-gray-400 text-sm'>Father Name</span>
    <h6 className=' text-lg'>Kareem Shah</h6>
    <span className=' m-0 text-gray-400 text-sm'>Age</span>
    <h6 className=' text-lg'>23</h6>
    <span className=' m-0 text-gray-400 text-sm'>Address</span>
    <h6 className=' text-lg'>Kareem Block, sargodha</h6>

    <span className=' m-0 text-gray-400 text-sm'>Country</span>
    <h6 className=' text-lg'>Pakistan</h6>

    <span className=' m-0 text-gray-400 text-sm'>Phone Number</span>
    <h6 className=' text-lg'>0320 787878</h6>


    <span className=' m-0 text-gray-400 text-sm'>Payment</span>
    <h6 className=' text-lg text-green'>Due Date: 12 July, 2024</h6>



</div>
    </Wrapper>
  )
}

export default StudentDetails