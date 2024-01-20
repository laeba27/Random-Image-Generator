

import { useState } from 'react'
import './App.css'
function App() {


  const [category, setcategory] = useState(" ")
  const [image, setimage] = useState({})
  const apikey = "9NuIknuOpKM1VZ3YYPjy4g==b4HS03zsP6HODLPA"



  const HandleSearch = async () => {
    try {
      const response = await fetch(`https://api.api-ninjas.com/v1/randomimage?category=${category}`, {
        method: 'GET',
        headers: {
          'X-Api-Key': apikey,
          'Accept': 'image/jpg',
        },
      });
  
      // Check if the request was successful (status code 200)
      if (response.ok) {
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        setimage({ image: imageUrl });
      } else {
        console.log(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className='px-28 pt-10'>

      <div className="relative">
        <label htmlFor="Search" className="sr-only"> Search </label>

        <input onChange={(e) => {
          setcategory(e.target.value.trim())
        }}
          value={category}
          type="text"
          id="Search"
          placeholder="Search for..."
          className="w-full text  border px-8 rounded-md border-gray-200 py-5 pe-10 shadow-sm sm:text-lg"
        />

        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
          <button type="button" onClick={HandleSearch} className="text-gray-600 hover:text-gray-700">
            <span className="sr-only">Search</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </span>
      </div>
      <div className='mx-auto w-full my-10 flex justify-center'>
      <img className='' src={image?.image} alt="" />

      </div>
     
    </div>
  )
}
export default App
