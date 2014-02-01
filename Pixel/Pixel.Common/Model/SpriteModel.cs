using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using Common;
using Pixel.Common.Data;

namespace Pixel.Common.Model
{
    public abstract class SpriteModel
    {
        public SpriteModel(SpriteData spriteData)
        {
            Palette = spriteData.Palette;
            Pixels = spriteData.Pixels;
            OriginX = spriteData.OriginX;
            OriginY = spriteData.OriginY;
            SpriteWidth = spriteData.SpriteWidth;
            SpriteHeight = spriteData.SpriteHeight;
            Init = (Action) Script.Eval(Help.FunctionFormat.FormatMe(spriteData.Init));
            Tick = (Action) Script.Eval(Help.FunctionFormat.FormatMe(spriteData.Tick));
            Destroy = (Action) Script.Eval(Help.FunctionFormat.FormatMe(spriteData.Destroy));
            Offload = (Action) Script.Eval(Help.FunctionFormat.FormatMe(spriteData.Offload));
            CollideWithSprite = (Func<SpriteInstanceModel, bool>) Script.Eval(Help.FunctionFormat.FormatMe(spriteData.CollideWithSprite));
            CollideWithTile = (Func<TileModel, bool>) Script.Eval(Help.FunctionFormat.FormatMe(spriteData.CollideWithTile));
        }

        [IntrinsicProperty]
        public string Palette { get; set; }
        [IntrinsicProperty]
        public List<int> Pixels { get; set; }
        [IntrinsicProperty]
        public int OriginX { get; set; }
        [IntrinsicProperty]
        public int OriginY { get; set; }
        [IntrinsicProperty]
        public int SpriteWidth { get; set; }
        [IntrinsicProperty]
        public int SpriteHeight { get; set; }
        [IntrinsicProperty]
        public Action Init { get; set; }
        [IntrinsicProperty]
        public Action Tick { get; set; }
        [IntrinsicProperty]
        public Action Destroy { get; set; }
        [IntrinsicProperty]
        public Action Offload { get; set; }
        [IntrinsicProperty]
        public Func<SpriteInstanceModel, bool> CollideWithSprite { get; set; }
        [IntrinsicProperty]
        public Func<TileModel, bool> CollideWithTile { get; set; }
    }
}