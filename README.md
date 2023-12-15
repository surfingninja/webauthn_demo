**Installation**

1. Clone project.
2. Make sure you have jdk and node installed.
3. Run `npm install` to install the modules
4. Run `npm run test` to run the tests
5. Run `npm run report` to see the report

**Using github actions:**  
1. Navigate to actions tab
2. Select a job to run by clicking on it
3. Navigate to `Run Workflow`
4. Make sure a branch is main
5. Hi Run Workflow button
6. Open currently running job
7. After job is finished there are artifacts appear
8. Download `ReportUrl` archive which contains a report url   
(A report won't be available immidiately, according to github spec it may take up to 10 minutes to post on github pages)


`devtools` protocol has not implemented `addVirtualAuthenticator()` feature yet,   
so that `selenium-standalone` resolves it along with mobile emulation   
upd: `selenium-standalone` is no longer supported in 8+ wdio versions   

We can run tests with mobile emulation like `DEVICE_NAME='iPhone X' npm run test`
