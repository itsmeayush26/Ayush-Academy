import { Button } from "@/components/ui/button";
import Login from "./pages/Login";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./pages/student/HeroSection";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { RouterProvider } from "react-router";
import Courses from "./pages/student/Courses";
import MyLearning from "./pages/student/MyLearning";
import Profile from "./pages/student/Profile";


const appRoute =createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
      {
        path:"/",
        element:(
        <>
        <HeroSection/>
        <Courses/>
        </>
        ),
      },
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"my-learning",
        element:<MyLearning/>
      },
      {
        path:"profile",
        element:<Profile/>
      }
    ]

  }
]);

function App() {
  return (
    <main>
      <RouterProvider router={appRoute} />
    </main>
  );
}

export default App;
