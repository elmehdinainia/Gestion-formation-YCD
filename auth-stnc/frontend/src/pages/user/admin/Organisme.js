
import { React, useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { FiEdit } from 'react-icons/fi';
import { MdDeleteSweep } from 'react-icons/md'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Button from '../../../components/ChildComponent/Button';
import Input from '../../../components/ChildComponent/Input';
import { ToastContainer, toast } from 'react-toastify';
import  axios  from 'axios';


export default function Organisme() {
  const baseUrl = 'http://localhost:8080/organisme'

  const [showModal, setShowModal] = useState(false)
  const [showModaledit, setShowModaledit] = useState(false)
  const [open] = useState(true)

  const [addOrg,SetOrganisme] = useState("")


  const handel = (e) =>{
    const valeur = e.target.value
    SetOrganisme({...addOrg, [e.target.name]: valeur})
  }

  const submit = async(e) => {
    const Data = {
      ...addOrg
    }
    await axios.post(`${baseUrl}/addorganisme`,addOrg)
    .then((res) =>{
      window.location.reload(false)

      toast.success(res.data)


    console.log(res.data)
    }) 
    .catch ((error)=>{
      console.log(error)
    })   
  }
  const [data,showdata] = useState([])

  const showorganisme = async() => {
    const datarepas = await axios.get(`${baseUrl}/getOrganisme`)

    if (datarepas) {
      showdata(datarepas.data.getdata)
      console.log('data',datarepas.data)
      
      // console.log(data)
    } else {
      console.log("error")
    }
  }

  const deleted = async (id) => {
    await axios.delete(`${baseUrl}/deletorganisme/${id}`)
      .then((e) => {
        console.log("success")
        showorganisme();

      })
      .catch((err) => {
        console.log("error", err)
      })

  }

  const [edit,setedit] = useState([])

const handeledit = (e) =>{
  const valeur = e.target.value
  setedit({...edit, [e.target.name]: valeur})
}
  
const submitedite = async() =>{
  
  await axios.put(`${baseUrl}/updateorganisme/${edit._id}`,{...edit})
  .then((res) =>{
    window.location.reload(false)
  }) 
  .catch ((error)=>{
    toast.error(error.response.data);
  })
}
const [imgedit, setImgedit] = useState()  
  
const submitedit = async() =>{
 const dataedit = new FormData()
 dataedit.append('name', edit.name)
 dataedit.append('description', edit.description)
 dataedit.append('price', edit.price)
 dataedit.append('category', edit.category)
 dataedit.append('images', imgedit)
 await axios.put(`${baseUrl}/updateproduct/${edit._id}`,dataedit)
 .then((res) =>{
   console.log(res.data)
   showorganisme()
   toast.success(res.data)
 }) 
 .catch ((error)=>{
   toast.error(error.response.data);
 })

} 




















  useEffect(() => {
    showorganisme();
  }, [])

  

  







  return (
    <div>
    <div className={`${open ? 'ml-72' : 'ml-20'} duration-300 m-3`}>
      <Button type="button" onclick={() => setShowModal(true)} className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" btn="Ajouter Category" />
    </div>

    <div className={`${open ? 'ml-72' : 'ml-20'} duration-300 overflow-x-auto drop-shadow-2xl  relative`}>
      <table class="w-full text-sm  text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th>
              Name
            </th>
            <th>
              ville
            </th>
            <th>
              phone
            </th>
                 <th>
              adress
            </th>
            <th class="py-3 px-6 text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
        {data.map((organ) => (

            <tr className="bg-white border-b dark:bg-gray-600 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="py-4 px-6 text-center text-gray-600 ">
                {organ.name}
              </td>
              <td className="py-4 px-6 text-center text-gray-600 ">
              {organ.ville}

              </td>
              <td className="py-4 px-6 text-center text-gray-600 ">
              {organ.phone}
              </td>
              <td className="py-4 px-6 text-center text-gray-600 ">
              {organ.address}
              </td>
              <td className="py-4 px-6 flex items-center">
                <Link to='' className="text-black text-xl mr-3" onClick={() => {setShowModaledit(true);setedit(organ)}}><FiEdit /></Link>
                <Link to="#"  onClick={(e) => { e.preventDefault(); deleted(organ._id) }} className="text-black text-3xl"><MdDeleteSweep /></Link>
              </td>
            </tr>
                          ))}

        </tbody>
      </table>
    </div>


                                               {/* show model add formation */}


  {showModal ? (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t ">
              <h3 className="text-3xl font-semibold">
                Ajouter organisme
              </h3>
              <button className="p-1 bg-transparent border-0 text-gray-300 opacity-1 float-right text-3xl leading-none font-semibold outline-none focus:outline-none ml-8" onClick={() => setShowModal(false)} >
                <span className=" text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                  <AiOutlineCloseCircle />
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <form className="my-4 text-slate-500 text-lg leading-relaxed">
                <div className="flex flex-col">
                  <div className="mb-2">
                    <Input type="text" value={addOrg.name} onChange={handel} name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="Name organisme" required />
                  </div>
                  <div className="mb-2">
                    <Input type="text" value={addOrg.ville} onChange={handel} name="ville" id="ville" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="ville" required />
                  </div>
                  <div className="mb-2">
                    <Input type="text" value={addOrg.phone} onChange={handel} name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="phone" required />
                  </div>
                  <div className="mb-2">
                    <Input type="text" value={addOrg.adress} onChange={handel} name="address" id="address" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="address" required />
                  </div>
                </div>
                <div className="flex justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <Button type='button' className='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg w-full text-sm px-2 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800' onclick={() => setShowModal(false)} btn='Close' />
                  {/* <Button type='button' onClick={registerHandler} className='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg w-full text-sm px-1.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800' btn='Create Repas' /> */}
                  <button onClick={submit} type='button'className='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg w-full text-sm px-1.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'>valider</button>
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
                                                   {/* show model edit formation */}

    {showModaledit ? (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t ">
              <h3 className="text-3xl font-semibold">
                edit un Repas
              </h3>
              <button className="p-1 bg-transparent border-0 text-gray-300 opacity-1 float-right text-3xl leading-none font-semibold outline-none focus:outline-none ml-8" onClick={() => setShowModaledit(false)} >
                <span className=" text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                  <AiOutlineCloseCircle />
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <form className="my-4 text-slate-500 text-lg leading-relaxed">
                <div className="flex flex-col">
                  <div className="mb-2">
                    <Input type="text" value={edit.name} onChange={handeledit}   name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" required />
                  </div>
                  <div className="mb-2">
                    <Input type="text" value={edit.ville} onChange={handeledit}   name="ville" id="ville" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer"  required />
                  </div>
                  <div className="mb-2">
                    <Input type="text"  value={edit.phone} onChange={handeledit}  name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer"  required />
                  </div>
                  <div className="mb-2">
                    <Input type="text" value={edit.address} onChange={handeledit}  name="address" id="adress" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" required />
                  </div>
                </div>
                <div className="flex justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <Button type='button' className='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg w-full text-sm px-2 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800' onclick={() => setShowModaledit(false)} btn='Close' />
                  <button type='button' onClick={submitedite}  className='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg w-full text-sm px-1.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'>valider</button>
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
  <ToastContainer/>
</div>
  )
}
