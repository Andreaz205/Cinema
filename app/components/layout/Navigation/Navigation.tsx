import styles from './Navigation.module.scss'
import { FC } from 'react'
import MenuContainer from './MenuContainer/MenuContainer'
import Logo from './Logo'

const Navigation:FC = () => {
	return (
		<div className={styles.navigation}>
			<Logo/>
			<MenuContainer/>
		</div>
	)
}

export default Navigation