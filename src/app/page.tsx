import resume from "@/data/resume.json"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col justify-center min-h-[calc(100vh-2rem)] w-full space-y-8">
        <h5 className="text-xl font-[family-name:var(--font-geist-mono)] text-sky-400">Hi there! My name is</h5>
        <h1 className="text-7xl font-bold">Mukhammad<br/>Fadhila Ikhsani</h1>
        <div className="space-y-2 font-[family-name:var(--font-geist-mono)] text-pretty">
          {resume.intro.map((item, index) => (
            <p key={index} className="">{item}</p>
          ))}
        </div>
      </div>
      <div className="flex flex-col mt-6 min-h-[calc(100vh-12rem)] w-full space-y-8">
        <h1 className="text-7xl font-bold">About me</h1>
        {resume.about.map((item, index) => (
          <p key={index} className="font-[family-name:var(--font-geist-mono)] text-pretty">{item}</p>
        ))}
      </div>
    </div>
  );
}
