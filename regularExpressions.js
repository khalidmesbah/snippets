/* 
- literal character:abcdefghijglmnopqrstuvwxyz4234dfj => any character
- test is called on a regular expression
- match is called on a string   
- () are called capture group
- meta character: differs from a language to the other
    - single characters
        - \d : 0-9
        - \D : not(0-9)
        - \w : A-Za-z0-9
        - \W : not(A-Za-z0-9)
        - \s : white space or a tab
        - \S : not(white space or a tab)
        - . : any character whatsoever
        - \. : .
        - .* : matches everything
        - 
    - quantifiers
        - * : zero or more 
        - *? : not greedy
        - + : one or more 
        - ? : zero or one
        - {}:
            - {min,max}
            - {number}
    - position
        - ^ : beginning
        - $ : end
        - \b : word boundary
    - character classes : [anything between square brackets]
        - the special characters inside it are ^ and - so write \- and \^ if - at the beginning it's fine to write it as -
        ex : [x s].q()] x or  or s or ] or . or q or ( or )
        ex : [-.] - or .
        ex : [a-o0-4] anything between a and o or 0 and 4
        ex : [^a-o0-4] anything not between a and o or 0 and 4
    - alternation : (|)
*/

const regex = /(\d{3})[-.]\d{4}/gi;
console.log(regex.exec('here are two numbers 111-2222 and 444-5555'));
console.log('here are two numbers 111-2222 and 444-5555'.match(regex));
console.log(` khalid   gaber    mesbah,khalid,gaber-mesbah*khalid^gaber@mesbah_khalid+gaber=mesbah    `.trim().split(/[\s2,--*^@_+=]+/));
console.log(` khalid   gaber    mesbah,khalid,gaber-mesbah*khalid^gaber@mesbah_khalid+gaber=mesbah    `.trim().split(/\W+|_/));
console.log('duplicate all the vowels'.replace(/([aieuo])/gi, '$1$1'));
console.log('duplicate duplicate  all all the the vowels vowels'.match(/((\s*)?\b(\w+)\b(\s*)?)\1+/gi));
// functions in replace method with regex
let string = `RegExr was created by gskinner.com, and is proudly hosted by Media Temple.
Edit the Expression & Text to see matches. Roll over matches or the expression for details. PCRE & JavaScript flavors of RegEx are supported. Validate your expression with Tests mode.
The side bar includes a Cheatsheet, full Reference, and Help. You can also Save & Share with the Community, and view patterns you create or favorite in My Patterns.
Explore results with the Tools below. Replace & List output custom results. Details lists capture groups. Explain describes your expression in plain English.
`;
console.log(string.replace(/(\b\w+\b)/g, (match,group1,group2,group3) => {
    if (match.length < 5) return match.toUpperCase() + match + group1.toUpperCase();
    else return match;
}));