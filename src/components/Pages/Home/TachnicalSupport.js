import React from "react";
import SupportImg from "./../../../images/image-support.png";
import email from "./../../../images/icon_email.png";
import hours from "./../../../images/icon_time.png";
import phone from "./../../../images/phone-png-3.png";
import website from "./../../../images/web-png-icon-10.jpg";

const TachnicalSupport = () => {
  return (
    <div>
      <div className="">
        <div className=" flex items-center flex-col sm:flex-row-reverse md:gap-20">
          {/* icon image */}
          <div className="flex-1">
            <img
              src={SupportImg}
              className=" w-40 sm:w-72 lg:w-96 mx-auto rounded-lg "
              alt=""
            />
          </div>

          {/* main content */}
          <div className="flex-1 mx-auto w-full  sm:w-[400px] lg:w-[600px]">
            <ul>
              <li className=" flex my-3 items-center gap-2 font-semibold  text-base">
                <span>
                  <img src={hours} alt="" className=" w-14 lg:w-9" />
                </span>
                <span className="">
                  Official Hour:
                  <span className="text-xs lg:text-base">
                    Mon-Fri / 8am-5pm (GMT+6)
                  </span>
                </span>
              </li>
              <li className="flex items-center gap-2 font-semibold text-base">
                <span className="mx-1">
                  <img src={phone} alt="" className="w-9" />
                </span>
                <span>HotLine: </span>
                <span>+882458754</span>
              </li>
              <span className="text-xs w-13 font-semibold mx-2">
                (Available : Sat - Thu, 10:00 AM to 7:00 PM)
              </span>
              <li className="flex my-3 items-center gap-2 font-semibold text-base">
                <span className="mx-1">
                  <img src={email} alt="" className="w-9" />
                </span>
                <span>shoping@gmail.com</span>
              </li>
              <li className="flex my-3 items-center gap-2 font-semibold text-base">
                <span className="mx-1">
                  <img src={website} alt="" className=" w-9" />
                </span>
                <span>Official: </span>
                <span> www.shoping.com </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TachnicalSupport;
