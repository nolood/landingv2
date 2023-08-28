import store from '@/store'
import { ProvidersProps } from '@/types/props/ProvidersProps'
import { FC } from 'react'
import { Provider } from 'react-redux'
const Providers: FC<ProvidersProps> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>
}

export default Providers
