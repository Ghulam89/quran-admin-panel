import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import AddDetails from "../studentDetails/AddDetails";
import { Link } from "react-router-dom";
import DoctorWrapper from "../TeacherWrapper";
const DoctorDashboard = () => {
  const [open,setOpen] = useState(false);
  return (
    <DoctorWrapper>
       <AddDetails setIsModalOpen={setOpen} isModalOpen={open} />
      <div className=" ">
      <h2 className="main_title ">Dashboard</h2>
      <p className=" text-[#1C1D1D]">Here overview of the courses</p>
      </div>

      <section  className=" pt-2">
        <div className=" py-4  w-full grid  grid-cols-1  xl:grid-cols-2 md:grid-cols-2 gap-5">
          <div className=" w-full"  >
            <div className="  bg-white p-5 rounded-lg flex  justify-between" style={{ boxShadow: '0px 0px 63.44px 0px #00000012' }}>
              <div>
                <h2 className=" text-[#1C1D1D] text-[20px] font-semibold">Assigned Students</h2>
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
                <h2 className=" text-[#1C1D1D] text-[20px] font-semibold">Ongoing Cources</h2>
                <div className=" pt-2 flex items-center gap-3">
                  <p className="text-lg pt-3 text-black">50</p>
                </div>
              </div>
              <div>
               <img src={require('../../assets/image/completed.png')} alt="" />
              </div>
            </div>
          </div> 
          
         </div>

         
      </section>
      
      <section className="mb-20 mt-7">
        <div className=" flex pb-5  justify-between items-center">
          <h1 className=" text-xl text-[#1C1D1D] font-semibold">My Students</h1>
         
        </div>
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
                        Name
                      </th>

                      <th
                        scope="col"
                        className=" text-sm text-primary   font-bold px-6 py-4"
                      >
                        Father Name
                      </th>

                      <th
                        scope="col"
                        className="text-sm text-primary    font-bold px-6 py-4"
                      >
                       Age
                      </th>

                      <th
                        scope="col"
                        className="text-sm text-primary    font-bold px-6 py-4"
                      >
                        Address
                      </th>

                      <th
                        scope="col"
                        className="text-sm  text-primary    font-bold px-6 py-4"
                      >
                        Country
                      </th>
                      <th
                        scope="col"
                        className="text-sm  text-primary    font-bold px-6 py-4"
                      >
                        Timing
                      </th>

                    

                    </tr>
                  </thead>
                  <tbody className="">
                    
                          <tr className="bg-white    border-b-8  border-white rounded-md ">
                            
                            <td style={{ boxShadow: '0px 0px 63.44px 0px #00000012' }} className="align-middle bg-white   text-sm font-normal px-6 py-4 whitespace-nowrap  text-center">
                              <span className=" text-base text-black  py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline   bg-green-200  rounded-full">
                                Arisha Khan
                              </span>
                            </td>

                            <td  style={{ boxShadow: '0px 0px 63.44px 0px #00000012' }} className="text-sm bg-white  font-normal text-center px-6 py-4 whitespace-nowrap">
                              <span className=" text-base text-black  py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline   bg-green-200  rounded-full">
                                 Muhammad Khan 
                              </span>
                            </td>
                            <td style={{ boxShadow: '0px 0px 63.44px 0px #00000012' }} className="align-middle  bg-white  text-center text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                              <span className=" text-base text-black  py-1 px-2.5 leading-none  whitespace-nowrap    bg-green-200  rounded-full">
                              24
                              </span>
                            </td>
                            <td style={{ boxShadow: '0px 0px 63.44px 0px #00000012' }} className="align-middle bg-white  text-center text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                              <span className=" text-base text-black  py-1 px-2.5 leading-none  whitespace-nowrap    bg-green-200  rounded-full">
                                kareem block, Lahore
                              </span>
                            </td>
                            <td style={{ boxShadow: '0px 0px 63.44px 0px #00000012' }} className="align-middle bg-white  text-center text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                              <span className=" text-base text-black  py-1 px-2.5 leading-none  whitespace-nowrap    bg-green-200  rounded-full">
                                Pakistan
                              </span>
                            </td>
                            <td style={{ boxShadow: '0px 0px 63.44px 0px #00000012' }} className="align-middle bg-white  text-center text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                              <span className=" text-base text-black  py-1 px-2.5 leading-none  whitespace-nowrap    bg-green-200  rounded-full">
                                2:00 am-2:30 am PST
                              </span>
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
      
    </DoctorWrapper>
  );
};

export default DoctorDashboard;
