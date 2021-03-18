# vue-bootstrap-icons

[![Build Status](https://img.shields.io/github/workflow/status/dvuckovic/vue-bootstrap-icons/Test)](https://github.com/dvuckovic/vue-bootstrap-icons/actions/workflows/checks.yml)
[![Vue.js](https://img.shields.io/github/package-json/dependency-version/dvuckovic/vue-bootstrap-icons/dev/vue)](https://vuejs.org/)
[![Bootstrap Icons](https://img.shields.io/github/package-json/dependency-version/dvuckovic/vue-bootstrap-icons/bootstrap-icons)](https://icons.getbootstrap.com/)
[![License](https://img.shields.io/github/package-json/license/dvuckovic/vue-bootstrap-icons?color=white)](http://www.wtfpl.net/)

A Vue.js component for rendering [Bootstrap Icons](https://icons.getbootstrap.com/) via the SVG sprite method.

[Demo] [Changelog]

## Install

```sh
npm install --save @dvuckovic/vue-bootstrap-icons
```

## Usage

Global component registration:

```js
import Vue from 'vue';
import BootstrapIcon from '@dvuckovic/vue-bootstrap-icons';

Vue.component('BootstrapIcon', BootstrapIcon);
```

Local component registration:

```js
import BootstrapIcon from '@dvuckovic/vue-bootstrap-icons';

export default {
    components: {
        BootstrapIcon,
    },
};
```

Usage in template:

```html
<BootstrapIcon
    icon="exclamation-circle-fill"
    size="2x"
    flip-v />
```

### SSR

For SSR environment, make sure to import from the following path:

```js
import BootstrapIconSsr from '@dvuckovic/vue-bootstrap-icons/dist/bootstrap-icon.ssr';
```

### UMD

You can also include the UMD-flavor build in an existing page via:

```html
<script src="//unpkg.com/@dvuckovic/vue-bootstrap-icons/dist/bootstrap-icon.min.js"></script>
```

## Props

### `icon`

The name of the icon, for a full list of supported icons please see [the official documentation](https://icons.getbootstrap.com/#icons).

### `variant`

The color of the icon, supports standard [Bootstrap variants](https://getbootstrap.com/docs/5.0/customize/color/#theme-colors):

* `success`
* `warning`
* `danger`
* `info`
* `primary`
* `secondary`
* `dark`

In addition to this, the component can inherit the current CSS color style, simply set it for the root element:

```css
.bi {
    color: fuchsia;
}
```

### `size`

The size of the icon, supports following values:

* `sm`
* `md`
* `lg`
* `2x`
* `3x`
* `4x`
* `5x`

In addition to this, the component can inherit the current CSS font size style, simply set it for the root element:

```css
.bi {
    font-size: 2.5rem;
}
```

### `flip-h` & `flip-v`

Flip the component on the horizontal or vertical axis. The two props can be combined, i.e.:

```html
<BootstrapIcon
    icon="bar-chart-fill"
    flip-h
    flip-v />
```

### `rotate`

The rotation of the icon, a number between `-360` and `360`.

### `animation`

The animation style of the icon, supports following values:

* `cylon`
* `cylon-vertical`
* `fade`
* `spin`
* `spin-reverse`
* `spin-pulse`
* `spin-reverse-pulse`
* `throb`

All animations are infinite (_loops_).

## Development

The component was packaged for [NPM](https://www.npmjs.com) based on the [vue-sfc-rollup](https://github.com/team-innovation/vue-sfc-rollup) template.

Feel free to submit [issues](https://github.com/dvuckovic/vue-bootstrap-icons/issues) and [pull requests](https://github.com/dvuckovic/vue-bootstrap-icons/pulls) on [Github](https://github.com/dvuckovic/vue-bootstrap-icons).

### Run Tests

```sh
npm test
```

### Dev Server

```sh
npm run serve
```

### Build

```sh
npm run build
```

[Demo]: https://dvuckovic.com/2021/03/12/vue-bootstrap-icons/
[Changelog]: ./CHANGELOG.md
