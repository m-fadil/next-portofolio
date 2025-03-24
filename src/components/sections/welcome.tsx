import { Section } from "../section";
import resume from "@/data/resume.json"

export function Welcome() {
  return (
		<Section id="welcome" className="mt-44">
			<h5 className="text-xl font-[family-name:var(--font-geist-mono)] text-sky-400">Hi there! My name is</h5>
			<h1 className="text-7xl font-bold">
				Mukhammad
				<br />
				Fadhila Ikhsani
			</h1>
			<div className="space-y-2 font-[family-name:var(--font-geist-mono)] text-pretty">
				{resume.intro.map((item, index) => (
					<p key={index} className="">
						{item}
					</p>
				))}
			</div>
		</Section>
	);
}