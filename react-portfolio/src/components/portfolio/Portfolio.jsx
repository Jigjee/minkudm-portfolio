import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/sellCategoryImage.jpg";
import IMG2 from "../../assets/finderapp.png";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "House Marketplace app",
    github: "https://github.com",
    demo: "https://house-marketplace-eight-theta.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Finder git app",
    github: "https://github.com",
    demo: "https://findergit-app.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Figma dashboard UI kit data design web apps",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19300846-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },
  {
    id: 4,
    image: IMG4,
    title: "Maintaining tasks and tracking progress",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio-item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
