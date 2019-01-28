# Text Highlighter

![App Preview](./docs/app-preview.png)


## Features

- Mark text as RED, GREEN, YELLOW
- Filter highlighted sentences by color
- Offline support (caching the actual version using SW)
- Possibility to install as "native app" using "add to home screen" feature


## @TODO / IDEAS

- [ ] save the current state on `localStorage` to retrieve it on app restart/reload
- [ ] save as "files" on local cache, so we can "create" multiple "documents"
- [ ] list the cache files so the user can load past documents
- [x] "share component":
    - [ ] using the [WEB SHARE API](https://developers.google.com/web/updates/2016/09/navigator-share)
    - [x] with fallback to Twitter
- [ ] Print button to print all the hightlights
  - [ ] Using @media (print) to show only the hightlights area
- [ ] Export highlights as image using canvas API
- [ ] There's a issue with mobile browsers, when the keyboard shows up the browser doesn't know how to position the header fixed
- [ ] Add E2E to CI
- [ ] Add `Dockerfile` to run/run tests


## Running

### Using make

- Install the dependencies: `make setup`
- Run the code: `make run`

### Using yarn

- Install the dependencies: `yarn`
- Run the code: `yarn run`

## Testing

All the tests are under the `__tests__` folder on each component/module. And the e2e tests are under the `e2e` folder.

- Unit tests using make: `make test`
- Unit tests using Yarn: `yarn test`


- E2E tests using make: `make test-e2e`
- Unit tests using Yarn:
  ```bash
    yarn build
    yarn serve&
    yarn test-e2e
  ```



## Directories Structure

When the `component/module` needs more than 1 single file to wrap their logic (and styles) it is wrapped in a folder named as the component name.

Eg: The `<Header />` has some styles and tests. So inside of the folder `components` there is a folder named `Header`.

The `index.js` only serve to import and export as default the Header, to we can import `./components/Header`

*components/Header/index.js*
```js
import Header from './Header'
import './Header.css'

export default Header
```
