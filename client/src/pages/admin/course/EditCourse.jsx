import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";
import CourseTab from "./CourseTab";

const EditCourse = () => {
  return (
    <div className="flex-1 mt-20 sm:mt-20 md:mt-0 ">
      <div className="flex items-center justify-between mb-5">
        <h1 className="font-bold text-xl">
          Add details information regarding course
        </h1>
        <Link to="lecture">
          <Button className ='hover:text-teal-600' variant="Link">Go to lectures page</Button>
        </Link>
      </div>
      <CourseTab/>
    </div>
  );
};

export default EditCourse;
