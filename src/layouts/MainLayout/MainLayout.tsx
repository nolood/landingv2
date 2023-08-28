import Footer from '@/components/common/Footer/Footer'
import Header from '@/components/common/Header/Header'
import Navbar from '@/components/common/Navbar/Navbar'
import Providers from '@/providers/Providers'
import { ProvidersProps } from '@/types/props/ProvidersProps'
import { FC } from 'react'

const MainLayout: FC<ProvidersProps> = ({ children }) => {
	return (
		<Providers>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</Providers>
	)
}

export default MainLayout
