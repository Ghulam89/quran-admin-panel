import React, { useEffect, useState } from "react";
import StudentWrapper from "../../StudentWrapper";
import Button from "../../../components/Button";
import AddDetails from "../../studentDetails/AddDetails";
import { Link } from "react-router-dom";
const StudentDashboard = () => {
  const [open,setOpen] = useState(false);
  return (
    <StudentWrapper>
       <AddDetails setIsModalOpen={setOpen} isModalOpen={open} />
      <div className=" ">
      <h2 className="main_title ">Dashboard</h2>
      <p className=" text-[#1C1D1D]">Here overview of the courses</p>
      </div>

      <section  className=" pt-2">
        <div className=" py-4  w-full grid  grid-cols-1  xl:grid-cols-3 md:grid-cols-2 gap-5">
          <div className=" w-full"  >
            <div className="  bg-white p-5 rounded-lg flex  justify-between" style={{ boxShadow: '0px 0px 63.44px 0px #00000012' }}>
              <div>
                <h2 className=" text-[#1C1D1D] text-[20px] font-semibold">Total Enrolled</h2>
                <div className=" pt-2 flex items-center gap-3">
                  <p className="text-lg pt-3  text-[#1C1D1D]">5000</p>
                </div>
              </div>
              <div>
                <img src={require('../../../assets/image/active.png')} alt="" />
              </div>
            </div>
          </div>
          <div className=" w-full">
            <div className=" bg-white  flex justify-between p-5 rounded-lg" style={{ boxShadow: '0px 0px 63.44px 0px #00000012' }}>
              <div>
                <h2 className=" text-[#1C1D1D] text-[20px] font-semibold">Completed</h2>
                <div className=" pt-2 flex items-center gap-3">
                  <p className="text-lg pt-3 text-black">50</p>
                </div>
              </div>
              <div>
               <img src={require('../../../assets/image/completed.png')} alt="" />
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
                <img src={require('../../../assets/image/ongoing.png')} alt="" />
              </div>
            </div>
          </div> 
         </div>

         
      </section>
      
      <section>
      <h1 className=" text-xl mt-4 text-[#1C1D1D] font-semibold">Available Cources</h1>

        <div className=" grid grid-cols-1 mt-4 gap-6">
            <Link to={'/my-cource-details'} className=" bg-white flex md:flex-row flex-col  rounded-lg gap-4" style={{ boxShadow: '0px 0px 63.44px 0px #00000012' }}> 
              <div className=" md:w-3/12 w-12/12">
                <img src={require('../../../assets/image/cource1.png')} className=" w-full" alt="" />
              </div>
              <div className=" md:w-8/12 w-12/12 p-4">
              <h6 className=" pt-3 text-lg">Qirat</h6>
              <div className=" flex gap-5 pt-2  items-center">
              
                <div className=" flex gap-1 items-center">
                    <div>
                    <img src={require('../../../assets/image/Form.png')} alt="" />
                    </div>
                    <p>14 Lesson</p>
                </div>

                <div className=" flex gap-1 items-center">
                    <div>
                    <img src={require('../../../assets/image/Graduation Cap.png')} alt="" />
                    </div>
                    <p>Hafiz Naseer Akhtar</p>
                </div>
                
              </div>
              <p className=" pt-2 text-sm">Lorem ipsum dolor sit amet consectetur. Velit ac urna sed adipiscing id tristique massa vulputate diam. Pulvinar faucibus ligula nullam volutpat in. Posuere purus nunc risus tellus accum ...</p>
              <Button label={'Enroll Now'} className={' bg-secondary text-white mt-2 w-36'} />
              </div>
            </Link>


            <Link to={'/my-cource-details'} className=" bg-white flex md:flex-row flex-col  rounded-lg gap-4" style={{ boxShadow: '0px 0px 63.44px 0px #00000012' }}> 
              <div className=" md:w-3/12 w-12/12">
                <img src={require('../../../assets/image/cource1.png')} className=" w-full" alt="" />
              </div>
              <div className=" md:w-8/12 w-12/12 p-4">
              <h6 className=" pt-3 text-lg">Qirat</h6>
              <div className=" flex gap-5 pt-2  items-center">
              
                <div className=" flex gap-1 items-center">
                    <div>
                    <img src={require('../../../assets/image/Form.png')} alt="" />
                    </div>
                    <p>14 Lesson</p>
                </div>

                <div className=" flex gap-1 items-center">
                    <div>
                    <img src={require('../../../assets/image/Graduation Cap.png')} alt="" />
                    </div>
                    <p>Hafiz Naseer Akhtar</p>
                </div>
                
              </div>
              <p className=" pt-2 text-sm">Lorem ipsum dolor sit amet consectetur. Velit ac urna sed adipiscing id tristique massa vulputate diam. Pulvinar faucibus ligula nullam volutpat in. Posuere purus nunc risus tellus accum ...</p>
              <Button label={'Enroll Now'} className={' bg-secondary text-white mt-2 w-36'} />

              </div>
            </Link>

            
        </div>
      </section>
      
    </StudentWrapper>
  );
};

export default StudentDashboard;
