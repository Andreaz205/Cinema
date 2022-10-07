import { FC } from 'react'
import PopularMovies from './PopularMovies'
import dynamic from 'next/dynamic'

const DynamicFavorites = dynamic(() => import('./FavoriteMovies/FavoriteMovies'), {
	ssr: false
})

const MoviesContainer:FC = () => {
	return (
		<div className=''>
			<PopularMovies />
			<DynamicFavorites />
		</div>
	)
}

export default MoviesContainer