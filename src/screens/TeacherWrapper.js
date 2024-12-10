import { useState } from "react";
import TeacherSidebar from "../components/sidebar/TeacherSidebar";
import TeacherNav from "../components/adminNav/TeacherNav";
const TeacherWrapper = ({ children }) => {
  const [side, setSide] = useState("-left-64 md:left-0");

  console.log(side);
  const openSidebar = () => {
    setSide("left-0 md:-left-64");
  };
  const closeSidebar = () => {
    setSide("-left-64 md:left-0");
  };

  return (
    <>
      <TeacherSidebar side={side} closeSidebar={closeSidebar} />
      <TeacherNav
        openSidebar={openSidebar}
        closeSidebar={closeSidebar}
        side={side}
      />
      <section
        className={`ml-0 ${
          side === "left-0 md:-left-64" ? "ml-0 " : "ml-0 md:ml-64"
        }   min-h-screen pt-24 px-4`}
      >
        <div className=" text-black md:px-4 px-0 py-6">{children}</div>
      </section>
    </>
  );
};
export default TeacherWrapper;
