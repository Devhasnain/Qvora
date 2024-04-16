<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScreenSize } from '~/composables/screen-size'

gsap.registerPlugin(ScrollTrigger)
const screenSize = useScreenSize()

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: '#showcase',
    pin: '#showcase .content',
    start: 'top top',
    end: '+=4000',
    scrub: 1,
  },
})

function getSlideScale() {
  if (screenSize.value === 'xs')
    return 1.09

  if (screenSize.value === 'sm')
    return 1.09

  if (screenSize.value === 'md')
    return 1.09

  if (screenSize.value === 'lg')
    return 1.488
}

function getCircleImgScale() {
  if (screenSize.value === 'xs')
    return 1

  if (screenSize.value === 'sm')
    return 1

  if (screenSize.value === 'md')
    return 1

  if (screenSize.value === 'lg')
    return 2.65
}

function getSliderSpaceLeft() {
  const slide = (document.querySelector('.slider .slide') as HTMLElement)

  if (!slide)
    return

  const slideWidth = slide.offsetWidth

  if (screenSize.value === 'xs')
    return `calc(calc(100vw - ${slideWidth + 60}px) / 2)`

  if (screenSize.value === 'sm')
    return `calc(calc(100vw - ${slideWidth + 60}px) / 2)`

  if (screenSize.value === 'md')
    return `calc(calc(100vw - ${slideWidth + 60}px) / 2)`

  if (screenSize.value === 'lg')
    return slideWidth / 0.8
}

function centerSlider() {
  const slider = document.querySelector('.slider') as HTMLElement

  if (!slider || screenSize.value === 'lg')
    return

  const distanceToBottom = window.innerHeight - (slider.getBoundingClientRect().top + slider.offsetHeight)
  const halfDistance = distanceToBottom / 4

  if (['xs', 'sm'].includes(screenSize.value))
    return slider.style.marginTop = `${halfDistance / 1.5}px`

  slider.style.marginTop = `${halfDistance}px`
}

onMounted(() => {
  if (!/Mobile|Android/i.test(navigator.userAgent)) {
    window.addEventListener('resize', () => {
      location.reload()
    })
  }

  centerSlider()

  Array
    .from(document.querySelectorAll('#showcase .slider .slide') as unknown as HTMLCollectionOf<HTMLElement>)
    .forEach((el, index) => el.style.left = `${(el.clientWidth + 45) * index}px`)

  const contentEl = document.querySelector('#showcase .content')
  if (!contentEl)
    return

  timeline
    .addLabel('start')
    .add('slide', '+=0')
    .to('#showcase .titles', {
      transform: `translate3d(-${(contentEl?.scrollWidth - contentEl?.clientWidth)}px, 0, 0)`,
    }, 'slide')
    .to('#showcase .slider', {
      transform: `translate3d(-${(contentEl?.scrollWidth - contentEl?.clientWidth)}px, 0, 0)`,
    }, 'slide')
    .to('.progress .track', {
      transform: `translateX(calc(100vw - (15px  * 2) - (${document.querySelector('.progress .track')?.clientWidth}px * 2)))`,
    }, 'slide')
    .to('#showcase .title-1', {
      opacity: '0',
      translateY: -20,
    }, 'slide')
    .add('collapse', '+=0')
    .to('#showcase .title-2', {
      opacity: '1',
      visibility: 'visible',
      translateY: 0,
    }, 'collapse')
    .to('.progress .track', {
      transform: `translateX(calc(100vw - (15px  * 2) - ${document.querySelector('.progress .track')?.clientWidth}px))`,
    }, 'collapse')
    .to('.background-circle', {
      scale: getCircleImgScale(),
      opacity: '1',
    }, 'collapse')
    .to('#showcase .slider .slide', {
      left: '0',
      duration: 0.5,
      scale: getSlideScale(),
    }, 'collapse')
    .to('#showcase .slider', {
      transform: 'translate3d(0, 0, 0)',
      duration: 0.4,
      paddingLeft: getSliderSpaceLeft(),
    }, 'collapse')
    .to('#showcase .titles', {
      transform: 'translate3d(0, 0, 0)',
      duration: 0.4,
    }, 'collapse')
    .addLabel('end')

  ScrollTrigger.create({
    trigger: '#showcase',
    pin: true,
    start: 'center center',
    end: '+=5000',
  })
})

onUnmounted(() => timeline.revert())
</script>

<template>
  <div class="progress">
    <div class="track" />
  </div>

  <div class="background-circle">
    <img src="~/assets/images/showcase/background-circle.png">
  </div>

  <button class="all-reports-btn floated">
    ALL REPORTS

    <div class="icon">
      <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.6718 0.625977L19 6.68034L12.6718 12.7347" stroke="white" stroke-width="1.5" />
        <path d="M19 6.68066H0.0154662" stroke="white" stroke-width="1.5" />
      </svg>
    </div>
  </button>

  <div id="showcase">
    <div class="content">
      <div class="titles">
        <div class="title-1">
          <h1>
            The most comprehensive <br>
            <span>analysis of your face</span>
          </h1>
        </div>

        <div class="title-2">
          <h1>
            Documented into <br>
            200 pages <span>report of you</span>
          </h1>

          <p class="caption">
            Professional facial assessments and clear facial changes visualisation.
          </p>

          <button class="all-reports-btn">
            ALL REPORTS

            <div class="icon">
              <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.6718 0.625977L19 6.68034L12.6718 12.7347" stroke="white" stroke-width="1.5" />
                <path d="M19 6.68066H0.0154662" stroke="white" stroke-width="1.5" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      <div class="slider">
        <div class="inner-slider">
          <img v-for="i in 13" :key="i" class="slide" :src="`/images/showcase/${i}.png`">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/styles/utils/_variables.scss';

