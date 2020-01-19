<template>
  <div class="p-logo_dragonfly">
    <a href="https://codepen.io/tatsuya-akitsu/pen/eQdRgx" target="_blank">
      <div class="p-dragonfly_parts_head">
        <span class="p-dragonfly_parts_eye"></span>
        <span class="p-dragonfly_parts_eye"></span>
      </div>
      <span class="p-dragonfly_parts_body"></span>
      <span class="p-dragonfly_parts_tail"></span>
      <span class="p-dragonfly_parts_wing"></span>
      <span class="p-dragonfly_parts_wing"></span>
      <span class="p-dragonfly_parts_wing"></span>
      <span class="p-dragonfly_parts_wing"></span>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.p-logo_dragonfly {
  position: relative;
  width: 42px;

  a {
    display: block;
    font-size: 0;
    width: 100%;
  }
}

.p-dragonfly_parts_head {
  text-align: center;
}

.p-dragonfly_parts_body {
  display: block;
  margin: 0 auto;
  width: 3.5px;
  height: 8.5px;
  border-radius: 53% 47% 48% 52% / 46% 47% 53% 54%;
  background-color: $base-text-color;
}

.p-dragonfly_parts_eye {
  display: inline-block;
  vertical-align: middle;
  margin: 0 0.8px;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background-color: $color-primary;
}

.p-dragonfly_parts_tail {
  display: block;
  margin: 0 auto;
  margin-top: -1.5px;
  width: 1.5px;
  height: 13.5px;
  background-color: $base-text-color;
  border-radius: 53% 47% 48% 52% / 46% 47% 53% 54%;
}

.p-dragonfly_parts_wing {
  position: absolute;
  width: 0;
  height: 0;

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 2.5px;
    height: 2.5px;
    border-radius: 50%;
    background-color: $base-text-color;
  }
}

.p-dragonfly_parts_wing:nth-child(4) {
  top: 3.5px;
  right: 2px;
  border-top: solid 1.2px transparent;
  border-right: solid 17px $base-text-color;
  border-bottom: solid 1.2px transparent;
  transform: rotate(-10deg);
  transition: $easeInOutQuart;

  &::after {
    top: -1.4px;
    right: -18px;
  }
}

.p-dragonfly_parts_wing:nth-child(5) {
  top: 7px;
  right: 2px;
  border-top: solid 1.2px transparent;
  border-right: solid 17px $base-text-color;
  border-bottom: solid 1.2px transparent;
  transform: rotate(10deg);
  transition: $easeInOutQuart;

  &::after {
    top: -1.4px;
    right: -18px;
  }
}

.p-dragonfly_parts_wing:nth-child(6) {
  top: 3.5px;
  left: 2px;
  border-top: solid 1.2px transparent;
  border-left: solid 17px $base-text-color;
  border-bottom: solid 1.2px transparent;
  transform: rotate(10deg);
  transition: $easeInOutQuart;

  &::after {
    top: -1.4px;
    left: -18px;
  }
}

.p-dragonfly_parts_wing:nth-child(7) {
  top: 7px;
  left: 2px;
  border-top: solid 1.2px transparent;
  border-left: solid 17px $base-text-color;
  border-bottom: solid 1.2px transparent;
  transform: rotate(-10deg);
  transition: $easeInOutQuart;

  &::after {
    top: -1.4px;
    left: -18px;
  }
}

.p-logo_dragonfly > a:hover {
  .p-dragonfly_parts_wing:nth-child(4) {
    top: 7px;
    transform: rotate(10deg);
    transition: $easeInOutQuart;
  }

  .p-dragonfly_parts_wing:nth-child(5) {
    top: 3.5px;
    transform: rotate(-10deg);
    transition: $easeInOutQuart;
  }

  .p-dragonfly_parts_wing:nth-child(6) {
    top: 7px;
    transform: rotate(-10deg);
    transition: $easeInOutQuart;
  }

  .p-dragonfly_parts_wing:nth-child(7) {
    top: 3.5px;
    transform: rotate(10deg);
    transition: $easeInOutQuart;
  }
}
</style>
