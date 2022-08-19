import Link from "next/link";

// Components
import { Button, Logo } from "../../atoms";
import { NavLinks } from "../../molecules";
import { Container } from "../../layouts";

import { APP_BASE_URL } from "../../../utils/variables";

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
					<a href={`${APP_BASE_URL}/signin`}>Sign in</a>
				</Button>
			</Container>
		</div>
	);
};
