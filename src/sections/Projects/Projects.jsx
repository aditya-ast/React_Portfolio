import styles from "./ProjectsStyles.module.css";
import js from "../../assets/js.png";
import powerbi from "../../assets/powerbi.png";
import html_css from "../../assets/html_css.png";
import mern from "../../assets/mern.png";
import react from "../../assets/react.png";
import ai from "../../assets/ai.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={mern}
          link="https://www.godigitify.com/"
          h3="Godigitify Nexus"
          p="An IT Company Website"
        />
        <ProjectCard
          src={powerbi}
          link="https://github.com/aditya-ast/PowerBI_Amazon_Dashboard.git"
          h3="Amazon Product Dashboard"
          p="PowerBI Dashboard for Amazon Products"
        />
        <ProjectCard
          src={mern}
          link="https://clickmaster.netlify.app/"
          h3="Click Master"
          p="Photographer Booking Website"
        />
        <ProjectCard
          src={powerbi}
          link="https://github.com/aditya-ast/PowerBI_Virat_Kohli_Dashboard.git"
          h3="Virat Kohli Dashboard"
          p="PowerBI Performance Dashboard"
        />
        <ProjectCard
          src={html_css}
          link="https://aditya-ast.github.io/c4_educare_website/"
          h3="C4 Educare"
          p="Education Consultant Website"
        />
        <ProjectCard
          src={js}
          link="https://aditya-ast.github.io/Pokemon_Sound/"
          h3="Pokemon Sound"
          p="Pokemon Sound Generator"
        />
        <ProjectCard
          src={react}
          link="https://onepetroof-m997tnh3u-adityas-projects-0b55d2ff.vercel.app/"
          h3="OnePetRoof"
          p="Pet Website Frontend"
        />
        <ProjectCard
          src={html_css}
          link="https://aditya-ast.github.io/My_Protfolio_html-css/"
          h3="My Portfolio"
          p="Portfolio Website"
        />
        <ProjectCard
          src={react}
          link="https://github.com/aditya-ast"
          h3="mern"
          p="Fitness App"
        />
        <ProjectCard
          src={js}
          link="https://github.com/aditya-ast"
          h3="mern"
          p="Fitness App"
        />
        <ProjectCard
          src={powerbi}
          link="https://github.com/aditya-ast"
          h3="mern"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
