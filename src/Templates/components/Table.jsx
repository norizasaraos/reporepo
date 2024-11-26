function Table() {
  return (
    <div className="overflow-y-auto max-h-[500px] shadow-lg rounded-xl">
      <table className="min-w-full table-auto bg-slate-100 rounded-xl shadow-lg  mb-1">
        <thead className="">
          <tr className="bg-slate-200">
            <th className="px-4 py-2 border-b rounded-tl-xl border-gray-200 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
              Patient ID
            </th>
            <th className="px-4 py-2 border-b border-gray-200 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
              Name
            </th>
            <th className="px-4 py-2 border-b border-gray-200 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
              Email
            </th>
            <th className="px-4 py-2 border-b rounded-tr-xl border-gray-200 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
            {/* card 1 */}
          <tr className="text-slate-500">
            <td className="px-4 py-2">12345</td>
            <td className="px-4 py-2">John Doe</td>
            <td className="px-4 py-2">johndoe@example.com</td>
            <td className="px-4 py-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-1 rounded-lg">
                Edit
              </button>
              <button className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-lg">
                Delete
              </button>
            </td>
          </tr>

         {/* card 2 */}

<tr className="text-slate-500">
      <td className="px-4 py-2  ">12345</td>
      <td className="px-4 py-2  ">John Doe</td>
      <td className="px-4 py-2  ">johndoe@example.com</td>
      <td className="px-4 py-2 ">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-1 rounded-lg">
          Edit
        </button>
        <button className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-lg">
          Delete
        </button>
      </td>
      
    </tr>

    {/* card 3 */}

<tr className="text-slate-500 ">
      <td className="px-4 py-2  ">12345</td>
      <td className="px-4 py-2  ">John Doe</td>
      <td className="px-4 py-2  ">johndoe@example.com</td>
      <td className="px-4 py-2 ">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-1 rounded-lg">
          Edit
        </button>
        <button className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-lg">
          Delete
        </button>
      </td>
    </tr>

    {/* card 4 */}

<tr className="text-slate-500">
      <td className="px-4 py-2  ">12345</td>
      <td className="px-4 py-2  ">John Doe</td>
      <td className="px-4 py-2  ">johndoe@example.com</td>
      <td className="px-4 py-2 ">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-1 rounded-lg">
          Edit
        </button>
        <button className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-lg">
          Delete
        </button>
      </td>
    </tr>

        {/* card 5 */}

<tr className="text-slate-500">
      <td className="px-4 py-2  ">12345</td>
      <td className="px-4 py-2  ">John Doe</td>
      <td className="px-4 py-2  ">johndoe@example.com</td>
      <td className="px-4 py-2 ">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-1 rounded-lg">
          Edit
        </button>
        <button className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-lg">
          Delete
        </button>
      </td>
    </tr>

        {/* card 6 */}

<tr className="text-slate-500">
      <td className="px-4 py-2  ">12345</td>
      <td className="px-4 py-2  ">John Doe</td>
      <td className="px-4 py-2  ">johndoe@example.com</td>
      <td className="px-4 py-2 ">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-1 rounded-lg">
          Edit
        </button>
        <button className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-lg">
          Delete
        </button>
      </td>
    </tr>

        {/* card 7 */}

<tr className="text-slate-500">
      <td className="px-4 py-2  ">12345</td>
      <td className="px-4 py-2  ">John Doe</td>
      <td className="px-4 py-2  ">johndoe@example.com</td>
      <td className="px-4 py-2 ">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-1 rounded-lg">
          Edit
        </button>
        <button className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-lg">
          Delete
        </button>
      </td>
    </tr>

    {/* card 8 */}

    <tr className="text-slate-500">
      <td className="px-4 py-2  ">12345</td>
      <td className="px-4 py-2  ">John Doe</td>
      <td className="px-4 py-2  ">johndoe@example.com</td>
      <td className="px-4 py-2 ">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-1 rounded-lg">
          Edit
        </button>
        <button className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-lg">
          Delete
        </button>
      </td>
    </tr>

    {/* card 9 */}

    <tr className="text-slate-500">
      <td className="px-4 py-2  ">12345</td>
      <td className="px-4 py-2  ">John Doe</td>
      <td className="px-4 py-2  ">johndoe@example.com</td>
      <td className="px-4 py-2 ">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-1 rounded-lg">
          Edit
        </button>
        <button className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-lg">
          Delete
        </button>
      </td>
    </tr>


    {/* card 9 */}

    <tr className="text-slate-500">
      <td className="px-4 py-2  ">12345</td>
      <td className="px-4 py-2  ">John Doe</td>
      <td className="px-4 py-2  ">johndoe@example.com</td>
      <td className="px-4 py-2 ">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-1 rounded-lg">
          Edit
        </button>
        <button className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-lg">
          Delete
        </button>
      </td>
    </tr>

        {/* card 10 */}

<tr className="text-slate-500">
      <td className="px-4 py-2  ">12345</td>
      <td className="px-4 py-2  ">John Doe</td>
      <td className="px-4 py-2  ">johndoe@example.com</td>
      <td className="px-4 py-2 ">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-1 rounded-lg">
          Edit
        </button>
        <button className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-lg">
          Delete
        </button>
      </td>
    </tr>

      {/* card 11 */}

      <tr className="text-slate-500">
      <td className="px-4 py-2  ">12345</td>
      <td className="px-4 py-2  ">John Doe</td>
      <td className="px-4 py-2  ">johndoe@example.com</td>
      <td className="px-4 py-2 ">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-1 rounded-lg">
          Edit
        </button>
        <button className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-lg">
          Delete
        </button>
      </td>
    </tr>

          {/* card 12 */}

<tr className="text-slate-500">
      <td className="px-4 py-2  ">12345</td>
      <td className="px-4 py-2  ">John Doe</td>
      <td className="px-4 py-2  ">johndoe@example.com</td>
      <td className="px-4 py-2 ">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-1 rounded-lg">
          Edit
        </button>
        <button className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-lg">
          Delete
        </button>
      </td>
    </tr>
          {/* card 13 */}

<tr className="text-slate-500">
      <td className="px-4 py-2  ">12345</td>
      <td className="px-4 py-2  ">John Doe</td>
      <td className="px-4 py-2  ">johndoe@example.com</td>
      <td className="px-4 py-2 ">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-1 rounded-lg">
          Edit
        </button>
        <button className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-lg">
          Delete
        </button>
      </td>
    </tr>

    
        </tbody>
      </table>
    </div>
  );
}

export default Table;