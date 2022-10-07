import { NextPageAuth } from '@/shared/types/auth.types'
import MovieEdit from '@/screens/admin/movie/MovieEdit'

const MovieEditPage: NextPageAuth = () => {
	return <MovieEdit />
}

MovieEditPage.isOnlyAdmin = true

export default MovieEditPage