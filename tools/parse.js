// import Mercury from '@postlight/mercury-parser';
const Mercury = require('@postlight/mercury-parser');

const url = 'https://some-url';

Mercury.parse(url, { contentType: 'markdown' }).then(result => console.log(result));

/*

From command line:

npx @postlight/mercury-parser https://some-url --format=markdown

*/
