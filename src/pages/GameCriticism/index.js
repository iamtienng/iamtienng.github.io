import { useEffect, useState } from "react";

import blogPostsData from "./contents/list/posts-list.json";

import SectionHeader from "@/components/SectionHeader";
import Navigation from "@/components/Navigation";

const navigation = [
  { name: "About", href: "/", current: false },
  { name: "Computer Science", href: "/ComputerScience", current: false },
  { name: "Game Criticism", href: "/GameCriticism", current: true },
  { name: "Keycap Designing", href: "/KeycapDesigning", current: false },
];

export default function GameCriticism() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Load preferred theme from local storage
    const preferredTheme = localStorage.getItem("theme");

    if (preferredTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (preferredTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      // If no theme preference is set, use the automatic theme based on user's system preference
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }

    setBlogPosts(blogPostsData);
  }, []);

  return (
    <div>
      <SectionHeader title="I am Tien Nguyen" />
      <main>
        <Navigation navigation={navigation} />
        <section>
          <div className="text-center p-5 py-5">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              This section is under construction.
            </h2>
          </div>
        </section>
        <section className="py-10">
          {/* <div>
            <BlogList blogPostsData={blogPosts} field="GameCriticism" />
          </div> */}
        </section>
      </main>
    </div>
  );
}
