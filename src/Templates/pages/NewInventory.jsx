import { NavLink } from "react-router-dom";
import User from "/src/images/user.png";
import surgicalgloves from "/src/images/surgical-gloves.png";

function NewInventory() {
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
                  to="#"
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

                  <div>
      
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
                Clinic Inventory
              </div>
              <div className="mx-auto text-black  w-full shadow-xl rounded-2xl lg:w-8/12  ">
                <div className="justify-items-center overflow-y-auto grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-8 h-[40rem] p-4 border rounded-2xl mt-2 bg-slate-100 ">
                {/* Card */}
                <div className="cursor-pointer bg-white border shadow-md rounded-lg p-5">
                    <div>
                        <img className="aspect-square  border bg-white rounded-lg" src={surgicalgloves} alt="item-img" />
                    </div>
                    <div className="text-wrap p-2 flex gap-2">
                        <div className="font-bold">x2</div>
                        <div>-</div>
                        <div>Surgical Gloves</div>
                    </div>
                </div>
               {/* Card */}
               <div className="cursor-pointer bg-white border shadow-md rounded-lg p-5">
                    <div>
                        <img className="aspect-square  border bg-white rounded-lg" src={surgicalgloves} alt="item-img" />
                    </div>
                    <div className="text-wrap p-2 flex gap-2">
                        <div className="font-bold">x2</div>
                        <div>-</div>
                        <div>Surgical Gloves</div>
                    </div>
                </div>
                {/* Card */}
                <div className="cursor-pointer bg-white border shadow-md rounded-lg p-5">
                    <div>
                        <img className="aspect-square  border bg-white rounded-lg" src={surgicalgloves} alt="item-img" />
                    </div>
                    <div className="text-wrap p-2 flex gap-2">
                        <div className="font-bold">x2</div>
                        <div>-</div>
                        <div>Surgical Gloves</div>
                    </div>
                </div>
                 {/* Card */}
                <div className="cursor-pointer bg-white border shadow-md rounded-lg p-5">
                    <div>
                        <img className="aspect-square  border bg-white rounded-lg" src={surgicalgloves} alt="item-img" />
                    </div>
                    <div className="text-wrap p-2 flex gap-2">
                        <div className="font-bold">x2</div>
                        <div>-</div>
                        <div>Surgical Gloves</div>
                    </div>
                </div>
                {/* Card */}
                <div className="cursor-pointer bg-white border shadow-md rounded-lg p-5">
                    <div>
                        <img className="aspect-square  border bg-white rounded-lg" src={surgicalgloves} alt="item-img" />
                    </div>
                    <div className="text-wrap p-2 flex gap-2">
                        <div className="font-bold">x2</div>
                        <div>-</div>
                        <div>Surgical Gloves</div>
                    </div>
                </div>
                {/* Card */}
                <div className="cursor-pointer bg-white border shadow-md rounded-lg p-5">
                    <div>
                        <img className="aspect-square  border bg-white rounded-lg" src={surgicalgloves} alt="item-img" />
                    </div>
                    <div className="text-wrap p-2 flex gap-2">
                        <div className="font-bold">x2</div>
                        <div>-</div>
                        <div>Surgical Gloves</div>
                    </div>
                </div>
                {/* Card */}
                <div className="cursor-pointer bg-white border shadow-md rounded-lg p-5">
                    <div>
                        <img className="aspect-square  border bg-white rounded-lg" src={surgicalgloves} alt="item-img" />
                    </div>
                    <div className="text-wrap p-2 flex gap-2">
                        <div className="font-bold">x2</div>
                        <div>-</div>
                        <div>Surgical Gloves</div>
                    </div>
                </div>
                {/* Card */}
                <div className="cursor-pointer bg-white border shadow-md rounded-lg p-5">
                    <div>
                        <img className="aspect-square  border bg-white rounded-lg" src={surgicalgloves} alt="item-img" />
                    </div>
                    <div className="text-wrap p-2 flex gap-2">
                        <div className="font-bold">x2</div>
                        <div>-</div>
                        <div>Surgical Gloves</div>
                    </div>
                </div>
                {/* Card */}
                <div className="cursor-pointer bg-white border shadow-md rounded-lg p-5">
                    <div>
                        <img className="aspect-square  border bg-white rounded-lg" src={surgicalgloves} alt="item-img" />
                    </div>
                    <div className="text-wrap p-2 flex gap-2">
                        <div className="font-bold">x2</div>
                        <div>-</div>
                        <div>Surgical Gloves</div>
                    </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewInventory;