<script setup lang="ts">

</script>

<template>
  <nav>
    <div class="item">
      <button class="burger-menu">
        <svg width="24" height="10" viewBox="0 0 24 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 1L24 1" stroke="#121212" stroke-width="1.99564" />
          <path d="M0 9L24 9" stroke="#121212" stroke-width="1.99564" />
        </svg>
      </button>

      <div class="logo">
        <img src="~/assets/logos/primary-logo.png">
      </div>
    </div>
    <div class="item">
      <div class="ad">
        Facial Assessment

        <div class="badge">
          FREE
        </div>

        <div class="icon">
          <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 1L18 7L12 13" stroke="#233137" stroke-width="1.2" />
            <path d="M18 6.99805L0 6.99805" stroke="#233137" stroke-width="1.2" />
          </svg>
        </div>
      </div>

      <div class="cart">
        <svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.66602 9.00033C1.66602 8.26395 2.26297 7.66699 2.99936 7.66699H17.6661C18.4025 7.66699 18.9995 8.26395 18.9995 9.00033V23.6671C18.9995 24.4035 18.4025 25.0004 17.6661 25.0004H2.99936C2.26297 25.0004 1.66602 24.4035 1.66602 23.6671V9.00033Z" stroke="#233137" stroke-width="2.00001" />
          <path d="M14.9994 7.66671V5.24245V5.24245C14.9994 2.89941 13.1 1 10.757 1H9.90847C7.56543 1 5.66602 2.89941 5.66602 5.24245V5.24245V7.66671" stroke="#233137" stroke-width="2.00001" />
        </svg>

        <div class="counter">
          0
        </div>
      </div>
      <button class="burger-menu sm-only">
        <svg width="24" height="10" viewBox="0 0 24 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 1L24 1" stroke="#121212" stroke-width="1.99564" />
          <path d="M0 9L24 9" stroke="#121212" stroke-width="1.99564" />
        </svg>
      </button>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@import '~/styles/utils/_variables.scss';

nav {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ECECECEE;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 99;
  background-color: white;

  .item {
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;

    .burger-menu {
      height: 50px;
      border: none;
      border-right: 1px solid #ECECECEE;
      background: transparent;
      width: 72px;
      cursor: pointer;

      &.sm-only {
        display: none;
        border-left: 1px solid #ECECECEE;
        border-right: none;

        @include screen-sm-and-down {
          display: block;
        }
      }

      &:not(.sm-only) {
        display: block;

        @include screen-sm-and-down {
          display: none;
        }
      }
    }

    .logo {
      width: 48px;
      height: 50px;
      border-right: 1px solid #ECECECEE;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        height: 30px;
      }
    }

    .ad {
      font-family: 'PP Neue Montreal';
      font-size: 18px;
      font-weight: 500;
      line-height: 21px;
      display: flex;
      align-items: center;
      gap: 10px;
      border-left: 1px solid #ECECECEE;
      height: 100%;
      padding: 0 27px;
      cursor: pointer;

      @include screen-sm-and-down {
        position: fixed;
        left: 0;
        top: 50px;
        width: calc(100vw - (27px * 2));
        height: 50px !important;
        background: white;
        border-top: 1px solid #ECECECEE;
        border-bottom: 1px solid #ECECECEE;
        border-left: none;
      }

      .badge {
        height: 21px;
        padding: 0px 4px;
        gap: 10px;
        font-size: 12px;
        font-weight: 500;
        background: #C2DDE4;
      }

      .icon {
        height: 100%;
        display: flex;
        align-items: center;
        margin-left: auto;
      }
    }

    .cart, .ad {
      font-family: 'PP Neue Montreal';
      display: flex;
      align-items: center;
      border-left: 1px solid #ECECECEE;
      gap: 10px;
      height: 100%;
      padding: 0 27px;
    }

    .cart {
      .counter {
        font-size: 18px;
        font-weight: 500;
        line-height: 21.6px;
        letter-spacing: -0.02em;
      }
    }
  }
}
</style>
