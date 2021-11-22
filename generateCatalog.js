const fs = require( "fs" );
const ComfySheets = require( "comfysheets" );

const SHEET_ID = "1OgJA5tPAzTkGg3pjpctYMZNET6cwEBs8HuL41Lq-UyA";

( async () => {
    let catalogItems = await ComfySheets.Read( SHEET_ID, "Items", {}, "451420023" );
    // console.log( catalogItems );
    fs.writeFileSync( `catalog.json`, JSON.stringify( catalogItems, null, "\t" ) );
    console.log( `Saved catalog.json` );

    let outfitItems = await ComfySheets.Read( SHEET_ID, "Outfits", {}, "0" );
    // console.log( outfitItems );
    fs.writeFileSync( `catalog_outfits.json`, JSON.stringify( outfitItems, null, "\t" ) );
    console.log( `Saved catalog_outfits.json` );
})();
