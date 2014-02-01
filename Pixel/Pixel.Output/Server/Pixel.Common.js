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
	};
	$Pixel_Common_Data_BoardData.__typeName = 'Pixel.Common.Data.BoardData';
	$Pixel_Common_Data_BoardData.createInstance = function() {
		return $Pixel_Common_Data_BoardData.$ctor();
	};
	$Pixel_Common_Data_BoardData.$ctor = function() {
		var $this = {};
		$this.bgTiles = null;
		$this.fgTiles = null;
		$this.sprites = null;
		$this.boardWidth = 0;
		$this.boardHeight = 0;
		$this.boardName = null;
		return $this;
	};
	global.Pixel.Common.Data.BoardData = $Pixel_Common_Data_BoardData;
	////////////////////////////////////////////////////////////////////////////////
	// Pixel.Common.Data.GameData
	var $Pixel_Common_Data_GameData = function() {
	};
	$Pixel_Common_Data_GameData.__typeName = 'Pixel.Common.Data.GameData';
	$Pixel_Common_Data_GameData.createInstance = function() {
		return $Pixel_Common_Data_GameData.$ctor();
	};
	$Pixel_Common_Data_GameData.$ctor = function() {
		var $this = {};
		$this.palette = null;
		$this.tiles = null;
		$this.boards = null;
		$this.sprites = null;
		$this.name = null;
		$this.tileWidth = 0;
		$this.tileHeight = 0;
		$this.init = null;
		$this.tick = null;
		return $this;
	};
	global.Pixel.Common.Data.GameData = $Pixel_Common_Data_GameData;
	////////////////////////////////////////////////////////////////////////////////
	// Pixel.Common.Data.SpriteData
	var $Pixel_Common_Data_SpriteData = function() {
	};
	$Pixel_Common_Data_SpriteData.__typeName = 'Pixel.Common.Data.SpriteData';
	$Pixel_Common_Data_SpriteData.createInstance = function() {
		return $Pixel_Common_Data_SpriteData.$ctor();
	};
	$Pixel_Common_Data_SpriteData.$ctor = function() {
		var $this = {};
		$this.palette = null;
		$this.pixels = null;
		$this.originX = 0;
		$this.originY = 0;
		$this.spriteWidth = 0;
		$this.spriteHeight = 0;
		$this.init = null;
		$this.tick = null;
		$this.destroy = null;
		$this.offload = null;
		$this.collideWithSprite = null;
		$this.collideWithTile = null;
		return $this;
	};
	global.Pixel.Common.Data.SpriteData = $Pixel_Common_Data_SpriteData;
	////////////////////////////////////////////////////////////////////////////////
	// Pixel.Common.Data.SpriteInstanceData
	var $Pixel_Common_Data_SpriteInstanceData = function() {
	};
	$Pixel_Common_Data_SpriteInstanceData.__typeName = 'Pixel.Common.Data.SpriteInstanceData';
	$Pixel_Common_Data_SpriteInstanceData.createInstance = function() {
		return $Pixel_Common_Data_SpriteInstanceData.$ctor();
	};
	$Pixel_Common_Data_SpriteInstanceData.$ctor = function() {
		var $this = {};
		$this.startX = 0;
		$this.startY = 0;
		$this.index = 0;
		return $this;
	};
	global.Pixel.Common.Data.SpriteInstanceData = $Pixel_Common_Data_SpriteInstanceData;
	////////////////////////////////////////////////////////////////////////////////
	// Pixel.Common.Data.TileData
	var $Pixel_Common_Data_TileData = function() {
	};
	$Pixel_Common_Data_TileData.__typeName = 'Pixel.Common.Data.TileData';
	$Pixel_Common_Data_TileData.createInstance = function() {
		return $Pixel_Common_Data_TileData.$ctor();
	};
	$Pixel_Common_Data_TileData.$ctor = function() {
		var $this = {};
		$this.pixels = null;
		return $this;
	};
	global.Pixel.Common.Data.TileData = $Pixel_Common_Data_TileData;
	////////////////////////////////////////////////////////////////////////////////
	// Pixel.Common.Model.BoardModel
	var $Pixel_Common_Model_BoardModel = function(boardData) {
		this.bgTiles = null;
		this.fgTiles = null;
		this.sprites = null;
		this.boardWidth = 0;
		this.boardHeight = 0;
		this.boardName = null;
		this.bgTiles = boardData.bgTiles;
		this.fgTiles = boardData.fgTiles;
		this.boardWidth = boardData.boardWidth;
		this.boardHeight = boardData.boardHeight;
		this.boardName = boardData.boardName;
	};
	$Pixel_Common_Model_BoardModel.__typeName = 'Pixel.Common.Model.BoardModel';
	global.Pixel.Common.Model.BoardModel = $Pixel_Common_Model_BoardModel;
	////////////////////////////////////////////////////////////////////////////////
	// Pixel.Common.Model.GameModel
	var $Pixel_Common_Model_GameModel = function(gameData) {
		this.palette = null;
		this.tiles = null;
		this.boards = null;
		this.sprites = null;
		this.name = null;
		this.tileWidth = 0;
		this.tileHeight = 0;
		this.init = null;
		this.tick = null;
		this.name = gameData.name;
		this.palette = gameData.palette;
		this.tileWidth = gameData.tileWidth;
		this.tileHeight = gameData.tileHeight;
		this.init = ss.cast(eval(Common.StringExtensions.formatMe(Common.Help.functionFormat, [gameData.init])), Function);
		this.tick = ss.cast(eval(Common.StringExtensions.formatMe(Common.Help.functionFormat, [gameData.tick])), Function);
	};
	$Pixel_Common_Model_GameModel.__typeName = 'Pixel.Common.Model.GameModel';
	global.Pixel.Common.Model.GameModel = $Pixel_Common_Model_GameModel;
	////////////////////////////////////////////////////////////////////////////////
	// Pixel.Common.Model.SpriteInstanceModel
	var $Pixel_Common_Model_SpriteInstanceModel = function(spriteInstanceData) {
		this.startX = 0;
		this.startY = 0;
		this.index = 0;
		this.startX = spriteInstanceData.startX;
		this.startY = spriteInstanceData.startY;
		this.index = spriteInstanceData.index;
	};
	$Pixel_Common_Model_SpriteInstanceModel.__typeName = 'Pixel.Common.Model.SpriteInstanceModel';
	global.Pixel.Common.Model.SpriteInstanceModel = $Pixel_Common_Model_SpriteInstanceModel;
	////////////////////////////////////////////////////////////////////////////////
	// Pixel.Common.Model.SpriteModel
	var $Pixel_Common_Model_SpriteModel = function(spriteData) {
		this.palette = null;
		this.pixels = null;
		this.originX = 0;
		this.originY = 0;
		this.spriteWidth = 0;
		this.spriteHeight = 0;
		this.init = null;
		this.tick = null;
		this.destroy = null;
		this.offload = null;
		this.collideWithSprite = null;
		this.collideWithTile = null;
		this.palette = spriteData.palette;
		this.pixels = spriteData.pixels;
		this.originX = spriteData.originX;
		this.originY = spriteData.originY;
		this.spriteWidth = spriteData.spriteWidth;
		this.spriteHeight = spriteData.spriteHeight;
		this.init = ss.cast(eval(Common.StringExtensions.formatMe(Common.Help.functionFormat, [spriteData.init])), Function);
		this.tick = ss.cast(eval(Common.StringExtensions.formatMe(Common.Help.functionFormat, [spriteData.tick])), Function);
		this.destroy = ss.cast(eval(Common.StringExtensions.formatMe(Common.Help.functionFormat, [spriteData.destroy])), Function);
		this.offload = ss.cast(eval(Common.StringExtensions.formatMe(Common.Help.functionFormat, [spriteData.offload])), Function);
		this.collideWithSprite = ss.cast(eval(Common.StringExtensions.formatMe(Common.Help.functionFormat, [spriteData.collideWithSprite])), Function);
		this.collideWithTile = ss.cast(eval(Common.StringExtensions.formatMe(Common.Help.functionFormat, [spriteData.collideWithTile])), Function);
	};
	$Pixel_Common_Model_SpriteModel.__typeName = 'Pixel.Common.Model.SpriteModel';
	global.Pixel.Common.Model.SpriteModel = $Pixel_Common_Model_SpriteModel;
	////////////////////////////////////////////////////////////////////////////////
	// Pixel.Common.Model.TileModel
	var $Pixel_Common_Model_TileModel = function(tileData) {
		this.pixels = null;
		this.pixels = tileData.pixels;
	};
	$Pixel_Common_Model_TileModel.__typeName = 'Pixel.Common.Model.TileModel';
	global.Pixel.Common.Model.TileModel = $Pixel_Common_Model_TileModel;
	ss.initClass($Pixel_Common_Data_BoardData, $asm, {});
	ss.initClass($Pixel_Common_Data_GameData, $asm, {});
	ss.initClass($Pixel_Common_Data_SpriteData, $asm, {});
	ss.initClass($Pixel_Common_Data_SpriteInstanceData, $asm, {});
	ss.initClass($Pixel_Common_Data_TileData, $asm, {});
	ss.initClass($Pixel_Common_Model_BoardModel, $asm, {});
	ss.initClass($Pixel_Common_Model_GameModel, $asm, {});
	ss.initClass($Pixel_Common_Model_SpriteInstanceModel, $asm, {});
	ss.initClass($Pixel_Common_Model_SpriteModel, $asm, {});
	ss.initClass($Pixel_Common_Model_TileModel, $asm, {});
})();
