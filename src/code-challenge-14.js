// ok I swear the challenges were different when I first started working on this a few days ago, because I had tests for different functions in a doc, so I had to spend a while figuring out what exactly is going on

export function sortByChildren(arr) {
  return arr.sort((a, b) => 
    a.children.length - b.children.length);
}

export function replaceZeros(str) {
  return str.replace(/0/g, 'zero');
}

