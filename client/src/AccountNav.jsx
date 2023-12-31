import React from "react";
import { Link, useLocation } from "react-router-dom";

const AccountNav = () => {
  const { pathname } = useLocation();
  let subpage = pathname.split("/")?.[2];
  if (subpage === undefined) {
    subpage = "profile";
  }
  function linkClasses(type = null) {
    let classes = "py-2 px-10 rounded-full ";
    if (type === subpage) {
      classes += " bg-primary text-white";
    } else {
      classes += " bg-gray-200";
    }
    return classes;
  }
  return (
    <nav className="w-full flex justify-center mt-8 gap-2 mb-8">
      <Link className={linkClasses("profile")} to={"/account"}>
        My Profile
      </Link>
      {/* <Link className={linkClasses("bookings")} to={"/account/bookings"}>
        My Bookings
      </Link> */}
      <Link className={linkClasses("experiences")} to={"/account/experiences"}>
        My Experiences
      </Link>
    </nav>
  );
};

export default AccountNav;
