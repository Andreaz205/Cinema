import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import LogoImage from '../../../assets/images/logo.svg'

const Logo:FC = () => {
	return (
		<Link href='/WEBSTORM/netflix/client/pages'>
			<a className='px-layout mb-10 block'>
				<Image
					src={LogoImage}
					width={247}
					height={34}
					alt='Online cinema'
					draggable={false}
				/>
			</a>
		</Link>
	)
}

export default Logo