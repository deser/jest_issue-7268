# jest_issue-7268
Reproducing https://github.com/facebook/jest/issues/7268 

Steps to reproduce:
1. run `npm i`

2. run `npm run unit-tests -- --clearCache`
3. run `npm run unit-tests` . THESE TESTS SHOULD PASS
4. run `npm run unit-tests -- --clearCache`

5. run `npm run ui-tests -- --clearCache`
6. run `npm run ui-tests` . THESE TESTS SHOULD PASS
7. run `npm run ui-tests -- --clearCache`

8. run `npm run all-tests -- --clearCache`
9. run `npm run all-tests` . THESE TESTS FAIL! 