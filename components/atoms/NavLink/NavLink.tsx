import Link from "next/link";

export const NavLink = ({
	target,
	label,
	active = false,
}: {
	target: string;
	label: string;
	active?: boolean;
}) => {
	return (
		<li
			className={`px-4 py-2 text-lg leading-6 font-medium ${
				active
					? "text-primary-400 hover:text-primary-500"
					: "text-light-me hover:text-light-he"
			} transition`}
		>
			<Link href={target}>{label}</Link>
		</li>
	);
};
