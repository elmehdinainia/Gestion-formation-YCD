import { React, useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDeleteSweep } from "react-icons/md";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Input from "../../../components/ChildComponent/Input";
import Button from "../../../components/ChildComponent/Button";
// import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";

function Addemploye() {
  const basadmin = "http://localhost:8080/admin";
  const baseUrlformatio = "http://localhost:8080/formation";

  const basemploye = "http://localhost:8080/employe";
  const baseUrl = "http://localhost:8080/organisme";

  const [showModal, setShowModal] = useState(false);
  const [edite, setEdite] = useState(false);
  const [open] = useState(true);

  const [dataorga, showdataorganisme] = useState([]);
  const showorganisme = async () => {
    const datarepas = await axios.get(`${baseUrl}/getOrganisme`);

    if (datarepas) {
      showdataorganisme(datarepas.data.getdata);
      // console.log('data',datarepas.data)

      // console.log(data)
    } else {
      console.log("error");
    }
  };
  const [datauser, showuser] = useState([]);
  const showUsers = async () => {
    const datarepas = await axios.get(`${basemploye}/getemploye`);

    if (datarepas) {
      // console.log(datarepas.data.findclient)
      showuser(datarepas.data.findclient);
    } else {
      console.log("error");
    }
  };
  //  add employee
  const [data, setData] = useState({});
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  //get formation

  const [showform, showdataformation] = useState([]);

  const showformation = async () => {
    const datarepas = await axios.get(`${baseUrlformatio}/getFormation`);

    if (datarepas) {
      showdataformation(datarepas.data.getdata);
      console.log(datarepas.data);

      // console.log(data)
    } else {
      console.log("error");
    }
  };
  const submit = async (e) => {
    e.preventDefault();

    await axios
      .post(`${basadmin}/addemploye`, data)
      .then((res) => {
         console.log(res.data)
        showUsers();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //! ----------------------------------------------------------------delte employee------------------------------------------------
  const deleted = async (id) => {
    await axios
      .delete(`${basadmin}/deleteemploye/${id}`)
      .then((e) => {
        console.log("success");
        showUsers();

      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  //!----------------------------------------------------------------------updatefomr and showdata

  const [dataedit, setDataedit] = useState({});
  const handleditChange = (e) => {
    setDataedit({
      ...dataedit,
      [e.target.name]: e.target.value,
    });
  };

  const editemploye = async (e) => {
    e.preventDefault()
    await axios.put(`${basadmin}/editemploye/${dataedit._id}`,dataedit)
    .then((res) =>{
      console.log(res.data)
      showUsers();
    })
    .catch ((error)=>{
      console.log(error.response.data);
    })
  };

  useEffect(() => {
    showorganisme();
    showformation();
    showUsers();
  }, []);

  return (
    <div>
      <div className={`${open ? "ml-72" : "ml-20"} duration-300 m-3`}>
        <button
          type="button"
          onClick={() => {
            setShowModal(true);
            setEdite(false);
          }}
          className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        >
          Ajouter employe
        </button>
        {edite ? (
          <form onSubmit={editemploye} className={`duration-300 p-4 pt-9`}>
            <div class="relative z-0 mb-6 w-full group">
              <Input
                type="text"
                value={dataedit.firstname}
                name="firstname"
                id="firstname"
                className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer"
                placeholder="firstname"
                required
              />
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <Input
                type="lastname"
                value={dataedit.lastname}
                name="lastname"
                id="lastname"
                className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer"
                placeholder="lastname"
                required
              />
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <Input
                type="phone"
                value={dataedit.phone}
                name="phone"
                id="phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer"
                placeholder="phone"
                required
              />
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <Input
                type="email"
                value={dataedit.email}
                name="email"
                id="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer"
                placeholder="email"
                required
              />
            </div>
            <div className="mb-2">
              <select
                id="underline_select"
                onChange={handleditChange}
                name="organisme"
                className="block py-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              >
                <option selected>Choose organisme</option>
                {dataorga.map((organi) => (
                  <option value={organi._id}>{organi.name}</option>
                ))}
              </select>
            </div>
            <div className="mb-2">
              <select
                id="underline_select"
                onChange={handleditChange}
                name="formation"
                className="block py-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              >
                <option selected>Choose formation</option>
                {showform.map((format) => (
                  <option value={format._id}>{format.name}</option>
                ))}
              </select>
            </div>
            <Button
              type="button"
              onclick={() => {
                setEdite(false);
              }}
              className="text-white bg-black hover:bg-neutral-800 mr-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto mt-3 px-9 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              btn="Cancel"
            />
            <Button
              type="submit"
              className="text-white bg-black hover:bg-neutral-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto mt-3 px-9 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              btn="Update"
            />
          </form>
        ) : null}
      </div>
      <div
        class={`${
          open ? "ml-72" : "ml-20"
        }  duration-300 overflow-x-auto mt-6 relative shadow-md drop-shadow-2xl sm:rounded-lg`}
      >
        <table class="w-full text-sm text-left mb-5 text-gray-500  dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                firstname
              </th>
              <th scope="col" class="py-3 px-6">
                lastname
              </th>
              <th scope="col" class="py-3 px-6">
                phone
              </th>
              <th scope="col" class="py-3 px-6">
                email
              </th>
              <th scope="col" class="py-3 px-6">
                organisme
              </th>
              <th scope="col" class="py-3 px-6">
                formation
              </th>
            </tr>
          </thead>
          <tbody>
            {datauser.map((User) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {User.firstname}
                </th>
                 <td class="py-4 px-6">{User.lastname}</td>
                <td class="py-4 px-6">{User.phone}</td>
                <td class="py-4 px-6">{User.email}</td>
                  <td class="py-4 px-6">{User.organisme[0]?User.organisme[0].name :""}</td> 
                <td class="py-4 px-6">
                  {User.formation[0] ? User.formation[0].name : ""}
                </td>  
                <td class="py-4 px-6 flex text-right">
                  <button
                    className="text-black text-xl mr-3"
                    onClick={() => {
                      setEdite(true);
                      setDataedit(User);
                    }}
                  >
                    <FiEdit />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      deleted(User._id);
                    }}
                    className="text-black text-2xl"
                  >
                    <MdDeleteSweep />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* addemploye */}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-96 my-6 mx-auto ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t ">
                  <h3 className="text-3xl font-semibold">Create employees</h3>
                  <button
                    className="p-1 bg-transparent border-0 text-gray-300 opacity-1 float-right text-3xl leading-none font-semibold outline-none focus:outline-none ml-8"
                    onClick={() => setShowModal(false)}
                  >
                    <span className=" text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <AiOutlineCloseCircle />
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form
                    onSubmit={submit}
                    className="my-4 text-slate-500 text-lg leading-relaxed"
                    encType="multipart/form-data"
                  >
                    <div className="flex flex-col">
                      <div className="mb-2">
                        <Input
                          type="text"
                          value={data.firstname}
                          onChange={handleChange}
                          name="firstname"
                          id="firstname"
                          className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer"
                          placeholder="firstname"
                          required
                        />
                      </div>
                      <div className="mb-2">
                        <Input
                          type="lastname"
                          value={data.lastname}
                          onChange={handleChange}
                          name="lastname"
                          id="lastname"
                          className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer"
                          placeholder="lastname"
                          required
                        />
                      </div>
                      <div className="mb-2">
                        <Input
                          type="phone"
                          value={data.phone}
                          onChange={handleChange}
                          name="phone"
                          id="phone"
                          className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer"
                          placeholder="phone"
                          required
                        />
                      </div>

                      <div className="mb-2">
                        <Input
                          type="text"
                          value={data.email}
                          onChange={handleChange}
                          name="email"
                          id="email"
                          className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer"
                          placeholder="email"
                          required
                        />
                      </div>
                      <div className="mb-2">
                        <Input
                          type="text"
                          value={data.password}
                          onChange={handleChange}
                          name="password"
                          id="password"
                          className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer"
                          placeholder="password"
                          required
                        />
                      </div>
                      <div className="mb-2">
                        <select
                          id="underline_select"
                          name="organisme"
                          onChange={handleChange}
                          className="block py-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                        >
                          <option selected>Choose organisme</option>
                          {dataorga.map((organi) => (
                            <option value={organi._id}>{organi.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="flex justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                      <Button
                        type="button"
                        className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg w-full text-sm px-2 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                        onclick={() => setShowModal(false)}
                        btn="Close"
                      />
                      <Button
                        type="submit"
                        className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg w-full text-sm px-1.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                        btn="Create employe"
                      />
                    </div>
                  </form>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Addemploye;
