import { FC } from 'react'
import Meta from '@/utils/meta/Meta'
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import Heading from '@/ui/heading/Heading'
import AdminHeader from '@/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/ui/admin-table/AdminTable/AdminTable'
import { useActors } from '@/screens/admin/actors/useActors'


const ActorList:FC = () => {

	const {
		handleSearch,
		isLoading,
		searchTerm,
		data,
		deleteAsync,
		createAsync
	} = useActors()

	return <Meta title='Actors'>
		<AdminNavigation />
		<Heading title="Actors"/>

		<AdminHeader
			handleSearch={handleSearch}
			searchTerm={searchTerm}
			onClick={createAsync}
		/>
		<AdminTable
			isLoading={isLoading}
			removeHandler={deleteAsync}
			headerItems={['Name', 'Count movies']}
			tableItems={data || []}
		/>
	</Meta>
}

export default ActorList