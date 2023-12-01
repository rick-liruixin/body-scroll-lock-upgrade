# body-scroll-lock-upgrade

## 1.1.0

### Minor Changes

- optimization：document.documentElement.clientWidth -> document.documentElement.getBoundingClientRect().width
  https://github.com/rick-liruixin/body-scroll-lock-upgrade/issues/16

## 1.0.4

### Patch Changes

- add umd

## 1.0.3

### Patch Changes

- Added a vue3 code example

## 1.0.1

### Patch Changes

- #### Bug

  Fix width issues on iOS Safari
  Fix Scrolling enabled in browser as soon as enableBodyScroll is called once, regardless of number of locks
  Fix When enabled, scrolls to top of document in iOS Safari on Version: 4.0.0-beta.0
  Fix safari browser scroll bottom Unable to scroll up

  #### New feature

  with a new version of typeScript
  Added a react hook code example
