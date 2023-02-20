## GitHub 배포시 오류 해결

- `BrowserRouter` 사용
- `npm install shx --save-dev`

```json
{
  "scripts": {
    "build": "react-scripts build && shx cp build/index.html build/404.html",
    "deploy": "gh-pages -d build",
    "predeploy": "npm run build"
  }
}
```

- `npm run predeploy && npm run deploy`
