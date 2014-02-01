using System;
using System.Runtime.CompilerServices;
using Pixel.Common.Data;

namespace Pixel.Common.Model
{
    public abstract class SpriteInstanceModel
    {
        public SpriteInstanceModel(SpriteInstanceData spriteInstanceData)
        {
            StartX = spriteInstanceData.StartX;
            StartY = spriteInstanceData.StartY;
            Index = spriteInstanceData.Index;
        }

        [IntrinsicProperty]
        public int StartX { get; set; }
        [IntrinsicProperty]
        public int StartY { get; set; }
        [IntrinsicProperty]
        public int Index { get; set; }
    }
}