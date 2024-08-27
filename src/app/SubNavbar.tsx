"use client";

import { useState, lazy, Suspense, useEffect, useRef } from "react";
import styles from "../styles/SubNavbar.module.css";

const Resume = lazy(() => import("../app/components/Resume"));

const SubNavbar = () => {
  const [activeSubNav, setActiveSubNav] = useState<string>("");
  const [isSubNavOpen, setIsSubNavOpen] = useState<boolean>(false);
  const submenuRef = useRef<HTMLDivElement>(null);

  const toggleSubNav = () => {
    setIsSubNavOpen((prev) => !prev);
  };

  const handleMouseEnter = (item: string) => {
    setActiveSubNav(item);
  };

  const handleMouseLeave = () => {
    // Do nothing on mouse leave
  };

  const handleClickOutside = (event: MouseEvent) => {
    // Check if the click is outside the submenu
    if (submenuRef.current && !submenuRef.current.contains(event.target as Node)) {
      // Reset activeSubNav to go back home
      setActiveSubNav("");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.subNavbar} ref={submenuRef}>
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        {/* Toggle Button for Mobile */}
        <button
          onClick={toggleSubNav}
          className={`${styles.toggleButton} md:hidden`}
        >
          {isSubNavOpen ? (
            <span className="material-icons">expand_less</span>
          ) : (
            <span className="material-icons">expand_more</span>
          )}
        </button>

        {/* Sub Navbar Items */}
        <div
          className={`flex-1 text-center ${
            isSubNavOpen ? "block" : "hidden"
          } md:flex md:justify-between`}
        >
          <div
            onMouseEnter={() => handleMouseEnter("Resume")}
            onMouseLeave={handleMouseLeave}
            className={styles.subNavbarItem}
          >
            Resume
          </div>
          <div
            onMouseEnter={() => handleMouseEnter("Blogs")}
            onMouseLeave={handleMouseLeave}
            className={styles.subNavbarItem}
          >
            Blogs
          </div>
          <div
            onMouseEnter={() => handleMouseEnter("Projects")}
            onMouseLeave={handleMouseLeave}
            className={styles.subNavbarItem}
          >
            Projects
          </div>
          <div
            onMouseEnter={() => handleMouseEnter("Contact")}
            onMouseLeave={handleMouseLeave}
            className={styles.subNavbarItem}
          >
            Contact
          </div>
        </div>
      </div>
      {activeSubNav && (
        <div className={styles.activeSubNav}>
          <Suspense fallback={<p>Loading...</p>}>
            {activeSubNav === "Resume" ? (
              <Resume />
            ) : (
              <p>Displaying {activeSubNav} content...</p>
            )}
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default SubNavbar;
