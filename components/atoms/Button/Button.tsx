export const Button = ({ children }: { children: any }) => {
	return (
		<button className="py-2 px-4 mt-4 rounded-lg bg-primary-500 font-bold uppercase tracking-wide text-sm text-white hover:bg-primary-400 active:bg-primary-600 transition">
			{children}
		</button>
	);
};
