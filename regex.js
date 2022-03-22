/**
 * Quantifiers
 *      +   1 or more
 *      *   0 or more   
 *      ?   0 or 1  
 *      {3} exactly 3    
 *      {3,} 3 or more
 *      {3,5} 3, 4 or 5 
 * 
 * 
 *  Anchors
 *      ^   Start of string, or start of line in multi line pattern
 *      \A  Start of string
 *      $   End of string, or end of line in multi line pattern
 *      \Z  End of string
 *      \<  Start of word
 *      \>  End of word
 *      \b  Word boundary
 *      \B  Not word boundary 
 * 
 *  Flags
 *      i   case insensetive
 *      g   return all matches
 * 
 * 
 *  Shorthand Character Class
 *  \w  word
 *  \W  not word
 *  \d  digit
 *  \D  not digit
 */

const flag_s1 = "Do this people peopled paper  repeatedly. Oh no! don't make this repeat. srepeat"

const flag_rgx = /(pe)[a-z]*/g;     // pe can be any where
const flag_rgx2 = /\b(pe)[a-z]*\b/g;  // match the word start with pe

const flag_match = flag_s1.match(flag_rgx);
console.log("flag: ", flag_match);



/*
 *  Lazy and Greedy Matching
 *  Lazy: finds the smallest possible part of a string
 *  Greedy: finds the logest possible part of a string
 *  Note: By default Regex Pattern follows the Greedy Approach.
 */

const s2 = "titanic";
const s3 = "<h1> windter is coming </h1>"

const greedy_regex_s2 = /t[a-z]*i/g;
const lazy_regex_s2 = /t[a-z]*?i/g;

const greedy_regex_s3 = /<.*>/g;
const lazy_regex_s3 = /<.*?>/g;

console.log("Lazy Greedy: ", s2.match(greedy_regex_s2));


// User name validation regex
/**
 *  1. If there are numbers, they must be at the end.
 *  2. Letters Can be lowercase and uppercase.
 *  3. Length must be 4 to 16 characters long. 
 *  4. Four letter names can't have numbers.
 */

const s4 = "Habi23jhgjj";
const username_regex = /^([a-zA-Z]{4}|[a-zA-Z]{2}[\w\d]{2,14})$/;
console.log("validate user: ", s4.match(username_regex));

