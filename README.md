# Work Day Scheduler:

# Description:
 My task was to create a work day scheduler.  I set up the work day scheduler to run between the hours of 8am and 6pm.  I made a time slot for each hour in HTML.  This would cover the hours in a work day.  I kept track of the time using Momentjs.  I used momentjs to track the time and then I assigned css properties to change the color of the text box, depending on whether it was the past, present, or future.  I used bootstrap to assign css properties.  I also included a save button using jquery so I did not have to set click events on each save button.  Once the save button is activated, it saves the text into localStorage.  When reloading the page, the text will still be on the page because it is saved in localStorage.  I used setInterval.  I set this to run every 15 minutes.  Once it runs it reloads the page so time slots can stay up-to-date.  If the time changes into the next hour, the color of the textbox will update.  

# Technologies used to build the application:
 - HTML
 - CSS
 - JavaScript

# Screenshot
![screenshot](workdaypic.png)

# Link to Application:
https://fmatthew40.github.io/work-day-scheduler/