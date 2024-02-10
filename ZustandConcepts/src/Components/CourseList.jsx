import React from 'react'
import useCourseStore from '../app/courseStore.js'
import { MdDelete } from "react-icons/md";


export default function CourseList() {
    const {courses,removeCourse,toggleCourseStatus}=useCourseStore(
        (state)=>({
            courses:state.courses,
            removeCourse:state.removeCourse,
            toggleCourseStatus:state.toggleCourseStatus
        })
    )
  return (
    <>
    <ul>
        {courses.map((course,i)=>
            (
                <React.Fragment key={i}>
                  <li className='course-item'
                  style={{
                    backgroundColor:course.completed ? '#74E291':'white',
                    textDecoration:course.completed && "line-through",
                    animation:"ease-in-out",
                    //animationDuration:"10s"
                  }}>
                    <span className='courses-item-col-1'>
                        <input type="checkbox"
                        checked={course.completed} 
                        onChange={(e)=>{toggleCourseStatus(course.id)}}/>
                    </span>
                    <span>
                        {course?.title}
                    </span>

                    <button onClick={()=>{removeCourse(course.id)}}>
                        <MdDelete/>
                    </button>
                  </li>
                </React.Fragment>
            )
        )}
    </ul>
    </>
  )
}
