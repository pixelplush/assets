const fs = require( "fs" );

// Outfit Items
const types = [ "body", "equipment", "outfits", "accessories" ];
let outfitItems = [];
for( const type of types ) {
    const items = JSON.parse( fs.readFileSync( `${type}.json` ).toString() );
    outfitItems.push( ...items );
}
// console.log( outfitItems );

fs.writeFileSync( `catalog_outfits.json`, JSON.stringify( outfitItems, null, "\t" ) );
console.log( `Saved catalog_outfits.json` );
