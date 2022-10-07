import { ChangeEvent, useMemo, useState } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import { useMutation, useQuery } from 'react-query'
import { GenreService } from '@/services/genre.service'
import { ITableItem } from '@/ui/admin-table/AdminTable/admin-table.interface'
import { getAdminUrl } from '@/config/url.config'
import { toastError } from '@/utils/toast-error'
import { toastr } from 'react-redux-toastr'
import { useRouter } from 'next/router'

export const useGenres = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['genres list', debouncedSearch],
		() => GenreService.getAll(debouncedSearch),
		{
			select: ({data}) =>
				data.map(
					(genre): ITableItem => ({
						_id: genre._id,
						editUrl: getAdminUrl(`genre/edit/${genre._id}`),
						items: [genre.name, genre.slug],
					})
				),
			onError: (error) =>
				toastError(error, 'Genre list')
		}
	)

	const handleSearch = (e:ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const {mutateAsync: deleteAsync} = useMutation(
		'delete genres',
		(genreId:string) => GenreService.delete(genreId),
		{
			onError: (error) => {
				toastError(error, 'Delete genres')
			},
			onSuccess: () => {
				toastr.success('Delete genres', 'delete was successful')
				queryData.refetch()
			}
		}
	)

	const {push} = useRouter()

	const {mutateAsync: createAsync} = useMutation(
		'create genres',
		() => GenreService.create(),
		{
			onError: (error) => {
				toastError(error, 'Create genres')
			},
			onSuccess: ({ data: _id }) => {
				toastr.success('Create genres', 'Create was successful')
				push(getAdminUrl(`genre/edit/${_id}`))
			}
		}
	)

	return useMemo(() => ({
		handleSearch, ...queryData, searchTerm, deleteAsync, createAsync
	}), [queryData, searchTerm, deleteAsync, createAsync])
}