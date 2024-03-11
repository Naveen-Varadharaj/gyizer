import React, { useState } from 'react'
import Modal from './Modal';
import Modaledit from './Modaledit';
export default function Todo() {

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState({ title: "", description: "" })
    const [id, setId] = useState(null);
    const [id1, setId1] = useState();
    const [currinput, setCurrinput] = useState()
    const [edit, setEdit] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);


    const handleClick = (index) => {
        setId(index);
        setEdit(false);
    }

    const handleAdd = () => {
        if (input.title.length > 0 && input.description.length > 0) {
            console.log(input)
            setTodos([...todos, input]);
            setInput({ title: "", description: "" })
        }
        else {
            alert("Title and Input field should not be empty!!!")
        }
    }

    const handleDelete = (index) => {
        const newTodos = todos.filter((todo, todoIndex) => todoIndex !== index);
        setTodos(newTodos);
        setId(null)
        setEdit(false)
        handleClose()
    }

    const handleEdit = (item, index) => {
        setCurrinput(item);
        setEdit(true);
        setId1(index);
        setOpen1(true)

    }
    const handleUpdate = () => {
        if (currinput.title.length > 0 && currinput.description.length > 0) {
            const updatedTodos = todos.map((todo, index) =>
                index === id1 ? currinput : todo
            );
            setTodos(updatedTodos)
            setCurrinput({ title: "", description: "" })
            setEdit(false)
            setId(null)
        }
        else {
            alert("Title and Input field should not be empty!!!")
        }
    }

    const handleClose = () => {
        setOpen(false);

    };
    const handleClose1 = () => {
        setEdit(false)
        setId(null)
        setOpen1(false)
    };

    const handleOpen = () => {
        setOpen(true);

    };

    return (
        <div >
            <header className='border-2 px-5 py-2 bg-li-dk border-li-or rounded-b-lg'>
                <h3 className='text-xl font-bold text-wh'>GYIZER</h3>
                <h5 className='text-base font-bold text-wh'>TODO APP</h5>
            </header>
            {edit === false ? <div className='flex mx-auto mt-24 mb-15 md:mb-20 h-18 gap-x-2  justify-center'>
                <div className='  flex flex-col justify-center gap-y-2 '>
                    <div className='border-2 rounded border-li-or bg-li-dk text-wh '>
                        <input type='text' placeholder='Title....' className='w-80 outline-none px-3 bg-transparent' value={input.title} onChange={(e) => setInput({ ...input, title: e.target.value })} />
                    </div>
                    <div className='border-2 rounded border-li-or bg-li-dk text-wh'>

                        <input type='text' placeholder='Input....' className='w-80 outline-none px-3 bg-transparent' value={input.description} onChange={(e) => setInput({ ...input, description: e.target.value })} />

                    </div>
                </div>
                <div className=' grid justify-center content-center'>
                    <div>
                        <button className='border-2 rounded border-or bg-li-dk text-or w-14 h-14 outline-none' onClick={() => handleAdd()}><i class="bi bi-plus-lg"></i></button>
                    </div>
                </div>
            </div>
                :
                <> <div className='hidden md:flex mx-auto mt-24 mb-15 md:mb-20 h-18 gap-x-2  justify-center'>
                    <div className='  flex flex-col justify-center gap-y-2 '>
                        <div className='border-2 rounded border-li-or bg-li-dk text-wh '>
                            <input type='text' placeholder='Title....' className='w-80 outline-none px-3 bg-transparent' value={currinput.title} onChange={(e) => setCurrinput({ ...currinput, title: e.target.value })} />
                        </div>
                        <div className='border-2 rounded border-li-or bg-li-dk text-wh'>

                            <textarea type='text' placeholder='Input....' className='w-80 outline-none px-3  min-h-24 bg-transparent' value={currinput.description} onChange={(e) => setCurrinput({ ...currinput, description: e.target.value })} />

                        </div>
                    </div>
                    <div className=''>
                        <div>
                            <button className='border-2 rounded border-or bg-li-dk text-or w-16 h-14 px-1 ' onClick={() => handleUpdate()}>Update</button>
                        </div>
                    </div>
                </div>
                    <div className='flex mx-auto mt-24 mb-15 md:mb-20 h-18 gap-x-2  justify-center md:hidden'>
                        <div className='  flex flex-col justify-center gap-y-2 '>
                            <div className='border-2 rounded border-li-or bg-li-dk text-wh '>
                                <input type='text' placeholder='Title....' className='w-80 outline-none px-3 bg-transparent' value={input.title} onChange={(e) => setInput({ ...input, title: e.target.value })} />
                            </div>
                            <div className='border-2 rounded border-li-or bg-li-dk text-wh'>

                                <input type='text' placeholder='Input....' className='w-80 outline-none px-3 bg-transparent' value={input.description} onChange={(e) => setInput({ ...input, description: e.target.value })} />

                            </div>
                        </div>
                        <div className=''>
                            <div>
                                <button className='border-2 rounded border-or bg-li-dk text-or w-14 h-14 '><i class="bi bi-plus-lg"></i></button>
                            </div>
                        </div>


                        <div className=''
                            style={{
                                textAlign: "start",
                                display: "block",
                                margin: "auto",
                            }}
                        > <Modaledit isOpen={open1}>
                                <div className='flex flex-col justify-between h-full'>
                                    <div className='  flex flex-col justify-center gap-y-2 '>
                                        <div className='border-2 rounded border-li-or bg-li-dk text-wh '>
                                            <input type='text' placeholder='Title....' className='w-80 outline-none px-3 bg-transparent' value={currinput.title} onChange={(e) => setCurrinput({ ...currinput, title: e.target.value })} />
                                        </div>
                                        <div className='border-2 rounded border-li-or bg-li-dk text-wh'>
                                            <textarea type='text' placeholder='Input....' className='w-80 outline-none px-3 h-80 bg-transparent' value={currinput.description} onChange={(e) => setCurrinput({ ...currinput, description: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className='flex gap-x-4 justify-center mt-2'>
                                        <button className='border-2 rounded-lg px-6 py-1 border-li-or  text-wh' onClick={handleClose1}>Cancel</button>
                                        <button className='border-2 rounded-lg px-6 py-1 border-li-or  text-wh' onClick={() => handleUpdate()}  >Save</button>
                                    </div>
                                </div>
                            </Modaledit>
                        </div>
                    </div>



                </>}


            <div
                style={{
                    textAlign: "center",
                    display: "block",
                    padding: 30,
                    margin: "auto",
                }}
            >

                <Modal isOpen={open}>
                    <div className='flex flex-col justify-between h-full'>
                        <h1 className='mb-2 text-xl  text-wh'>Delete this task?</h1>
                        <div className='flex gap-x-4 justify-center mt-2'>
                            <button className='border-2 rounded-lg px-6 py-1  border-li-or  text-wh' onClick={() => handleDelete(id)}  >Yes</button>
                            <button className='border-2 rounded-lg px-6 py-1  border-li-or  text-wh' onClick={handleClose}>No</button>

                        </div>
                    </div>
                </Modal>
            </div>


            {todos.length === 0 ? <div className=' w-full md:w-11/12 h-80 md:border-2 md:border-li-or mx-auto md:bg-li-dk grid content-start  md:content-center justify-items-center   '>
                <div className='border-b-4 border-t-4 border-or'>
                    <h2 className='my-2 text-wh' >No Tasks</h2>
                </div>

            </div> :

                <div className='md:w-11/12 md:h-fit min-h-80 md:border-4 md:rounded-lg md:border-li-or mx-auto md:bg-dk grid grid-cols-1 md:grid-cols-3 content-center justify-items-center gap-2  py-5 mb-5' >
                    {
                        todos.map((item, index) => {
                            return (
                                <div className='flex flex-col w-11/12 '>
                                    <div className='border-2 rounded-lg border-li-or text-wh h-20  flex gap-x-2 justify-between px-5'>
                                        <div className='flex flex-col my-auto '>
                                            <h1 className='break-all overflow-auto h-7'>{item.title}</h1>
                                            <h1 className='break-all overflow-auto h-7'>{item.description}</h1>
                                        </div>
                                        <div className='my-auto flex gap-x-2 md:hidden'>

                                            {index !== id && <button className='border-2 rounded w-8 border-li-or text-wh ' onClick={() => handleClick(index)} >i</button>
                                            }

                                        </div>
                                        <div className='my-auto hidden md:flex md:gap-x-2 '>

                                            {index !== id ? <button className='border-2 rounded w-8 border-li-or text-wh ' onClick={() => handleClick(index)} >i</button> :
                                                <><button className={edit === false ? "border-2 rounded w-8 border-or text-wh" : "border-4 rounded w-8 border-li-or text-wh bg-li-or "} onClick={() => handleEdit(item, index)}  ><i class="bi bi-pencil"></i></button>
                                                    <button className='border-2 rounded w-8 border-or text-wh' onClick={handleOpen} ><i class="bi bi-x"></i></button> </>}

                                        </div>
                                    </div>
                                    <div className='flex flex-row-reverse md:hidden'>

                                        <div className='flex gap-x-2 mt-2 me-2'>
                                            {index === id && <><button className={edit === false ? "border-2 rounded w-8  border-or text-wh" : "border-4 rounded w-8 border-li-or text-wh bg-li-or "} onClick={() => handleEdit(item, index)}  ><i class="bi bi-pencil"></i></button>
                                                <button className='border-2 rounded w-8  border-or text-wh' onClick={handleOpen} ><i class="bi bi-x"></i></button> </>}
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>}
        </div>
    )
}
