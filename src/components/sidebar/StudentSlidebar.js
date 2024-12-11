import { Link, useLocation } from "react-router-dom";
import Button from "../Button";
const StudentSidebar = ({ side, closeSidebar }) => {
  const location = useLocation();
  const isActive = (route) => location.pathname.includes(route);

  return (
    <div
      style={{ boxShadow: "0px 0px 63.44px 0px #00000012" }}
      className={`fixed top-0  ${side} sm:left-0 w-64 overflow-x-auto h-full bg-white z-10 transition-all`}
    >
      <i
        className="bi bi-x-lg absolute text-black top-4 right-4 sm:hidden block cursor-pointer text-lg"
        onClick={closeSidebar}
      ></i>
      <div className="p-5 flex justify-between flex-col h-full">
        <div className=" flex flex-col gap-4">
          <div className="  ">
            {/* <h1 className=" text-white text-4xl  font-bold">
          CEAT
        </h1> */}
            <img src={require("../../assets/image/admin_logo.png")} alt="" />
          </div>

          <ul className=" flex flex-col  gap-2">
            <li
              className={` ${
                isActive("/student-dashboard") ? " bg-primary text-white" : ""
              } px-4  rounded-lg cursor-pointer       transition-all py-2 text-black flex items-center `}
            >
              <svg
                width="27"
                className=" mr-2"
                height="27"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.47213 11.4454C12.4493 7.46817 14.4379 5.47957 16.8448 5.09835C17.6221 4.97524 18.414 4.97524 19.1913 5.09835C21.5982 5.47957 23.5868 7.46817 27.564 11.4454V11.4454C29.2956 13.1769 30.1613 14.0427 30.7006 15.1011C30.879 15.4512 31.0296 15.8147 31.151 16.1884C31.5181 17.3181 31.5181 18.5425 31.5181 20.9913V27.3994C31.5181 29.8847 29.5034 31.8994 27.0181 31.8994V31.8994C24.5328 31.8994 22.5181 29.8847 22.5181 27.3994V25.8994C22.5181 23.4141 20.5034 21.3994 18.0181 21.3994V21.3994C15.5328 21.3994 13.5181 23.4141 13.5181 25.8994V27.3994C13.5181 29.8847 11.5033 31.8994 9.01807 31.8994V31.8994C6.53279 31.8994 4.51807 29.8847 4.51807 27.3994V20.9913C4.51807 18.5425 4.51807 17.3181 4.88514 16.1884C5.00656 15.8147 5.15714 15.4512 5.33552 15.1011C5.87481 14.0427 6.74058 13.1769 8.47213 11.4454V11.4454Z"
                  stroke={`${isActive("/student-dashboard") ? "#fff" : "#1C1D1D"}`}
                  stroke-width="2.25"
                  stroke-linejoin="round"
                />
              </svg>

              <Link to="/student-dashboard" className="text-lg capitalize">
                Dashboard
              </Link>
            </li>

            <li
              className={` ${
                isActive("/my-cources") ? " bg-primary text-white" : ""
              } px-4  cursor-pointer  rounded-lg    transition-all py-2 text-black flex items-center`}
            >
              <svg
                width="27"
                className=" mr-2"
                height="27"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.8789 14.4637V23.5618C27.8789 24.5235 27.8789 25.0043 27.7007 25.4251C27.642 25.5636 27.5696 25.6959 27.4845 25.8199C27.226 26.1968 26.8209 26.4558 26.0107 26.9739L20.8239 30.2905C19.8848 30.891 19.4152 31.1912 18.8976 31.2504C18.7278 31.2698 18.5564 31.2698 18.3867 31.2504C17.869 31.1912 17.3994 30.891 16.4603 30.2905L11.2735 26.9739C10.4633 26.4558 10.0582 26.1968 9.79969 25.8199C9.71462 25.6959 9.64221 25.5636 9.58353 25.4251C9.40525 25.0043 9.40525 24.5235 9.40525 23.5618V14.4637M32.1421 12.3998L20.3356 6.96509C19.5963 6.62479 19.2267 6.45464 18.836 6.42085C18.707 6.40969 18.5772 6.40969 18.4482 6.42085C18.0575 6.45464 17.6879 6.62479 16.9486 6.96509L5.14209 12.3998L16.8773 18.0812C17.6464 18.4535 18.0309 18.6397 18.4395 18.6766C18.5743 18.6888 18.7099 18.6888 18.8447 18.6766C19.2533 18.6397 19.6378 18.4535 20.4069 18.0812L32.1421 12.3998ZM32.1421 12.3998V26.2856C32.1421 27.167 32.1421 27.6077 31.9891 28.0011C31.9386 28.1309 31.8763 28.2556 31.8028 28.3738C31.5798 28.7323 31.2272 28.9967 30.5221 29.5256L28.7671 30.8418"
                  stroke={`${isActive("/my-cources") ? "#fff" : "#1C1D1D"}`}
                  stroke-width="2.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <Link to="/my-cources" className="text-lg capitalize">
               My Courses
              </Link>
            </li>
            
          </ul>
        </div>
         <div>
          <div className=" flex gap-2 items-center pb-3">
            <img src={require('../../assets/image/Phone.png')} alt="" />
            <p  className=" m-0 text-gray-400">Contact Us</p>
          </div>
          <p className=" pb-4 font-semibold text-primary">(808) 998-34256</p>
         <Button
          IconLeft={
            <img src={require("../../assets/image/logout.png")} alt="" />
          }
          className={
            " bg-transparent   py-3 w-full border border-[#FF1F00] text-black"
          }
          label={"Logout"}
        />

          </div> 
       
      </div>
    </div>
  );
};
export default StudentSidebar;
