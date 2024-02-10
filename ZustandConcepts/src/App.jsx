import React from 'react'
import CourseForm from './Components/CourseForm'
import CourseList from './Components/CourseList'
export default function App() {
  return (
    <div className='app'>
      <h1>My CourseList</h1>
      <CourseForm/>
      <div className='list'>
      <CourseList/> 
      </div>
    </div>
  )
}
