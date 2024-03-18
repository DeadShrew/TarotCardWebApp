For my final submission for Adv Web Applications, I have created a fullstack 
(sorta) application using Spring Boot and Angular. I decided to use Spring
Boot for its Angular-like workflow and to become more familiar with the creation
of RESTful apps created using MVC architecture. Calling this a "true" fullstack
applcation might be a bit of a stretch, because I decided to use an in-memory
database called h2 for the server side of the app rather than MS SQL or MySql.

The client side of the application uses Angular 17 in standalone mode, and
Angular Materials. The styling is a little wonky right now, and will look best
with a fully open browser window. This will be fixed in later versions of the 
project. 

To test the API you can: 
Navigate to localhost:9001/cards for a list of 10 sample tarot card's JSON objects.
Navigate to localhost:9001/cards/id and enter an id between 0 and 9 to return a
single cards JSON object.

*If the API does not work with your version of eclipse, you may need a fresh 
install of the latest version. Maven likes to break on me but it works for now. 

Technologies Used:
Spring Boot v3.2.3
Maven v3.9.6
Java 17
h2Database
Lombok
Spring Web
Angular 17
Angular Materials

"# AdvWebAppsFinalSubmission" 
"# AdvWebAppsFinalSubmission" 
"# TarotCardWebApp" 
