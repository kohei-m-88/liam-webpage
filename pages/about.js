import HeaderBanner from '../components/headerBanner'
import HeaderMenu from '../components/headerMenu'
import MyHead from '../components/layout'

export default function about() {
  return (
    <>
    <MyHead />
      <HeaderBanner banner="B" />
      <HeaderMenu aboutMeHover="" aboutMeActive="text-gray-100 bg-gray-900" />
      </>
  )
}