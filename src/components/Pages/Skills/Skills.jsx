import SkillsLevel from "./SkillsLevel"
const Skills = () => {
  return (
    <div className="h-full page-shadow bg-white px-10"> 
      <div>
        <div className="relative">
          <div className="text-center text-6xl xl:text-8xl font-bold text-black/5">SKILLS</div>
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
          SKILLS
          </h1>
        </div>
      </div>
      <div className="spacy-y-10">
        <SkillsLevel skillName={"HTML"} percentage={100}/>
        <SkillsLevel skillName={"Css"} percentage={80}/>
        <SkillsLevel skillName={"Bootstrap"} percentage={80}/>
        <SkillsLevel skillName={"Sass"} percentage={70}/>
        <SkillsLevel skillName={"Javascript"} percentage={75}/>
        <SkillsLevel skillName={"React"} percentage={90}/>
      </div>
    </div>
  )
}

export default Skills