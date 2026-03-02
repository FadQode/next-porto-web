import React from "react";
import Hero from "@/public/section/Hero";
import Navbar from "@/public/section/Navbar";
import Profile from "@/public/section/Profile";
import ProjectSection from "@/public/section/Projects";
import EducationSection from "@/public/section/Education";
import SkillsSection from "@/public/section/skills";
import Footer from "@/public/section/Footer";


const Home = () => {
  return (
    <div className="min-h-screen bg-[#2d626a]">
      <Navbar />
      <Hero/>
      <Profile/>
      <EducationSection/>
      <SkillsSection/>
      <ProjectSection/>
      <Footer />


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