import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsRow from "@/components/ProjectsRow";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectsRow />
        <JoinSection />
      </main>
      <Footer />
    </>
  );
}
