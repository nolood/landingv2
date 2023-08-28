import { WhyMeCardProps } from '@/types/props/WhyMeCardProps'
import { FC } from 'react'

const WhyMeCard: FC<WhyMeCardProps> = ({ item }) => {
	return (
		<li
			className={`flex flex-col items-center justify-between rounded-[25px] p-4 pr-5 pl-5 bg-blue-200 h-[300px] max-w-[220px]`}
		>
			<div
				className={`rounded-full ${item.iconBg} w-16 h-16 flex justify-center items-center`}
			>
				{item.icon}
			</div>
			<p className='font-bold text-blue-950 text-5xl'>{item.title}</p>
			<p className='text-center text-blue-950 font-medium text-lg'>
				{item.text}
			</p>
		</li>
	)
}

export default WhyMeCard
