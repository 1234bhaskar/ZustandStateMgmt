import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";

const courseStore = (set) => ({
  courses: [],
  addCourse: (course) => {
    set((state) => ({
      courses: [course, ...state.courses],
    }));
  },
  removeCourse: (courseId) => {
    set((state) => ({
      courses: state.courses.filter((c) => c.id != courseId),
    }));
  },
  toggleCourseStatus: (courseId) => {
    set((state) => ({
      courses: state.courses.map((course) =>
        course.id === complete
          ? { ...course, completed: !course.completed }
          : course
      ),
    }));
  },
});

//exoprt this

const useCourseStore = create(
  devtools(
    persist(courseStore, {
      //Storing ito the local storage
      name: "courses",
    })
  )
);

export default useCourseStore;
