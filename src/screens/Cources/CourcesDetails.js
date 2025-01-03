import React, { useState } from 'react'
import Wrapper from '../Wrapper'
import { Link } from 'react-router-dom'

const CourcesDetails = () => {
const [tab,setTabs] = useState('details')
  return (
    <Wrapper>
<h2 className="main_title ">Qirat</h2>
 <p className=" text-[#1C1D1D]">Here are details  of your courses</p>

  <div>
    <ul className=' mt-6 flex w-full gap-4 border-b'>
        <li className=' cursor-pointer' onClick={()=>setTabs('details')}>
            <span className={` ${tab==='details'?'text-[#FF7E00] border-b-2 border-[#FF7E00]':'text-gray-400'} `}>Details</span>
        </li>
        <li className=' cursor-pointer'  onClick={()=>setTabs('student')}>
            <span className={` ${tab==='student'?'text-[#FF7E00] border-b-2 border-[#FF7E00]':'text-gray-400'} `}>Students</span>
        </li>
    </ul>
  </div>

     {tab==='details'?

<section>
<div className=' flex justify-between  py-3 items-center'>
    <div  className=''>
        <p className=' text-lg m-0'>Cource Details</p>
    </div>
    <div className=' flex items-center gap-3'>
        <img src={require('../../assets/image/edit.png')} alt='' />
        <img src={require('../../assets/image/del.png')} alt='' />
    </div>
</div>
<div className=' p-3 rounded-lg' style={{ boxShadow: '0px 0px 63.44px 0px #00000012' }}>
    <span className=' m-0 text-gray-400 text-sm'>Cource Name</span>
    <h6 className=' text-lg'>Qirat</h6>

    <span className=' pt-3 m-0 text-gray-400 text-sm'>Description</span>
    <h6 className=''>Lorem ipsum dolor sit amet consectetur. Velit ac urna sed adipiscing id tristique massa vulputate diam. Pulvinar faucibus ligula nullam volutpat in. Posuere purus nunc risus tellus accumsan arcu in mattis proin. Tellus leo augue sed purus hendrerit et morbi. Viverra arcu orci sed dignissim sit ut sed. Mi malesuada ultricies odio sed at commodo scelerisque. Maecenas adipiscing pharetra praesent feugiat. Elementum pellentesque sit parturient neque varius vitae imperdiet enim integer. Mus quam arcu quis mauris at id sed.</h6>
    <ul  className=' flex flex-col gap-2 mt-5'>
        <li>
            <span  className=' m-0 text-gray-400 text-sm'>Price</span>
            <p>Rs.20,0000</p>
        </li>
        <li>
            <span  className=' m-0 text-gray-400 text-sm'>Lessons</span>
            <p>20</p>
        </li>
        <li>
            <span  className=' m-0 text-gray-400 text-sm'>Duration</span>
            <p>3 month</p>
        </li>
    </ul>
</div>
</section>:
<section className="mb-20 mt-7">
        
        <div className=" rounded-lg   overflow-x-auto">
          <div className="flex flex-col">
            <div className=" sm:-mx-6 lg:-mx-8 ">
              <div className="inline-block min-w-full sm:px-6 lg:px-8 ">
                <div className="overflow-hidden">
                  <table className="min-w-full mb-0">
                    <thead className=" ">
                      <tr className=" rounded-lg whitespace-nowrap ">
                        
                        <th
                          scope="col"
                          className=" text-sm   text-primary  font-bold px-6 py-4"
                        >
                          ID
                        </th>
  
                        <th
                          scope="col"
                          className=" text-sm text-primary   font-bold px-6 py-4"
                        >
                          Name
                        </th>
  
                        <th
                          scope="col"
                          className="text-sm text-primary    font-bold px-6 py-4"
                        >
                          Father Name
                        </th>

                        <th
                          scope="col"
                          className="text-sm text-primary    font-bold px-6 py-4"
                        >
                           Phone no
                        </th>
  
                        <th
                          scope="col"
                          className="text-sm text-primary    font-bold px-6 py-4"
                        >
                          Country
                        </th>
  
                        <th
                          scope="col"
                          className="text-sm  text-primary    font-bold px-6 py-4"
                        >
                          Teacher
                        </th>
  
                       
                        <th
                          scope="col"
                          className="text-sm  text-primary    font-bold px-6 py-4"
                        >
                          Timing
                        </th>
                        <th
                          scope="col"
                          className="text-sm  text-primary    font-bold px-6 py-4"
                        >
                          Payment
                        </th>
                        <th
                          scope="col"
                          className="text-sm  text-primary    font-bold px-6 py-4"
                        >
                          Status
                        </th>
  
                       
  
  
                      </tr>
                    </thead>
                    <tbody className="">
                      
                            <tr style={{ boxShadow: '0px 0px 63.44px 0px #00000012' }} className="bg-white    border-b-8  border-white rounded-md ">
                              
                              <td  className="align-middle bg-white   text-sm font-normal px-6 py-3 whitespace-nowrap  text-center">
                                <span className=" bg-white text-base text-black  py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline   bg-green-200  rounded-full">
                                  1
                                </span>
                              </td>
  
                              <td   className="text-sm bg-white  font-normal text-center px-6 py-4 whitespace-nowrap">
                                <Link to={'/student-details'} className=" text-base text-secondary  py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline   bg-green-200  rounded-full">
                                  ghulam mustafa 
                                </Link>
                              </td>
                              <td className="align-middle  bg-white  text-center text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                                <span className=" text-base text-black  py-1 px-2.5 leading-none  whitespace-nowrap    bg-green-200  rounded-full">
                                ghulam muhammad  
                                </span>
                              </td>
                              <td  className="align-middle bg-white  text-center text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                                <span className=" text-base text-black  py-1 px-2.5 leading-none  whitespace-nowrap    bg-green-200  rounded-full">
                                  123456
                                </span>
                              </td>

                              <td  className="align-middle bg-white  text-center text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                                <span className=" text-base text-black  py-1 px-2.5 leading-none  whitespace-nowrap    bg-green-200  rounded-full">
                                  Pakistan
                                </span>
                              </td>
  
                              <td  className="align-middle bg-white    font-normal px-6 py-4 whitespace-nowrap text-left">
                                <div className=" flex flex-col">
                                <select className=' border w-56 rounded-sm'>
                                    <option>Select Teacher</option>
                                </select>
                                
                                </div>
                              </td>
                              
                              <td  className="align-middle bg-white  text-center text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                                <span className=" text-base text-black  py-1 px-2.5 leading-none  whitespace-nowrap    bg-green-200  rounded-full">
                                  2:00 am - 2.30 am PST
                                </span>
                              </td>
  
                              <td  className="align-middle bg-white  text-center text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                                <span className=" text-base  text-secondary  py-1 px-2.5 leading-none  whitespace-nowrap    bg-green-200  rounded-full">
                                 12.jpg
                                </span>
                              </td>
  
                              <td  className="align-middle bg-white  text-center text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                                <select className=" text-[#23A118]  bg-[#3FFF801F] px-3 py-2 rounded-md">
                                  <option>Active</option>
                                  <option>Inactive</option>
  
                                </select>
                              </td>
  
  
                              
                            </tr>
                            
                         
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     }
   

    

    </Wrapper>
  )
}

export default CourcesDetails