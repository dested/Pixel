(function() {
	'use strict';
	var $asm = {};
	global.Pixel = global.Pixel || {};
	global.Pixel.Server = global.Pixel.Server || {};
	global.Pixel.Server.Model = global.Pixel.Server.Model || {};
	ss.initAssembly($asm, 'Pixel.Server');
	////////////////////////////////////////////////////////////////////////////////
	// Pixel.Server.Program
	var $Pixel_Server_$Program = function() {
	};
	$Pixel_Server_$Program.__typeName = 'Pixel.Server.$Program';
	$Pixel_Server_$Program.$main = function() {
	};
	////////////////////////////////////////////////////////////////////////////////
	// Pixel.Server.Model.ServerBoardModel
	var $Pixel_Server_Model_ServerBoardModel = function(boardData) {
		Pixel.Common.Model.BoardModel.call(this, boardData);
		this.sprites = Array.prototype.slice.call(Common.EnumerableExtensions.select(Pixel.Common.Data.SpriteInstanceData, $Pixel_Server_Model_ServerSpriteInstanceModel).call(null, boardData.sprites, function(s) {
			return new $Pixel_Server_Model_ServerSpriteInstanceModel(s);
		}));
	};
	$Pixel_Server_Model_ServerBoardModel.__typeName = 'Pixel.Server.Model.ServerBoardModel';
	global.Pixel.Server.Model.ServerBoardModel = $Pixel_Server_Model_ServerBoardModel;
	////////////////////////////////////////////////////////////////////////////////
	// Pixel.Server.Model.ServerGameModel
	var $Pixel_Server_Model_ServerGameModel = function(gameData) {
		Pixel.Common.Model.GameModel.call(this, gameData);
		this.tiles = Array.prototype.slice.call(Common.EnumerableExtensions.select(Pixel.Common.Data.TileData, $Pixel_Server_Model_ServerTileModel).call(null, gameData.tiles, function(t) {
			return new $Pixel_Server_Model_ServerTileModel(t);
		}));
		this.boards = Array.prototype.slice.call(Common.EnumerableExtensions.select(Pixel.Common.Data.BoardData, $Pixel_Server_Model_ServerBoardModel).call(null, gameData.boards, function(t1) {
			return new $Pixel_Server_Model_ServerBoardModel(t1);
		}));
		this.sprites = Array.prototype.slice.call(Common.EnumerableExtensions.select(Pixel.Common.Data.SpriteData, $Pixel_Server_Model_ServerSpriteModel).call(null, gameData.sprites, function(t2) {
			return new $Pixel_Server_Model_ServerSpriteModel(t2);
		}));
	};
	$Pixel_Server_Model_ServerGameModel.__typeName = 'Pixel.Server.Model.ServerGameModel';
	global.Pixel.Server.Model.ServerGameModel = $Pixel_Server_Model_ServerGameModel;
	////////////////////////////////////////////////////////////////////////////////
	// Pixel.Server.Model.ServerSpriteInstanceModel
	var $Pixel_Server_Model_ServerSpriteInstanceModel = function(spriteInstanceData) {
		Pixel.Common.Model.SpriteInstanceModel.call(this, spriteInstanceData);
	};
	$Pixel_Server_Model_ServerSpriteInstanceModel.__typeName = 'Pixel.Server.Model.ServerSpriteInstanceModel';
	global.Pixel.Server.Model.ServerSpriteInstanceModel = $Pixel_Server_Model_ServerSpriteInstanceModel;
	////////////////////////////////////////////////////////////////////////////////
	// Pixel.Server.Model.ServerSpriteModel
	var $Pixel_Server_Model_ServerSpriteModel = function(spriteData) {
		Pixel.Common.Model.SpriteModel.call(this, spriteData);
	};
	$Pixel_Server_Model_ServerSpriteModel.__typeName = 'Pixel.Server.Model.ServerSpriteModel';
	global.Pixel.Server.Model.ServerSpriteModel = $Pixel_Server_Model_ServerSpriteModel;
	////////////////////////////////////////////////////////////////////////////////
	// Pixel.Server.Model.ServerTileModel
	var $Pixel_Server_Model_ServerTileModel = function(tileData) {
		Pixel.Common.Model.TileModel.call(this, tileData);
	};
	$Pixel_Server_Model_ServerTileModel.__typeName = 'Pixel.Server.Model.ServerTileModel';
	global.Pixel.Server.Model.ServerTileModel = $Pixel_Server_Model_ServerTileModel;
	ss.initClass($Pixel_Server_$Program, $asm, {});
	ss.initClass($Pixel_Server_Model_ServerBoardModel, $asm, {}, Pixel.Common.Model.BoardModel);
	ss.initClass($Pixel_Server_Model_ServerGameModel, $asm, {}, Pixel.Common.Model.GameModel);
	ss.initClass($Pixel_Server_Model_ServerSpriteInstanceModel, $asm, {}, Pixel.Common.Model.SpriteInstanceModel);
	ss.initClass($Pixel_Server_Model_ServerSpriteModel, $asm, {}, Pixel.Common.Model.SpriteModel);
	ss.initClass($Pixel_Server_Model_ServerTileModel, $asm, {}, Pixel.Common.Model.TileModel);
	$Pixel_Server_$Program.$main();
})();
