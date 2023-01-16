import { React,useState,useEffect} from "react";
import axios from "axios";


const basemploye = "http://localhost:8080/employe";  
const imagesurl = 'http://localhost:8080/images'



export default function Showinformation() {
  const [open] = useState(true);
  const [showmploye, setShowOmploye] = useState([]);

  const getinformation = async() =>{
    // e.preventDefault()
    
  await axios.get(`${basemploye}/formation`)
  .then(res => {
    setShowOmploye(res.data.user)
    console.log(res.data.user)

  })
  .catch(err => console.log(err))



  }
  useEffect(() => {
    getinformation();
  }, []);

  return (
    
      <div class={`${open ? 'ml-72' : 'ml-20'} flex justify-around flex-wrap  duration-300 overflow-x-auto mt-6 relative drop-shadow-2xl sm:rounded-lg`}>
        

        

              <a href="#" className="flex  bg-white border rounded-lg  shadow-md md:flex-row md:max-w-3xl mt-5 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-96 md:rounded-none md:rounded-l-lg"src={`${imagesurl}/${showmploye.formation ? showmploye.formation[0]?.images : ""}`}  alt="" />
              <div className="  flex flex-col justify-between p-4 leading-normal">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 "><span className='text-black font-bold'>name formation</span> {showmploye.formation ? showmploye.formation[0]?.name : ''}</p> 

                   <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 "><span className='text-black font-bold'>description formation </span>: {showmploye.formation ? showmploye?.formation[0]?.description : ''} </p> 
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className='text-black font-bold'>date-debut</span> : {showmploye?.formation ? showmploye.formation[0]?.datedebut : ''}</p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className='text-black font-bold'>date-fin</span> : {showmploye?.formation ? showmploye.formation[0]?.datefin : ''}</p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className='text-black font-bold'>organisme assigné</span> : {showmploye?.organisme ? showmploye.organisme[0]?.name : ''}</p>


                  <td class="py-4 px-6 flex ">
                  <button type='button'   className="text-red-700 text-4xl"></button>
                </td>
                
              </div>
               </a>  

             
      </div>



  )

  
}
