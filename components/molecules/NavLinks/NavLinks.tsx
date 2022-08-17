import { NavLink } from "../../atoms";

const links = [
	{
		id: "nl_0",
		target: "/about",
		label: "About",
	},
	{
		id: "nl_1",
		target: "/usage",
		label: "Usage",
	},
	{
		id: "nl_2",
		target: "/download",
		label: "Download",
	},
];

export const NavLinks = () => {
	return (
		<ul className="flex space-x-2">
			{links.map((link) => {
				return (
					<NavLink key={link.id} target={link.target} label={link.label} />
				);
			})}
		</ul>
	);
};
