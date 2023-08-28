import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'

const Button: FC<
	DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ className, children, ...rest }) => {
	return (
		<button
			className={`bg-white rounded-2xl text-slate-700 p-2.5 pr-6 pl-6 font-bold ${className}`}
			{...rest}
		>
			{children}
		</button>
	)
}

export default Button
