import { useState } from 'react';
import styles from '../styles/Skills.module.css';

export default function Skills() {
    const skills = [
        { title: "Front-end Development", details: "HTML, CSS, JavaScript, React" },
        { title: "Server-side Rendering", details: "Next.js, Express.js" },
        { title: "Back-end Development", details: "Node.js, Databases, APIs" },
        { title: "Responsive Styling", details: "Tailwind CSS, Bootstrap" }
    ];
    return (
        <section id="projects" className="py-12">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Skills</h2>
                <div className={styles.container}>
                    {skills.map((skill, index) => (
                        <div className={`${styles.wrap} animate pop`}>
                            <div className={styles.overlay}>
                                <div className={`${styles['overlay-content']} animate slide-up delay-2`}>
                                    <h1 className="text-black animate slide-up pop delay-4">{skill.title}</h1>
                                </div>
                                <div className={`${styles['image-content']} animate slide-up delay-5`}></div>
                            </div>
                            <div className={styles.text}>
                                <p className="text-black text-xs">{skill.details}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
