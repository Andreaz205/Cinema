import { NextPageAuth } from '@/shared/types/auth.types'
import GenreList from '@/screens/admin/genres/GenreList'

const GenreListPage: NextPageAuth = () => {
	return <GenreList />
}

GenreListPage.isOnlyAdmin = true

export default GenreListPage