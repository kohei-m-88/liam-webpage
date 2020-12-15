import HeaderBanner from '../components/headerBanner'
import HeaderMenu from '../components/headerMenu'
import MyHead from '../components/layout'

export default function about() {
  return (
    <>
      <MyHead />
      <HeaderMenu aboutMeHover="" aboutMeActive="text-gray-100 bg-gray-900" />
      <HeaderBanner banner="B" />
    </>
  )
}