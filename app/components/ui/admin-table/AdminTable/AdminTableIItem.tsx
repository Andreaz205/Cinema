import { FC } from 'react'
import cn from 'classnames'
import styles from './AdminTable.module.scss'
import { IAdminTableItem } from '@/ui/admin-table/AdminTable/admin-table.interface'
import AdminActions from '@/ui/admin-table/AdminTable/AdminActions/AdminActions'

const AdminTableItem:FC<IAdminTableItem> = ({
	removeHandler,
	tableItem
}) => {
	return <div className={cn(styles.item)}>
		{tableItem.items.map(value => <div key={value}>{value}</div>)}
		<AdminActions editUrl={tableItem.editUrl} removeHandler={removeHandler} />
	
	</div>
}

export default AdminTableItem