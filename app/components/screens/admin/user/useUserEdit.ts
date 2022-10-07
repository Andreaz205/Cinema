import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { IUserEditInput } from '@/screens/admin/user/user-edit.interface'
import { useRouter } from 'next/router'
import { useMutation, useQuery } from 'react-query'
import { UserService } from '@/services/user.service'
import { toastError } from '@/utils/toast-error'
import { toastr } from 'react-redux-toastr'
import { getAdminUrl } from '@/config/url.config'

export const useUserEdit = (setValue: UseFormSetValue<IUserEditInput>) => {
	const {push, query} = useRouter()

	const userId = String(query.id)

	const {isLoading} = useQuery(
		['user', userId],
		() => UserService.getById(userId),
		{
			onSuccess: ({data}) => {
				setValue('email', data.email)
				setValue('isAdmin', data.isAdmin)
			},
			onError:(error) => {
				toastError(error, 'Get users')
			},
			enabled: !!query.id
		}
	)

	const {mutateAsync} = useMutation(
		'update users',
		(data: IUserEditInput) => UserService.update(userId, data),
		{
			onError: (error) => {
				toastError(error, 'Update users')
			},

			onSuccess: () => {
				toastr.success('Update users', 'update was successful')
				push(getAdminUrl('users'))
			}
		}
	)

	const onSubmit:SubmitHandler<IUserEditInput> = async (data) => {
		await mutateAsync(data)
	}

	return {onSubmit, isLoading}
}