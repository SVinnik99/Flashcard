# Change Log

## Goal
In this next commit:
Let's use what we are fetching from or `db` to render our decks as a list of deck components

Next
We want to be able to click the card to study. So when clicking on study we should be able to see the first card
in the deck and all the info inside it

# Current Status:
We are able to click study and it does render the first card in the deck. We also display the deck title.
The card number is partially working. It is currently referencing the number by its id. Need a different way to do this.

Next: I want to be able to flip the cards and go to the next card as well.
Conditionally render the next button to go to the next card.



9.19.23 11:00 am
- Study works for first card
  - must update the way current card number is bieng displayed
- must implement:
  - flipping the card
  - getting the next card

9.15.23 9:50 am
- Using what we are fetching from express server to render our decks as a list of Deck components.
- Created a single Deck Component


9.12.23 1:10pm
commit: 73e9f826e7c35281b8f21c04b8241429fe52f61f
listDecks and decks state()

- Added readme
- updated index.js
- working listDecks utility function
- create state for decks
- using async await style to grab the list of decks.
