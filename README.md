# svelte-placeholder

Image component for SvelteJS that you can use placeholders with. You can use any image as a placeholder, if not set, it'll use a skeleton animation.

## Usage

```
npm i svelte-placeholder
# or
yarn add svelte-placeholder
```

```js
import Image from "svelte-placeholder";

<Image src="some-image" placeholder="some-placeholder" />;
```

### Props

```ts
  /**
   * @default "skeleton"
   */
  placeholder?: string;

  /**
   * @default undefined
   */
  src: string;

  /**
   * @default undefined
   */
  alt?: string;

  /**
   * @default undefined
   */
  width?: string | number;

  /**
   * @default undefined
   */
  height?: string | number;

  /**
   * @default "lazy"
   */
  loading?: "lazy" | "eager";

  /**
   * @default "browser"
   */
  darkMode?: "browser" | true | false;
```

## Contributing

1. Fork this repository
2. Create your feature branch: `git checkout -b branch-name`
3. Commit your changes: `git commit -am 'commit-message-here'`
4. Push to the branch: `git push origin branch-name`
5. Submit a pull request

## Credits

Robert (@treboryx)

## License

MIT License

Copyright (c) 2022 treboryx.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
