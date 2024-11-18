import User from "/src/images/user.png";


const Main_Settings = () => {
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
              <a
                href="#"
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
              <a
                href="#"
                className="hover:bg-gray-700 p-2 rounded-md block text-slate-500 hover:text-slate-100"
              >
                Inventory
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="hover:bg-gray-700 p-2 rounded-md block text-slate-500 hover:text-slate-100"
              >
                View Feedback
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
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

          

          <div className="px-12 py-6 mx-4">
            {/* Card */}
            <div className="mx-auto text-black w-full lg:w-8/12  ">
             
             <div className="border rounded-xl bg-slate-100 grid grid-cols-3 justify-items-center gap-1 p-4 shadow-md">
                    <div className="p-4 border w-fit rounded-lg bg-slate-100 shadow-md"> Switch Theme</div>
                    <div className="p-4 border w-fit rounded-lg bg-slate-100 shadow-md">Notification Settings</div>
                    <div className="p-4 border w-fit rounded-lg bg-slate-100 shadow-md">Help</div>
                    <div className="p-4 border w-fit rounded-lg bg-slate-100 shadow-md">Privacy Policy</div>
                    <div className="p-4 border w-fit rounded-lg bg-slate-100 shadow-md">2</div>
                    <div className="p-4 border w-fit rounded-lg bg-slate-100 shadow-md">3</div>
             </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Main_Settings