# Simple JS Calculator v1
## Introduction
This calculator was created as part of an assignment in the Frontend Masters "Intro to Web Development v2" course. The challenge can be found here: https://btholt.github.io/intro-to-web-dev-v2/js-project/

## Experience
Prior to creating this calculator, I had not really worked with vanilla JS believe it or not, despite having worked with Angular on a team-based project and having had practice with React.

My HTML and CSS are also not perfect, so it was a bit of a challenge for me to get the calculator in place. I ended up using several flexboxes as the rows for the buttons.

For the JavaScript it was not too hard to figure out how to get the UI connected to the logic. Having worked with Angular before the concepts were already in my head. I did have to look up the syntax a bit.

It was difficult to think of the structure of the program. I ended up managing state with some variables and connecting the buttons to functionality that was dependent on said variables. What I'm most proud of is that the calculations are done based on the operator that was selected, upon which an operation function is returned and used on the two present numbers.

## Incomplete Features / Bad Code
I'm pretty sure I did not manage to iron out all the bugs. I did catch a few of them and try to get them out as much as possible, but I think the way I managed the state prevented me from properly catching all of them.

What I'm kind of unhappy with is the way I managed the state. I feel like I could have probably managed it in a better way where less variables are constantly updated in order to get the state. 

There is also some code duplication because of the way I kept track of the numbers. I think I could fix this problem by refactoring the number state into a stack or an array of two numbers. Some of the checks and updates could have been changed into reusable functions probably.

Once I learn more I would like to rewrite the CSS to be cleaner and refactor the logic.
