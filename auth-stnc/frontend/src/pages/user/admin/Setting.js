import {React,useState} from 'react'


export default function Setting() {
  const [open] = useState(true)

  return (
    <div class={`${open ? 'ml-72' : 'ml-20'} flex justify-around flex-wrap  duration-300 overflow-x-auto mt-6 relative drop-shadow-2xl sm:rounded-lg`}>

<table class="w-full text-sm  text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th>
            firstname
            </th>
            <th>
            lastname
            </th>
            <th>
              email
            </th>
                 <th>
              phone
            </th>
        
          </tr>
        </thead>
        <tbody>
    

            <tr className="bg-white border-b dark:bg-gray-600 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="py-4 px-6 text-center text-gray-600 ">
              firstname           
                 </td>

              <td className="py-4 px-6 text-center text-gray-600 ">
              lastname

              </td>
              <td className="py-4 px-6 text-center text-gray-600 ">
            email
              </td>
              <td className="py-4 px-6 text-center text-gray-600 ">
            phone
              </td>
           
            </tr>

        </tbody>
      </table>

</div>

  )
}
