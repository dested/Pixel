using System.Collections.Generic;
using Pixel.Common.Data;

namespace Pixel.Common.Model
{
    public class TileModel
    {
        public TileModel(TileData tileData)
        {
            Pixels = tileData.Pixels;
        }

        public List<int> Pixels { get; set; }
    }
}