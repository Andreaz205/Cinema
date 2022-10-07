import { FC, useEffect } from 'react'
import { TypeComponentAuthFields } from '@/shared/types/auth.types'
import { useAuth } from '@/hooks/useAuth'
import { useActions } from '@/hooks/useActions'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import dynamic from 'next/dynamic'

const DynamicCheckRole = dynamic(() =>
	import('./CheckRole'), {ssr: false})

const AuthProvider:FC<TypeComponentAuthFields& {children: any}> = ({
	children,
	Component: {isOnlyAdmin, isOnlyUser}
}) => {

	const {user} = useAuth()
	const {logout, checkAuth} = useActions()

	const {pathname} = useRouter()

	useEffect(() => {
		const accessToken = Cookies.get('accessToken')
		if (accessToken) checkAuth()
	}, []) //eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		const refreshToken = Cookies.get('refreshToken')
		if (!refreshToken)logout()
	}, [pathname]) //eslint-disable-line react-hooks/exhaustive-deps

	return (!isOnlyAdmin && !isOnlyUser) ? (
		<>{children}</>
		) : (
			<DynamicCheckRole Component={{isOnlyAdmin, isOnlyUser}}>
				{children}
			</DynamicCheckRole>
	)
}

export default AuthProvider