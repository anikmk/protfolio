import emailjs from '@emailjs/browser';
import { useRef } from "react";
import Swal from 'sweetalert2';

const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_slyq5ox', 'template_ikap1b5', form.current, '6jcs-sDEANY71iiBa')
      .then((result) => {
        console.log(result.text)
        Swal.fire({
            title: "Good job!",
            text: "Your Message Sent!",
            icon: "success"
          });
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <section id="contact" className="py-10 px-3 text-white">
            <div className="text-center mt-8">
                <h3 className="text-4xl font-semibold">
                    Contact <span className="text-cyan-600">Me</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

                <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">

                    <form ref={form} onSubmit={sendEmail} className="flex flex-col flex-1 gap-5">
                        <input name="from_name" type="text" placeholder="Your Name" />
                        <input name="from_email" type="Email" placeholder="Your Email Address" />
                        <textarea name="message" placeholder="Your Message" rows={10}></textarea>
                        <button className="btn-primary w-fit">Send Message</button>
                    </form>


                    <div className="flex flex-col gap-7">
                        <div className="flex flex-row text-left gap-4 flex-wrap items-center">
                            <a href="mailto:anikmollik122321@gmail.com">
                                <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                                    <ion-icon name="mail"></ion-icon>
                                </div>
                            </a>
                            <p className="md:text-base text-sm break-words">
                                anikmollik122321@gmail.com
                            </p>
                        </div>

                        <div className="flex flex-row text-left gap-4 flex-wrap items-center">
                            <a href="https://wa.me/8801626728671" target="_blank" rel="noopener noreferrer">
                                <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                                    <ion-icon name="logo-whatsapp"></ion-icon>
                                </div>
                            </a>
                            <p className="md:text-base text-sm break-words">
                                +880 1626728671
                            </p>
                        </div>

                        <div className="flex flex-row text-left gap-4 flex-wrap items-center">
                            <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                                <ion-icon name="location"></ion-icon>
                            </div>
                            <p className="md:text-base text-sm break-words">
                                Location
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
