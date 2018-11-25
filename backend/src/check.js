import { getLinks } from './page';


const testLink = async () => {
let stack = []
const seenLinks = new Set()
const url = 'http://ianrtracey.com'
const links = await getLinks(url) 
stack.concat(links);
console.log(stack)
while (stack.length > 0) {
  let curr = stack.pop();
  if (!curr) {
    continue
  }
  if (curr === false) {
    console.log(`link check for ${curr} failed`)
  }
  console.log(`${curr} 200 OK`)
  stack.concat(getLinks(curr));
}
}

testLink()
