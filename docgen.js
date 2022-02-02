const docgen = require("react-docgen-typescript");
const path = require( "path" );
const fs = require( 'fs' );
const folder = './components';
const COMPONENT_TO_SRC = []

const tsConfigParser = docgen.withCustomConfig("./tsconfig.json", {
  shouldExtractValuesFromUnion: true,
});

fs.readdirSync( folder ).forEach( file => {
   const absolutePath = path.resolve( folder, file );
   COMPONENT_TO_SRC.push(absolutePath);
});


const props = tsConfigParser.parse(Object.values(COMPONENT_TO_SRC));

fs.writeFile("./generated/documentation/doc.json", JSON.stringify(props, null, 2), (err) => {
  if (err) {
    throw err;
  }
  console.log("JSON data is saved.");
});