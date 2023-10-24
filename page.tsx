
"use client" // beck next js frame work need to know  it is opearting where  server side or client side
import React, { useState } from 'react'

const page = () => {

// hooks
  const [title,setTitle] = useState("");
  const [desc,setDesc] = useState("");

  const [mainTask,setMainTask] = useState([]); // array of tasks state hook

  const submitHandler =(a)=>
  {
    a.preventDefault();//  prevent reloading
    // spread operator for storing some value
    setMainTask([ ...mainTask , {title,desc}])

    console.log(title);
    console.log(desc);
    
    setTitle("")
    setDesc("")
    console.log(mainTask)

  }
  let renderTask = <h1>hello buddy</h1>
  // my array component  is not working 
  if(mainTask.length>0){
  
  // not working
  // addition task
  renderTask = mainTask.map((t,i)=>{
    return (
      <li>
    
    <div key={i}>
      <h5> {t.title}</h5>
      <h5> {t.desc}</h5>

    </div>
    </li>
    )
    
  })
  }
  return (

    <>
    <h1 className='bg-black text-white m-0.5 p-3 text-2xl font-bold text-center'>Mr.  Amar to do list</h1>

    <form onSubmit={submitHandler} >
      <input
       type='text' 
       className='text-2xl border-zinc-800 border-2 m-3 px-4 py-2' 
       placeholder='your task sir ??'
       value={title}
       onChange={(e) =>
        setTitle(e.target.value)
      }
       />
      <input type='text' className='text-2xl border-zinc-800 border-2 m-3 px-4 py-2' placeholder='enter task description'
      value={desc}
      onChange={(arg)=>
      setDesc(arg.target.value)
      
      }
      /> 
      <button className='bg-black  text-white text-center mx-5 rounded px-2 py-2 text-' >Add Item</button>
    </form>

    <hr/>

    <div className=' h-10 bg-slate-500 p-8 ' >
      <ul>
        {renderTask}
      </ul>

    </div>



    <footer className=''> tailwind is already installed, concept learned 
      <ul>
        <li> *** 2 way binding in form for react to know what input or state change happening</li>
        <li>
          with tailwind and bootstarp like frame work i dont need to create seperate file for css it amazing
        </li>
        <li>using state hook of react i can do that 2 way binding phenomenna
          <li>hmm directly nii ikh reha hai me current variable k\me aapne value me likha jaa raha hai wo phir setvar me store ho raha hai aurr uska replica screen par dikh raha hai</li>
        </li>
      </ul>
    </footer>

    </>
  )
}

export default page
