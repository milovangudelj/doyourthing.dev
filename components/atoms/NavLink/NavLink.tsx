import Link from "next/link";

export const NavLink = ({
	target,
	label,
}: {
	target: string;
	label: string;
}) => {
	return (
		<li className="px-4 py-2 text-lg leading-6 font-medium text-light-me hover:text-light-he transition">
			<Link href={target}>{label}</Link>
		</li>
	);
};
