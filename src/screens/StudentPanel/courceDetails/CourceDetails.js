import React, { useEffect, useState } from "react";
import StudentWrapper from "../../StudentWrapper";
import Button from "../../../components/Button";
import AddPayment from "../addPayment/AddPayment";
const StudentCourceDetails = () => {
 
  const [open,setOpen] = useState(false);
  
  return (
    <StudentWrapper>
       <AddPayment setIsModalOpen={setOpen} isModalOpen={open} />
      <div className=" flex justify-between items-center ">
      <div>
      <h2 className="main_title ">Qirat</h2>
      <p className=" text-[#1C1D1D]">Here are details  of your Qirat</p>

      </div>
      <div>
      </div>
      </div>

      <section  className=" pt-2">
        <div className=" py-4  w-full grid  grid-cols-1  xl:grid-cols-2 md:grid-cols-2 gap-5">
          <div className=" w-full"  >
            <div className="  bg-white p-5 rounded-lg flex  justify-between" style={{ boxShadow: '0px 0px 63.44px 0px #00000012' }}>
              <div>
                <h2 className=" text-[#1C1D1D] text-[20px] font-semibold">Completed Lessons</h2>
                <div className=" pt-2 flex items-center gap-3">
                  <p className="text-lg pt-3  text-[#1C1D1D]">5000</p>
                </div>
              </div>
              <div>
                <img src={require('../../../assets/image/completed.png')} alt="" />
              </div>
            </div>
          </div>
          <div className=" w-full">
            <div className=" bg-white  flex justify-between p-5 rounded-lg" style={{ boxShadow: '0px 0px 63.44px 0px #00000012' }}>
              <div>
                <h2 className=" text-[#1C1D1D] text-[20px] font-semibold">Absents </h2>
                <div className=" pt-2 flex items-center gap-3">
                  <p className="text-lg pt-3 text-black">50</p>
                </div>
              </div>
              <div>
               <img src={require('../../../assets/image/absent.png')} alt="" />
              </div>
            </div>
          </div> 
         
         </div>

         
      </section>
      
      <section>
      <h1 className=" text-xl mt-4 text-[#1C1D1D] font-semibold">Cource Details</h1>
      <div className=' p-3 mt-5 rounded-lg' style={{ boxShadow: '0px 0px 63.44px 0px #00000012' }}>
    <span className=' m-0 text-gray-400 text-sm'>Cource Name</span>
    <h6 className=' text-lg'>Qirat</h6>

    <span className=' pt-3 m-0 text-gray-400 text-sm'>Description</span>
    <h6 className=''>Lorem ipsum dolor sit amet consectetur. Velit ac urna sed adipiscing id tristique massa vulputate diam. Pulvinar faucibus ligula nullam volutpat in. Posuere purus nunc risus tellus accumsan arcu in mattis proin. Tellus leo augue sed purus hendrerit et morbi. Viverra arcu orci sed dignissim sit ut sed. Mi malesuada ultricies odio sed at commodo scelerisque. Maecenas adipiscing pharetra praesent feugiat. Elementum pellentesque sit parturient neque varius vitae imperdiet enim integer. Mus quam arcu quis mauris at id sed.</h6>
    <ul  className=' flex flex-col gap-2 mt-5'>
        <li>
            
        <div className=" flex gap-1 items-center">
                    <div>
                    <img src={require('../../../assets/image/Graduation Cap.png')} alt="" />
                    </div>
                    <p>Hafiz Naseer Akhtar</p>
                </div>
                
        </li>
        <li>
            <span  className=' m-0 text-gray-400 text-sm'>Price</span>
            <p className=" pb-2">Rs.20,0000</p>
            <Button onClick={()=>setOpen(true)}  label={'Pay Now'} className={' bg-secondary text-white py-1'} />
        </li>
       
        <li>
            <span  className=' m-0 text-gray-400 text-sm'>Duration</span>
            <p>3 month</p>
        </li>
    </ul>
</div>
      </section>
      
    </StudentWrapper>
  );
};

export default StudentCourceDetails;
