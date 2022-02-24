# mindreader

javascript scoping

### Goals
- Create this in a "single page application"
- Need to implement "state" management
- Should not refresh page to change cards
- Update the "state" using a variable to tell computer what "view" it is
- Be able to go forward to next view, back to previous view, and reset to first view
- Need to be able to scroll through the numbers/symbols for page 5
- Use the math gimmick based on factors of 9

### General Card Elements
1. h1 sized text at top of card
2. a single "Next" type button to go to next card
3. some sort of sub text
4. a button in bottom right for go on first card or reverse on cards 2-6

### Objects
1. Card
    - Contains the direction text or the answer for slide 6 and a button to move forward or back
2. Button
    - GO button for slide 1
    - NEXT button for slides 2-4
    - Reverse button for slides 2-6
    - REVEAL button slide 5
    - Change the "state" when one of the buttons is clicked
3. Potential Answer
    - Needs to show a few numbers and their matching symbols
    - Stretch goal to be able to scroll through these symbols (if more than 4)

### Objects and Their Functions
1. Card
    - text: Present string of header text. Potentially use getElementById to replace with state change
    - subtext: Present string of subtext. Also use getElementByID to grab then turn text on/off and 
2. Buttons
    - hideButton(): hides button depending
    - goButton(): 1st page button goes to next page on bottom right
    - nextButton(): goes to next page/calls new state for next card
    - reverseButton(): returns to previous card
3. Potential Answer
    - scroll (unsure how to do this)
BREAK THESE DOWN

LIST EACH CARD'S STATE

Card 1
a. "I can read your mind" h1 text at top
b. "GO" button at bottom right

Card 2
a. "Pick a number from 01-99" h1 text at top
b. "NEXT" button (maybe nav-link button)
c. "when you have your number click next" sub text
d. Same as "GO" button, but has reverse logo to go back to Card 1

Card 3
a. "Add both digits together to get a new number" h1 text
b. "NEXT" button
c. "Ex: 14 is 1 + 4 = 5 click next to proceed" subtext
d. Reverse button

Card 4
a. "Subtract your new number from the original number" h1 text
b. "NEXT" button
c. "Ex: 14-5=9 click next to proceed" subtext
d. Reverse button

Card 5
a. Displays something like "0 - &, 1 - @, etc" h1 text. Make this scrollable??
   Also needs to have each number divisible by 9 have the same sign.
b. "REVEAL" button
c. "Find your new number. Note the symbol beside the number" subtext
d. Reverse button

Card 6
a. Displays the & logo in this case
b. There is no button on this card here
c. "Your symbol is: &" subtext
d. Reverse button