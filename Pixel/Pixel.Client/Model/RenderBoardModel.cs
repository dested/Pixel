using System.Html.Media.Graphics;
using Pixel.Common.Data;
using Pixel.Common.Model;

namespace Pixel.Client.Model
{
    public class RenderBoardModel : BoardModel
    {
        public RenderBoardModel(BoardData tileData) : base(tileData)
        {
        }

        public void Render(CanvasRenderingContext2D canvas)
        {
        }
    }
}