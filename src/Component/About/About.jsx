import img from "../../assets/img/2.jpg"
import resume from "../../assets/introduce myself.pdf"

const About = () => {
    return (
        <section id="about" className="py-10 text-white">
            <div className="text-center mt-8">
                <h3 className="text-4xl font-semibold">
                    About <span className="text-cyan-600">Me</span>
                </h3>
                <p className="text-gray-400 my-3 text-lg">My introduction</p>
                <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
                    <div className="p-2">
                        <div className="text-gray-300 my-3">
                            <p className="text-justify leading-7 w-11/12 mx-auto">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eos, quam vel
                                quisquam, explicabo sit labore dignissimos optio ratione quibusdam doloribus pariatur
                                consequuntur sint. Reprehenderit cupiditate possimus facere quasi voluptatem?
                            </p>
                            <div className="flex mt-10 items-center gap-7">
                                <div>
                                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                                        01
                                        <span className="text-cyan-600">+</span>{" "}
                                    </h3>
                                    <span className="md:text-base text-xs">Years experience</span>
                                </div>
                                <div>
                                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                                        10
                                        <span className="text-cyan-600">+</span>{" "}
                                    </h3>
                                    <span className="md:text-base text-xs">Completed Projects</span>
                                </div>
                            </div>
                            <br />
                            <br />
                            <a href= {resume} download>
                                <button className="btn-primary">Download Resume</button>
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
                        <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
                            <img
                                src={img} alt=""
                                className="w-full object-cover bg-cyan-600 rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
