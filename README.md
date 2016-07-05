# Showcased Movies App

<b>INSTRUCTIONS TO RUN THE PROJECT: </b>

Place the showcased_movies_app folder in htdocs folder and then run these commands on terminal:

<ol>
<li> sudo apt-get install nodejs</li>
<li> sudo npm install -g grunt-cli bower</li>
<li> npm install (should be run in showcased_movies_app folder)</li>
<li> bower install (should be run in showcased_movies_app folder)</li>
<li> grunt build (should be run in showcased_movies_app folder)</li>
<li> Hit localhost.com/showcased_movies_app/build/</li>
</ol>


<b>REPORT ON WORK DONE IN PROJECT: </b>

<ul>
<li> A single page Angular app is developed to showcase movies in the form of feed view.</li>
<li> For making first page load more fast, Lazy loading of the feed items and preloading of the movies image assets has been implemented.</li>
<li> Demo file is attached.</li>
</ul>


<b>TO UNDERSTAND THE PROJECT STRUCTURE: </b>

Start from app.js -> index.html

     Header
       |
     app.js __ Feed

Feed page creates a new child scope from the parent AppCtrl scope. AppCtrl mainly handles the state of the app and routing.

I have also added documentation in source code for better understanding.

<b>Main components in project: </b>

<ul>
<li> FeedPage </li>
<li> MoviesData </li>
</ul>

<b>TECHNOLOGIES USED: </b>

<ul>
<li> Angular JS</li>
<li> Underscore JS</li>
<li> Less</li>
<li> JQuery</li>
<li> Grunt</li>
</ul>
