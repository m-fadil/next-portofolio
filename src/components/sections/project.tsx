import { Card } from "../card";
import { Section } from "../section";

export function Project() {
  const datas = [
		{
			title: "User Dashboard",
			desc: "Memonitor masa kerja karyawan PKWT ",
			img: "/Picture1.png",
			logos: [{ name: "laravel" }, { name: "tailwindcss" }, { name: "alpinejs" }],
		},
		{
			title: "Portal Magang",
			desc: "Pendaftaran magang di  PT. INKA (Persero)",
			img: "/Picture2.png",
			logos: [{ name: "laravel" }, { name: "tailwindcss" }],
		},
	];
  
  return (
    <Section className="mt-24">
			<h1 className="text-7xl font-bold">Projects</h1>
      <div className="relative grid grid-cols-2 w-full gap-4">
        {datas.map((data, index) => (
          <Card 
            key={index}
            data={data}
          />
        ))}
      </div>
    </Section>
  )
}