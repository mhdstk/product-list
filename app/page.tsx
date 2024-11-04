// pages/index.tsx
import Slider from '../components/Slider'
import MainSection from '../components/mainSection/MainSection'

export default function HomePage () {
  return (
    <div className='bg-white'>
      <Slider />
      <MainSection />
    </div>
  )
}
