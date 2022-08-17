import Link from "next/link";

// Components
import { Button, Logo } from "../atoms";
import { NavLinks } from "../molecules";
import { Container } from "../";

export const Navbar = () => {
	return (
		<div className="py-4 border-b border-light-le">
			<Container className="flex items-center justify-between">
				<nav className="flex items-center space-x-8">
					<Link href="/">
						<span className="cursor-pointer">
							<Logo />
						</span>
					</Link>
					<NavLinks />
				</nav>
				<Button>
					<Link href="/signin">Sign in</Link>
				</Button>
			</Container>
		</div>
	);
};
