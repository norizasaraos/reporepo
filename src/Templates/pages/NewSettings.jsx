import { NavLink } from "react-router-dom";
import { IconSwitch } from "../components/IconSwitch";
import User from "/src/images/user.png";

function NewSettings() {
  return (
    <div>
      <div className="flex h-screen w-screen bg-slate-300">
        {/* Sidebar */}
        <div className="bg-gray-800 w-64 text-white p-4">
          <h1 className="text-xl font-bold mb-4 text-nowrap">BukSU Dental Clinic</h1>

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
                <div className="grow justify-self-start my-auto font-semibold">Settings</div>

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
            <div className="flex flex-wrap text-black ">
              {/* profile */}
              <div className="w-full lg:w-8/12 px-4">
                <div className="shadow-xl">
                  <div className="text-center flex justify-between bg-slate-100 p-4 rounded-t-2xl ">
                    <div className="my-auto">My Account</div>
                    <div className="bg-customblue cursor-pointer text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
                      Settings
                    </div>
                  </div>

                  <form className="bg-slate-200">
                    <div className="">
                      <h6 className="px-3 py-3 text-slate-500  font-semibold">User Information</h6>
                    </div>
                    {/*  */}
                    <div className="flex flex-wrap p-4 mx-40 gap-6">
                    {/* username */}
                      <div>
                        <div className="block uppercase  text-blueGray-600 text-xs font-bold mb-2">Username</div>
                        <div>
                          <input className="border-0  px-3 py-3 text-gray-600 bg-slate-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" type="text" />
                        </div>
                      </div>
                      {/* Email address */}
                      <div>
                        <div className="block uppercase text-blueGray-600 text-xs font-bold mb-2">email address</div>
                        <div>
                          <input className="border-0  px-3 py-3 text-gray-600 bg-slate-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" type="text" />
                        </div>
                      </div>

                      {/* Firstname */}
                      <div>
                        <div className="block uppercase text-blueGray-600 text-xs font-bold mb-2">first name</div>
                        <div>
                          <input className="border-0  px-3 py-3 text-gray-600 bg-slate-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" type="text" />
                        </div>
                      </div>
                      {/* Lastname */}
                      <div>
                        <div className="block uppercase text-blueGray-600 text-xs font-bold mb-2">last name</div>
                        <div>
                          <input className="border-0  px-3 py-3 text-gray-600 bg-slate-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" type="text" />
                        </div>
                      </div>
                    </div>

                    <hr className="mx-8 border border-slate-300 " />

                    <div className="">
                      <h6 className="px-3 py-3 text-slate-500  font-semibold">Contact Information</h6>
                    </div>

                    <div className="flex flex-wrap p-4 mx-40 gap-6">
                    <div className="grow">
                        <div className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Address</div>
                        <div>
                          <input className="border-0  px-3 py-3 text-gray-600 bg-slate-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" type="text" />
                        </div>
                      </div>
   
                    </div>

                    <div className="flex flex-wrap p-4 mx-40 gap-6">
                    <div className="">
                        <div className="block uppercase text-blueGray-600 text-xs font-bold mb-2">city</div>
                        <div>
                          <input className="border-0  px-3 py-3 text-gray-600 bg-slate-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" type="text" />
                        </div>
                      </div>

                      <div className="grow">
                        <div className="block uppercase text-blueGray-600 text-xs font-bold mb-2">country</div>
                        <div>
                          <input className="border-0 bg-slate-100 px-3 py-3 text-gray-600  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" type="text" />
                        </div>
                      </div>

                      <div className="grow">
                        <div className="block uppercase text-blueGray-600 text-xs font-bold mb-2">postal code</div>
                        <div>
                          <input className="border-0  px-3 py-3 text-gray-600 bg-slate-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" type="text" />
                        </div>
                      </div>
                    </div>

                    <hr className="mx-8 border border-slate-300" />
                    
                    <div className="">
                      <h6 className="px-3 py-3 text-slate-500 font-semibold">About Me</h6>
                    </div>

                    <div className=" justify-self-center ">
                        <textarea name="" id="" className="bg-slate-100 w-[30rem] h-[10rem] rounded-xl max-w-3xl ">
                  
                        </textarea>
                    </div>


                  </form>
                </div>
              </div>

              {/* ==================== */}

              {/* status */}
              <div className="w-full shadow-md bg-white rounded-3xl lg:w-4/12 px-4">
                <div className="border mt-3 rounded-2xl p-4 shadow-md">
                  <h6>Status</h6>
                </div>
                {/* ----- */}
                <div className="grid grid-cols-2 p-4 gap-4 text-center font-semibold">
                  
                <div className="border rounded-xl p-3 shadow-md">
                    <div>403</div>
                    <div className="text-slate-400">Clinic visits</div>
                  </div>

                  <div className="border rounded-xl p-3 shadow-md">
                    <div>801</div>
                    <div className="text-slate-400">Likes</div>
                  </div>
                  
                  <div className="border rounded-xl p-3 shadow-md">
                    <div>22</div>
                    <div className="text-slate-400">Friends</div>
                  </div>

                  <div className="border rounded-xl p-3 shadow-md">
                    <div>81</div>
                    <div className="text-slate-400">Comments</div>
                  </div>
                  </div>

<hr className="mx-4 my-4 mt-10" /> 

<div className="p-4 gap-2 grid ">
  <div className="bg-white flex justify-between shadow-md border p-4">
    <div>Switch Theme</div>
    <div>
      <IconSwitch />
    </div>
  </div>
  <div className="bg-white flex justify-between shadow-md border p-4">
    <div className="my-auto">Notification Settings</div>
    <button className="text-white bg-customblue">Edit</button>
  </div>
  <div className="bg-white flex justify-between shadow-md border p-4">
    <div className="my-auto">Help</div>
    <button className="text-white bg-customblue">View</button>
  </div>

  <div className="bg-white flex justify-between shadow-md border p-4">
    <div className="my-auto">Privacy Policy</div>
    <button className="text-white bg-customblue">View</button>
  </div>
</div>
             

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewSettings;
