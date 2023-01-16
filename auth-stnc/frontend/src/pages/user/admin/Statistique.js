import { React, useState,useEffect} from 'react'
import axios from 'axios'
import admin from '../../../public/0P9A1293.JPG'

const baseURL = 'http://localhost:5500/api/user/manager'
const basadmin = "http://localhost:8080/admin";


function Statistique() {
  const [open,setopen] = useState(false)
  const [staticadmin,Setstatiq] = useState("")
  const statistic = async () => {
    await axios.get(`${basadmin}/statistique`)
    
      .then((response) => {
        Setstatiq(response.data)
        // console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

        useEffect(() => {
          statistic()
        }, [])

  return (
    <div>
      <div className={`${open ? 'ml-72' : 'ml-60'} mt-10 duration-300 flex flex-wrap justify-center P-3` }>
    
        


<div className="flex space-x-4">
  <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg drop-shadow-2xl hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center p-4">User</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">welcome admin you have User in the site web <span className="ml-3 font-bold text-blue-600 text-3xl">{staticadmin.user}</span></p>
  </a>

  <a href="#" className="drop-shadow-2xl  block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center p-4">Formation</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">welcome admin you have Formation in the site web. <span className='ml-3 font-bold text-3xl text-blue-600'>{staticadmin.formation}</span> </p>
  </a>

  <a href="#" className="drop-shadow-2xl block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center p-4">Organisme</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">welcome admin you have Formation in the site web. <span className="ml-3 font-bold text-blue-600 text-3xl">{staticadmin.organisme}</span>  </p>
  </a>


</div>




      </div>

    </div>
  )
}


export default Statistique
