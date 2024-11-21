import Dashboard from "../components/Dashboard";
import User_Header from "../components/User_Header";
import dentist from "/src/images/dentist.jpeg";
import dentalchair from "/src/images/Dental_Chair_.jpg";

const User_Dashboard = () => {
  return (
    <>
      <div className="flex">
        <div>
          <Dashboard />
        </div>

        <div className="justify-center  mx-auto overflow-x-hidden">
          <div className="ml-48">
            <User_Header />
          </div>

          <div className="mt-16">
            <div className="grid gap-44 w-fit grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mx-auto">
              {/* Image 1 */}
              <div className="border shadow-md mb-3 rounded-xl cursor-pointer">
                <div className="">
                  <img
                    className="object-cover p-3 max-w-lg aspect-square"
                    src={dentist}
                    alt="img"
                  />
                </div>
                <p className="text-wrap max-w-md p-3">
                  The university dental clinic is a organization that provides
                  free dental care services for BukSU students and Personnel.
                </p>
              </div>

              {/* Image 2 */}

              <div className="border shadow-md mb-3 rounded-xl cursor-pointer">
                <div className="">
                  <img
                    className="object-cover p-3 max-w-lg aspect-square"
                    src={dentalchair}
                    alt="img"
                  />
                </div>
                <p className="text-wrap max-w-md p-3">
                  The university dental clinic offers various services like
                  tooth extraction, consultation, and flouride varnish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User_Dashboard;
