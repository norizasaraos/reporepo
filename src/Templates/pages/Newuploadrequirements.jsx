import React from "react";
import User from "/src/images/user.png";
import { NavLink } from "react-router-dom";

function Newuploadrequirements() {
  const fileInputRef = React.useRef(null);
  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <div>
        <div className="flex h-screen w-screen bg-slate-300">
          {/* Sidebar */}
          <div className="bg-gray-800 w-64 text-white p-4">
            <h1 className="text-xl font-bold mb-4">BukSU Dental Clinic</h1>

            <hr className="my-4 md:min-w-full" />

            <ul className="">
              <li className="mb-2">
                <NavLink
                  to="/newIndex"
                  className="hover:bg-gray-700 p-2 rounded-md block text-slate-500 hover:text-slate-100"
                >
                  Dashboard
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/#"
                  className="hover:bg-gray-700 p-2 rounded-md block text-slate-500 hover:text-slate-100"
                >
                  Appointment
                </NavLink>
              </li>
            </ul>

            <hr className="my-4 md:min-w-full" />

            <div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

              <hr className="my-4 md:min-w-full" />

              <ul className="">
                <li className="mb-2">
                  <NavLink
                    to="/#"
                    className="hover:bg-gray-700 p-2 rounded-md block text-slate-500 hover:text-slate-100"
                  >
                    Feedback
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink
                    to="/#"
                    className="hover:bg-gray-700 p-2 rounded-md block text-slate-500 hover:text-slate-100"
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink
                    to="/#"
                    className="hover:bg-gray-700 p-2 rounded-md block text-slate-500 hover:text-slate-100"
                  >
                    Settings
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-grow">
            <div className="w-full p-4">
              <div className="mx-12 text-slate-800  bg-slate-100 shadow-md rounded-xl p-4">
                <div className="flex grid-cols-1">
                  <div className="grow justify-self-start my-auto">
                    Appointment
                  </div>

                  <div className="flex grow">
                    <div className="grow justify-self-end my-auto">
                      <input
                        className="bg-white ring-0 outline-0 border w-fit px-3 border-slate-300 rounded-md"
                        type="text"
                        placeholder="search"
                      />
                    </div>
                    <div className="my-auto">
                      <div className="grow gap-3 flex justify-self-end">
                        <div className="my-auto text-slate-500">
                          Dela Cruz, Juan
                        </div>
                        <div>
                          <img className="h-8 " src={User} alt="Profile" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Table */}

            <div>
              <h6 className="text-center border rounded-xl  w-fit mx-auto p-2 bg-white shadow-md text-slate-500">
                Upload Requirements
              </h6>
            </div>

            <div className="p-12 mx-4">
              <div className="min-w-full table-auto bg-slate-100 rounded-xl shadow-lg">
                <div className="grid grid-cols-3 text-black justify-items-center p-4 ">
                {/* card */}
                  <div className="p-10 border rounded-xl  bg-white shadow-md">
                    <div className="text-slate-600 m-4 text-center font-bold">Validated School ID</div>
                    <div className="text-center text-slate-500">(Scanned)</div>
                    <div className="flex items-center justify-center">
                      <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                      />

                      <button
                        onClick={handleFileSelect}
                        className="px-4 py-2 m-4 bg-customblue text-white rounded-3xl hover:bg-customblue/70 transition-colors duration-300"
                      >
                        Choose File
                      </button>
                    </div>
                  </div>
                   {/* card */}
                   <div className="p-10 border rounded-xl  bg-white shadow-md">
                    <div className="text-slate-600 m-4 text-center font-bold">Certificate of Registration</div>
                    <div className="text-center text-slate-500">(Scanned)</div>
                    <div className="flex items-center justify-center">
                      <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                      />

                      <button
                        onClick={handleFileSelect}
                        className="px-4 py-2 m-4 bg-customblue text-white rounded-3xl hover:bg-customblue/70 transition-colors duration-300"
                      >
                        Choose File
                      </button>
                    </div>
                  </div>
                   {/* card */}
                   <div className="p-10 border rounded-xl  bg-white shadow-md">
                    <div className="text-slate-600 m-4 text-center font-bold">Vaccination Card</div>
                    <div className="text-center text-slate-500">(Scanned)</div>
                    <div className="flex items-center justify-center">
                      <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                      />

                      <button
                        onClick={handleFileSelect}
                        className="px-4 py-2 m-4 bg-customblue text-white rounded-3xl hover:bg-customblue/70 transition-colors duration-300"
                      >
                        Choose File
                      </button>
                    </div>
                  </div>
                </div>

                {/* Pagintation */}

                <div className="flex justify-between">
                    <div className="rounded-3xl cursor-pointer hover:shadow-lg duration-100 ease-out transition p-4 text-lg font-medium bg-customblue m-6 text-slate-200">Back</div>
                    <div className="rounded-3xl cursor-pointer hover:shadow-lg duration-100 ease-out transition p-4 text-lg font-medium bg-customblue m-6 text-slate-200">Next</div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newuploadrequirements;
