import { Section } from "../section";
import resume from "../../data/resume.json";

export function About() {
  return (
		<Section className="mt-24">
			<h1 className="text-7xl font-bold">About me</h1>
			{resume.about.map((item, index) => (
				<p key={index} className="font-[family-name:var(--font-geist-mono)] text-pretty">
					{item}
				</p>
			))}
		</Section>
	);
}