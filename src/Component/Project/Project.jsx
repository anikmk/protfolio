import { useState } from "react";
import img1 from '../../assets/img/project/Capture1.PNG'
import img2 from '../../assets/img/project/Capture2.PNG'
import img3 from '../../assets/img/project/Capture3.PNG'

const Project = () => {
    const [projects] = useState([
        {
            title: "Project 1",
            img: img1,
            gLink: "https://github.com/anikmk/fitness-tracker-client-side",
            lLink: "https://fitness-tracker-012.web.app/",
        },
        {
            title: "Project 2",
            img: img2,
            gLink: "https://github.com/anikmk/pro-learn-hub-client",
            lLink: "https://pro-learn-hub.web.app/",
        },
        {
            title: "Project 3",
            img: img3,
            gLink: "https://github.com/anikmk/brand-shop-client",
            lLink: "https://automotive-10.web.app/",
        },
    ]);

    return (
        <section className="projects" id="projects">
            <div className="container mx-auto px-4 py-10">
                <div className="title text-center">
                    <h3 className="text-2xl font-semibold mb-5">Featured Projects</h3>
                    <a
                        href="https://github.com/anikmk"
                        target="_blank"
                        rel="noreferrer"
                        className="btn bg-cyan-600 font-semibold text-white md:mx-0 mx-auto rounded-full py-3 px-6"
                    >
                        View All
                    </a>
                </div>
                <div className="projects-wrapper grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    {projects.map((project, i) => (
                        <div className="project shadow-lg" key={i}>
                            <div className="img-container">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                />
                            </div>
                            <div className="description flex justify-between my-2">
                                <h4 className="text-xl font-semibold">{project.title}</h4>
                                <div className="mt-2">
                                    <a
                                        href={project.gLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mr-2"
                                    >
                                        <ion-icon name="logo-github"></ion-icon>
                                    </a>
                                    <a
                                        href={project.lLink}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <ion-icon name="globe-outline"></ion-icon>
                                    </a>
                                </div>
                            </div>
                            <p className="mt-4">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, officiis!
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;
