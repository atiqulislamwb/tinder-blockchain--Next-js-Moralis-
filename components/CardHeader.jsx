import React from "react";
import profilePic from "../assets/profile-pic.avif";
import logo from "../assets/logo.png";
import { IoIosNotifications } from "react-icons/io";
import Image from "next/image";
import { useContext } from "react";

const style = {
  wrapper: `flex items-center bg-white w-full h-20 p-8 justify-evenly`,
  profileImage: `rounded-full object-cover cursor-pointer`,
  logo: `object-contain`,
  notificationIcon: `text-3xl cursor-pointer text-gray-400 absolute`,
  notifications: `h-2 w-2 flex rounded-full relative bg-red-500 -top-3 -right-5`,
};

const CardHeader = () => {
  return (
    <div className={style.wrapper}>
      <Image
        src={profilePic}
        alt="profile-pic"
        width={50}
        height={50}
        className={style.profileImage}
      />
      <Image
        src={logo}
        alt="logo"
        width={150}
        height={200}
        className={style.logo}
      />
      <div className="flex items-center">
        <IoIosNotifications className={style.notificationIcon} />
        <div className={style.notifications} />
      </div>
    </div>
  );
};

export default CardHeader;
