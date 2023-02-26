import React, { Children } from "react";
import { createContext, useState, useEffect } from "react";
export const CourseContext = createContext();

const CourseContextProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  return (
    <CourseContext.Provider value={{ courses, setCourses }}>
      {children}
    </CourseContext.Provider>
  );
};

export default CourseContextProvider;
