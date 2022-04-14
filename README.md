# MoodLifter
> Moodlifter is an app that recommends appropriate content based on one's instantaneous mood.

<!-- ![MoodLifter Demo](public/assets/images/moodlifter.gif) -->
<img src="public/assets/images/moodlifter.gif" width="600px"/>

## How does MoodLifter works
When in a good mood:
- MoodLifter shows the user a random quote

In case of low moods:
- depending on the selected feeling, MoodLifter uses the saved information provided by the user to remind them of ways that can improve how they feel. For instance, it suggests calling the favourite person as a potential remedy for one's low mood. 
- MoodLifter allows you to keep daily journals, (Journaling, whenever users feel good, is as beneficial as when they are in a low mood. Importantly, saving users' journals into a database whenever enables us to show them that they had good days as well as bad days).
- It provides relevent articles, videos and motivational quotes.

## What was the problem
The idea of MoodLifter came to my mind when I wasn't in a good mood. I wanted to build an app that tracked the way I felt and allowed me to see how my mood would fluctuate over time. I was also looking for advice and helpful materials to keep up my spirits.

## How to run it
- First, run `npm ci` to install the dependencies (need node.js for npm)
- Finally, run `npm run devstart` to run the app via <a href="http://localhost:3000">localhost<a/>

## Tech stack
- HTML, CSS, Figma
- React
- Typescript
- Node.js, Express
- Authentication (Bcrypt, Jsonwebtoken)
- PostgresSQl, Prisma ORM, ElephantSQL

## Future improvements
1. Currently, a user can select one feeling at a time. A future improvement would be the ability to select multiple feelings and to provide relevant materials based on the all the selections.
2. There is an ability for the user to save their favourite quotes, articles and videos on their profile page to read or watch them later. Because of time limitations, I used state instead of storing them in DB.
3. Another feature that needs to be added is tracking the user's mood. It means that users would be able to see how their moods varied during a week at the end of each week.
4. At the moment users can't share their positive moment with other users in the MoodLifter Forum.This feature is under construction.

## Limitations
- There are limited materials for suggesting to users. I didn't find an external API to use for materials, except for the random quotes, for which I used <a href='https://api.adviceslip.com/'>Advice Slip<a/>.



