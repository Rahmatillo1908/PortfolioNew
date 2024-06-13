import HTMLFlipBook from "react-pageflip"
import Page from "./Page"
import Cover from "./Pages/Cover/Cover"
import coverImg from "../assets/cover.png";
import FirstPage from "./Pages/Hero/FirstPage"
import Skills from "./Pages/Skills/Skills"
import Services from "./Pages/Services/Services"
import About from './Pages/About/About'
import Project from "./Pages/Project/Project"
import project1Img from "../assets/project.png"
import project2Img from "../assets/project2.png"
import project3Img from "../assets/project3.png"
import project4Img from "../assets/project4.png"
import project5Img from "../assets/project5.png"
import project6Img from "../assets/project6.png"
function MyBook() {
  const ProjectData = [
    {
      name: "Images Search",
      desc: "Images search with Pexels Api",
      image: project1Img,
      websiteLink: "https://pexelsapisearch.netlify.app/"
    },
    {
      name: "Social Media",
      desc: "Social Media make in React Js",
      image: project2Img,
      websiteLink: "https://reactsocialmedianew.netlify.app/"
    },
    {
      name: "3d Portfolio",
      desc: "3d Portfolio  make in React Js and Three JS",
      image: project6Img,
      websiteLink: "https://rahmatillo3d.netlify.app/"
    },
    {
      name: "Foods",
      desc: "The ingredients of food and how it is prepared",
      image: project3Img,
      websiteLink: "https://fasteatwebsite.netlify.app/"
    },
    {
      name: "Music Player",
      desc: "Music player for social networks",
      image: project4Img,
      websiteLink: "https://musicplayermedia.netlify.app/"
    },
    {
      name: "Books Website",
      desc: "website for reading books",
      image: project5Img,
      websiteLink: "https://booksshopwebsite.netlify.app/"
    },
  ]
  let index = 6
  return (
    <HTMLFlipBook width={500} height={600} showCover="true">
      <Page number={1}>
        <Cover coverImg={coverImg} title="My Portfolio" />
      </Page>
      <Page number={2}>
        <FirstPage />
      </Page>
      <Page number={3}>
        <Skills />
      </Page>
      <Page number={4}>
        <Services />
      </Page>
      <Page number={5}>
        <About />
      </Page>
      {ProjectData.map((project) =>
        <Page number={index++} key={index}>
          <Project project={project} />
        </Page>
      )}
      <Page number={12}>
        <Cover title="Thank You" coverImg={coverImg} />
      </Page>
    </HTMLFlipBook>
  )
}

export default MyBook