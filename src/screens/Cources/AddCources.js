import React, { useState } from "react";
import { toast } from "react-toastify";
import { Base_url } from "../../utils/Base_url";
import axios from "axios";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { MdClose, MdOutlineFileUpload } from "react-icons/md";
import Modal from "../../components/modal";

const AddCources = ({ isModalOpen, setIsModalOpen, closeModal, setUsers }) => {
  const [planData, setPlanData] = useState({
    name: "",
    price: "",
    maxImages: "",
    maxCars: "",
    listingDuration: "",
    featureAdsDays: "",
    refreshBoost: "",
    has360View: false,
  });

  const [loading, setLoader] = useState(false);

  console.log(planData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPlanData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const bannerSubmit = async (e) => {
   
  };

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={closeModal} className={' rounded-md'}>
        <div className="">
          <div className="p-3 flex justify-between items-center">
            <div>

            </div>
            <h1 className="capitalize h4  font-medium">Add Cource</h1>
            <MdClose onClick={() => setIsModalOpen(false)} size={25} />
          </div>
          <hr />
          <div className="p-5">
            <form onSubmit={bannerSubmit}>
              <div className="flex gap-5 flex-wrap">
                <div className="w-[100%]">
                  <Input  label={'Course Name'} placeholder={'name'} className={'  bg-gray-100 px-2 w-full'} />
                </div>

                <div className="w-[48%]">
                  <label className=" block mb-2 text-sm text-gray-900 font-medium ">
                    Duration
                  </label>
                  <select
                    name={"name"}
                    value={planData.name}
                    onChange={handleChange}
                    className=" w-full py-3  outline-none bg-lightGray  p-2.5 text-black placeholder:text-primary rounded-md "
                  >
                    <option>No. of days/months</option>
                    <option value={"Silver"}>4</option>
                    <option value={"Gold"}>9</option>
                    <option value={"Platinum"}>12</option>
                  </select>
                </div>

                <div className="w-[48%]">
                  <label className=" block mb-2 text-sm text-gray-900 font-medium ">
                    Period Type
                  </label>
                  <select
                    name={"name"}
                   
                    className=" w-full py-3  outline-none bg-lightGray  p-2.5 text-black placeholder:text-primary rounded-md "
                  >
                    <option>Select Period Type</option>
                    <option value={"Silver"}>2:00</option>
                    <option value={"Gold"}>5:00</option>
                    <option value={"Platinum"}>7:00</option>
                  </select>
                </div>

                <div className=" w-[100%]">
                  <label>Description</label>
                  <textarea rows={6} className=" w-full bg-[#F6F6F6]"></textarea>
                </div>


                <div
                  className="w-full border-dashed border-[#9E9E9E] bg-[#F6F6F6] border-2 rounded-lg p-4 cursor-pointer"
                  
                >
                  <div className="bg-[#F6F6F6] mx-auto w-14 flex justify-center items-center h-20 rounded-2xl">
                    <MdOutlineFileUpload size={30} className=" text-primary" />
                  </div>
                  <p className="text-primary font-medium mt-3 text-center">
                    <span className="text-secondary">Click here</span> to upload or drop CNIC
                  </p>
                 
                  <input
                    type="file"
                   
                    style={{ display: "none" }}
                    
                  />
                </div>
                
              </div>

              {loading === true ? (
                <button
                  disabled
                  type="button"
                  class=" bg-[#FB5722]   w-full text-center  mt-3 py-2.5 rounded-lg text-white uppercase font-semibold cursor-pointer"
                >
                  <svg
                    aria-hidden="true"
                    role="status"
                    class="inline w-4 h-4 me-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  Loading...
                </button>
              ) : (
               <div className=" flex justify-center pt-5">
                 <Button
                label="Add"
                type="submit"
                className="  bg-secondary mt-3  text-white py-2.5   w-44"
              />
               </div>
              )}
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddCources;
