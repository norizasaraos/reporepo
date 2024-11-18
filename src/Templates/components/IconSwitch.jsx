import { useState } from 'react'

export function IconSwitch() {
const [clicked, setClicked] = useState(false)
return (
  <div className="flex ">
    <label className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
      <span className="relative">
        <input id="Toggle1" type="checkbox" className="hidden peer" />
        <div
          onClick={() => setClicked(!clicked)}
          className="w-10 h-6 rounded-full shadow bg-customblue  "
        ></div>
        <div
          onClick={() => setClicked(!clicked)}
          className="absolute inset-y-0 left-0 flex justify-center items-center w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-transparent"
        >
          {clicked ? (
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg>

            </div>
          ) : (
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>

            </div>
          )}
        </div>
      </span>
    </label>
  </div>
)
}