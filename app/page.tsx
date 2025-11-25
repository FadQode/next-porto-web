import React from "react";
import Hero from "@/public/section/Hero";
import Navbar from "@/public/section/Navbar";




const Home = () => {
  return (
    <div className="min-h-screen bg-[#2d626a]">
      <Navbar />
      <Hero/>
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