import {ButtonHTMLAttributes} from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	variant?: 'normal' | 'outline' | 'custom' | 'dark';
	size?: 'big' | 'medium' | 'small';
	active?: boolean;
	loading?: boolean;
	disabled?: boolean;
	children?: React.ReactNode;
	href?: string;
}