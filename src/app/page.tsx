import { About } from "@/components/about";
import { Welcome } from "@/components/welcome"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Welcome />
      <About />
    </div>
  );
}
