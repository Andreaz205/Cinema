// import styles from './Navigation.module.scss'
import React, { FC } from 'react'
import { useActions } from '@/hooks/useActions'
import MaterialIcon from '@/ui/MaterialIcon'

const LogoutButton:FC = () => {

	const {logout} = useActions()

	const handleLogout = (e:React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		logout()
	}

	return (
		<li>
			<a onClick={handleLogout}>
				<MaterialIcon name='MdLogout' />
				<span>Logout</span>
			</a>
		</li>
	)
}

export default LogoutButton