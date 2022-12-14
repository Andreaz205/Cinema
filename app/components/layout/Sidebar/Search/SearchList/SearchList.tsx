import styles from './SearchList.module.scss'
import { FC } from 'react'
import { IMovie } from '@/shared/types/movie.types'
import Link from 'next/link'
import { getMovieUrl } from '@/config/url.config'
import Image from 'next/image'

const SearchList:FC<{movies: IMovie[]}> = ({movies}) => {
	return <div className={styles.list}>

		{movies.length ? movies.map(movie => (
			<Link href={getMovieUrl(movie.slug)} key={movie._id}>
				<a>
					<Image
						src={movie.poster}
						width={50}
						height={50}
						alt={movie.title}
						objectFit='cover'
						objectPosition='top'
						draggable={false}
					/>
					<span>{movie.title}</span>
				</a>
					</Link>
				)) : <div className='text-white text-center my-4'>Movies not found!</div>}
			</div>


}

export default SearchList