
function Table() {
  return (
    <div>
        <table className="min-w-full table-auto bg-slate-100 rounded-xl shadow-lg mb-1">
  <thead className="">
    <tr className="bg-slate-200">
      <th className="px-4 py-2 border-b rounded-tl-xl   border-gray-200 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
        Patient ID
      </th>
      <th className="px-4 py-2  border-b border-gray-200 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
        Name
      </th>
      <th className="px-4 py-2  border-b border-gray-200 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
        Email
      </th>
      <th className="px-4 py-2  border-b rounded-tr-xl border-gray-200 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
        Actions
      </th>
    </tr>
  </thead>
  <tbody>
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

    </tbody>
</table>
    </div>
  )
}

export default Table