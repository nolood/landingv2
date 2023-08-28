import { WhyMeCards } from '@/constants/WhyMeCards'
import WhyMeCard from './WhyMeCard'

const WhyMe = () => {
	return (
		<section className='section'>
			<div className='container'>
				<div className='flex gap-4 pt-32 pb-32'>
					<div className='w-7/12 flex items-center justify-center pr-16'>
						video
					</div>
					<div className='w-full pl-8'>
						<h2 className='text-blue-900 font-bold text-5xl mb-6'>
							Почему Вы должны выбрать нас?
						</h2>
						<p className='text-blue-900 font-medium text-xl'>
							Если у Вас появились вопросы или предложения, мы с
						</p>
						<p className='text-blue-900 font-medium text-xl mb-6'>
							удовольствием Вам перезвоним:
						</p>
						<ul className='flex justify-between'>
							{WhyMeCards.map(item => (
								<WhyMeCard item={item} key={item.title} />
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default WhyMe
