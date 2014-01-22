using System;
using System.Collections.Generic;
using Common;
using Pixel.Common.Data;

namespace Pixel.Common.Model
{
    public class GameModel
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

        public List<string> Palette { get; set; }
        public TileModel[] Tiles { get; set; }
        public BoardModel[] Boards { get; set; }
        public SpriteModel[] Sprites { get; set; }
        public string Name { get; set; }
        public int TileWidth { get; set; }
        public int TileHeight { get; set; }
        public Action Init { get; set; } //function string, should be evaled
        public Action Tick { get; set; } //function string, should be evaled
    }
}