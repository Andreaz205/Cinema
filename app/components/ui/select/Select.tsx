import { FC } from 'react'
import makeAnimated from 'react-select/animated'
import { IOption, ISelect } from '@/ui/select/select.interface'
import styles from './Select.module.scss'
import ReactSelect, { OnChangeValue } from 'react-select'
import formStyles from '../form-elements/form.module.scss'


const animatedComponents = makeAnimated()

const Select:FC<ISelect> = ({
	placeholder,
	error,
	isMulti,
	options,
	field,
	isLoading
}) => {
	const onChange = (newValue: unknown | OnChangeValue<IOption, boolean>) => {
		field.onChange(isMulti
			? (newValue as IOption[])
				.map(item => item.value)
			: (newValue as IOption).value)
	}

	const getValue = () => {
		if (field.value) {
			return isMulti
				? options
					.filter(option => field.value.indexOf(option.value) >= 0)
				: options.find(option => option.value === field.value)
		}
		else {
			return isMulti ? [] : ''
		}
	}

	return <div className={styles.selectContainer}>
		<label>
			<span>
				{placeholder}
				<ReactSelect
					classNamePrefix='custom-select'
					options={options}
					value={getValue()}
					isMulti={isMulti}
					components={animatedComponents}
					isLoading={isLoading}
					onChange={onChange}
				/>
			</span>
		</label>
		{error && <div className={formStyles.error}>{error.message}</div>}
	</div>
}

export default Select