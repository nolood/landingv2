import Button from '@/components/ui/Button/Button'
import styles from './Header.module.scss'
const Header = () => {
	return (
		<header className={styles.header}>
			<section className='section'>
				<div className='container'>
					<div className='pt-28'>
						<h1 className='font-bold text-6xl text-white leading-[80px] mb-10 capitalize'>
							Сервисный центр <br /> АльфаМедиаСервис
						</h1>
						<p className='text-white font-small text-2xl'>
							Отремонтируем компьютерную технику,
						</p>
						<p className='text-white font-small text-2xl'>
							заправим картриджи и произведем
						</p>
						<p className='text-white font-small text-2xl'>
							обслуживание офисной техники, а также
						</p>
						<p className='text-white font-small text-2xl'>
							поможем в любых сложностях с различными
						</p>
						<p className='text-white font-small text-2xl'>
							видами оборудования.
						</p>
					</div>
					<div className='pt-14 flex gap-14'>
						<Button className='text-blue-900 p-4 pr-14 pl-14 text-lg'>
							Заказать звонок
						</Button>
						<Button className='p-4 pr-14 pl-14 text-white bg-transparent border-solid border-white border text-lg'>
							Оставить заявку
						</Button>
					</div>
				</div>
			</section>
		</header>
	)
}

export default Header
