import { GetStaticProps, NextPage } from 'next'
import Catalog from '@/ui/catalog-movies/Catalog'
import { MovieService } from '@/services/movie.service'
import movies from './manage/movies'
import { ICollection } from '@/screens/collections/collections.interface'
import Collections from '@/screens/collections/Collections'
import { GenreService } from '@/services/genre.service'
import Error404 from './404'

const GenresPage:NextPage<{collections: ICollection[]}> = ({collections}) => {
	return collections
		? <Collections
				collections={collections || []}
			/>
		: <Error404 />
}

export const getStaticProps: GetStaticProps = async() => {
	try {
		const { data: collections } = await GenreService.getCollections()

		console.log(collections)
		return {
			props: {
				collections
			},
			revalidate: 60,
		}

	} catch (e) {
		return {
			notFound: true,
		}
	}
}

export default GenresPage