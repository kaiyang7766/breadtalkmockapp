# Breadtalk Traceability Mock System
This mock app is published on Netlify: https://focused-ardinghelli-c3b960.netlify.app/

Food Traceability System has always been a core in Food Safety measurements. In order to facilitate efficient tracking of raw materials back in my internship at BreadTalk, I created an online system using [React.js](https://reactjs.org/) for the production team to record down the daily usage of materials on the comfort of their phones.

The application interface:

![](https://raw.githubusercontent.com/kaiyang7766/breadtalkmockapp/master/src/assets/App_interface.PNG)
>User to choose respective department.

Upon selecting department:

![](https://raw.githubusercontent.com/kaiyang7766/breadtalkmockapp/master/src/assets/Cake_department.PNG)
>Currently only Traceability System is working, I included other possible functionality options that could be expanded for future use.

Traceability System:

![](https://raw.githubusercontent.com/kaiyang7766/breadtalkmockapp/master/src/assets/TraceabilitySystem.gif)
>Submitting the form will fire an AJAX request to google sheet via [Google App Script](https://github.com/kaiyang7766/breadtalkmockapp/blob/master/src/Traceability.gs). All data is stored in google sheet (instead of database like Firebase) to allow everyone without knowledge of SQL to retrieve the data easily.

###What's missing from this system?
There are still a lot to improve from this system, including creating an API that allows adding/removing items from the Traceability System without knowledge of React.js. Next, integrating the system with Breadtalk Zimbra Web Client would allow sufficient security to limit access to only authorized people.
