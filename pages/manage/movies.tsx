import { NextPageAuth } from '@/shared/types/auth.types'
import MovieList from '@/screens/admin/movies/MovieList'

const MovieListPage: NextPageAuth = () => {
	return <MovieList />
}

MovieListPage.isOnlyAdmin = true

export default MovieListPage