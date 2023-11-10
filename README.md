cookies break caching/memoization

Steps to reproduce:
1. use `const cookiesStore = cookies()` from `import { cookies } from 'next/headers'` in a server rendered page in the app directory
2. make a request to a server and log something when that endpoint is reached
3. go to the page that uses the cookies and watch how the logs are printed every time your refresh the page due to caching being broken

If you comment this one `const cookiesStore = cookies()`, the caching works correctly (almost)

One other note is that when I have the same fetch request both in the page and in `generateMetadata`, nextjs doesn't deduplicate the request. I can see two logs in my console instead of one.

Behavior:
Current: the fetch APO responses are not cached when using `const cookiesStore = cookies()`

Expected: the fetch function to cache the API response