.background-circle {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transform: scale(0.5, 0.5);
  opacity: 0;
  transition: all 1s ease-out;

  img {
    height: 100%;
    transform: translateX(-50%);
    margin-left: 50%;
  }
}

.progress {
  position: fixed;
  height: 10px;
  background: #E7E7E7;
  bottom: 15px;
  left: 15px;
  width: calc(100vw - (15px  * 2));

  @include screen-sm-and-down {
    height: 4px;
  }

  .track {
    background: #809AA3;
    width: 290px;
    height: 100%;

    @include screen-sm-and-down {
      width: 95px;
    }
  }
}

button.all-reports-btn {
  margin-top: 30px;
  width: 312px;
  height: 60px;
  padding: 0px 16px 0px 24px;
  gap: 16px;
  background: #809AA3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  color: white;
  font-family: PP Neue Montreal;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.01em;
  cursor: pointer;

  &.floated {
    @include screen-sm-and-up {
      display: none;
    }

    @include screen-sm-and-down {
      display: flex;
    }
  }

  &:not(.floated) {
    @include screen-md-and-up {
      display: flex;
    }

    @include screen-sm-and-down {
      display: none;
    }
  }

  @include screen-lg-and-down {
    font-family: 'PP Neue Montreal';
    height: 40px;
    width: 208px;
    font-size: 14px;
    font-weight: 500;
    line-height: 13.33px;
    letter-spacing: -0.01em;
    padding: 0px 10.67px 0px 16px;
  }

  @include screen-sm-and-down {
    width: calc(100vw - 50px);
    position: fixed;
    bottom: 30px;
    left: 25px;
  }

  .icon {
    height: 32px;
    width: 32px;
    border-left: 1.5px solid rgb(147, 169, 177);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-left: 7px;

    @include screen-lg-and-down {
      height: 21px;
      width: 21px;

      svg {
        height: 12px;
      }
    }
  }
}

#showcase {
  position: relative;
  min-height: 402px !important;

  .content {
    display: flex;

    @include screen-md-and-down {
      flex-direction: column;
    }

    .titles {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 782px;
      min-width: 782px;

      @include screen-md-and-down {
        transform: translateY(-170px) !important;

        &, .title-1, .title-2 {
          min-width: 351px;
          width: 351px;
          max-width: 351px !important;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;

          h1 {
            &, * {
              font-size: 48px !important;
              line-height: 40px !important;
              text-align: center;
            }
          }
        }
      }

      @include screen-sm-and-down {
        transform: translateY(-91px) !important;
        width: calc(100% - 30px) !important;
        max-width: calc(100% - 30px) !important;
        min-width: calc(100% - 30px) !important;

        &, .title-1, .title-2 {
          min-width: fit-content;
          width: fit-content;

          h1 {
            font-weight: 400 !important;

            &, * {
              font-size: 42px !important;
              line-height: 37.8px !important;
              letter-spacing: -0.03em !important;
            }
          }
        }

        br {
          display: none;
        }
      }

      .title-1,
      .title-2 {
        width: 100%;
        position: absolute;
        top: 50%;

        h1 {
          margin: 0;
          font-family: 'PP Neue Montreal';
          font-size: 80px;
          font-weight: 400;
          line-height: 67.2px;
          letter-spacing: -0.03em;

          span {
            font-family: 'Denton Test';
            font-size: 80px;
            font-style: italic;
            font-weight: 100;
            line-height: 67.2px;
            letter-spacing: -0.03em;
          }
        }

        .caption {
          font-family: 'PP Neue Montreal';
          font-size: 24px;
          font-weight: 400;
          line-height: 29px;
          letter-spacing: -0.015em;
          text-align: left;

          @include screen-lg-and-down {
            font-size: 16px;
            line-height: 19.33px;
            letter-spacing: -0.015em;
            text-align: center;
          }
        }
      }
    }

    .title-1 {
      transform: translateY(37%) translateX(0);

      @include screen-md-and-down {
        transform: translateY(20px) translateX(0)
      }
    }
    .title-2 {
      transition: all .1s ease;
      opacity: 0;
      transform: translateY(-20px);
      visibility: hidden;

      p {
        max-width: 364px;
      }
    }

    .slider {
      width: 100%;

      @include screen-md-and-down {
        margin-top: 70px;
      }

      .inner-slider {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 42.5px;
        position: relative;
      }

      .slide {
        position: absolute;
        top: 0;
        width: 282px;
        min-width: 282px;
        background-color: #555;
        border: 1.03px solid #7D828E26;

        @include screen-lg-and-down {
          width: 234px;
          min-width: 234px;
        }
      }
    }
  }

}
</style>
