using System.Html.Media.Graphics;
using Pixel.Common.Data;
using Pixel.Common.Model;

namespace Pixel.Client.Model
{
    public class RenderTileModel : TileModel
    {
        public RenderTileModel(TileData tileData) : base(tileData)
        {
        }

        public void Render(GameModel gameModel,BoardModel boardModel, CanvasRenderingContext2D canvas)
        {

            canvas.FillRect();
        }
    }
}