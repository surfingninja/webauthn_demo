**Installation**

1. Clone project.
2. Make sure you have jdk and node installed.
3. Run `npm init` in order to initiate package.json
4. Run `npm install`
5. Run `npm run test && npm run report`

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

We can run tests with mobile emulation like `DEVICE_NAME='Pixel 5' npm run test`

***Here is the list of available devices:***   
```
 Blackberry PlayBook, Blackberry PlayBook landscape, BlackBerry Z30,
 BlackBerry Z30 landscape, Galaxy Note 3, Galaxy Note 3 landscape, Galaxy Note II,
 Galaxy Note II landscape, Galaxy S III, Galaxy S III landscape, Galaxy S5,
 Galaxy S5 landscape, Galaxy S8, Galaxy S8 landscape, Galaxy S9 +, Galaxy S9 + landscape,
 Galaxy Tab S4, Galaxy Tab S4 landscape, iPad, iPad landscape, iPad(gen 6),
 iPad(gen 6) landscape, iPad(gen 7), iPad(gen 7) landscape, iPad Mini,
 iPad Mini landscape, iPad Pro, iPad Pro landscape, iPad Pro 11, iPad Pro 11 landscape,
 iPhone 4, iPhone 4 landscape, iPhone 5, iPhone 5 landscape, iPhone 6, iPhone 6 landscape,
 iPhone 6 Plus, iPhone 6 Plus landscape, iPhone 7, iPhone 7 landscape, iPhone 7 Plus,
 iPhone 7 Plus landscape, iPhone 8, iPhone 8 landscape, iPhone 8 Plus, iPhone 8 Plus landscape,
 iPhone SE, iPhone SE landscape, iPhone X, iPhone X landscape, iPhone XR,
 iPhone XR landscape, iPhone 11, iPhone 11 landscape, iPhone 11 Pro, iPhone 11 Pro landscape,
 iPhone 11 Pro Max, iPhone 11 Pro Max landscape, iPhone 12, iPhone 12 landscape,
 iPhone 12 Pro, iPhone 12 Pro landscape, iPhone 12 Pro Max, iPhone 12 Pro Max landscape,
 iPhone 12 Mini, iPhone 12 Mini landscape, iPhone 13, iPhone 13 landscape, iPhone 13 Pro,
 iPhone 13 Pro landscape, iPhone 13 Pro Max, iPhone 13 Pro Max landscape, iPhone 13 Mini,
 iPhone 13 Mini landscape, JioPhone 2, JioPhone 2 landscape, Kindle Fire HDX,
 Kindle Fire HDX landscape, LG Optimus L70, LG Optimus L70 landscape, Microsoft Lumia 550,
 Microsoft Lumia 950, Microsoft Lumia 950 landscape, Nexus 10, Nexus 10 landscape, Nexus 4,
 Nexus 4 landscape, Nexus 5, Nexus 5 landscape, Nexus 5X, Nexus 5X landscape, Nexus 6,
 Nexus 6 landscape, Nexus 6P, Nexus 6P landscape, Nexus 7, Nexus 7 landscape, 
 Nokia Lumia 520, Nokia Lumia 520 landscape, Nokia N9, Nokia N9 landscape, Pixel 2, 
 Pixel 2 landscape, Pixel 2 XL, Pixel 2 XL landscape, Pixel 3, Pixel 3 landscape, 
 Pixel 4, Pixel 4 landscape, Pixel 4a(5G), Pixel 4a(5G) landscape, Pixel 5, Pixel 5 landscape, 
 Moto G4, Moto G4 landscape
```