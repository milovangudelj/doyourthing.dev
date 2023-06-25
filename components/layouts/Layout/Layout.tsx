import Image from "next/image";

import { Navbar, Footer } from "../../organisms";

import johntravolta from "../../../public/johntravolta.webp";

export const Layout = ({ children }: { children: any }) => {
	return (
		<div className="bg-zync-900 text-white min-h-[100dvh]">
			<div className="min-h-[100dvh] gap-16 flex flex-col items-center justify-center">
				<Image
					src={johntravolta}
					width={293}
					height={300}
					alt="Confused John Travolta from the movie Pulp Fiction"
					className="grayscale opacity-70"
				/>
				<p>Sorry! The project has been paused for the time being.</p>
			</div>
			{/* <Navbar />
			{children}
			<Footer /> */}
		</div>
	);
};
