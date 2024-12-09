import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DoctorWrapper from "../DoctorWrapper";
const DoctorCources = () => {
 
  const [open,setOpen] = useState(false);
  return (
    <DoctorWrapper>
      
      <div className=" flex justify-between items-center ">
      <div>
      <h2 className="main_title ">Cources</h2>
      <p className=" text-[#1C1D1D]">Here overview of the courses</p>

      </div>
      <div>
      </div>
      </div>

      <section  className=" pt-2">
        <div className=" py-4  w-full grid  grid-cols-1  xl:grid-cols-3 md:grid-cols-2 gap-5">
          <div className=" w-full"  >
            <div className="  bg-white p-5 rounded-lg flex  justify-between" style={{ boxShadow: '0px 0px 63.44px 0px #00000012' }}>
              <div>
                <h2 className=" text-[#1C1D1D] text-[20px] font-semibold">Completed</h2>
                <div className=" pt-2 flex items-center gap-3">
                  <p className="text-lg pt-3  text-[#1C1D1D]">5000</p>
                </div>
              </div>
              <div>
                <img src={require('../../assets/image/active.png')} alt="" />
              </div>
            </div>
          </div>
          <div className=" w-full">
            <div className=" bg-white  flex justify-between p-5 rounded-lg" style={{ boxShadow: '0px 0px 63.44px 0px #00000012' }}>
              <div>
                <h2 className=" text-[#1C1D1D] text-[20px] font-semibold">Ongoing </h2>
                <div className=" pt-2 flex items-center gap-3">
                  <p className="text-lg pt-3 text-black">50</p>
                </div>
              </div>
              <div>
               <img src={require('../../assets/image/completed.png')} alt="" />
              </div>
            </div>
          </div> 
          <div className=" w-full">
            <div className=" bg-white  text-black flex justify-between p-5 rounded-lg" style={{ boxShadow: '0px 0px 63.44px 0px #00000012' }}>
              <div>
                <h2 className=" text-[#1C1D1D] text-[20px] font-semibold">Total Cources</h2>
                <div className=" pt-2 flex items-center gap-3">
                  <p className="text-lg pt-3 text-black">50</p>
                </div>
              </div>
              <div>
                <img src={require('../../assets/image/ongoing.png')} alt="" />
              </div>
            </div>
          </div> 
         </div>

         
      </section>
      
      <section>
        <div className=" grid grid-cols-2 mt-4 gap-6">
           

            <Link to={'/my-cource-details'} className=" bg-white p-5 items-center flex md:flex-row flex-col  rounded-lg gap-4" style={{ boxShadow: '0px 0px 63.44px 0px #00000012' }}> 
              <div className=" w-20 h-20 rounded-lg overflow-hidden">
                <img src={require('../../assets/image/cource1.png')} className=" w-full" alt="" />
              </div>
              <div className="">
              <h6 className="  text-lg flex gap-3">Qirat  <img src={require('../../assets/image/LockSimple.png')} alt="" /> </h6>
              <div className=" flex gap-5 pt-2  items-center">
              
                <div className=" flex gap-1 items-center">
                    <div>
                    <img src={require('../../assets/image/Clock.png')} alt="" />
                    </div>
                    <p>90 Days</p>
                </div>

                <div className=" flex gap-1 items-center">
                   
                    <p>Payment : <span className="  text-sm text-red">Overdue: 12 July, 2024</span> </p>
                </div>
                
              </div>
           
              </div>
            </Link>
            <Link to={'/my-cource-details'} className=" bg-white p-5 items-center flex md:flex-row flex-col  rounded-lg gap-4" style={{ boxShadow: '0px 0px 63.44px 0px #00000012' }}> 
              <div className=" w-20 h-20 rounded-lg overflow-hidden">
                <img src={require('../../assets/image/cource1.png')} className=" w-full" alt="" />
              </div>
              <div className="">
              <h6 className="  text-lg flex gap-3">Qirat  <img src={require('../../assets/image/LockSimple.png')} alt="" /> </h6>
              <div className=" flex gap-5 pt-2  items-center">
              
                <div className=" flex gap-1 items-center">
                    <div>
                    <img src={require('../../assets/image/Clock.png')} alt="" />
                    </div>
                    <p>90 Days</p>
                </div>

                <div className=" flex gap-1 items-center">
                   
                    <p>Payment : <span className="  text-sm text-red">Overdue: 12 July, 2024</span> </p>
                </div>
                
              </div>
           
              </div>
            </Link>
            <Link to={'/my-cource-details'} className=" bg-white p-5 items-center flex md:flex-row flex-col  rounded-lg gap-4" style={{ boxShadow: '0px 0px 63.44px 0px #00000012' }}> 
              <div className=" w-20 h-20 rounded-lg overflow-hidden">
                <img src={require('../../assets/image/cource1.png')} className=" w-full" alt="" />
              </div>
              <div className="">
              <h6 className="  text-lg flex gap-3">Qirat  <img src={require('../../assets/image/LockSimple.png')} alt="" /> </h6>
              <div className=" flex gap-5 pt-2  items-center">
              
                <div className=" flex gap-1 items-center">
                    <div>
                    <img src={require('../../assets/image/Clock.png')} alt="" />
                    </div>
                    <p>90 Days</p>
                </div>

                <div className=" flex gap-1 items-center">
                   
                    <p>Payment : <span className="  text-sm text-red">Overdue: 12 July, 2024</span> </p>
                </div>
                
              </div>
           
              </div>
            </Link>
            <Link to={'/my-cource-details'} className=" bg-white p-5 items-center flex md:flex-row flex-col  rounded-lg gap-4" style={{ boxShadow: '0px 0px 63.44px 0px #00000012' }}> 
              <div className=" w-20 h-20 rounded-lg overflow-hidden">
                <img src={require('../../assets/image/cource1.png')} className=" w-full" alt="" />
              </div>
              <div className="">
              <h6 className="  text-lg flex gap-3">Qirat  <img src={require('../../assets/image/LockSimple.png')} alt="" /> </h6>
              <div className=" flex gap-5 pt-2  items-center">
              
                <div className=" flex gap-1 items-center">
                    <div>
                    <img src={require('../../assets/image/Clock.png')} alt="" />
                    </div>
                    <p>90 Days</p>
                </div>

                <div className=" flex gap-1 items-center">
                   
                    <p>Payment : <span className="  text-sm  text-green">Overdue: 12 July, 2024</span> </p>
                </div>
                
              </div>
           
              </div>
            </Link>

            
        </div>
      </section>
      
    </DoctorWrapper>
  );
};

export default DoctorCources;
