// "use client";
// import { CrossIcon, SquareX } from 'lucide-react';
// import moment from 'moment';
// import React, { useState,useRef, useEffect } from 'react'

// const iniatialData=[
//     {label:"buy grocery", completed:false, id: 1,date: moment().format('MMMM Do YYYY, h:mm:ss a')},
//     {label:"Learn DSA", completed:false, id: 2,date: moment().format('MMMM Do YYYY, h:mm:ss a')},
//     {label:"Learn Driving", completed:false, id: 3,date: moment().format('MMMM Do YYYY, h:mm:ss a')},
//     {label:"Sell Laptop", completed:true, id: 4,date: moment().format('MMMM Do YYYY, h:mm:ss a')},
// ]

// function Dsa() {
// const [todos,setTodos]=useState(JSON.parse(localStorage.getItem('todos')??"{}").length >0 ? JSON.parse(localStorage.getItem('todos')??"{}") : iniatialData)
// const [error,setError]=useState("")
// const InputValRef=useRef(null)
// const isCompleted = useRef(null)
// const inputRefPalindrome = useRef(null)
// const HandleDelete=(id :any) => {
  
//     setTodos((prev :any)=> prev.filter((todo:any)=> todo.id !== id ?todo:setError("something went wrong")) )
// }
// const Notification=()=>{
//     return(
//         <div className="absolute z-10 h-10 right-0 top-24 bg-white">
//             <p className='text-red-500' >{error}</p>
//         </div>
//     )
// }
// const handleSubmit=(e:any)   => {
//     e.preventDefault()

// console.log(InputValRef?.current?.value)
// if(!InputValRef?.current?.value) return
// setTodos((prev)=>{
//    let task={ label:InputValRef?.current?.value,
//     id:todos.length+1,
//     completed:false,
//     date:moment().format('MMMM Do YYYY, h:mm:ss a')}
//     return [task, ...prev]
// })

// }



// const handleCheckbox=(id)=>{
//     setTodos((prev)=>{

//         const selectedTask= prev.map((todo)=> todo.id ===id ?  {...todo, completed: !todo.completed}:todo)

//         return selectedTask.sort((a,b)=> a.completed - b.completed)
//     })
// }
// useEffect(() =>{
//     if(todos.length<1){
//         setError("All Entries are Deleted")

//     }




// },[])

// useEffect(()=>{
//     localStorage.setItem('todos', JSON.stringify(todos))
// },[todos])
// // console.log(json.parse(localStorage.getItem('todos')))


// function Palindrome(input ="MADAM"){
//     let result=""
//     input =input.toLowerCase()
//     for(let i =0;i < input.length ;i++){
//         console.log(input[i])
//         result= input[i]+result
//     }
// if(result===input){
//     return "its a Palindrome"
// }else{
//     return " no its not a Palindrome"
// }
// }

// const handlePalindromeSubmit=(e)=>{
//     e.preventDefault()
//     let  input= inputRefPalindrome.current.value
    
//     console.log(Palindrome(input))
// }
//   return (
//     <div>
//           {error &&  <Notification/>}
//         <div className="mx-auto w-[800px] text-2xl">
//             <div className="">
//                 Todo App
//             </div>
//             <div className="">
//                 <form  onSubmit={handleSubmit} >
              
//                     <input ref={InputValRef}  name="label" placeholder='enter task' className='border-1 bg-slate-50 text-black' type="text" />
//                 </form>
//                 <div className="">
                    
//                     <ul>
//                         {todos &&todos.map((todo,index) =>(
//                             <li key={todo.id} className='flex  justify-between' > <div><input defaultChecked={todo.completed} type="checkbox" onChange={()=>handleCheckbox(todo.id)} /> <span ref={isCompleted} className={todo.completed ?"line-through":""}>{todo.label} </span></div>  <span className='text-lg'>{todo?.date}</span><span onClick={()=>HandleDelete(todo.id)} ><SquareX /></span></li>
//                         ))}
                    
//                     </ul>
                
//                 </div>

//             </div>
                  

//         </div>
//         <div className="mx-auto w-[800px] text-xl ">
//             <div className="flex my-5 " >

//             <h1 className=' text-2xl' > Palindrome or Not </h1>
//             <div className="">
//                 <form onSubmit={handlePalindromeSubmit}>
//                 <input placeholder='check palindrome ' className='border-1 bg-slate-50 text-black ml-2' type="text" ref={inputRefPalindrome} />
//                 </form>
                
//             </div>
//             </div>
//                 <pre className=' bg-slate-300 p-4 rounded-xl'>
//                     <code className='text-gray-700'>
//     {`
// let input ="MADAM"
//     function Palindrome(input){
//         let result=""
//         input =input.toLowerCase()
//         for(let i =0;i < input.length ;i++){
//             console.log(input[i])
//             result= input[i]+result
//         }
//         if(result===input){
//             return "its a Palindrome"
//         }else{
//             return " no its not a Palindrome"
//         }
//     }
//     Palindrome(input)`
//     }
//                     </code>
//                 </pre>
//         </div>
//     </div>
//   )
// }

// export default Dsa
import React from 'react'

function Dsa() {
  return (
    <div>Dsa</div>
  )
}

export default Dsa