import { NavLink } from "react-router-dom";
import StudentTable from "../components/StudentTable";
import User from "/src/images/user.png";


function NewViewAppointment() {
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
                  <div className="grow justify-self-start my-auto font-bold">
                    View Appointments
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

            <div className="px-12 py-6 mx-4">
              {/* Card */}
              <div className="flex flex-wrap text-black  ">
                {/* profile */}
                <div className="w-full  lg:w-8/12 px-4">
                  <div className="shadow-xl">
                    <div className="text-center flex justify-between bg-customblue/90 p-4 rounded-t-2xl ">
                      <div className="my-auto font-semibold text-white">
                        Appointments
                      </div>
                      <div className="bg-customblue hidden cursor-pointer text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
                        Settings
                      </div>
                    </div>

                    <div className="bg-slate-200 ">
                      {/* Table */}
                      <div className="">
                        <StudentTable />
                      </div>
                    </div>
                  </div>
                </div>

                {/* ==================== */}

                {/* status */}
                <div className="w-full shadow-md bg-white rounded-3xl lg:w-4/12 px-4">
                  <div className="border mt-3 rounded-2xl p-4 shadow-md">
                    <h6 className="font-semibold">Details</h6>
                  </div>
                  {/* ----- */}
                  <div className="grid grid-cols-2 p-4 gap-4 text-center font-semibold">
                    <div className="border rounded-xl p-3 shadow-md">
                      <div>20</div>
                      <div className="text-emerald-400">Done</div>
                    </div>

                    <div className="border rounded-xl p-3 shadow-md">
                      <div>801</div>
                      <div className="text-rose-400">Pending Appointments</div>
                    </div>

                    <div className="border rounded-xl p-3 shadow-md">
                      <div>5</div>
                      <div className="text-slate-400">Reschedule</div>
                    </div>
                  </div>

                  <hr className="mx-4 my-4 mt-10" />

                  <div>{/* Another Content */}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewViewAppointment;
