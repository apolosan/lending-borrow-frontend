import styles from './Button.module.scss';
import cn from 'classnames';

interface ButtonProps {
	text: string;
	size: "small" | "large";
	color: "white" | "primary" | "transparent";
	onClick: () => void;
}

export function Button({ text, onClick, size, color }: ButtonProps) {
	return (
		<button
			onClick={onClick}
			className={cn(color && styles[color], size && styles[size], styles.btn)}
		>
			{text}
		</button>
	)
}
