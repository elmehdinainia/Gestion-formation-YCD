
import { React, useState,useEffect} from 'react'
import { FiEdit } from 'react-icons/fi';
import { MdDeleteSweep } from 'react-icons/md'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Input from "../../../components/ChildComponent/Input";
import axios from 'axios';
import Button from "../../../components/ChildComponent/Button";
// import { ToastContainer, toast } from 'react-toastify';
// import axios from "axios";



function Formation() {
  const imagesurl = 'http://localhost:8080/images'
  const baseUrl = 'http://localhost:8080/formation/'

  const [showModal, setShowModal] = useState(false)
  const [edite, showmodeledit] = useState(false)
  const [open] = useState(true)

  const [dataformation, setData] = useState()
  const [img, setImg] = useState()


  const handleChange = (e) => {
    setData({
      ...dataformation,
      [e.target.name]: e.target.value
    }
    )
  }

  function addformation(e) {

    e.preventDefault()
    console.log(dataformation);

    const data = new FormData()

    data.append('name', dataformation.name)
    data.append('description', dataformation.description)
    data.append('datedebut', dataformation.datedebut)
    data.append('datefin', dataformation.datefin)
    data.append('images', img)

    axios.post(`${baseUrl}/createformation`, data)
      .then((response) => {
        console.log(response)
        window.location.reload(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }






const [showform,showdataformation] =useState([])

  const showformation = async() => {
    const datarepas = await axios.get(`${baseUrl}/getFormation`)

    if (datarepas) {
      showdataformation(datarepas.data.getdata)
      console.log(datarepas.data)
      
      // console.log(data)
    } else {
      console.log("error")
    }
  }

  const deleted = async (id) => {
    await axios.delete(`${baseUrl}/deleteformation/${id}`)
      .then((e) => {
        console.log("success")
        showformation();

      })
      .catch((err) => {
        console.log("error", err)
      })

  }





  const [updat,setupdat] = useState("")
  const handeledit = (e) =>{
    const valeur = e.target.value
    setupdat({...updat, [e.target.name]: valeur})
  }
  const [editimg,setImgedit] = useState()
  
  function editformation(e) {

    e.preventDefault()
    console.log(dataformation);

    const data2 = new FormData()

    data2.append('name', updat.name)
    data2.append('description', updat.description)
    data2.append('datedebut', updat.datedebut)
    data2.append('datefin', updat.datefin)
    data2.append('images', editimg)

    axios.put(`${baseUrl}/updateformation/${updat._id}`,data2)
      .then((response) => {
        console.log(response)
        window.location.reload(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    showformation();
  }, [])

  return (
    <div>
      <div className={`${open ? 'ml-72' : 'ml-20'} duration-300 m-3`}>
        <button type="button" onClick={() => {setShowModal(true); showmodeledit(false)}} className="text-gray-90(0 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Create Formation</button>
        {
          edite ?
            <form className={`duration-300 p-4 pt-9`}>
              <div class="relative z-0 mb-6 w-full group">
                <Input type="text" onChange={handeledit} value={updat.name}  name="name" id="name"  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer"  required />
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <Input type="text" onChange={handeledit} value={updat.description}  name="description" id="description"  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="Description" required />
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <Input type="text" onChange={handeledit} value={updat.datedebut}  name="datedebut" id="datedebut"  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="datedebut" required />
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <Input type="text" onChange={handeledit} value={updat.datefin}   name="datefin" id="datefin"  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="datefin" required />
              </div>
           
              <div className="flex items-center justify-center w-80">
                <label for="dropzone-file" className="mbflex flex-col items-center justify-center w-full h-42 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" onChange={(e) => { setImgedit(e.target.files[0]) }}  />
                </label>
              </div>
              <Button type="submit" onclick={() => { showmodeledit(false) }} className="text-white bg-black hover:bg-neutral-800 mr-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto mt-3 px-9 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" btn="Cancel" />
              <Button type="button" onclick={editformation} className="text-white bg-black hover:bg-neutral-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto mt-3 px-9 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" btn="Update" />
            </form>
            : null
        }
      </div>
      <div class={`${open ? 'ml-72' : 'ml-20'} flex justify-around flex-wrap  duration-300 overflow-x-auto mt-6 relative drop-shadow-2xl sm:rounded-lg`}>
        

        
        
        {showform.map((form) => (
              <a href="#" className="flex  bg-white border rounded-lg  shadow-md md:flex-row md:max-w-3xl mt-5 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-96 md:rounded-none md:rounded-l-lg" src={`${imagesurl}/${form.images}`} alt="" />
              <div className="  flex flex-col justify-between p-4 leading-normal">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 "><span className='text-black font-bold'>Name</span>: {form.name}</p>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 "><span className='text-black font-bold'>description</span>: {form.description}</p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className='text-black font-bold'>date-debut</span> : {form.datedebut}</p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className='text-black font-bold'>date-fin</span> : {form.datefin}</p>


                  <td class="py-4 px-6 flex ">
                  <button className="text-green-700 text-4xl mr-3" onClick={() => {showmodeledit(true);setupdat(form)}}><FiEdit /></button>
                  <button type='button' onClick={(e) => { e.preventDefault(); deleted(form._id) }}   className="text-red-700 text-4xl"><MdDeleteSweep /></button>
                </td>
                
              </div>
               </a>

             
                  ))}
      </div>



      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-96 my-6 mx-auto ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t ">
                  <h3 className="text-3xl font-semibold">
                    Ajouter Formation
                  </h3>
                  <button className="p-1 bg-transparent border-0 text-gray-300 opacity-1 float-right text-3xl leading-none font-semibold outline-none focus:outline-none ml-8" onClick={() => setShowModal(false)} >
                    <span className=" text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <AiOutlineCloseCircle />
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form onSubmit={addformation} className="my-4 text-slate-500 text-lg leading-relaxed" encType='multipart/form-data'>
                    <div className="flex flex-col">
                      <div className="mb-2">
                        <Input type="text" onChange={handleChange} name="name" id="name"  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="Name formation" required />
                      </div>
                      <div className="mb-2">

                        <Input type="text" onChange={handleChange} name="description"  id="description" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="Description" required />
                      </div>
                      <div className="mb-2">
                        <Input type="text" onChange={handleChange} name="datedebut"  id="datedebut" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="datedebut" required />
                      </div>
                  
                      <div className="mb-2">
                        <Input type="text" onChange={handleChange} name="datefin"  id="datefin" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="date-fin" required />
                      </div>
                      <div className="mb-2">
                        <div className="flex items-center justify-center w-72">
                          <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-42 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" name='images' className="hidden" onChange={(e) => { setImg(e.target.files[0]) }} />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                      <Button type='button' className='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg w-full text-sm px-2 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800' onclick={() => setShowModal(false)} btn='Close' />
                      <Button type='submit' className='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg w-full text-sm px-1.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800' btn='Create Repas' />
                    </div>
                  </form>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
        </>
      ) : null
      }
    </div>
  )


}




export default Formation