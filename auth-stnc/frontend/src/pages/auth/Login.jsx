import { React, useState } from "react"
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
  import Label from '../../components/ChildComponent/Label'
  import Input from '../../components/ChildComponent/Input'
  import Button from '../../components/ChildComponent/Button'
  export default function Login() {
    const baseUrl = 'http://localhost:8080/gestion/auth/user'

    const [user, setUser] = useState({})
    const navigate = useNavigate()

    const handledata = (e) => {
        const valeur = e.target.value
        setUser({ ...user, [e.target.name]: valeur })
    }
      const onSubmit = (e) => {
        e.preventDefault()
        // console.log(user)
        Axios.post(`${baseUrl}/login`, user)
          .then(res => {
          //  console.log(res.data)

            // toast.warn('🦄 ' + res.data, {
            //   position: "top-center",
            //   autoClose: 5000,
            //   hideProgressBar: false,
            //   closeOnClick: true,
            //   pauseOnHover: true,
            //   draggable: true,
            //   progress: undefined,
            //   theme: "light",
            // });
    
            if (res.data) {
              localStorage.setItem("token", res.data.token)
              localStorage.setItem("email", res.data.email)
              localStorage.setItem("first_name", res.data.first_name)
              localStorage.setItem("last_name", res.data.last_name)
              localStorage.setItem("role", res.data.role)
            }

            const role = localStorage.getItem('role')

            if(role){
                navigate(`/dashboard/${role}`)
              }
    
          })
          .catch(err => {
            console.log(err)
          })
      }
    
return (
       
<div className="w-9/12 "  >
      <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 animateanimated animatebounce">

            <p class="font-withe text-center font-bold  text-black dark:text-black text-6xl">Gestion Formation</p>
              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">Or</p>
              </div>
              {/* Email input */}
              <div className="mb-6">
              <Label className="form-check-label inline-block font-bold text-black text-xl p-2" htmlFor="exampleCheck2" label="Email" />
                <Input id="email" onChange={handledata}  value={user.email} name="email" type="text" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"/>
              </div>
              {/* Password input */}
              <div className="mb-6">
              <Label className=" font-bold text-black text-xl form-check-label inline-block p-2" htmlFor="exampleCheck2" label="Password"/>
                <Input id="password" onChange={handledata} value={user.password} name="password" type="password" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-non"  />
              </div>
              <div className="flex justify-between items-center mb-6">
        
                <a href="/" className="text-white ">Create acount ?</a>
              </div>
              <div className="text-center lg:text-left">
            <Button className="text-white bg-gradient-to-br fs-10 from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 block w-full " btn="button"/>

              </div>
            </form>


            


            <p className="text-center text-gray-500 text-xs">
              ©2020 Acme Corp. All rights reserved.
            </p>

            </div>

  )
  }

