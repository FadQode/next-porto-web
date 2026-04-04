import { skillContent } from '@/lib/content/skills';


const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-[#428a91] to-[#2d626a] relative overflow-hidden"
    >
      {/* TECH PATTERN BACKGROUND — UNCHANGED */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30 30 0z' fill='%23f0f1c7' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4">
        {/* HEADER — UNCHANGED */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#f36262]/20 border-2 border-[#f36262] mb-4">
            <span className="text-[#f36262] text-sm font-bold tracking-widest">
              CHARACTER STATS
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#f0f1c7] mb-4">
            Skill Tree
          </h2>

          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#eabc3a] to-transparent mx-auto mb-4" />

          <p className="text-[#aecdc7] max-w-2xl mx-auto">
            Technologies I’ve worked with and continue learning as I grow.
          </p>
        </div>

        {/* ✅ GRID — MATCHES SCREENSHOT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillContent.map((skill) => (
            <div
              key={skill.name}
              className="
                group
                bg-[#2d626a]/50
                border-2 border-[#428a91]
                p-4 md:p-5
                backdrop-blur-sm
                hover:border-[#eabc3a]
                transition-all duration-300
              "
            >
              <h4 className="text-lg font-bold text-[#f0f1c7] mb-2">
                {skill.name}
              </h4>

              <p className="text-xs uppercase tracking-widest text-[#aecdc7]/60">
                {skill.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

