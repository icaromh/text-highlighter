# Constraints
- [x] The assignment should be made using either Angular 2.x and above or with React
- [x] Component based approach must be used. (think in terms of components like highlighter component etc.)
- [x] Redux or any other state containers must be used (must dispatch actions like selection, filter
etc .)
- [ ] Application of SOLID principles will carry extra weightage
- [x] Please do not use any third party libraries
- [ ] Clear and to the point readme on usage
- [ ] Internal logic shall be under unit test
- [ ] Documentation in code


# Extra
- [ ] Additional features like a modal popup on highlighting the text, formatting the text etc. Choices
are open but they need to be communicated
- [ ] Suggestions for improvement
- [ ] Code archive on Github or similar


# Serve Offline
  - service worker to serve offline
  - manifest.json to work as a installable application
  - save on local cache to current state
  - save by name as "files" on cache, so we can "create" multiple "documents"
  - list the cache files so the user can load past documents

# Improve the usability
- "share component": using the WEB SHARE API with fallback to Twitter
- Print button to print all the hightlights
  - Using @media (print) to show only the hightlights area
- Export highlights as image using canvas API
- There's a issue with mobile browsers, when the keyboard shows up the browser
  doesn't know how to position the header fixed
