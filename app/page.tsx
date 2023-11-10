import Banner from "@/components/Banner/Banner";
import Nav from "@/components/Nav";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Nav />
      <Banner />
      <ProjectCard />
    </main>
  );
}
