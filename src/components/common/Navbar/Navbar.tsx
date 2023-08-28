import Button from '@/components/ui/Button/Button'
import { NavbarItems } from '@/constants/NavbarItems'
import NavbarItem from './NavbarItem'

const Navbar = () => {
	return (
		<nav className='pt-4 pb-4 backdrop-blur-xl fixed w-full left-1/2 -translate-x-1/2 top-0'>
			<div className='container flex justify-between items-center'>
				<span>logo</span>
				<div className='flex gap-20 items-center'>
					<ul className='flex gap-8'>
						{NavbarItems.map(item => (
							<NavbarItem key={item.id} item={item} />
						))}
					</ul>
					<a className='text-white' href='tel:+7 (351) 776-70-78'>
						+7 (351) 776-70-78
					</a>
					<Button>Каталог товаров</Button>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
