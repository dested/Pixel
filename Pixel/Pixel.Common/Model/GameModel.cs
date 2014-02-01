using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using Common;
using Pixel.Common.Data;

namespace Pixel.Common.Model
{ 
    public abstract class GameModel
    {
        public GameModel(GameData gameData)
        {
            Name = gameData.Name;
            Palette = gameData.Palette;
            TileWidth = gameData.TileWidth;
            TileHeight = gameData.TileHeight;
            

            Init = (Action) Script.Eval(Help.FunctionFormat.FormatMe(gameData.Init));
            Tick = (Action) Script.Eval(Help.FunctionFormat.FormatMe(gameData.Tick));
        }

        [IntrinsicProperty]
        public List<string> Palette { get; set; }
        [IntrinsicProperty]
        public TileModel[] Tiles { get; set; }
        [IntrinsicProperty]
        public BoardModel[] Boards { get; set; }
        [IntrinsicProperty]
        public SpriteModel[] Sprites { get; set; }
        [IntrinsicProperty]
        public string Name { get; set; }
        [IntrinsicProperty]
        public int TileWidth { get; set; }
        [IntrinsicProperty]
        public int TileHeight { get; set; }
        [IntrinsicProperty]
        public Action Init { get; set; } //function string, should be evaled
        [IntrinsicProperty]
        public Action Tick { get; set; } //function string, should be evaled
    }
}