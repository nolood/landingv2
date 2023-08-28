import { NavbarItemProps } from '@/types/props/NavbarItemProps'
import Link from 'next/link'
import { FC } from 'react'

const NavbarItem: FC<NavbarItemProps> = ({ item }) => {
	return (
		<li className='flex text-white'>
			<Link href={item.path}>{item.title}</Link>
		</li>
	)
}

export default NavbarItem
