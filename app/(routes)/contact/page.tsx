"use client";

import { FC } from 'react';
import Banner from "@/components/banner";
import ContainerPage from "@/components/container-page";

const ContactForm: FC = () => {
    return (
        <>
        <ContainerPage>
            <div className='flex flex-col justify-center h-lvh'>
                <div className="mb-10">
                    <h1 className="text-secondary text-2xl leading-tight text-center md:text-4xl md:mb-5">
                        I’d love to connect with you!
                        <span className="block text-primary">Feel free to reach out, and I’ll get back to you as soon as possible</span>
                    </h1>
                </div>

                <div className="flex items-center justify-center mb-10">
                    <form className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-primary text-sm font-bold mb-2">Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-primary text-sm font-bold mb-2">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-primary text-sm font-bold mb-2">Message</label>
                            <textarea
                                id="message"
                                placeholder="Your Message"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                rows={4}
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary-dark"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </ContainerPage>
        <Banner />
        </>
    );
}

export default ContactForm;
