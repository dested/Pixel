using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using Pixel.Common.Data;

namespace Pixel.Common.Model
{
    public abstract class TileModel
    {
        public TileModel(TileData tileData)
        {
            Pixels = tileData.Pixels;
        }
        [IntrinsicProperty]

        public List<int> Pixels { get; set; }
    }
}