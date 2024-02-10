import React, { useState } from 'react'
import useCourseStore from '../app/courseStore'
export default function CourseForm() {

    
    const addCourse=useCourseStore((state)=>state.addCourse)
    const [courseTitle,setCourseTitle]=useState("");

    console.log("CourseForm Rendered");
    const handleCourseSubmit=()=>{
        if(!courseTitle) return alert('Please add a course title')
        addCourse({
    id:Math.ceil(Math.random()*100000),
    title :courseTitle
    })
    setCourseTitle("")
    }
    return (
    <div className='form'>
        <input type="text" value={courseTitle} name="" id="" onChange={(e)=>{
            setCourseTitle(e.target.value);
        }} />
        <button className="form-submit" onClick={handleCourseSubmit}>Add Course</button>
    </div>
  )
}
