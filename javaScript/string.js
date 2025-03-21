const name="md anwar alam"
const repoCount=51
console.log(name+repoCount+"value")//it is outdated in modern use backtick

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)//good way

const gameName=new String('anwar alam')//check it in console, type gameName

console.log(gameName[4])//r

console.log(gameName.charAt(4))//r

console.log(gameName.toUpperCase());//ANWAR ALAM
console.log(gameName.length)//11
console.log(gameName.indexOf('a'))//0 first occurence
console.log(gameName.lastIndexOf('a'))//8 last occurence
console.log(gameName.slice(0,4))//anwa,start to end-1
console.log(gameName.slice(4,8))//r al
console.log(gameName.slice(4))//r alam, 0 to input
console.log(gameName.slice(-4))//alam, -4 to end
console.log(gameName.slice(-4,-1))//ala
console.log(gameName.substring(4,8))//r al
console.log(gameName.replace('anwar','kishan'))//kishan alam
console.log(gameName.split(' '))//['anwar', 'alam']

const temp=' anwar  '
console.log(temp.trim())//anwar

console.log(gameName.startsWith('anwar'))//true
console.log(gameName.endsWith('alam'))//true

const url='https://anwaralam.com'
console.log(url.includes('alam'))//true

const url1='https://an%20war%20alam.com'
console.log(url1.replace('%20','-'))//https://an-war%20alam.com
console.log(url1.includes('%20'))//true
console.log(url1.replaceAll('%20','-'))//https://anwar-alam.com

