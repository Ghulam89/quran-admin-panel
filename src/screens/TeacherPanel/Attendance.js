import React, { useRef, useState } from 'react'
import TeacherWrapper from '../TeacherWrapper'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Attendance = () => {
    const dates = [
        { day: "MAR", date: 12 },
        { day: "MAR", date: 13 },
        { day: "MAR", date: 14 },
        { day: "MAR", date: 15 },
        { day: "MAR", date: 16 },
        { day: "MAR", date: 17 },
        { day: "MAR", date: 18 },
        { day: "MAR", date: 19 },
      ];
    
      const [selectedDate, setSelectedDate] = useState(15);
      const containerRef = useRef(null);
    
     
      const scroll = (direction) => {
        const container = containerRef.current;
        const scrollAmount = direction === "left" ? -150 : 150;
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      };
  return (
    <TeacherWrapper>
      <div className="flex justify-between items-center space-x-2 px-3 bg-[#D9D9D942] rounded-md">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className=" text-white bg-primary  rounded-full  hover:bg-orange"
      >
        <FiChevronLeft className="w-6 h-6" />
      </button>

      <div
        ref={containerRef}
        className="flex justify-between w-full items-center space-x-2 overflow-x-auto scrollbar-hide"
      >
        {dates.map(({ day, date }) => (
          <button
            key={date}
            onClick={() => setSelectedDate(date)}
            className={`flex flex-col items-center px-6 py-2  ${
              selectedDate === date
                ? " bg-orange text-white font-bold"
                : "text-gray-800 hover:bg-gray-200"
            }`}
          >
            <span className="text-sm font-medium">{day}</span>
            <span className="text-lg font-semibold">{date}</span>
          </button>
        ))}
      </div>

      
      <button
        onClick={() => scroll("right")}
        className=" text-white bg-primary  rounded-full  hover:bg-orange"
      >
        <FiChevronRight className="w-6 h-6" />
      </button>
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
                        className=" text-sm text-primary   font-bold px-6 py-4"
                      >
                        Name
                      </th>

                      <th
                        scope="col"
                        className="text-sm text-primary    font-bold px-6 py-4"
                      >
                        Cource
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
                       Timing
                      </th>

                      <th
                        scope="col"
                        className="text-sm  text-primary    font-bold px-6 py-4"
                      >
                        Mark Attendance
                      </th>
                    
                     
                    

                    </tr>
                  </thead>
                  <tbody className="">
                    
                          <tr className="bg-white    border-b-8  border-white rounded-md ">
                            
                            <td style={{ boxShadow: '0px 0px 63.44px 0px #00000012' }} className="align-middle bg-white   text-sm font-normal px-6 py-3 whitespace-nowrap  text-center">
                              <span className=" bg-white text-base text-black  py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline   bg-green-200  rounded-full">
                              ghulam mustafa 
                              </span>
                            </td>

                            <td  style={{ boxShadow: '0px 0px 63.44px 0px #00000012' }} className="text-sm bg-white  font-normal text-center px-6 py-4 whitespace-nowrap">
                              <span className=" text-base text-black  py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline   bg-green-200  rounded-full">
                                Qirat
                              </span>
                            </td>
                            <td style={{ boxShadow: '0px 0px 63.44px 0px #00000012' }} className="align-middle  bg-white  text-center text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                              <span className=" text-base text-black  py-1 px-2.5 leading-none  whitespace-nowrap    bg-green-200  rounded-full">
                              Pakistan
                              </span>
                            </td>
                            <td style={{ boxShadow: '0px 0px 63.44px 0px #00000012' }} className="align-middle bg-white  text-center text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                              <span className=" text-base text-black  py-1 px-2.5 leading-none  whitespace-nowrap    bg-green-200  rounded-full">
                                2:00am - 2:30 am PST
                              </span>
                            </td>

                           

                           
                            <td style={{ boxShadow: '0px 0px 63.44px 0px #00000012' }} className="align-middle bg-white  text-center text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                              <select className=" text-[#23A118]  bg-[#3FFF801F] px-3 py-2 rounded-md">
                                <option>Present</option>
                                <option>Absent</option>

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

    </TeacherWrapper>
  )
}

export default Attendance