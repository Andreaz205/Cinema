import '@/assets/styles/globals.scss'
import type { AppProps } from 'next/app'
import MainProvider from '../../../netflix-client/client/app/providers/MainProvider'
import { TypeComponentAuthFields } from '@/shared/types/auth.types'
import '@/assets/styles/react-select.scss'


function MyApp({ Component, pageProps }: AppProps & TypeComponentAuthFields) {



  // прооверка на то чтобы код рендерился на стороне

  // const [showChild, setShowChild] = useState(false);
  // useEffect(() => {
  //   setShowChild(true);
  // }, []);
  //
  // if (!showChild) {
  //   return null;
  // }
  //
  // if (typeof window === 'undefined') {
  //   return <></>;
  // } else {




  return (
    <>
      <MainProvider Component={Component}>
        <Component {...pageProps} />
      </MainProvider>
    </>

  )
}
// }
export default MyApp
