export const Container = ({
	children,
	className = "",
}: {
	children: any;
	className?: string;
}) => {
	return <div className={`max-w-7xl mx-auto ${className}`}>{children}</div>;
};
