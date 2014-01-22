﻿using System;
using System.Collections.Generic;
using Common;
using Pixel.Common.Data;

namespace Pixel.Common.Model
{
    public class SpriteModel
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

        public string Palette { get; set; }
        public List<int> Pixels { get; set; }
        public int OriginX { get; set; }
        public int OriginY { get; set; }
        public int SpriteWidth { get; set; }
        public int SpriteHeight { get; set; }
        public Action Init { get; set; }
        public Action Tick { get; set; }
        public Action Destroy { get; set; }
        public Action Offload { get; set; }
        public Func<SpriteInstanceModel, bool> CollideWithSprite { get; set; }
        public Func<TileModel, bool> CollideWithTile { get; set; }
    }
}