import { ChangeEvent, useMemo, useState } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import { useMutation, useQuery } from 'react-query'
import { ActorService } from '@/services/actor.service'
import { ITableItem } from '@/ui/admin-table/AdminTable/admin-table.interface'
import { getAdminUrl } from '@/config/url.config'
import { convertMongoDate } from '@/utils/data/convertMongoDate'
import { toastError } from '@/utils/toast-error'
import { toastr } from 'react-redux-toastr'
import { useRouter } from 'next/router'
import { MovieService } from '@/services/movie.service'

export const useActors = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['actor list', debouncedSearch],
		() => ActorService.getAll(debouncedSearch),
		{
			select: ({data}) =>
				data.map(
					(actor): ITableItem => ({
						_id: actor._id,
						editUrl: getAdminUrl(`actor/edit/${actor._id}`),
						items: [actor.name, String(actor.countMovies)],
					})
				),
			onError: (error) =>
				toastError(error, 'Actor list')
		}
	)

	const handleSearch = (e:ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const {mutateAsync: deleteAsync} = useMutation(
		'delete actor',
		(actorId:string) => ActorService.deleteActor(actorId),
		{
			onError: (error) => {
				toastError(error, 'Delete actor')
			},
			onSuccess: () => {
				toastr.success('Delete actor', 'delete was successful')
				queryData.refetch()
			}
		}
	)

	const {push} = useRouter()

	const {mutateAsync: createAsync} = useMutation(
		'create actor',
		() => ActorService.create(),
		{
			onError: (error) => {
				toastError(error, 'Create actor')
			},
			onSuccess: ({ data: _id }) => {
				toastr.success('Create actor', 'Create was successful')
				push(getAdminUrl(`actor/edit/${_id}`))
			}
		}
	)

	return useMemo(() => ({
		handleSearch, ...queryData, searchTerm, deleteAsync, createAsync
	}), [queryData, searchTerm, deleteAsync,createAsync])
}