import { Navbar, Footer } from "../../organisms";

export const Layout = ({ children }: { children: any }) => {
	return (
		<div className="bg-zync-900 text-white min-h-screen">
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};
