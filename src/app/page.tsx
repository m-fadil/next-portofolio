import { About } from "@/components/sections/about";
import { Project } from "@/components/sections/projects";
import { Welcome } from "@/components/sections/welcome"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-y-24">
      <Welcome />
      <About />
      <Project />
    </div>
  );
}
