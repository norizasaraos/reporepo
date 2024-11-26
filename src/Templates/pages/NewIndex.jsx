import { NavLink } from "react-router-dom";
import Add_Dentist_Table from "../components/Add_Dentist_Table";
import Table from "../components/Table";
import User from "/src/images/user.png";
import Admin_Table from "../components/Admin_Table";
import { useState } from "react";

function NewIndex() {
  const [selectedPage, setSelectedPage] = useState("Table");

  const handlePageChange = (event) => {
    setSelectedPage(event.target.value);
  };

  return (
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
                to="/newviewappointment"
                className="hover:bg-gray-700 p-2 rounded-md block text-slate-500 hover:text-slate-100"
              >
                View Appointment
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/newcalendar"
                className="hover:bg-gray-700 p-2 rounded-md block text-slate-500 hover:text-slate-100"
              >
                Calendar
              </NavLink>
            </li>
          </ul>

          <hr className="my-4 md:min-w-full" />

          <ul className="">
            <li className="mb-2">
              <NavLink
                to="/newinventory"
                className="hover:bg-gray-700 p-2 rounded-md block text-slate-500 hover:text-slate-100"
              >
                Inventory
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/newviewfeedback"
                className="hover:bg-gray-700 p-2 rounded-md block text-slate-500 hover:text-slate-100"
              >
                View Feedback
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/newsettings"
                className="hover:bg-gray-700 p-2 rounded-md block text-slate-500 hover:text-slate-100"
              >
                Settings
              </NavLink>
            </li>
          </ul>

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
            <hr className="my-4 md:min-w-full" />

            <div className="py-2 rounded-lg cursor-pointer font-semibold text-center bg-rose-500 shadow-md my-2 hover:text-white text-slate-400 transition duration-150 ease-in-out">
              Logout
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-grow">
          <div className="w-full p-4">
            <div className="mx-12 text-slate-800  bg-slate-100 shadow-md rounded-xl p-4">
              <div className="flex grid-cols-1">
                <div className="grow justify-self-start my-auto">Dashboard</div>

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

          {/* Content */}

          <div className="p-12 mx-4">
            {/* Dropdown */}

            <div>
              <select
                value={selectedPage}
                onChange={handlePageChange}
                className="bg-gray-200 cursor-pointer border w-fit text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="page1">Patient</option>
                <option value="page2">Dentist</option>
                <option value="page3">Admin</option>
              </select>
            </div>

            <div className="mt-4">
              {selectedPage === "page2" ? (
                <Add_Dentist_Table />
              ) : selectedPage === "page3" ? (
                <Admin_Table />
              ) : (
                <Table />
              )}
            </div>

            {/* <Table />
            <Add_Dentist_Table />
            <Admin_Table /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewIndex;
