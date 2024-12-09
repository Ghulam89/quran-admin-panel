import { FiMenu } from "react-icons/fi";
import Input from "../Input";


const StudentNav = ({ openSidebar, side, closeSidebar }) => {
 

  return (
    <nav
      className={`fixed   z-30 top-0 right-0   ${
        side === "left-0 md:-left-64" ? "left-0" : "left-0 md:left-64"
      }`}
    >
      <div className="  w-full flex justify-between  items-center p-4">
        <div className=" flex items-center gap-4">
          <div className=" block  md:hidden">
          {side === "left-0 md:-left-64" ? (
            <FiMenu size={30} onClick={closeSidebar} color="black" />
          ) : (
            <FiMenu size={30} color="black" onClick={openSidebar} />
          )}
          </div>

          <div className=" hidden md:block w-96">
            <Input
            
              placeholder={`Search...`}
              Icon={<img src={require('../../assets/image/Search-Magnifier.png')} className=" w-8" alt="" />}
              className={" w-full bg-white  pl-12"}
            />
          </div>
        </div>

        <div className=" flex items-center gap-5">
          <div className=" ">
             <p className=" font-medium">Johanzed Khan</p>
          </div>
          <div>
            <img
              src={require("../../assets/image/profile.png")}
              className=" w-12 h-12 rounded-full"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default StudentNav;
