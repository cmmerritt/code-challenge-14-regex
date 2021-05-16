// ok I swear the challenges were different when I first started working on this a few days ago, because I had tests for different functions in a doc, so I had to spend a while figuring out what exactly is going on

export function sortByChildren(arr) {
  return arr.sort((a, b) => 
    a.children.length - b.children.length);
}

export function replaceZeros(str) {
  return str.replace(/0/g, 'zero');
}

// now I'm getting an error that git can't access my repo to pull my latest changes. I was able to push/pull my first passing test and googling didn't help (everyone else had issues with their local repo and mine is set up correctly) so idk

export function validatePin(str) {
  return str.match(/^[0-9]{4}$/) ? true : false;
}

// same git error

/* export function validateWord(str) {
  return str.match(/[a-z]{5, 10}/) ? true : false;
}
 */

export function validateWord(str) {
  return str.match(/^[a-z]{5,10}$/) ? true : false;
}


