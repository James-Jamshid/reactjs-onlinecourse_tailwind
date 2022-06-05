import React from "react";
import f from "../assets/F..png";
import home from "../assets/home.png";
import graduate from "../assets/graduate.png";
import account from "../assets/account.png";
import message from "../assets/message.png";
import setting from "../assets/setting.png";
import login from "../assets/login.png";
import josh from "../assets/josh.png";
import spanish from "../assets/spanish.png";
import left from "../assets/left.png";
import right from "../assets/right.png";
import figma from "../assets/figma.png";
import watch from "../assets/watch.png";
import fire from "../assets/fire.png";
import camera from "../assets/camera.png";
import insta from "../assets/insta.png";
import drawing from "../assets/drawing.png";
import ps from "../assets/ps.png";
import search from "../assets/search.png";
import bell from "../assets/bell.png";
import profil from "../assets/profil.png";
import vector from "../assets/vector.png";
import diagram from "../assets/diagram.png";
import book from "../assets/book.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex">
      {/* SideBar start */}
      <div className="flex flex-col justify-between py-10 ml-10 mt-5 items-center bg-black w-[132px] h-[850px] rounded-3xl shadow-3xl  ">
        <Link to="/">
          <div className="flex border">
            <img src={f} alt="" className="flex" id="img" />
          </div>
        </Link>
        <div className="flex flex-col gap-y-14">
          <Link to="/btn">
            <img src={home} alt="" className="flex" id="img" />
          </Link>
          <Link to="/btn">
            <img src={graduate} alt="" className="flex" id="img" />
          </Link>
          <Link to="/btn">
            <img src={account} alt="" className="flex" id="img" />
          </Link>
          <Link to="/btn">
            <img src={message} alt="" className="flex" id="img" />
          </Link>
          <Link to="/btn">
            <img src={setting} alt="" className="flex" id="img" />
          </Link>
        </div>
        <Link to="/btn">
          <div className="flex">
            <img src={login} alt="" className="flex" id="img" />
          </div>
        </Link>
      </div>
      {/* SideBAr end */}
      {/* MIddlePage start */}
      <div className="flex flex-col pl-10 pt-24 gap-y-4">
        <div className="flex bg-[#F5F5F7] w-[620px] h-[160px] rounded-[14px]  justify-evenly  relative">
          <div className="flex justify-center flex-col">
            <h1>Hello Josh!</h1>
            <p>It’s good to see you again.</p>
          </div>
          <div className="flex">
            <img
              src={josh}
              alt=""
              className="flex w-[175px] h-[191px] absolute bottom-0.5 right-16 "
            />
          </div>
        </div>
        {/* spanish--------start */}
        <div className="flex justify-between">
          <div className="flex items-center justify-evenly bg-[#F5F5F7] rounded-[14px] w-[500px] h-[80px]  ">
            <Link to="/btn">
              <div className="flex rounded-[12px] bg-[#FFFFFF] w-[64px] h-[64px] box-borders items-center justify-center">
                <img
                  id="icon"
                  src={spanish}
                  alt=""
                  className="flex w-[40px] h-[40px]"
                />
              </div>
            </Link>
            <div className="flex flex-col">
              <Link to="/btn">
                <h5>Spanish B2</h5>
              </Link>
              <p>by Alejandro Velazquez</p>
            </div>
            <div className="flex">
              <p className="flex border rounded-[50%] w-[40px] h-[40px] items-center justify-center ">
                83%
              </p>
            </div>
            <div className="flex">
              <Link to="/btn">
                <button className="flex border bg-black hover:bg-[grey] rounded-[8px] w-[120px] h-[40px] justify-center items-center text-[white]">
                  Continue
                </button>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-x-3">
            <Link to="/btn">
              <img id="icon" src={left} alt="" className="flex" />
            </Link>
            <Link to="/btn">
              <img id="icon" src={right} alt="" className="flex" />
            </Link>
          </div>
        </div>
        {/* spanish--------end */}
        <div className="flex">
          <Link to="/btn">
            <h2>Courses</h2>
          </Link>
        </div>
        <div className="flex items-center justify-evenly ">
          <Link to="/btn">
            <h5>All Courses</h5>
          </Link>
          <Link to="/btn">
            <h5>The Newest</h5>
          </Link>
          <Link to="/btn">
            <h5>Top Rated</h5>
          </Link>
          <Link to="/btn">
            <h5>Most Popular</h5>
          </Link>
        </div>
        {/* All courses------------start */}
        <div className="flex items-center justify-evenly bg-[#F5F5F7] rounded-[14px] w-[620px] h-[80px]  ">
          <Link to="/btn">
            <div className="flex rounded-[12px] bg-[#FFFFFF] w-[64px] h-[64px] box-borders items-center justify-center">
              <img
                id="icon"
                src={figma}
                alt=""
                className="flex w-[40px] h-[40px]"
              />
            </div>
          </Link>
          <div className="flex flex-col">
            <Link to="/btn">
              <h5>Learn Figma</h5>
            </Link>
            <p>by Christopher Morgan</p>
          </div>
          <div className="flex items-center gap-x-2">
            <img src={watch} alt="" />
            <p>6h 30min</p>
          </div>
          <div className="flex items-center gap-x-2">
            <img src={fire} alt="" />
            <p>4,9</p>
          </div>
          <div className="flex">
            <Link to="/btn">
              <button className="flex border bg-black hover:bg-[grey] rounded-[8px] w-[120px] h-[40px] justify-center items-center text-[white]">
                View course
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-evenly bg-[#F5F5F7] rounded-[14px] w-[620px] h-[80px]  ">
          <Link to="/btn">
            <div className="flex rounded-[12px] bg-[#FFFFFF] w-[64px] h-[64px] box-borders items-center justify-center">
              <img
                id="icon"
                src={camera}
                alt=""
                className="flex w-[40px] h-[40px]"
              />
            </div>
          </Link>
          <div className="flex flex-col">
            <Link to="/btn">
              <h5>Analog photography</h5>
            </Link>
            <p>by Gordon Norman</p>
          </div>
          <div className="flex items-center gap-x-2">
            <img src={watch} alt="" />
            <p>3h 15min</p>
          </div>
          <div className="flex items-center gap-x-2">
            <img src={fire} alt="" />
            <p>4,7</p>
          </div>
          <div className="flex">
            <Link to="/btn">
              <button className="flex border bg-black hover:bg-[grey] rounded-[8px] w-[120px] h-[40px] justify-center items-center text-[white]">
                View course
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-evenly bg-[#F5F5F7] rounded-[14px] w-[620px] h-[80px]  ">
          <Link to="/btn">
            <div className="flex rounded-[12px] bg-[#FFFFFF] w-[64px] h-[64px] box-borders items-center justify-center">
              <img
                id="icon"
                src={insta}
                alt=""
                className="flex w-[40px] h-[40px]"
              />
            </div>
          </Link>
          <div className="flex flex-col">
            <Link to="/btn">
              <h5>Master Instagram</h5>
            </Link>
            <p>by Sophie Gill</p>
          </div>
          <div className="flex items-center gap-x-2">
            <img src={watch} alt="" />
            <p>7h 40min</p>
          </div>
          <div className="flex items-center gap-x-2">
            <img src={fire} alt="" />
            <p>4,6</p>
          </div>
          <div className="flex">
            <Link to="/btn">
              <button className="flex border bg-black hover:bg-[grey] rounded-[8px] w-[120px] h-[40px] justify-center items-center text-[white]">
                View course
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-evenly bg-[#F5F5F7] rounded-[14px] w-[620px] h-[80px]  ">
          <Link to="/btn">
            <div className="flex rounded-[12px] bg-[#FFFFFF] w-[64px] h-[64px] box-borders items-center justify-center">
              <img
                id="icon"
                src={drawing}
                alt=""
                className="flex w-[40px] h-[40px]"
              />
            </div>
          </Link>
          <div className="flex flex-col">
            <Link to="/btn">
              <h5>Basics of drawing</h5>
            </Link>
            <p>by Jean Tate</p>
          </div>
          <div className="flex items-center gap-x-2">
            <img src={watch} alt="" />
            <p>11h 30min</p>
          </div>
          <div className="flex items-center gap-x-2">
            <img src={fire} alt="" />
            <p>4,8</p>
          </div>
          <div className="flex">
            <Link to="/btn">
              <button className="flex border bg-black hover:bg-[grey] rounded-[8px] w-[120px] h-[40px] justify-center items-center text-[white]">
                View course
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-evenly bg-[#F5F5F7] rounded-[14px] w-[620px] h-[80px]  ">
          <Link to="/btn">
            <div className="flex rounded-[12px] bg-[#FFFFFF] w-[64px] h-[64px] box-borders items-center justify-center">
              <img
                id="icon"
                src={ps}
                alt=""
                className="flex w-[40px] h-[40px]"
              />
            </div>
          </Link>
          <div className="flex flex-col">
            <Link to="/btn">
              <h5>Photoshop - Essence</h5>
            </Link>
            <p>by David Green</p>
          </div>
          <div className="flex items-center gap-x-2">
            <img src={watch} alt="" />
            <p>5h 35min</p>
          </div>
          <div className="flex items-center gap-x-2">
            <img src={fire} alt="" />
            <p>4,7</p>
          </div>
          <div className="flex">
            <Link to="/btn">
              <button className="flex border bg-black hover:bg-[grey] rounded-[8px] w-[120px] h-[40px] justify-center items-center text-[white]">
                View course
              </button>
            </Link>
          </div>
        </div>

        {/* All courses------------end */}
      </div>
      {/* Middle page end--------------- */}
      {/* Left side bar-------------start */}
      <div className="flex flex-col pt-24 pl-14 gap-y-4 ">
        <div className="flex items-center justify-evenly gap-x-4 ">
          <div className="flex">
            <div className="flex  bg-[#F5F5F7] rounded-l-[8px] pl-3 cursor-pointer items-center ">
              <Link to="/btn">
                <img src={search} alt="" className="flex w-[20px] h-[30px] " />
              </Link>
            </div>

            <input
              type="search"
              className="flex w-[300px] h-[40px] bg-[#F5F5F7] rounded-r-[8px] "
            />
          </div>
          <div className="flex">
            <Link to="/btn">
              <img src={bell} alt="" className="flex cursor-pointer" />
            </Link>
          </div>
          <div className="flex">
            <Link to="/btn">
              <img src={profil} alt="" className="flex cursor-pointer" />
            </Link>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex w-[208px] h-[96px] bg-[#F5F5F7] rounded-[14px] items-center justify-center gap-x-2">
            <div className="flex ">
              <h1>11</h1>
            </div>
            <p>
              Courses <br /> completed
            </p>
          </div>
          <div className="flex w-[208px] h-[96px] bg-[#F5F5F7] rounded-[14px] items-center justify-center gap-x-2">
            <div className="flex ">
              <h1>11</h1>
            </div>
            <p>
              Courses <br /> completed
            </p>
          </div>
        </div>
        <div className="flex">
          <Link to="/btn">
            <h2>Your statistics</h2>
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <Link to="/btn">
            <h5>Learning Hours</h5>
          </Link>
          <Link to="/btn">
            <h5 className="flex pr-24">My Courses</h5>
          </Link>
          <Link to="/btn">
            <div className="flex  w-[88px] h-[32px] bg-[#F5F5F7] rounded-[8px] items-center justify-evenly cursor-pointer hover:bg-[grey]">
              <button className="flex">
                Weekly
                <img className="flex  pt-1 pl-1" src={vector} />
              </button>
            </div>
          </Link>
        </div>
        <div className="flex">
          <img src={diagram} alt="" className="flex h-[360px]" />
        </div>
        <div className="flex bg-[#F5F5F7] rounded-[14px] w-[440px] h-[193px] items-center justify-evenly ">
          <div className="flex flex-col gap-y-2">
            <Link to="/btn">
              <h2>Learn even more!</h2>
            </Link>
            <p>
              Unlock premium features <br />
              only for $9.99 per month.
            </p>
            <div className="flex">
              <Link to="/btn">
                <button className="flex border bg-black hover:bg-[grey] rounded-[8px] w-[120px] h-[40px] justify-center items-center text-[white]">
                  Go Premium
                </button>
              </Link>
            </div>
          </div>
          <div className="flex">
            <img src={book} alt="" className="flex" />
          </div>
        </div>
      </div>
      {/* Left side bar-------------end */}
    </div>
  );
};

export default Sidebar;
