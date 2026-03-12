require( "dotenv" ).config();

const fs = require( "fs" );
const ComfySheets = require( "comfysheets" );

const SHEET_ID = "1OgJA5tPAzTkGg3pjpctYMZNET6cwEBs8HuL41Lq-UyA";

( async () => {
  let outfitItems = await ComfySheets.Read( SHEET_ID, 'Outfits', {} );
  console.log( outfitItems );
  fs.writeFileSync( `catalog_outfits.json`, JSON.stringify( outfitItems, null, "\t" ) );
  console.log( `Saved catalog_outfits.json` );
})();

//
// // Outfit Items
// const types = [ "body", "equipment", "outfits", "accessories" ];
// let outfitItems = [];
// for( const type of types ) {
//     const items = JSON.parse( fs.readFileSync( `${type}.json` ).toString() );
//     outfitItems.push( ...items );
// }
// // console.log( outfitItems );
//
// fs.writeFileSync( `catalog_outfits.json`, JSON.stringify( outfitItems, null, "\t" ) );
// console.log( `Saved catalog_outfits.json` );
