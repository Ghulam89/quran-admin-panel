import React, { useEffect, useState } from "react";
import Wrapper from "../Wrapper";
import { Base_url } from "../../utils/Base_url";
import axios from "axios";
import Button from "../../components/Button";
import AddTeachers from "./AddTeachers";
const Teachers = () => {
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
             <AddTeachers setIsModalOpen={setOpen} isModalOpen={open} />

      <div className=" flex justify-between items-center ">
      <div>
      <h2 className="main_title ">Teachers</h2>
      <p className=" text-[#1C1D1D]">Here overview of the teachers</p>

      </div>
      <div>
      <img onClick={()=>setOpen(true)} src={require('../../assets/image/add.png')} alt="" />
      </div>
      </div>

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
                        Email Address
                      </th>

                      <th
                        scope="col"
                        className="text-sm text-primary    font-bold px-6 py-4"
                      >
                        Password
                      </th>

                      <th
                        scope="col"
                        className="text-sm  text-primary    font-bold px-6 py-4"
                      >
                        Phone no
                      </th>

                      <th
                        scope="col"
                        className="text-sm  text-primary    font-bold px-6 py-4"
                      >
                        Address
                      </th>
                    
                      <th
                        scope="col"
                        className="text-sm  text-primary    font-bold px-6 py-4"
                      >
                        Qualification
                      </th>
                      <th
                        scope="col"
                        className="text-sm  text-primary    font-bold px-6 py-4"
                      >
                        CNIC Copy
                      </th>
                      <th
                        scope="col"
                        className="text-sm  text-primary    font-bold px-6 py-4"
                      >
                        Status
                      </th>

                      <th
                        scope="col"
                        className="text-sm  text-primary    font-bold px-6 py-4"
                      >
                        Active
                      </th>


                    </tr>
                  </thead>
                  <tbody>
  <tr className="bg-white shadow-lg mt-6   rounded-lg">
    <td className="align-middle bg-white text-sm font-normal px-6 py-3 whitespace-nowrap text-center">
      <span className="bg-green-200 text-base text-black py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline rounded-full">
        1
      </span>
    </td>
    <td className="text-sm bg-white font-normal text-center px-6 py-4 whitespace-nowrap">
      <span className="bg-green-200 text-base text-black py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline rounded-full">
        ghulam mustafa
      </span>
    </td>
    <td className="align-middle bg-white text-center text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
      <span className="bg-green-200 text-base text-black py-1 px-2.5 leading-none whitespace-nowrap rounded-full">
        gm6681328@gmail.com
      </span>
    </td>
    <td className="align-middle bg-white text-center text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
      <span className="bg-green-200 text-base text-black py-1 px-2.5 leading-none whitespace-nowrap rounded-full">
        123456
      </span>
    </td>
    <td className="align-middle bg-white font-normal px-6 py-3 whitespace-nowrap text-left">
      <div className="flex flex-col">
        <span className="bg-green-200 text-xs text-[#858585] px-2.5 leading-none whitespace-nowrap rounded-full">
          Whatsapp no
        </span>
        <span className="bg-green-200 text-[#1C8E00] px-2.5 leading-none whitespace-nowrap rounded-full">
          0320 7878778
        </span>
        <span className="bg-green-200 text-xs text-[#858585] px-2.5 leading-none whitespace-nowrap rounded-full">
          Other
        </span>
        <span className="bg-green-200 text-black px-2.5 leading-none whitespace-nowrap rounded-full">
          0320 7878778
        </span>
      </div>
    </td>
    <td className="align-middle bg-white text-center text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
      <span className="bg-green-200 text-base text-black px-2.5 leading-none whitespace-nowrap rounded-full">
        Kareem block, Lahore
      </span>
    </td>
    <td className="align-middle bg-white text-center text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
      <span className="bg-green-200 text-base text-black px-2.5 leading-none whitespace-nowrap rounded-full">
        MPhil Islamic Studies
      </span>
    </td>
    <td className="align-middle bg-white text-center text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
      <span className="bg-green-200 text-base text-secondary py-1 px-2.5 leading-none whitespace-nowrap rounded-full">
        12.jpg
      </span>
    </td>
    <td className="align-middle bg-white text-center text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
      <select className="text-[#23A118] bg-[#3FFF801F] px-3 p-2 rounded-md">
        <option>Active</option>
        <option>Inactive</option>
      </select>
    </td>
    <td className="align-middle bg-white text-center text-sm font-normal px-6 whitespace-nowrap text-left">
      <img
        className="w-6 h-6"
        src={require("../../assets/image/edit.png")}
        alt=""
      />
    </td>
  </tr>
    <tr className="bg-white shadow-lg mt-6 rounded-lg">
    <td className="align-middle bg-white text-sm font-normal px-6 py-3 whitespace-nowrap text-center">
      <span className="bg-green-200 text-base text-black py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline rounded-full">
        1
      </span>
    </td>
    <td className="text-sm bg-white font-normal text-center px-6 py-4 whitespace-nowrap">
      <span className="bg-green-200 text-base text-black py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline rounded-full">
        ghulam mustafa
      </span>
    </td>
    <td className="align-middle bg-white text-center text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
      <span className="bg-green-200 text-base text-black py-1 px-2.5 leading-none whitespace-nowrap rounded-full">
        gm6681328@gmail.com
      </span>
    </td>
    <td className="align-middle bg-white text-center text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
      <span className="bg-green-200 text-base text-black py-1 px-2.5 leading-none whitespace-nowrap rounded-full">
        123456
      </span>
    </td>
    <td className="align-middle bg-white font-normal px-6 py-3 whitespace-nowrap text-left">
      <div className="flex flex-col">
        <span className="bg-green-200 text-xs text-[#858585] px-2.5 leading-none whitespace-nowrap rounded-full">
          Whatsapp no
        </span>
        <span className="bg-green-200 text-[#1C8E00] px-2.5 leading-none whitespace-nowrap rounded-full">
          0320 7878778
        </span>
        <span className="bg-green-200 text-xs text-[#858585] px-2.5 leading-none whitespace-nowrap rounded-full">
          Other
        </span>
        <span className="bg-green-200 text-black px-2.5 leading-none whitespace-nowrap rounded-full">
          0320 7878778
        </span>
      </div>
    </td>
    <td className="align-middle bg-white text-center text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
      <span className="bg-green-200 text-base text-black px-2.5 leading-none whitespace-nowrap rounded-full">
        Kareem block, Lahore
      </span>
    </td>
    <td className="align-middle bg-white text-center text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
      <span className="bg-green-200 text-base text-black px-2.5 leading-none whitespace-nowrap rounded-full">
        MPhil Islamic Studies
      </span>
    </td>
    <td className="align-middle bg-white text-center text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
      <span className="bg-green-200 text-base text-secondary py-1 px-2.5 leading-none whitespace-nowrap rounded-full">
        12.jpg
      </span>
    </td>
    <td className="align-middle bg-white text-center text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
      <select className="text-[#23A118] bg-[#3FFF801F] px-3 p-2 rounded-md">
        <option>Active</option>
        <option>Inactive</option>
      </select>
    </td>
    <td className="align-middle bg-white text-center text-sm font-normal px-6 whitespace-nowrap text-left">
      <img
        className="w-6 h-6"
        src={require("../../assets/image/edit.png")}
        alt=""
      />
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

export default Teachers;
