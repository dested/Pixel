using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using Common;
using Pixel.Common.Data;

namespace Pixel.Common.Model
{
    public abstract class BoardModel
    {
        public BoardModel(BoardData boardData)
        {
            BgTiles = boardData.BgTiles;
            FgTiles = boardData.FgTiles;
            BoardWidth = boardData.BoardWidth;
            BoardHeight = boardData.BoardHeight;
            BoardName = boardData.BoardName;
        }

        [IntrinsicProperty]
        public List<int> BgTiles { get; set; }
        [IntrinsicProperty]
        public List<int> FgTiles { get; set; }
        [IntrinsicProperty]
        public SpriteInstanceModel[] Sprites { get; set; }
        [IntrinsicProperty]
        public int BoardWidth { get; set; }
        [IntrinsicProperty]
        public int BoardHeight { get; set; }
        [IntrinsicProperty]
        public string BoardName { get; set; }
    }
}