import Link from "next/link";

// Components
import { Button, Logo } from "../../atoms";
import { NavLinks } from "../../molecules";
import { Container } from "../../layouts";

export const Navbar = () => {
	return (
		<div className="py-4 border-b border-light-le sticky top-0 bg-zync-900/75 backdrop-blur-sm">
			<Container className="flex items-center justify-between">
				<nav className="flex items-center space-x-8">
					<Link href="/">
						<span className="cursor-pointer">
							<Logo />
						</span>
					</Link>
					<NavLinks />
				</nav>
				<Button type="outlined">
					<Link href="/signin">Sign in</Link>
				</Button>
			</Container>
		</div>
	);
};
