// import styles from './Navigation.module.scss'
import { FC, useEffect, useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import MenuItem from '@/components/layout/Navigation/MenuContainer/MenuItem'
import LogoutButton from '@/components/layout/Navigation/MenuContainer/auth/LogoutButton'
import { getAdminHomeUrl } from '@/config/url.config'




const AuthItems:FC = () => {

	const {user} = useAuth()

	// //Это фрагмент чтобы избежать ошибки при рендеринге на клиенте и сервере
	// const [hydrated, setHydrated] = useState(false);
	// useEffect(() => {
	// 	setHydrated(true);
	// }, []);
	// if (!hydrated) {
	// 	// Returns null on first render, so the client and server match
	// 	return null;
	// }




	// const[user, setUser] = useState(null)
	// const {user} = useAuth()

	// useEffect(() => {
	// 	const  value = localStorage.getItem('user')
	// 	const user = !!value ? JSON.parse(value) : undefined
	// 	setUser(user)
	// }, [])

	// useEffect(() => {
	// 	const  value = localStorage.getItem('user')
	// 	const user = !!value ? JSON.parse(value) : undefined
	// 	setUser(user)
	// }, [user])

	// setTimeout(() => {
	// 	console.log(user)
	// },100)
	// let isUser = null
	// if (user) {
	// 	isUser = true
	// }

	return (
		<>
				{user ? <>
						<MenuItem item={{
							icon: 'MdSettings',
							link: '/profile',
							title: 'Profile',
						}} />
					<LogoutButton />
					</>
				:
					<MenuItem item={{
						icon: 'MdLogin',
						link: '/auth',
						title: 'Login',
					}} />}
					{user?.isAdmin && <MenuItem item={{
							icon: 'MdOutlineLock',
							link: getAdminHomeUrl(),
							title: 'Admin panel'
						}} />}
		</>
	)
}

export default AuthItems