import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from '../../../src/body-scroll-lock'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

function App() {
  const [dialogVisible, setDialogVisible] = useState(false)
  const [dialogTwoVisible, setDialogTwoVisible] = useState(false)

  const open = () => {
    disableBodyScroll(document.body, {
      allowTouchMove: (el: any) => {
        while (el && el !== document.body) {
          if (typeof el.className === 'string') {
            // 弹框内部需要滚动时给该部分添上此类名，即可恢复滚动
            if (el.className.indexOf('body-scroll-lock-ignore') > -1) {
              return true
            }
          }
          el = el.parentElement
        }
        return false
      },
    })
  }

  const clear = () => {
    enableBodyScroll(document.body)
  }

  return (
    <div className='App'>
      <div className='card'>
        <button
          onClick={() => {
            open()
            setDialogVisible(true)
          }}
        >
          click open dialog 1
        </button>
        <p>
          The swiper is not blinking，Blinking swiper at the bottom of the page
        </p>
      </div>
      <h4>Swiper ↓↓↓↓</h4>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src='https://m.360buyimg.com/babel/s580x740_jfs/t1/165981/26/31028/30446/63b40330F933cb7c3/72a0747f6d4413af.jpg!q70.dpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://m.360buyimg.com/babel/s580x740_jfs/t1/165981/26/31028/30446/63b40330F933cb7c3/72a0747f6d4413af.jpg!q70.dpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://m.360buyimg.com/babel/s580x740_jfs/t1/165981/26/31028/30446/63b40330F933cb7c3/72a0747f6d4413af.jpg!q70.dpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://m.360buyimg.com/babel/s580x740_jfs/t1/165981/26/31028/30446/63b40330F933cb7c3/72a0747f6d4413af.jpg!q70.dpg' />
        </SwiperSlide>
      </Swiper>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
      </p>
      <h4>img ↓↓↓↓</h4>
      <img
        style={{ width: '100%' }}
        src='https://m.360buyimg.com/babel/s580x740_jfs/t1/165981/26/31028/30446/63b40330F933cb7c3/72a0747f6d4413af.jpg!q70.dpg'
      />
      <div className='card'>
        <button
          onClick={() => {
            open()
            setDialogVisible(true)
          }}
        >
          click open dialog 2
        </button>
        <p>Blinking swiper</p>
      </div>
      <h4>Swiper ↓↓↓↓</h4>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src='https://m.360buyimg.com/babel/s580x740_jfs/t1/165981/26/31028/30446/63b40330F933cb7c3/72a0747f6d4413af.jpg!q70.dpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://m.360buyimg.com/babel/s580x740_jfs/t1/165981/26/31028/30446/63b40330F933cb7c3/72a0747f6d4413af.jpg!q70.dpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://m.360buyimg.com/babel/s580x740_jfs/t1/165981/26/31028/30446/63b40330F933cb7c3/72a0747f6d4413af.jpg!q70.dpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://m.360buyimg.com/babel/s580x740_jfs/t1/165981/26/31028/30446/63b40330F933cb7c3/72a0747f6d4413af.jpg!q70.dpg' />
        </SwiperSlide>
      </Swiper>
      {dialogVisible ? (
        <>
          <div className='dialog body-scroll-lock-ignore'>
            <br />
            <button
              onClick={() => {
                clear()
                setDialogVisible(false)
              }}
            >
              close dialog
            </button>
            <br />
            <br />
            <button
              onClick={() => {
                open()
                setDialogTwoVisible(true)
              }}
            >
              open dialog two
            </button>
            <p className='read-the-docs'>
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
            </p>
          </div>
          {/* <div className='mask'></div> */}
        </>
      ) : null}
      {dialogTwoVisible ? (
        <>
          <div className='dialog dialogTwo body-scroll-lock-ignore'>
            <button
              onClick={() => {
                clear()
                setDialogTwoVisible(false)
              }}
            >
              close dialog
            </button>
            <p className='read-the-docs'>
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
              Click on the Vite and React logos to learn more
              <br />
            </p>
          </div>
          <div className='mask maskTwo'></div>
        </>
      ) : null}
    </div>
  )
}

export default App
