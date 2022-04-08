# MoodLifter
> Moodlifter is an app that recommends appropriate content based on one's instantaneous mood.

## How does MoodLifter works
When in a good mood, MoodLifter shows the user a random quote and lets the user note down how they feel in their daily journal. Besides, they can share their positive moment with other users in the MoodLifter Forum.

In case of low moods, depending on the selected feeling, MoodLifter uses the saved information provided by the user to remind them of ways that can improve how they feel. For instance, it suggests calling the favourite person as a potential remedy for one's low mood. 
Additionally, MoodLifter allows you to keep daily journals, and provides relevent articles, videos and motivational quotes.

## What was the problem
The idea of MoodLifter came to my mind when I wasn't in a good mood. I wanted to build an app that tracks my mood and allows me to see how my mood fluctuates during the week. I was looking for advice and helpful materials to keep up my spirit.

## How to run it
- First, run `npm install` to install the dependencies (need node.js for npm)
- Finally, run `npm run devstart` to run the app via localhost [http://localhost:3000](http://localhost:3000)

## Tech stack
- HTML, CSS, Figma
- React
- Typescript
- Node.js, Express
- Authentication (Bcrypt, Jsonwebtoken)
- PostgresSQl, Prisma ORM, ElephantSQL

## Future improvements
1. Currently, a user can select one feeling at a time. The future improvement would be the ability for a user to select multiple feelings and provide relevant materials based on multiple feelings.
2. There should be an ability for the user to save their favourite quotes, articles and videos on their profile page to read them or watch them later. Because of time limitations, this feature is in progress.
3. Another feature that needs to be added is tracking the user's mood. It means that users would be able to see how their moods fluctuated during the week, at the end of each week.
4. At the moment users can't share their good mood with others. This feature is under construction as well.
5. Journaling, whenever users feel good, is as beneficial as when they are in a low mood. Importantly, saving users' diaries into a database whenever they feel good enables us to show them that they had good days as well. This is another feature that needs to be added.

## Limitations
- There are limited materials for suggesting to users. I didn't find an external API to use for materials.



