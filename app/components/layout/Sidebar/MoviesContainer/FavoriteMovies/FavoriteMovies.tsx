import { FC } from 'react'
import { useFavorites } from '@/screens/favorites/useFavorites'
import { useAuth } from '@/hooks/useAuth'
import NotAuthFavorites from '@/components/layout/Sidebar/MoviesContainer/FavoriteMovies/NotAuthFavorites'
import SkeletonLoader from '@/ui/SkeletonLoader'
import MovieList from '@/components/layout/Sidebar/MoviesContainer/MovieList'

const FavoriteMovies:FC = () => {
	const {favoriteMovies, isLoading} = useFavorites()
	const {user} = useAuth()

	if(!user) return <NotAuthFavorites />

	return isLoading
		? <div className='mt-11'>
			<SkeletonLoader
				count={3}
				className='h-28 mb-4'
			/>
		</div>
		: <MovieList
				movies={favoriteMovies?.slice(0, 3) || []}
				title='Favorites'
				link='/favorites'
			/>
}

export default FavoriteMovies