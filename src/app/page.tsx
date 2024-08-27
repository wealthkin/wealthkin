import Image from "next/image";
import Navbar from "./Navbar";
import SubNavbar from "./SubNavbar";
import styles from "../styles/page.module.css";

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <Navbar />
      <SubNavbar />

      <section className={styles.section}>
        <Image
          src="/image/IMG_0809.jpg"
          alt="Well Kin Molina Angara"
          width={200}
          height={200}
          className={`${styles.image} mb-4`}
        />
        <h2 className="text-3xl font-bold text-gray-800">
          WELL KIN MOLINA ANGARA
        </h2>
        <h1 className="text-5xl font-bold text-gray-800">WEALTHKIN</h1>
        <p className="text-lg text-gray-600 mt-4">
          I&apos;m a passionate developer specializing in building exceptional
          web experiences.
        </p>
        <a href="#projects" className={styles.button}>
          View My Work
        </a>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection} id="about">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
          <p className="text-gray-600 leading-relaxed">
            I&apos;m a developer with a strong background in web technologies,
            focusing on creating seamless user experiences. I love bringing
            ideas to life through code and am constantly learning to stay
            updated with the latest trends.
          </p>
        </div>
      </section>
<br/>
      {/* Projects Section */}
      <section className={styles.projectsSection} id="projects">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            My Projects
          </h2>
          {/* Add your project components here */}
          <p className="text-gray-600">
            Here are some of the projects I&apos;ve worked on:
          </p>
        </div>
      </section>
<br/>
      {/* Contact Section */}
      <section className={styles.contactSection} id="contact">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Get In Touch
          </h2>
          <p className="text-gray-600 mb-8">
            If you&apos;d like to collaborate or have any questions, feel free
            to reach out to me!
          </p>
          <a href="mailto:wealthkin@outlook.com" className={styles.button}>
            Contact Me
          </a>
        </div>
      </section>
    </main>
  );
}
