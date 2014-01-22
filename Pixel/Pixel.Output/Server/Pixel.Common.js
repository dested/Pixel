(function() {
	'use strict';
	var $asm = {};
	global.Pixel = global.Pixel || {};
	global.Pixel.Common = global.Pixel.Common || {};
	global.Pixel.Common.Data = global.Pixel.Common.Data || {};
	global.Pixel.Common.Model = global.Pixel.Common.Model || {};
	ss.initAssembly($asm, 'Pixel.Common');
	////////////////////////////////////////////////////////////////////////////////
	// Pixel.Common.Data.BoardData
	var $Pixel_Common_Data_BoardData = function() {
		this.$1$BgTilesField = null;
		this.$1$FgTilesField = null;
		this.$1$SpritesField = null;
		this.$1$BoardWidthField = 0;
		this.$1$BoardHeightField = 0;
		this.$1$BoardNameField = null;
	};
	$Pixel_Common_Data_BoardData.__typeName = 'Pixel.Common.Data.BoardData';
	global.Pixel.Common.Data.BoardData = $Pixel_Common_Data_BoardData;
	////////////////////////////////////////////////////////////////////////////////
	// Pixel.Common.Data.GameData
	var $Pixel_Common_Data_GameData = function() {
		this.$1$PaletteField = null;
		this.$1$TilesField = null;
		this.$1$BoardsField = null;
		this.$1$SpritesField = null;
		this.$1$NameField = null;
		this.$1$TileWidthField = 0;
		this.$1$TileHeightField = 0;
		this.$1$InitField = null;
		this.$1$TickField = null;
	};
	$Pixel_Common_Data_GameData.__typeName = 'Pixel.Common.Data.GameData';
	global.Pixel.Common.Data.GameData = $Pixel_Common_Data_GameData;
	////////////////////////////////////////////////////////////////////////////////
	// Pixel.Common.Data.SpriteData
	var $Pixel_Common_Data_SpriteData = function() {
		this.$1$PaletteField = null;
		this.$1$PixelsField = null;
		this.$1$OriginXField = 0;
		this.$1$OriginYField = 0;
		this.$1$SpriteWidthField = 0;
		this.$1$SpriteHeightField = 0;
		this.$1$InitField = null;
		this.$1$TickField = null;
		this.$1$DestroyField = null;
		this.$1$OffloadField = null;
		this.$1$CollideWithSpriteField = null;
		this.$1$CollideWithTileField = null;
	};
	$Pixel_Common_Data_SpriteData.__typeName = 'Pixel.Common.Data.SpriteData';
	global.Pixel.Common.Data.SpriteData = $Pixel_Common_Data_SpriteData;
	////////////////////////////////////////////////////////////////////////////////
	// Pixel.Common.Data.SpriteInstanceData
	var $Pixel_Common_Data_SpriteInstanceData = function() {
		this.$1$StartXField = 0;
		this.$1$StartYField = 0;
		this.$1$IndexField = 0;
	};
	$Pixel_Common_Data_SpriteInstanceData.__typeName = 'Pixel.Common.Data.SpriteInstanceData';
	global.Pixel.Common.Data.SpriteInstanceData = $Pixel_Common_Data_SpriteInstanceData;
	////////////////////////////////////////////////////////////////////////////////
	// Pixel.Common.Data.TileData
	var $Pixel_Common_Data_TileData = function() {
		this.$1$PixelsField = null;
	};
	$Pixel_Common_Data_TileData.__typeName = 'Pixel.Common.Data.TileData';
	global.Pixel.Common.Data.TileData = $Pixel_Common_Data_TileData;
	////////////////////////////////////////////////////////////////////////////////
	// Pixel.Common.Model.BoardModel
	var $Pixel_Common_Model_BoardModel = function(tileData) {
		this.$1$BgTilesField = null;
		this.$1$FgTilesField = null;
		this.$1$SpritesField = null;
		this.$1$BoardWidthField = 0;
		this.$1$BoardHeightField = 0;
		this.$1$BoardNameField = null;
		this.set_bgTiles(tileData.get_bgTiles());
		this.set_fgTiles(tileData.get_fgTiles());
		this.set_sprites(Common.ArrayExtensions.select($Pixel_Common_Data_SpriteInstanceData, $Pixel_Common_Model_SpriteInstanceModel).call(null, tileData.get_sprites(), function(s) {
			return new $Pixel_Common_Model_SpriteInstanceModel(s);
		}));
		this.set_boardWidth(tileData.get_boardWidth());
		this.set_boardHeight(tileData.get_boardHeight());
		this.set_boardName(tileData.get_boardName());
	};
	$Pixel_Common_Model_BoardModel.__typeName = 'Pixel.Common.Model.BoardModel';
	global.Pixel.Common.Model.BoardModel = $Pixel_Common_Model_BoardModel;
	////////////////////////////////////////////////////////////////////////////////
	// Pixel.Common.Model.GameModel
	var $Pixel_Common_Model_GameModel = function(gameData) {
		this.$1$PaletteField = null;
		this.$1$TilesField = null;
		this.$1$BoardsField = null;
		this.$1$SpritesField = null;
		this.$1$NameField = null;
		this.$1$TileWidthField = 0;
		this.$1$TileHeightField = 0;
		this.$1$InitField = null;
		this.$1$TickField = null;
		this.set_name(gameData.get_name());
		this.set_palette(gameData.get_palette());
		this.set_tileWidth(gameData.get_tileWidth());
		this.set_tileHeight(gameData.get_tileHeight());
		this.set_tiles(Common.ArrayExtensions.select($Pixel_Common_Data_TileData, $Pixel_Common_Model_TileModel).call(null, gameData.get_tiles(), function(t) {
			return new $Pixel_Common_Model_TileModel(t);
		}));
		this.set_boards(Common.ArrayExtensions.select($Pixel_Common_Data_BoardData, $Pixel_Common_Model_BoardModel).call(null, gameData.get_boards(), function(t1) {
			return new $Pixel_Common_Model_BoardModel(t1);
		}));
		this.set_sprites(Common.ArrayExtensions.select($Pixel_Common_Data_SpriteData, $Pixel_Common_Model_SpriteModel).call(null, gameData.get_sprites(), function(t2) {
			return new $Pixel_Common_Model_SpriteModel(t2);
		}));
		this.set_init(ss.cast(eval(Common.StringExtensions.formatMe(Common.Help.functionFormat, [gameData.get_init()])), Function));
		this.set_tick(ss.cast(eval(Common.StringExtensions.formatMe(Common.Help.functionFormat, [gameData.get_tick()])), Function));
	};
	$Pixel_Common_Model_GameModel.__typeName = 'Pixel.Common.Model.GameModel';
	global.Pixel.Common.Model.GameModel = $Pixel_Common_Model_GameModel;
	////////////////////////////////////////////////////////////////////////////////
	// Pixel.Common.Model.SpriteInstanceModel
	var $Pixel_Common_Model_SpriteInstanceModel = function(spriteInstanceData) {
		this.$1$StartXField = 0;
		this.$1$StartYField = 0;
		this.$1$IndexField = 0;
		this.set_startX(spriteInstanceData.get_startX());
		this.set_startY(spriteInstanceData.get_startY());
		this.set_index(spriteInstanceData.get_index());
	};
	$Pixel_Common_Model_SpriteInstanceModel.__typeName = 'Pixel.Common.Model.SpriteInstanceModel';
	global.Pixel.Common.Model.SpriteInstanceModel = $Pixel_Common_Model_SpriteInstanceModel;
	////////////////////////////////////////////////////////////////////////////////
	// Pixel.Common.Model.SpriteModel
	var $Pixel_Common_Model_SpriteModel = function(spriteData) {
		this.$1$PaletteField = null;
		this.$1$PixelsField = null;
		this.$1$OriginXField = 0;
		this.$1$OriginYField = 0;
		this.$1$SpriteWidthField = 0;
		this.$1$SpriteHeightField = 0;
		this.$1$InitField = null;
		this.$1$TickField = null;
		this.$1$DestroyField = null;
		this.$1$OffloadField = null;
		this.$1$CollideWithSpriteField = null;
		this.$1$CollideWithTileField = null;
		this.set_palette(spriteData.get_palette());
		this.set_pixels(spriteData.get_pixels());
		this.set_originX(spriteData.get_originX());
		this.set_originY(spriteData.get_originY());
		this.set_spriteWidth(spriteData.get_spriteWidth());
		this.set_spriteHeight(spriteData.get_spriteHeight());
		this.set_init(ss.cast(eval(Common.StringExtensions.formatMe(Common.Help.functionFormat, [spriteData.get_init()])), Function));
		this.set_tick(ss.cast(eval(Common.StringExtensions.formatMe(Common.Help.functionFormat, [spriteData.get_tick()])), Function));
		this.set_destroy(ss.cast(eval(Common.StringExtensions.formatMe(Common.Help.functionFormat, [spriteData.get_destroy()])), Function));
		this.set_offload(ss.cast(eval(Common.StringExtensions.formatMe(Common.Help.functionFormat, [spriteData.get_offload()])), Function));
		this.set_collideWithSprite(ss.cast(eval(Common.StringExtensions.formatMe(Common.Help.functionFormat, [spriteData.get_collideWithSprite()])), Function));
		this.set_collideWithTile(ss.cast(eval(Common.StringExtensions.formatMe(Common.Help.functionFormat, [spriteData.get_collideWithTile()])), Function));
	};
	$Pixel_Common_Model_SpriteModel.__typeName = 'Pixel.Common.Model.SpriteModel';
	global.Pixel.Common.Model.SpriteModel = $Pixel_Common_Model_SpriteModel;
	////////////////////////////////////////////////////////////////////////////////
	// Pixel.Common.Model.TileModel
	var $Pixel_Common_Model_TileModel = function(tileData) {
		this.$1$PixelsField = null;
		this.set_pixels(tileData.get_pixels());
	};
	$Pixel_Common_Model_TileModel.__typeName = 'Pixel.Common.Model.TileModel';
	global.Pixel.Common.Model.TileModel = $Pixel_Common_Model_TileModel;
	ss.initClass($Pixel_Common_Data_BoardData, $asm, {
		get_bgTiles: function() {
			return this.$1$BgTilesField;
		},
		set_bgTiles: function(value) {
			this.$1$BgTilesField = value;
		},
		get_fgTiles: function() {
			return this.$1$FgTilesField;
		},
		set_fgTiles: function(value) {
			this.$1$FgTilesField = value;
		},
		get_sprites: function() {
			return this.$1$SpritesField;
		},
		set_sprites: function(value) {
			this.$1$SpritesField = value;
		},
		get_boardWidth: function() {
			return this.$1$BoardWidthField;
		},
		set_boardWidth: function(value) {
			this.$1$BoardWidthField = value;
		},
		get_boardHeight: function() {
			return this.$1$BoardHeightField;
		},
		set_boardHeight: function(value) {
			this.$1$BoardHeightField = value;
		},
		get_boardName: function() {
			return this.$1$BoardNameField;
		},
		set_boardName: function(value) {
			this.$1$BoardNameField = value;
		}
	});
	ss.initClass($Pixel_Common_Data_GameData, $asm, {
		get_palette: function() {
			return this.$1$PaletteField;
		},
		set_palette: function(value) {
			this.$1$PaletteField = value;
		},
		get_tiles: function() {
			return this.$1$TilesField;
		},
		set_tiles: function(value) {
			this.$1$TilesField = value;
		},
		get_boards: function() {
			return this.$1$BoardsField;
		},
		set_boards: function(value) {
			this.$1$BoardsField = value;
		},
		get_sprites: function() {
			return this.$1$SpritesField;
		},
		set_sprites: function(value) {
			this.$1$SpritesField = value;
		},
		get_name: function() {
			return this.$1$NameField;
		},
		set_name: function(value) {
			this.$1$NameField = value;
		},
		get_tileWidth: function() {
			return this.$1$TileWidthField;
		},
		set_tileWidth: function(value) {
			this.$1$TileWidthField = value;
		},
		get_tileHeight: function() {
			return this.$1$TileHeightField;
		},
		set_tileHeight: function(value) {
			this.$1$TileHeightField = value;
		},
		get_init: function() {
			return this.$1$InitField;
		},
		set_init: function(value) {
			this.$1$InitField = value;
		},
		get_tick: function() {
			return this.$1$TickField;
		},
		set_tick: function(value) {
			this.$1$TickField = value;
		}
	});
	ss.initClass($Pixel_Common_Data_SpriteData, $asm, {
		get_palette: function() {
			return this.$1$PaletteField;
		},
		set_palette: function(value) {
			this.$1$PaletteField = value;
		},
		get_pixels: function() {
			return this.$1$PixelsField;
		},
		set_pixels: function(value) {
			this.$1$PixelsField = value;
		},
		get_originX: function() {
			return this.$1$OriginXField;
		},
		set_originX: function(value) {
			this.$1$OriginXField = value;
		},
		get_originY: function() {
			return this.$1$OriginYField;
		},
		set_originY: function(value) {
			this.$1$OriginYField = value;
		},
		get_spriteWidth: function() {
			return this.$1$SpriteWidthField;
		},
		set_spriteWidth: function(value) {
			this.$1$SpriteWidthField = value;
		},
		get_spriteHeight: function() {
			return this.$1$SpriteHeightField;
		},
		set_spriteHeight: function(value) {
			this.$1$SpriteHeightField = value;
		},
		get_init: function() {
			return this.$1$InitField;
		},
		set_init: function(value) {
			this.$1$InitField = value;
		},
		get_tick: function() {
			return this.$1$TickField;
		},
		set_tick: function(value) {
			this.$1$TickField = value;
		},
		get_destroy: function() {
			return this.$1$DestroyField;
		},
		set_destroy: function(value) {
			this.$1$DestroyField = value;
		},
		get_offload: function() {
			return this.$1$OffloadField;
		},
		set_offload: function(value) {
			this.$1$OffloadField = value;
		},
		get_collideWithSprite: function() {
			return this.$1$CollideWithSpriteField;
		},
		set_collideWithSprite: function(value) {
			this.$1$CollideWithSpriteField = value;
		},
		get_collideWithTile: function() {
			return this.$1$CollideWithTileField;
		},
		set_collideWithTile: function(value) {
			this.$1$CollideWithTileField = value;
		}
	});
	ss.initClass($Pixel_Common_Data_SpriteInstanceData, $asm, {
		get_startX: function() {
			return this.$1$StartXField;
		},
		set_startX: function(value) {
			this.$1$StartXField = value;
		},
		get_startY: function() {
			return this.$1$StartYField;
		},
		set_startY: function(value) {
			this.$1$StartYField = value;
		},
		get_index: function() {
			return this.$1$IndexField;
		},
		set_index: function(value) {
			this.$1$IndexField = value;
		}
	});
	ss.initClass($Pixel_Common_Data_TileData, $asm, {
		get_pixels: function() {
			return this.$1$PixelsField;
		},
		set_pixels: function(value) {
			this.$1$PixelsField = value;
		}
	});
	ss.initClass($Pixel_Common_Model_BoardModel, $asm, {
		get_bgTiles: function() {
			return this.$1$BgTilesField;
		},
		set_bgTiles: function(value) {
			this.$1$BgTilesField = value;
		},
		get_fgTiles: function() {
			return this.$1$FgTilesField;
		},
		set_fgTiles: function(value) {
			this.$1$FgTilesField = value;
		},
		get_sprites: function() {
			return this.$1$SpritesField;
		},
		set_sprites: function(value) {
			this.$1$SpritesField = value;
		},
		get_boardWidth: function() {
			return this.$1$BoardWidthField;
		},
		set_boardWidth: function(value) {
			this.$1$BoardWidthField = value;
		},
		get_boardHeight: function() {
			return this.$1$BoardHeightField;
		},
		set_boardHeight: function(value) {
			this.$1$BoardHeightField = value;
		},
		get_boardName: function() {
			return this.$1$BoardNameField;
		},
		set_boardName: function(value) {
			this.$1$BoardNameField = value;
		}
	});
	ss.initClass($Pixel_Common_Model_GameModel, $asm, {
		get_palette: function() {
			return this.$1$PaletteField;
		},
		set_palette: function(value) {
			this.$1$PaletteField = value;
		},
		get_tiles: function() {
			return this.$1$TilesField;
		},
		set_tiles: function(value) {
			this.$1$TilesField = value;
		},
		get_boards: function() {
			return this.$1$BoardsField;
		},
		set_boards: function(value) {
			this.$1$BoardsField = value;
		},
		get_sprites: function() {
			return this.$1$SpritesField;
		},
		set_sprites: function(value) {
			this.$1$SpritesField = value;
		},
		get_name: function() {
			return this.$1$NameField;
		},
		set_name: function(value) {
			this.$1$NameField = value;
		},
		get_tileWidth: function() {
			return this.$1$TileWidthField;
		},
		set_tileWidth: function(value) {
			this.$1$TileWidthField = value;
		},
		get_tileHeight: function() {
			return this.$1$TileHeightField;
		},
		set_tileHeight: function(value) {
			this.$1$TileHeightField = value;
		},
		get_init: function() {
			return this.$1$InitField;
		},
		set_init: function(value) {
			this.$1$InitField = value;
		},
		get_tick: function() {
			return this.$1$TickField;
		},
		set_tick: function(value) {
			this.$1$TickField = value;
		}
	});
	ss.initClass($Pixel_Common_Model_SpriteInstanceModel, $asm, {
		get_startX: function() {
			return this.$1$StartXField;
		},
		set_startX: function(value) {
			this.$1$StartXField = value;
		},
		get_startY: function() {
			return this.$1$StartYField;
		},
		set_startY: function(value) {
			this.$1$StartYField = value;
		},
		get_index: function() {
			return this.$1$IndexField;
		},
		set_index: function(value) {
			this.$1$IndexField = value;
		}
	});
	ss.initClass($Pixel_Common_Model_SpriteModel, $asm, {
		get_palette: function() {
			return this.$1$PaletteField;
		},
		set_palette: function(value) {
			this.$1$PaletteField = value;
		},
		get_pixels: function() {
			return this.$1$PixelsField;
		},
		set_pixels: function(value) {
			this.$1$PixelsField = value;
		},
		get_originX: function() {
			return this.$1$OriginXField;
		},
		set_originX: function(value) {
			this.$1$OriginXField = value;
		},
		get_originY: function() {
			return this.$1$OriginYField;
		},
		set_originY: function(value) {
			this.$1$OriginYField = value;
		},
		get_spriteWidth: function() {
			return this.$1$SpriteWidthField;
		},
		set_spriteWidth: function(value) {
			this.$1$SpriteWidthField = value;
		},
		get_spriteHeight: function() {
			return this.$1$SpriteHeightField;
		},
		set_spriteHeight: function(value) {
			this.$1$SpriteHeightField = value;
		},
		get_init: function() {
			return this.$1$InitField;
		},
		set_init: function(value) {
			this.$1$InitField = value;
		},
		get_tick: function() {
			return this.$1$TickField;
		},
		set_tick: function(value) {
			this.$1$TickField = value;
		},
		get_destroy: function() {
			return this.$1$DestroyField;
		},
		set_destroy: function(value) {
			this.$1$DestroyField = value;
		},
		get_offload: function() {
			return this.$1$OffloadField;
		},
		set_offload: function(value) {
			this.$1$OffloadField = value;
		},
		get_collideWithSprite: function() {
			return this.$1$CollideWithSpriteField;
		},
		set_collideWithSprite: function(value) {
			this.$1$CollideWithSpriteField = value;
		},
		get_collideWithTile: function() {
			return this.$1$CollideWithTileField;
		},
		set_collideWithTile: function(value) {
			this.$1$CollideWithTileField = value;
		}
	});
	ss.initClass($Pixel_Common_Model_TileModel, $asm, {
		get_pixels: function() {
			return this.$1$PixelsField;
		},
		set_pixels: function(value) {
			this.$1$PixelsField = value;
		}
	});
})();
