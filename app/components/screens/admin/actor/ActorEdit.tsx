import { FC } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { IActorEditInput } from '@/screens/admin/actor/actor-edit.interface'
import { useActorEdit } from '@/screens/admin/actor/useActorEdit'
import Meta from '@/utils/meta/Meta'
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import Heading from '@/ui/heading/Heading'
import SkeletonLoader from '@/ui/SkeletonLoader'
import Field from '@/ui/form-elements/Field'
import SlugField from '@/ui/form-elements/SlugField/SlugField'
import generateSlug from '@/utils/string/generateSlug'
import Button from '@/ui/form-elements/Button'
import formStyles from '@/components/ui/form-elements/admin-form.module.scss'
import UploadField from '@/ui/form-elements/UploadField/UploadField'


const ActorEdit:FC = () => {

	const {
		handleSubmit,
		register,
		formState: {errors},
		setValue,
		getValues,
		control
	} = useForm<IActorEditInput>({
		mode: 'onChange'
	})

	const {isLoading, onSubmit} = useActorEdit(setValue)

	return <Meta title='Edit actor'>
		<AdminNavigation />
		<Heading title='Edit actor' />
		<form
			className={formStyles.form}
			onSubmit={handleSubmit(onSubmit)}
		>
			{isLoading ? (
				<SkeletonLoader count={3}/>
			) : (
				<>
					<div className={formStyles.fields}>
						<Field {...register('name', {
							required: 'Name is required!',
						})}
									 placeholder="Name"
									 error={errors.name}
									 // style={{ width: '31%'}}
						/>

						<SlugField
							register={register}
							generate={() => {
								setValue('slug', generateSlug(getValues('name')))
							}}
							error={errors.slug}
						/>


					<Controller
						control={control}
						name='photo'
						defaultValue=''
						render={({
											 field: { value, onChange },
											 fieldState:{error},
										 }) => (
											<UploadField onChange={onChange}
																	 error={error}
																	 placeholder='Photo'
																	 value={value}
																	 folder='actors'
											/>
						)}
						rules={{
							required: 'Photo is required!',
						}}
					/>
						</div>

					<Button>Update</Button>

				</>
			)}
		</form>
	</Meta>
}

export default ActorEdit