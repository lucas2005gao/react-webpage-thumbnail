# Introducing [react-webpage-thumbnail](https://www.npmjs.com/package/react-webpage-thumbnail)

**[react-webpage-thumbnail](https://github.com/lucas2005gao/react-webpage-thumbnail)** - React-webpage-thumbnail renders a react component of an static thumbnail image of an webpage - simply pass in the webpage url in the url prop. Resizing functionalities and loading animation are also provided out of the box.

[![NPM](https://nodei.co/npm/react-webpage-thumbnail.png)](https://nodei.co/npm/react-webpage-thumbnail/)

[![npm version](https://badge.fury.io/js/react-webpage-thumbnail.svg)](https://badge.fury.io/js/react-webpage-thumbnail.svg)
[![Tests](https://github.com/lucas2005gao/react-webpage-thumbnail/actions/workflows/unit_tests.yml/badge.svg)](https://github.com/lucas2005gao/react-webpage-thumbnail/actions/workflows/unit_tests.yml)
[![Packagist](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/lucas2005gao/react-webpage-thumbnail/blob/master/LICENSE)
![GitHub issues](https://img.shields.io/github/issues/lucas2005gao/react-webpage-thumbnail)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Flucas2005gao%2Freact-webpage-thumbnail.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Flucas2005gao%2Freact-webpage-thumbnail?ref=badge_shield)

## Installing

Using npm:

```bash
$ npm install react-webpage-thumbnail
```

Using yarn:

```bash
$ yarn add react-webpage-thumbnail
```

## Usage

```javascript
import React from "react";
import Thumbnail from "react-webpage-thumbnail";

<Thumbnail url="https://nodejs.org/en/download/" />;
```

### Adjusting the size (iframe will scale to fit)

```javascript
<Thumbnail
  url="https://nodejs.org/en/download/"
  width={200}
  height={200}
  iframeHeight={1920}
  iframeWidth={1080}
/>
```

### Make the thumbnail (iframe) interactive

```javascript
<Thumbnail url="https://nodejs.org/en/download/" interactive />
```

## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, react-webpage-thumbnail is maintained under the [Semantic Versioning](https://semver.org/) guidelines.

## Built With

- [ReactJS](https://reactjs.org/) - Expressive, robust, feature-rich CSS language built for nodejs
- [react-loading-skeleton](https://www.npmjs.com/package/react-loading-skeleton) - Loading of the iframe
- [iframe](https://www.w3schools.com/tags/tag_iframe.ASP) - HTML iframe

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/lucas2005gao/react-webpage-thumbnail/blob/master/LICENSE) file for details

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Flucas2005gao%2Freact-webpage-thumbnail.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Flucas2005gao%2Freact-webpage-thumbnail?ref=badge_large)

## Backstory - Why webpage-thumbnails

While working on a project for creating a GoogleSlides-like slideshow authoring tool with ReactJs, a thumbnail of the slide canvas was needed for users to preview.

There are two approachs to this from my research:

- **Image based** : render the canvas and generate a thumbnail image of the canvas. Update the image when the slide canvas is updated.
- **iframe based** : load the canvas in an iframe and make it non-iteractive, which is like an image thumbnail preview of the canvas.

Pros and Cons :

- **Image based** : better performance on client, but updating logic can be quite abit of workload
- **iframe based** : very bad performance, as the client will need to render many iframes. But this is very easy to implement.

Google Docs, Slides and Sheets uses the **Image based** solution. However, in our scenario, it was a MVP/Demo application so performance was not scoped. Therefore, it lead to the creation of this npm library, with the **iframe based** solution.

## Contributors ✨

Thanks goes to these wonderful people

<table>
  <tr>
    <td align="center"><a href="https://github.com/lucas2005gao"><img src="https://avatars.githubusercontent.com/u/48196609?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Lucas Gao</b></sub></a><br /><a href="https://github.com/lucas2005gao/REACT Template/commits?author=lucas2005gao" title="Code">💻</a></td>
  </tr>
</table>
