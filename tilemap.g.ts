// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000020303090909030303030903030303040c0101010101010101010a01010101050c0101030303030101010101010101050c01010101010101010101010101010506010101010101010103030304010105060101010101010101010101050101050c0101010101010101010101050101050c010101010101010101010105010105060101010203030304010101010101050601010106010101050101010101010506010601060101010703040101010105060106010601010101010704010101050c01060106010101010101050101010506010601070d0d0d0d0d0d080101010506010101010101010101010101010105070b0b0b0b0b0b0b0b0b0b0b0b0b0b08`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . 2 2 2 2 . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . 2 2 2 2 . . 2 
2 . . . . . . . . . . . 2 . . 2 
2 . . . . . . . . . . . 2 . . 2 
2 . . . . . . . . . . . 2 . . 2 
2 . . . 2 2 2 2 2 . . . . . . 2 
2 . . . 2 2 2 2 2 . . . . . . 2 
2 . 2 . 2 2 2 2 2 2 2 . . . . 2 
2 . 2 . 2 2 2 2 2 2 2 2 . . . 2 
2 . 2 . 2 2 2 2 2 2 2 2 . . . 2 
2 . 2 . 2 2 2 2 2 2 2 2 . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorLightMoss,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorth1,sprites.dungeon.floorMixed,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouth1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
