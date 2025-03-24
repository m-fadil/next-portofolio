"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useState } from "react";

const Icons = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & {
    isHover: boolean;
    logos: { name: string }[]
  }
>(({ className, logos, isHover, ...props }, ref) => {
		const url = {
			get: (param: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${param}/${param}-original.svg`,
		};

		return (
			<div
        ref={ref}
        className={cn("flex w-fit", className)}
        {...props}
      >
				{logos.map((logo, index) => (
					<motion.div
						key={index}
						initial={{ x: -index * 16 }}
						animate={{ x: isHover ? 0 : -index * 16 }}
						transition={{ duration: 0.2, ease: "easeInOut" }}
						className="flex size-12 border-2 border-slate-900 bg-[#070E33] justify-center items-center aspect-square rounded-full overflow-hidden"
						style={{ zIndex: logos.length - index }}
					>
						<div className="size-[80%]">
							<img src={url.get(logo.name)} alt={logo.name} />
						</div>
					</motion.div>
				))}
			</div>
		);
	}
);

const Card = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & {
    data: {
      title: string;
      desc: string;
      img: string;
      logos: { name: string }[];
    };
  }
>(({ data, className }, ref) => {
  const [isHover, setIsHover] = useState<boolean>(false)

	return (
		<div
      ref={ref}
      className={cn(
				"flex flex-col items-center justify-center bg-slate-900 gap-4 border-2 border-blue-500 p-2 rounded-lg overflow-hidden transition-all",
				isHover && "scale-110 z-10",
				className
			)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
			<div className="w-full h-72 bg-white rounded-md overflow-hidden">
				<img src={data.img} alt="project 1" className={cn("object-cover size-full", isHover && "object-contain")} />
			</div>
			<div className="w-full">
				<h1 className="text-base font-bold">{data.title}</h1>
				<p className="text-gray-500 text-sm">{data.desc}</p>
			</div>
			<div className="w-full">
				<Icons logos={data.logos} isHover={isHover}/>
			</div>
		</div>
	);
})

export { Card }