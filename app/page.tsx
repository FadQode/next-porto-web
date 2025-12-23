import React from "react";
import Hero from "@/public/section/Hero";
import Navbar from "@/public/section/Navbar";
import Profile from "@/public/section/Profile";
import ProjectSection from "@/public/section/Projects";
import EducationSection from "@/public/section/Education";



const Home = () => {
  return (
    <div className="min-h-screen bg-[#2d626a]">
      <Navbar />
      <Hero/>
      <Profile/>
      <EducationSection/>
      <ProjectSection/>


      {/* <PlatformSection />
      <SkillSection />
      <QuestLogSection />
      <AchievementSection />
      <Footer /> */}
    </div>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

export default Home;