import React, { useState } from 'react'
import {GrOrganization} from 'react-icons/gr'
import {GiStarFormation} from 'react-icons/gi'
import {FaUserAlt} from 'react-icons/fa'
import {CgOrganisation} from 'react-icons/cg'
import {FiLogOut} from 'react-icons/fi'
import {FaHistory} from 'react-icons/fa'
import Button from "../../../src/components/ChildComponent/Button";








import { Link, Outlet } from 'react-router-dom';
import image from '../../../src/public/formation-gestion-stress-en-entreprise-7.jpeg'
import admin from '../../../src/public/0P9A1293.JPG'






const Dashboard = () => {
  const [open, setOpen] = useState(true)

  const role = localStorage.getItem('role')


  const MenusEmploye = [
    { title: "Dashboad", route: '' },
    { title: "showinfo", gap: true, route: '' },
    { title: "Setting", gap: true, route: 'setting' },
  ]

  const MenusAdmin = [
    { title: "Dashboad",route: '' },
    { title: "Formation",icons:<GiStarFormation/>,gap: true, route: 'Formation' },
    { title: "Organisme",icons:<CgOrganisation/>,gap: true, route: 'Organisme' },
    { title: "Addemploye",icons:<FaUserAlt/>, gap: true,route: 'Addemploye' },
    { title: "Setting" , icons:<GiStarFormation/>,gap: true,route: 'setting' },
  ]


  

  return (
    <div>
      <div className="flex relative">
        <div className={`${open ? 'w-60' : 'w-20'} fixed top-0 duration-300 px-5 min-h-screen  bg-black`}>
          <img src={admin}
            className={` bg-red-300 absolute cursor-pointer rounded-full
          -right-3 top-9 w-8 border-4 p-1 border-dark ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center justify-center p-10">
            <img src={admin}
              className={`cursor-pointer w-50  rounded-full`}
            />
          </div>
          {role === 'admin' ? (
            
            <ul className="pt-5">
              {MenusAdmin.map((menu, index) => (
                <li key={index} className={`text-black text-sm flex w-11 items-center gap-x-3 cursor-pointer p-2 bg-sky-00 rounded-md ${menu.gap ? "mt-5" : " "}`}>
                  <div className="flex text-white items-center space-x-3 ">
                  <div className=" text-violet-700 p-2 text-3xl">{menu.icons}</div>
                  <Link to={menu.route}><span className={`${!open && 'hidden'} origin-left duration-200 text-lg text-white p-4  hover:bg-violet-700 rounded-full`}> {menu.title}</span></Link>
                  </div>
                 
                </li>
              ))}
              <div className="flex items-center mt-20 ">
                <span className=" p-2 text-2xl mr-1 "><FiLogOut/></span><Button  className={`${!open && 'hidden'} duration-200 text-lg text-white`} btn='Logout' />
              </div>
            </ul>)
            :
            role === 'employe' ? (
              <ul className="pt-6">
                {MenusEmploye.map((menu, index) => (
                  <li key={index} className={`text-black text-sm flex w-11 items-center gap-x-4 cursor-pointer p-2 hover:bg-zinc-800 rounded-md ${menu.gap ? "mt-12" : " "}`}>
                    <div>{menu.icons}</div>
                    <Link to={menu.route}><span className={`${!open && 'hidden'} origin-left duration-200 text-lg text-white`}>{menu.title}</span></Link>
                  </li>
                ))}
                <div className="flex items-center">
                  <span className="text-white p-2 text-2xl mr-1"></span><Button  className={`${!open && 'hidden'} duration-200 text-lg text-white`} btn='Logout' />
                </div>
              </ul>
            ) : null}


        </div>
        <div className="p-3 px-5 text-2xl font-semibold flex-1 h-screen">
          <nav className={`${open ? 'ml-80' : 'ml-20'} ml-96 duration-300  hover:bg-black  text-white border-gray-200 px-2 rounded-xl sm:px-4 py-2.5 dark:bg-gray-900`}>
            <div className="container flex flex-wrap items-center justify-between mx-auto ">
              <a href="#" className="flex items-center">
                <img src={image} className="h-6 mr-3 sm:h-9" alt="Marhaba Logo" />
              </a>
              <div class="flex items-center md:order-2">
                {role === 'admin' ?
                  <div className="flex align-center p-2">
                    <h2 className="p-2 text-violet-700 ">Admin</h2>

                  </div>
                  : null
                }
                <button type="button" className="flex mr-3 text-sm  rounded-full md:mr-0" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                  <img className="w-10 h-10 rounded-full bg-white" src={admin} alt="pPofil photo" />
                </button>
              </div>
            </div>
            
          </nav>


          <Outlet />
          </div>

          </div>

          </div>


  

 
  )
}

export default Dashboard
