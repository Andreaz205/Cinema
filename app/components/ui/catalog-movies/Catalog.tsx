import { FC } from 'react'
import styles from './Catalog.module.scss'
import { ICatalog } from '@/ui/catalog-movies/catalog.interface'
import Meta from '@/utils/meta/Meta'
import Heading from '@/ui/heading/Heading'
import Description from '@/ui/heading/Description'
import GalleryItem from '@/ui/gallery/GalleryItem'
import { getMovieUrl } from '@/config/url.config'

const Catalog:FC<ICatalog> = ({
	movies,
	title,
	description,
}) => {
	return <Meta title={title} description={description}>
		<Heading title={title} className={styles.heading}/>
		{description &&
			<Description
				text={description}
				className={styles.description}
			/>
		}

		<section className={styles.movies}>
			{movies.map(movie =>
				<GalleryItem
					variant='horizontal'
					key={movie._id}
					item={{
						name: movie.title,
						link: getMovieUrl(movie.slug),
						posterPath: movie.bigPoster,
						content: {
							title: movie.title
						},
					}}
				/>
				)}
		</section>
	</Meta>
}

export default Catalog