"use client";
import react, { useState } from "react";
import NavbarLink from "./navbar-link";
import { PowerIcon, Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Disclosure } from "@headlessui/react";

export default function Sidenav() {
  // const [toggle, setToggle] = useState(false);

  return (
    <>
      <Disclosure as="nav">
        <Disclosure.Button
          // onClick={() => setToggle(!toggle)} not implemtation
          className="absolute top-4 right-4 inline-flex peer md:absolute focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        >
          <Bars2Icon className="w-12 md:hidden text-white bg-blue-600 rounded-md" />
        </Disclosure.Button>
        <div
          className="bg-white justify-center z-20 fixed -left-[100vh] md:ml-5 md:left-0 flex h-full w-screen md:w-60 pt-5 peer-focus:left-0 peer:transition ease-out delay-150 duration-200"
          id="sidebar"
        >
          <div className="absolute cursor-pointer md:hidden top-4 right-5 inline-flex">
            <XMarkIcon className="w-12 text-blue-600" />
          </div>
          {/* <div className="flex grow flex-row space-x-2 md:flex-col md:space-x-0 md:space-y-2 ">  //before edit */}
          {/* ml-[-240px] ml-0 */}
          <div className="ml-0 my-0 pt-12 md:pt-0 bg-white w-64 md:w-full md:mx-0 md:flex-col md:space-x-0 md:space-y-2 ">
            <div className="mx-5 my-0 md:mx-0">
              <div className="bg-blue-600 py-2 px-1 md:py-10 rounded-lg">
                <span className="text-3xl md:text-4xl text-white leading-none font-semibold tracking-tight">
                  Local Library
                </span>
              </div>
              <NavbarLink />
              <form>
                <button className="flex h-[48px] w-full grow items-center justify-center gap-2 bg-sky-100 rounded-lg p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                  <PowerIcon className="w-6 " />
                  <div className="hidden md:block">Sign Out</div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </Disclosure>
    </>
  );
}
