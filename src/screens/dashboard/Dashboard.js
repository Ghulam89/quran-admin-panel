import React, { useEffect, useState } from "react";
import Wrapper from "../Wrapper";
import { Base_url } from "../../utils/Base_url";
import axios from "axios";
import { MdSupport } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import LineChart from "../../chart/LineChart";
import Button from "../../components/Button";
import AddDetails from "../studentDetails/AddDetails";
const Dashboard = () => {
  const [rooms, setRooms] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  useEffect(() => {
    axios
      .get(`${Base_url}/customer/getAll`)
      .then((res) => {
        console.log(res);
        setRooms(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });

      axios
      .get(`${Base_url}/key/getAll`)
      .then((res) => {
        console.log(res);
        setCategory(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });

      axios
      .get(`${Base_url}/key/getAll`)
      .then((res) => {
        console.log(res);
        setSubCategory(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const [open,setOpen] = useState(false);
  return (
    <Wrapper>
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
                <h2 className=" text-[#1C1D1D] text-[20px] font-semibold">Active Students</h2>
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
                <h2 className=" text-[#1C1D1D] text-[20px] font-semibold">Ongoing Courses</h2>
                <div className=" pt-2 flex items-center gap-3">
                  <p className="text-lg pt-3 text-black">50</p>
                </div>
              </div>
              <div>
               <img src={require('../../assets/image/ongoing.png')} alt="" />
              </div>
            </div>
          </div> 
          <div className=" w-full">
            <div className=" bg-white  text-black flex justify-between p-5 rounded-lg" style={{ boxShadow: '0px 0px 63.44px 0px #00000012' }}>
              <div>
                <h2 className=" text-[#1C1D1D] text-[20px] font-semibold">Completed</h2>
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
          <h1 className=" text-xl text-[#1C1D1D] font-semibold">Students Requests</h1>
          <div>
            <img src={require('../../assets/image/add.png')} alt="" />
          </div>
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
                        Details
                      </th>

                    

                    </tr>
                  </thead>
                  <tbody className="">
                    
                          <tr className="bg-white    border-b-8  border-white rounded-md ">
                            
                            <td style={{ boxShadow: '0px 0px 63.44px 0px #00000012' }} className="align-middle bg-white   text-sm font-normal px-6 py-4 whitespace-nowrap  text-center">
                              <span className=" text-base text-black  py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline   bg-green-200  rounded-full">
                                ghulam mustafa
                              </span>
                            </td>

                            <td  style={{ boxShadow: '0px 0px 63.44px 0px #00000012' }} className="text-sm bg-white  font-normal text-center px-6 py-4 whitespace-nowrap">
                              <span className=" text-base text-black  py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline   bg-green-200  rounded-full">
                                ghulam muhammad 
                              </span>
                            </td>
                            <td style={{ boxShadow: '0px 0px 63.44px 0px #00000012' }} className="align-middle  bg-white  text-center text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                              <span className=" text-base text-black  py-1 px-2.5 leading-none  whitespace-nowrap    bg-green-200  rounded-full">
                              03090962660
                              </span>
                            </td>
                            <td style={{ boxShadow: '0px 0px 63.44px 0px #00000012' }} className="align-middle bg-white  text-center text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                              <span className=" text-base text-black  py-1 px-2.5 leading-none  whitespace-nowrap    bg-green-200  rounded-full">
                                Pakistan
                              </span>
                            </td>

                            <td  style={{ boxShadow: '0px 0px 63.44px 0px #00000012' }} className="align-middle bg-white  text-center text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                              <span className=" text-sm text-white  leading-none  whitespace-nowrap    bg-green-200  rounded-full">
                                <Button className={' bg-secondary py-1'} label={'Add Details'} />
                              </span>
                            </td>
                            
                          </tr>
                          <tr className="bg-white    border-b-8  border-white rounded-md ">
                            
                            <td style={{ boxShadow: '0px 0px 63.44px 0px #00000012' }} className="align-middle   text-sm font-normal px-6 py-4 whitespace-nowrap  text-center">
                              <span className=" text-base text-black  py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline   bg-green-200  rounded-full">
                                ghulam mustafa
                              </span>
                            </td>

                            <td  style={{ boxShadow: '0px 0px 63.44px 0px #00000012' }} className="text-sm font-normal text-center px-6 py-4 whitespace-nowrap">
                              <span className=" text-base text-black  py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline   bg-green-200  rounded-full">
                                ghulam muhammad 
                              </span>
                            </td>
                            <td style={{ boxShadow: '0px 0px 63.44px 0px #00000012' }} className="align-middle text-center text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                              <span className=" text-base text-black  py-1 px-2.5 leading-none  whitespace-nowrap    bg-green-200  rounded-full">
                              03090962660
                              </span>
                            </td>
                            <td style={{ boxShadow: '0px 0px 63.44px 0px #00000012' }} className="align-middle text-center text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                              <span className=" text-base text-black  py-1 px-2.5 leading-none  whitespace-nowrap    bg-green-200  rounded-full">
                                Pakistan
                              </span>
                            </td>

                            <td  style={{ boxShadow: '0px 0px 63.44px 0px #00000012' }} className="align-middle text-center text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                              <span className=" text-sm text-white  leading-none  whitespace-nowrap    bg-green-200  rounded-full">
                                <Button onClick={()=>setOpen(true)} className={' bg-secondary py-1'} label={'Add Details'} />
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

      
    </Wrapper>
  );
};

export default Dashboard;
