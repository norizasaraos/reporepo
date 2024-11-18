
function StudentTable() {
 

  return (
    <table className="min-w-full  table-auto bg-white">
      <thead>
        <tr>
          <th className="px-4 py-2 bg-gray-100 border-b border-gray-200 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
            Student ID
          </th>
          <th className="px-4 py-2 bg-gray-100 border-b border-gray-200 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
            Full Name
          </th>
          <th className="px-4 py-2 bg-gray-100 border-b border-gray-200 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
            Email
          </th>
          <th className="px-4 py-2 bg-gray-100 border-b border-gray-200 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
            Number
          </th>
          <th className="px-4 py-2 bg-gray-100 border-b border-gray-200 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        
          <tr >
            <td className="px-4 py-2 border-b border-gray-200">1234</td>
            <td className="px-4 py-2 border-b border-gray-200">John Doe</td>
            <td className="px-4 py-2 border-b border-gray-200">200000000@buksu.student.edu.ph</td>
            <td className="px-4 py-2 border-b border-gray-200">0912345698</td>
            <td className="px-4 py-2 border-b border-gray-200 text-nowrap ">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
            </td>
          </tr>
          {/* ========== */}
          <tr >
            <td className="px-4 py-2 border-b border-gray-200">1234</td>
            <td className="px-4 py-2 border-b border-gray-200">John Doe</td>
            <td className="px-4 py-2 border-b border-gray-200">200000000@buksu.student.edu.ph</td>
            <td className="px-4 py-2 border-b border-gray-200">0912345698</td>
            <td className="px-4 py-2 border-b border-gray-200 text-nowrap ">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
            </td>
          </tr>
          {/* =========== */}
          <tr >
            <td className="px-4 py-2 border-b border-gray-200">1234</td>
            <td className="px-4 py-2 border-b border-gray-200">John Doe</td>
            <td className="px-4 py-2 border-b border-gray-200">200000000@buksu.student.edu.ph</td>
            <td className="px-4 py-2 border-b border-gray-200">0912345698</td>
            <td className="px-4 py-2 border-b border-gray-200 text-nowrap ">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
            </td>
          </tr>
       
      </tbody>
    </table>
  );
}

export default StudentTable;