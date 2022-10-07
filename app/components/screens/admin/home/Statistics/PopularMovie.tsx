import { useQuery } from 'react-query'
import { MovieService } from '@/services/movie.service'
import { IMovie } from '@/shared/types/movie.types'
import cn from 'classnames'
import styles from '@/screens/admin/home/Admin.module.scss'
import SubHeading from '@/ui/heading/SubHeading'
import SkeletonLoader from '@/ui/SkeletonLoader'
import Link from 'next/link'
import Image from 'next/image'

const PopularMovie = () => {

	const {isLoading, data: movie} = useQuery(
		'Most popular movie in admin',
		() => MovieService.getMostPopularMovies(),
		{
			select: (data):IMovie => data[0]
		}
	)

	return <div className={cn(styles.block, styles.popular)}>
		<SubHeading title='The most popular movie'/>
		{isLoading ? <SkeletonLoader className='h-48'/>
			: movie && <>
			<h3>Opened {movie.countOpened} times</h3>
			<Link href={movie.slug}>
				<a>
					<Image
						src={movie.bigPoster}
						width={285}
						height={176}
						alt={movie.title}
						className={styles.image}
						unoptimized
					/>
				</a>
			</Link>
		</>}
	</div>
}

export default PopularMovie