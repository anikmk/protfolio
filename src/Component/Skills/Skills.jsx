import { FaHtml5,FaCss3,FaNodeJs,FaReact,FaBootstrap} from 'react-icons/fa';
import {DiMongodb} from 'react-icons/di';
import {SiExpress,SiTailwindcss} from 'react-icons/si';


const Skills = () => {
    const skills = [
        {
            logo: <FaHtml5></FaHtml5>,
            level: "HTML5",
            count: 86,
        },
        {
            logo: <FaCss3></FaCss3>,
            level: "CSS",
            count: 90,
        },
        {
            logo: <FaBootstrap></FaBootstrap>,
            level: "Bootstrap",
            count: 90,
        },
        {
            logo: <SiTailwindcss></SiTailwindcss>,
            level: "TailwindCSS",
            count: 94,
        },
        {
            logo: <FaReact></FaReact>,
            level: "React",
            count: 80,
        },
        {
            logo: <FaNodeJs></FaNodeJs>,
            level: "Node.js",
            count: 70,
        },
        {
            logo:<DiMongodb></DiMongodb> ,
            level: "Mongodb",
            count: 80,
        },
        {
            logo:<SiExpress></SiExpress>,
            level: "Express",
            count: 86,
        },
    ];
    return (
        <section id="skills" className="py-10 bg-gray-800 relative">
            <div className="mt-8 text-gray-100 text-center">
                <h3 className="text-4xl font-semibold">
                    My <span className="text-cyan-600">Skills</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
                <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
                    {skills?.map((skill, i) => (
                        <div
                            key={i}
                            className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
                        >
                            <div
                                style={{
                                    background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                                }}
                                className="w-32 h-32 flex items-center justify-center rounded-full"
                            >
                                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                                    {skill.logo}
                                </div>
                            </div>
                            <p className="text-xl mt-3">{skill.level}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;