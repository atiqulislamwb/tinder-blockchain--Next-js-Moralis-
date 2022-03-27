import React, { useContext } from "react";
import fire from "../assets/fire.png";
import Image from "next/image";
import { TinderContext } from "../context/TindeContext.js";

const style = {
  wrapper: `h-20 py-10 text-white flex w-screen items-center px-16 justify-around bg-gray-800 inline-block`,
  main: `flex items-center justify-between gap-8`,
  leftMenu: `flex gap-8 text-lg px-10`,
  rightMenu: `flex gap-3 items-center px-10`,
  menuItem: `cursor-pointer hover:text-red-400 duration-300 hover:scale-110`,
  currentAccount: `px-2 py-1 border border-gray-500 rounded-full flex items-center inline-block`,
  authButton: `bg-white font-bold text-red-500 px-6 py-3 items-center ml-4 rounded-lg hover:bg-red-500 duration-300 hover:text-white`,
};

const Header = () => {
  const { currentAccount, connectWallet, disconnectWallet } =
    useContext(TinderContext);

  return (
    <div
      className={`${style.wrapper} ${
        currentAccount ? "bg-gray-800" : "bg-transparent fixed"
      }`}
    >
      <div className={style.main}>
        <Image src={fire} alt="fire" width={50} height={50} />
        <h1 className="text-5xl font-semibold mr-8 cursor-pointer">tinder</h1>
        <div className={style.leftMenu}>
          <div className={style.menuItem}>Products</div>
          <div className={style.menuItem}>Learns</div>
          <div className={style.menuItem}>Safety</div>
          <div className={style.menuItem}>Supports</div>
          <div className={style.menuItem}>Download</div>
        </div>
        <div className={style.rightMenu}>
          <div className={style.menuItem}>English</div>
          {currentAccount ? (
            <>
              <div className={style.currentAccount}>
                <Image
                  src={
                    "https://moralis.io/wp-content/uploads/2021/05/moralisWhiteLogo.svg"
                  }
                  alt="moralis"
                  height={20}
                  width={20}
                />
                <span>
                  {currentAccount.slice(0, 6)}....{currentAccount.slice(39)}
                </span>
              </div>
              <button
                className={style.authButton}
                onClick={() => disconnectWallet()}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                className={style.authButton}
                onClick={() => connectWallet()}
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
