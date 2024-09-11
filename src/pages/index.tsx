// /src/pages/index.tsx

import Head from 'next/head';
import Image from 'next/image';
import profilePic from '../styles/pf.png';
import SocialMediaButtons from '@/components/SocialMediaButtons';
import { useRouter } from 'next/router';
import Skills from '@/components/skills';


const Home = () => {
    const router = useRouter();

    const goToContactPage = () => {
        router.push('/contact');
    };

    return (
        <>
            <Head>
                <title>Phuthanet Sangachat - Portfolio</title>
                <meta name="description" content="Welcome to my portfolio website!" />
                <link rel="icon" href="src/styles/favicon.ico" />
            </Head>

            {/* Profile Section */}
            <section id="about" className="bg-gray-300 py-6">
                <div className="flex gap-6">
                    <div className="flex-none w-1/3  flex flex-col justify-center items-center">
                        <div id="cardProfile" className="bg-white mr-5 rounded-xl overflow-hidden">
                            <div className="px-5 pt-5">
                                <Image
                                    src={profilePic}
                                    alt="Profile"
                                    style={{ maxHeight: '150px', objectFit: 'cover' }}
                                    className="w-full h-full"
                                />
                            </div>
                            <div className="bg-white py-10"></div>
                        </div>
                    </div>
                    <div className="flex-grow flex flex-col">
                        <div className="mb-2">
                            <p className="text-gray-600 text-sm">FULLSTACK DEVELOPER</p>
                        </div>
                        <div>
                            <h1 className="text-gray-600 text-4xl font-bold">PHUTHANET SANGACHAT</h1>
                        </div>
                        <div>
                            <SocialMediaButtons size={24} scale='sm'  />
                        </div>
                    </div>
                </div>
            </section>

            <Skills />
            

            {/* Projects Section */}
            <section id="projects" className="py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white shadow-md p-6 rounded-lg">
                            <h3 className="text-xl font-semibold">Project 1</h3>
                            <p className="text-gray-600">Description of the project goes here.</p>
                        </div>
                        <div className="bg-white shadow-md p-6 rounded-lg">
                            <h3 className="text-xl font-semibold">Project 2</h3>
                            <p className="text-gray-600">Description of the project goes here.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-12 bg-gray-800 text-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
                    <p className="text-lg">Feel free to reach out for collaboration or any inquiries.</p>
                    <div className="mt-6">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={goToContactPage}>Send Message</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
