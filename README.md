# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Erin Wang**

Time spent: **2** hours spent in total

Link to project: [https://dark-adaptive-palladium.glitch.me](https://dark-adaptive-palladium.glitch.me)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] Added notice for when the clue is playing

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![Losing a game](https://cdn.glitch.com/c96c39b3-212f-4c21-9fa4-f3f360632ca6%2Fprework%20lose.gif?v=1616548111107)
![Winning a game](https://cdn.glitch.com/c96c39b3-212f-4c21-9fa4-f3f360632ca6%2Fprework.gif?v=1616548121619)
![Start and stop](https://cdn.glitch.com/c96c39b3-212f-4c21-9fa4-f3f360632ca6%2Fprework%20start%20stop.gif?v=1616548117178)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

I looked up the frequencies of a scale here: https://pages.mtu.edu/~suits/notefreqs.html

I also used StackOverflow when I was trying to figure out my error for my additional feature.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

I decided to implement a "Playing clue..." notice because when I was testing I would forget how long it was supposed 
to play. However, when I first tried it, it appeared not to show up at all. This was because it would show and then
immediately hide so I wouldn't see it at all. Then, I tried to use SetTimeout to set to hidden after delay (whenever
the audio was scheduled to finish playing), but the console log said there was an "uncaught exception: illegal invocation".
I changed my function call to print to console.log and realized that my timing made it so that my console message appeared
as soon as the note played, so I added 500ms to the delay time, and the timing worked better through the console. However, 
I still couldn't find how to make my message disappear and I got the same error. Next, I tried to add the "hidden" class in
a separate function and call the function in my SetTimeout and it was successful. However, I almost thought it failed 
because the extra 500ms made it really slow to disappear. Instead, I actually did delay - 100 and it matched up better.

Another small issue that I ran into was that I wanted to center my blocks because I thought it would look nicer. I knew from
prior knowledge that I can do it by setting the margin: auto or text-align: center. I first tried to set it in the body, because
I wanted everything to be centered, but instead it just made everything align completely to the left without any space. Then, I
set my text styling to have their own text-align: center and tried to use margin: auto on my buttons. However, the buttons still
didn't align in the center. While trying to think of a solution I realized that I had two of the same text-align styling for my
h1 and p blocks, so I decided to remove it from the individual styling and put it in the body styling. I was pleasantly surprised
to find that it centered everything.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

I only had a surface-level understanding of how Javascript tied into HTML, so after I finished this I wondered how many functions
a normal webpage has and how much work it takes to write a webpage. I also wonder how developers implement new and complex features
without having to start completely from scratch to add in the new feature. When I added my new features, I felt like I had to edit a
lot of the things I did previously so they wouldn't overlap and cause problems. I'm also curious about how much or what kind of
maintenance is expected or required for websites, since this mini project seems like I would reach a certain point and be satisfied
with it or I would have to start adding new features instead. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

I would like to make the buttons change based on certain "levels" from how many times you won. For example, after you win three
times, all the buttons become the same color so you can't use them to remember which one was pressed. Then, after you win five
times, the sound of the buttons would get mixed up so it isn't a consecutive scale up like I set them up for the default, and you
have to remember the new place of the sound's button. Also, to help the player know what "level" they're on, I would want to add a
win/loss counter and another text that shows which level the're on. It would also be really cool to have a dropdown that lets you
select which level to try. However, I don't know about how I would implement these so I would have to look things up before
I implemented them.



## License

    Copyright [Erin Wang]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.