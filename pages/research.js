import MyHead from '../components/layout'
import HeaderBanner from '../components/headerBanner'
import HeaderMenu from '../components/headerMenu'

export default function research() {
  return (
    <>
      <MyHead />
      <HeaderMenu researchHover="" researchActive="text-gray-100 bg-gray-900" />
      <HeaderBanner banner="C" />
    </>
  )
}