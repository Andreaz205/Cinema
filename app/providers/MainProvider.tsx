import React, { FC } from 'react'
import { QueryClient , QueryClientProvider} from 'react-query'
import Layout from '../components/layout/Layout'

import { Provider } from 'react-redux'
import HeadProvider from './HeadProvider/HeadProvider'
import {store} from "@/store/store";
import ReduxToast from './ReduxToast'
import AuthProvider from './AuthProvider/AuthProvider'
import { TypeComponentAuthFields } from '@/shared/types/auth.types'


const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

const MainProvider:FC<TypeComponentAuthFields & {children:any}> = ({children, Component}) => {
	return (
		<HeadProvider>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<ReduxToast />
					<AuthProvider Component={Component}>
						<Layout>
							{children}
						</Layout>
					</AuthProvider>
				</QueryClientProvider>
			</Provider>
		</HeadProvider>
	)
}

export default MainProvider