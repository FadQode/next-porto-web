import React from "react";
import Hero from "@/public/section/Hero";
import Navbar from "@/public/section/Navbar";
import Profile from "@/public/section/Profile";
import ProjectSection from "@/public/section/Projects";
import EducationSection from "@/public/section/Education";
import SkillsSection from "@/public/section/skills";
import Footer from "@/public/section/Footer";
import ScrollReveal from "@/components/ScrollReveal";


const Home = () => {
  return (
    <div className="min-h-screen bg-[#2d626a]">
      <Navbar />
      <Hero/>
      <ScrollReveal index={0}>
        <Profile/>
      </ScrollReveal>
      <ScrollReveal index={1}>
        <EducationSection/>
      </ScrollReveal>
      <ScrollReveal index={2}>
        <SkillsSection/>
      </ScrollReveal>
      <ScrollReveal index={3}>
        <ProjectSection/>
      </ScrollReveal>
      <ScrollReveal
        index={4}
        distance={36}
        enableBlur={false}
        baseRotation={0.5}
        revealEnd="top 88%"
      >
        <Footer />
      </ScrollReveal>


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
