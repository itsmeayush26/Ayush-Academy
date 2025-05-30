import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [searchQuery,setSearchQuery]=useState("");
  const navigate=useNavigate();

  const searchHandler=(e)=>{
    e.preventDefault();
    if(searchQuery.trim()!=""){
    navigate(`/course/search?query=${searchQuery}`);


    }
    setSearchQuery("");

  }
  return (
    <div className="relative bg-gradient-to-r from-teal-400 to bg-cyan-700 dark:from-gray-800 to dark:to-gray-900 py-24 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-white text-4xl font-bold mb-4">
          Your Path, Your Courses, Your Way.{" "}
        </h1>
        <p className="text-gray-200 dark:text-gray-400 mb-8">
          Discover,Learn and Upskill with our wide range of courses.
        </p>

        <form onSubmit={searchHandler} className="flex items-center justify-center gap-4 flex-wrap">
          <div className="flex items-center bg-white dark:bg-gray-800 rounded-full shadow-lg overflow-hidden">
            <Input
              type="text"
              value={searchQuery}
              onChange={(e)=>setSearchQuery(e.target.value)}
              placeholder="Search Courses"
              className="flex-grow border-none focus-visible:ring-0 px-6 py-3 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
            />
            <Button type ="submit" className="bg-teal-400 dark:bg-cyan-700 text-white px-6 py-3 rounded-r-full hover:bg-teal-800 dark:bg-cyan-800">
              Search
            </Button>
          </div>

          <Button onClick={()=>navigate(`/course/search?query`)} className="bg-white dark:bg-gray-800 text-teal-600 rounded-full hover:bg-gray-200 px-6 py-3 shadow">
            Explore Courses
          </Button>
        </form>
      </div>
    </div>
  );
};

export default HeroSection;
