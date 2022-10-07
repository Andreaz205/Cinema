import { FC } from 'react'
import ReduxToastrLib from 'react-redux-toastr'

const ReduxToast:FC = () => {
	return (
		<div>
			<ReduxToastrLib
				newestOnTop={false}
				preventDuplicates
				progressBar
				closeOnToastrClick
				timeOut={4000}
				transitionIn='fadeIn'
				transitionOut='fadeOut'
			/>
		</div>
	)
}

export default ReduxToast