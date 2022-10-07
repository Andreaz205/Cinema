import { FC } from 'react'
import { FieldError, FormState, UseFormRegister } from 'react-hook-form'
import Field from '@/ui/form-elements/Field'
import { validEmail } from '@/shared/regex'

interface IAuthFields {
	register: UseFormRegister<any>
	formState: FormState<any>
	isPasswordRequired?: boolean
}

const AuthFields:FC<IAuthFields> = ({
	register,
	formState: {errors},
	isPasswordRequired= false
}) => {
	return (
		<>
			<Field
				placeholder='E-mail'
				error={errors.email}
				{...register('email', {
					required: 'Email is required',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email address',
					},
				})}
			/>
			<Field
				placeholder='Password'
				type='password'
				error={errors.password}
				{...register('password', isPasswordRequired?{
					required: 'Password is required',
					minLength: {
						value: 6,
						message: 'Min length should be more 6 symbols'
					},
				} : {})}
			/>
		</>
	)
}

export default AuthFields