import React, { useContext } from 'react';
import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData';
import { motion } from 'framer-motion';

function About() {
    const { theme } = useContext(ThemeContext);

    // Animation variants
    const textVariants = {
        hidden: { opacity: 0, x: -80 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.3,
                duration: 0.8,
                ease: 'easeOut',
            },
        }),
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 80 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.9,
                duration: 1,
                ease: 'easeOut',
            },
        },
    };

    return (
        <div
            className="about"
            id="about"
            style={{ backgroundColor: theme.secondary }}
        >
            <div className="line-styling">
                <div
                    className="style-circle"
                    style={{ backgroundColor: theme.primary }}
                ></div>
                <div
                    className="style-circle"
                    style={{ backgroundColor: theme.primary }}
                ></div>
                <div
                    className="style-line"
                    style={{ backgroundColor: theme.primary }}
                ></div>
            </div>

            <div className="about-body">
                {/* Text Section */}
                <motion.div
                    className="about-description"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h2
                        style={{ color: theme.primary }}
                        variants={textVariants}
                        custom={0}
                    >
                        {aboutData.title}
                    </motion.h2>

                    <motion.p
                        style={{ color: theme.tertiary80 }}
                        variants={textVariants}
                        custom={1}
                    >
                        {aboutData.description1}
                    </motion.p>

                    <motion.p
                        style={{ color: theme.tertiary80 }}
                        variants={textVariants}
                        custom={2}
                    >
                        {aboutData.description2}
                    </motion.p>

                    {aboutData.description3 && (
                        <motion.p
                            style={{ color: theme.tertiary80 }}
                            variants={textVariants}
                            custom={3}
                            dangerouslySetInnerHTML={{
                                __html: aboutData.description3,
                            }}
                        ></motion.p>
                    )}
                </motion.div>

                {/* Image Section */}
                <motion.div
                    className="about-img"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={imageVariants}
                >
                    <img
                        src={
                            aboutData.image === 1
                                ? theme.aboutimg1
                                : theme.aboutimg2
                        }
                        alt="About"
                    />
                </motion.div>
            </div>
        </div>
    );
}

export default About;
