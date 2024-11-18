/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import User from "/src/images/user.png";
import Calendar from 'react-calendar';


function NewCalendar() {
   
  return (
    <>
      <div>
        <div className="flex h-screen w-screen bg-slate-300">
          {/* Sidebar */}
          <div className="bg-gray-800 w-64 text-white p-4">
            <h1 className="text-xl font-bold mb-4 text-nowrap">
              BukSU Dental Clinic
            </h1>

            <hr className="my-4 md:min-w-full" />

            <ul className="">
              <li className="mb-2">
                <a
                  href="/newIndex"
                  className="hover:bg-gray-700 p-2 rounded-md block text-slate-500 hover:text-slate-100"
                >
                  Dashboard
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="hover:bg-gray-700 p-2 rounded-md block text-slate-500 hover:text-slate-100"
                >
                  View Appointment
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="hover:bg-gray-700 p-2 rounded-md block text-slate-500 hover:text-slate-100"
                >
                  Calendar
                </a>
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
                <a
                  href="/newsettings"
                  className="hover:bg-gray-700 p-2 rounded-md block text-slate-500 hover:text-slate-100"
                >
                  Settings
                </a>
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
              <hr className="my-4 md:min-w-full" />

              <div className="py-2 rounded-lg cursor-pointer font-semibold text-center bg-blue-500 shadow-md my-2 hover:text-white text-slate-400 transition duration-150 ease-in-out">
                Add Admin
              </div>
              <div className="py-2 rounded-lg cursor-pointer font-semibold text-center bg-blue-500 shadow-md my-2 hover:text-white text-slate-400 transition duration-150 ease-in-out">
                Add Dentist
              </div>
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
                  <div className="grow justify-self-start my-auto font-semibold">
                    Inventory
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

            <div className="px-12 py-6 mx-4">
              {/* Card */}
              <div className="border font-semibold rounded-xl p-2 text-center w-fit justify-self-center px-3 bg-white text-black shadow-md">
                Calendar
              </div>
              <div className="mx-auto text-black  w-full shadow-xl rounded-2xl lg:w-6/12  ">
                {/* calendar */}
                <div>
                <Calendar onChange={date => console.log(date)}
  value={new Date()}
  tileClassName={({ date, view }) => {
    // Customize the appearance of specific dates
    if (date.getDay() === 0 || date.getDay() === 6) {
      return 'weekend';
    }
  }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewCalendar