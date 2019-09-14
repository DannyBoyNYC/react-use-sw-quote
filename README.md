# @devereld/react-use-sw-quote

> a cutom react hook for random star wars quote

[![NPM](https://img.shields.io/npm/v/@devereld/react-use-sw-quote.svg)](https://www.npmjs.com/package/@devereld/react-use-sw-quote) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @devereld/react-use-sw-quote
```

## Usage

```jsx
import React, { Component } from 'react'

import { useStarWarsQuote } from '@devereld/react-use-sw-quote'

const Example = () => {
  const {loading, quote} = useStarWarsQuote()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [DannyBoyNYC](https://github.com/DannyBoyNYC)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
