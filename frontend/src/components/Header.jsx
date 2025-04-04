import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { CiSearch } from "react-icons/ci";
import {
  Link,
  UNSAFE_createClientRoutesWithHMRRevalidationOptOut,
  useNavigate,
} from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { handleSuccess } from "../utils/Utils";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    handleSuccess("Logout Sucessfully");
    localStorage.removeItem("token");
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  const handleClick = () => {
    setOpenPopup(!openPopup);
  };
  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-4 md:p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="p-1.5">
            <h1 className="text-[#3661f3] font-semibold text-2xl">MORENT</h1>
          </a>
        </div>
        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="p-2.5 text-gray-700"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
        {/* Search Bar */}
        <div className="hidden md:flex w-full max-w-md lg:max-w-lg xl:max-w-xl">
          <form className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 w-full">
            <CiSearch className="text-2xl text-gray-500" />
            <input
              type="text"
              className="w-full outline-none text-gray-700"
              placeholder="Search something here"
            />
          </form>
        </div>
        {/* Login Button */}
        <div className="hidden gap-6 lg:flex lg:flex-1 lg:justify-end">
          {!token ? (
            <>
              <a
                href="/login"
                className="button text-md w-[100px] flex items-center justify-center font-semibold text-gray-900"
              >
                Log in
              </a>
              <a
                href="/signup"
                className="button text-md w-[100px] flex items-center justify-center font-semibold text-gray-900"
              >
                Sign up
              </a>
            </>
          ) : (
            <>
              <button className="cursor-pointer text-2xl text-[#3D5278] ">
                <FaHeart />
              </button>
              <button
                onClick={handleClick}
                className="bg-[#75ba75] text-2xl rounded-full h-[40px] w-[40px] text-white cursor-pointer "
              >
                A
              </button>
            </>
          )}
        </div>
        <div
          className="absolute h-[150px] w-[150px] right-[60px] top-[80px] p-2 bg-white shadow-2xl z-1 "
          style={{ display: openPopup ? "block" : "none" }}
        >
          <li className="list-none flex items-center gap-3 cursor-pointer text-lg p-2 border-b border-b-[#ccc] hover:bg-[#f1f1f1f1] rounded ">
            <FaUser /> User
          </li>
          <li className="list-none flex items-center gap-3 cursor-pointer text-lg p-2 border-b border-b-[#ccc] hover:bg-[#f1f1f1f1] rounded ">
            <IoMdSettings /> Settings
          </li>
          <li
            onClick={handleLogout}
            className="list-none flex items-center gap-3 cursor-pointer text-lg p-2 border-b border-b-[#ccc] hover:bg-[#f1f1f1f1] rounded "
          >
            <LuLogOut /> Logout
          </li>
        </div>
      </nav>
      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <DialogPanel className="fixed inset-0 z-10 bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="p-1.5">
              <h1 className="text-[#3661f3] font-semibold text-2xl">MORENT</h1>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 text-gray-700"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6">
            <form className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 w-full">
              <CiSearch className="text-2xl text-gray-500" />
              <input
                type="text"
                className="w-full outline-none text-gray-700"
                placeholder="Search something here"
              />
            </form>
            <div className="mt-6 flex gap-2">
              {!token ? (
                <>
                  <a
                    href="/login"
                    className="button text-md w-[100px] flex items-center justify-center font-semibold text-gray-900"
                  >
                    Log in
                  </a>
                  <a
                    href="/signup"
                    className="button text-md w-[100px] flex items-center justify-center font-semibold text-gray-900"
                  >
                    Sign up
                  </a>
                </>
              ) : (
                <>
                  <button className="cursor-pointer text-2xl text-[#3D5278] ">
                    <FaHeart />
                  </button>
                  <button
                    onClick={handleClick}
                    className="bg-[#75ba75] text-2xl rounded-full h-[40px] w-[40px] text-white cursor-pointer "
                  >
                    A
                  </button>
                </>
              )}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
