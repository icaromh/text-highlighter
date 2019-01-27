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