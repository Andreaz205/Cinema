import styles from './Search.module.scss'
import { FC } from 'react'
import { useSearch } from './useSearch'
import SearchList from './SearchList/SearchList'
import SearchField from '../../../ui/search-field/SearchField'

const Search:FC = () => {
	const { isSuccess, data, handleSearch, searchTerm } = useSearch()
	return (
		<div className={styles.wrapper}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch}/>
			{isSuccess && <SearchList movies={data || []}/>}
		</div>
	)
}

export default Search