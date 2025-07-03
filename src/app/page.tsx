"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, GraduationCap, BookOpen, Languages } from "lucide-react";
import { useEffect, useState, ReactNode } from "react";
import { ArrowUp, Download } from "lucide-react";
import { useInView } from 'react-intersection-observer';
import Image from "next/image";

type FadeInSectionProps = {
  children: ReactNode;
  delay?: number;
};

function FadeInSection({ children, delay = 0 }: FadeInSectionProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}

function TechIcon({ src, alt, dark = false }: { src: string; alt: string; dark?: boolean }) {
  return (
    <div className="group">
      <div className="bg-gray-800 hover:bg-indigo-600 transition-colors p-4 rounded-lg shadow-md flex items-center justify-center">
        <Image
          src={src}
          alt={alt}
          width={40}
          height={40}
          className={dark ? "invert" : ""}
        />
      </div>
      <p className="text-xs mt-2 text-center text-gray-400 group-hover:text-indigo-300">{alt}</p>
    </div>
  );
}

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    visible && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 z-50 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    )
  );
}

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="bg-gray-900 min-h-screen text-white font-sans pt-24 pb-12 p-6 max-w-4xl mx-auto">
        {/* Hero Section */}
        <FadeInSection delay={0.1}>
          <motion.section
            id="about"
            className="text-center space-y-4 mb-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-white">Hi, I'm Muhammad Amir</h1>
            <p className="text-xl text-indigo-400">Junior Frontend Developer</p>
            <p className="text-md text-gray-400 max-w-xl mx-auto">
              Passionate about building modern, responsive UIs using React, Vue, Tailwind CSS, and TypeScript.
            </p>
          </motion.section>
        </FadeInSection>
        {/* About Section */}
        <FadeInSection delay={0.1}>
          <motion.section
            id="experience"
            className="max-w-4xl mx-auto mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold text-indigo-300 mb-4">About Me</h2>
            <div className="space-y-3 text-gray-300 text-lg">
              <p>
                I'm a detail-oriented frontend developer based in Kajang, Malaysia with 3 years of experience working on production apps and real-world dashboards.
              </p>
              <p>
                I’ve contributed to teams in Singapore and Malaysia, using tools like React.js, Vue.js, Next.js, Tailwind CSS, and Git to ship great user experiences.
              </p>
              <p>
                I love clean code, collaboration, and continuous learning. Open to remote or international opportunities.
              </p>
            </div>
          </motion.section>
        </FadeInSection>
        {/* Experience Section */}
        <FadeInSection delay={0.1}>
          <motion.section
            className="max-w-4xl mx-auto mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold text-indigo-300 mb-6">Experience</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white">Front-End Developer – Hubble Pte Ltd</h3>
                <p className="text-sm text-gray-400">May 2023 – Apr 2024 | Singapore (Remote)</p>
                <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                  <li>Developed and maintained UI components using Vue.js and TypeScript</li>
                  <li>Integrated with REST APIs to display dynamic project data and reports</li>
                  <li>Followed Figma designs and ensured responsive layouts across screen sizes</li>
                  <li>Improved loading speed of a project listing page by 30% (Lighthouse score)</li>
                  <li>Documented component usage in Storybook for onboarding</li>
                  <li>Fixed 15+ UI bugs reported by QA pre-sprint review</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">Junior Front-End Developer – Softinn Solutions Sdn Bhd</h3>
                <p className="text-sm text-gray-400">Mar 2022 – Apr 2023 | Melaka, Malaysia</p>
                <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                  <li>Built features in the reservation dashboard using React.js, Redux, and Tailwind CSS</li>
                  <li>Improved mobile responsiveness of hotel owner portal</li>
                  <li>Collaborated with QA/backend teams to meet sprint goals</li>
                  <li>Reduced support tickets by 20% after improving tooltips and form UX</li>
                  <li>Delivered UI changes on 5+ client projects without major bugs</li>
                  <li>Appreciated by team for Git commit consistency</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">Frontend Developer Intern – Lava Protocols Sdn Bhd</h3>
                <p className="text-sm text-gray-400">Jan 2021 – Feb 2022 | Kuala Lumpur, Malaysia</p>
                <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                  <li>Built internal CRM pages using HTML, CSS, JavaScript, and Bootstrap</li>
                  <li>Fixed styling bugs and supported QA testing feedback</li>
                  <li>Learned Jira and Git workflows while pairing with senior developers</li>
                  <li>Completed 10+ UI tickets during internship</li>
                  <li>Improved layout alignment and created reusable UI components</li>
                </ul>
              </div>
            </div>
          </motion.section>
        </FadeInSection>
        {/* Education Section */}
        <FadeInSection delay={0.1}>
          <motion.section
            className="max-w-3xl mx-auto mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold text-indigo-300 mb-6">Education</h2>
            <div className="space-y-6">
              <div className="flex gap-3 items-start">
                <GraduationCap className="w-6 h-6 text-indigo-400 mt-1" />
                <div>
                  <p className="font-bold text-white">Bachelor of Computer Science (Software Engineering)</p>
                  <p className="text-gray-400">National University of Singapore (NUS), 2020 – Singapore</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <GraduationCap className="w-6 h-6 text-indigo-400 mt-1" />
                <div>
                  <p className="font-bold text-white">JavaScript Algorithms and Data Structures</p>
                  <p className="text-gray-400">freeCodeCamp, 2023 – Remote / San Francisco, CA</p>
                </div>
              </div>
            </div>
          </motion.section>
        </FadeInSection>
        {/* Training / Courses Section */}
        <FadeInSection delay={0.1}>
          <motion.section
            className="max-w-3xl mx-auto mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold text-indigo-300 mb-6">Training / Courses</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <BookOpen className="text-indigo-400 w-5 h-5 mt-1" />
                <p className="text-gray-300">Meta Front-End Developer Certificate – Coursera</p>
              </div>
              <div className="flex items-start gap-3">
                <BookOpen className="text-indigo-400 w-5 h-5 mt-1" />
                <p className="text-gray-300">Responsive Web Design Certification – freeCodeCamp</p>
              </div>
              <div className="flex items-start gap-3">
                <BookOpen className="text-indigo-400 w-5 h-5 mt-1" />
                <p className="text-gray-300">Introduction to React – Codecademy</p>
              </div>
            </div>
          </motion.section>
        </FadeInSection>
        {/* Languages Section */}
        <FadeInSection delay={0.1}>
          <motion.section
            className="max-w-3xl mx-auto mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold text-indigo-300 mb-4">Languages</h2>
            <div className="flex items-center gap-3 text-lg text-gray-300">
              <Languages className="text-indigo-400 w-5 h-5" />
              <p>English – Proficient</p>
            </div>
          </motion.section>
        </FadeInSection>
        {/* Skills Section */}
        <FadeInSection delay={0.1}>
          <motion.section
            id="skills"
            className="max-w-3xl mx-auto mb-20 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold text-indigo-300 mb-4">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-300 text-sm">
              <span>HTML</span><span>CSS</span><span>JavaScript</span><span>React</span>
              <span>Git</span><span>Bootstrap</span><span>Responsive Design</span><span>Webpack</span>
              <span>jQuery</span><span>RESTful APIs</span><span>Communication</span><span>Teamwork</span>
              <span>Problem-Solving</span><span>Adaptability</span><span>Time Management</span><span>Attention to Detail</span>
              <span>Critical Thinking</span><span>Creativity</span><span>Willingness to Learn</span><span>Feedback Reception</span>
            </div>
          </motion.section>
        </FadeInSection>

        <FadeInSection delay={1.0}>
          <motion.section id="techstack" className="mb-20 text-center">
            <h2 className="text-3xl font-semibold text-indigo-300 mb-6">Tech Stack</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 items-center justify-items-center">
              {/* Logos from public folder or CDN icons */}
              <TechIcon src="/logos/html.svg" alt="HTML5" dark />
              <TechIcon src="/logos/css.svg" alt="CSS3" dark />
              <TechIcon src="/logos/js.svg" alt="JavaScript" dark />
              <TechIcon src="/logos/react.svg" alt="React" dark />
              <TechIcon src="/logos/nextjs.svg" alt="Next.js" dark />
              <TechIcon src="/logos/vue.svg" alt="Vue.js" dark />
              <TechIcon src="/logos/tailwind.svg" alt="Tailwind CSS" dark />
              <TechIcon src="/logos/typescript.svg" alt="TypeScript" dark />
              <TechIcon src="/logos/github.svg" alt="GitHub" dark />
              <TechIcon src="/logos/postman.svg" alt="Postman" dark />
              <TechIcon src="/logos/figma.svg" alt="Figma" dark />
            </div>
          </motion.section>
        </FadeInSection>

        {/* Projects Section */}
        <FadeInSection delay={0.1}>
          <motion.section
            id="projects"
            className="max-w-6xl mx-auto px-4 md:px-6 mb-24 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-indigo-300 mb-10 text-center">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-indigo-500/50 transition-transform transform hover:-translate-y-1 duration-300 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Hubble Dashboard</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Vue.js project dashboard for a construction SaaS. Integrated REST APIs and improved rendering by 30%.
                  </p>
                </div>
                <div className="text-sm text-gray-500">Vue.js · TypeScript · REST API · Storybook</div>
              </div>

              <div className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-indigo-500/50 transition-transform transform hover:-translate-y-1 duration-300 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Hotel Admin Portal</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    React + Redux dashboard used by hotel owners. UX updates reduced support tickets by 20%.
                  </p>
                </div>
                <div className="text-sm text-gray-500">React · Tailwind CSS · Redux</div>
              </div>

              <div className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-indigo-500/50 transition-transform transform hover:-translate-y-1 duration-300 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">CRM Interface</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Internal CRM UI built during internship. Used Bootstrap with HTML/CSS. Created reusable components.
                  </p>
                </div>
                <div className="text-sm text-gray-500">HTML · CSS · Bootstrap</div>
              </div>
            </div>
          </motion.section>
        </FadeInSection>

        <FadeInSection delay={0.8}>
          <motion.section id="testimonials" className="mb-20 text-center">
            <h2 className="text-3xl font-semibold text-indigo-300 mb-6">Testimonials</h2>
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <p className="text-gray-300 italic">
                  "Amir quickly grasped project requirements and delivered clean, responsive UI components that exceeded expectations. A pleasure to work with!"
                </p>
                <p className="mt-2 text-sm text-gray-500">— Tech Lead, Hubble Pte Ltd</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <p className="text-gray-300 italic">
                  "He improved our mobile dashboard UX and helped reduce support tickets. Always proactive and professional in his work."
                </p>
                <p className="mt-2 text-sm text-gray-500">— Project Manager, Softinn Solutions</p>
              </div>
            </div>
          </motion.section>
        </FadeInSection>

        {/* Contact Section */}
        <FadeInSection delay={0.1}>
          <motion.section
            id="contact"
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold text-indigo-300 mb-4">Contact Me</h2>
            <p className="text-gray-400">I'd love to connect! Feel free to reach out via email or phone.</p>
            <div className="mt-4 space-y-2 text-lg text-gray-300">
              <div className="flex items-center gap-2 justify-center">
                <Mail className="text-indigo-400 w-5 h-5" />
                <a href="mailto:muhamadev@outlook.com" className="hover:underline text-indigo-400">
                  muhamadev@outlook.com
                </a>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Phone className="text-indigo-400 w-5 h-5" />
                <span>+60 12-628 2307</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <MapPin className="text-indigo-400 w-5 h-5" />
                <span>Kajang, Selangor, Malaysia</span>
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-500">
              GitHub: <a href="https://github.com/muhamadev0509" className="text-indigo-400 hover:underline" target="_blank">muhamadev0509</a>
            </p>
            <a
              href="/Muhammad-Amir-Frontend-Resume.pdf"
              download
              className="inline-flex items-center gap-2 mt-4 px-6 py-2 bg-indigo-600 text-white dark:bg-indigo-400 dark:text-gray-900 rounded-full hover:bg-indigo-500 dark:hover:bg-indigo-300 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>

          </motion.section>
        </FadeInSection>

        <ScrollToTopButton />
      </main>
    </>
  );
}
