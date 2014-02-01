using System.Html.Media.Graphics;
using Common;
using Pixel.Client.Utils;
using Pixel.Common.Data;
using Pixel.Common.Model;

namespace Pixel.Client.Model
{
    public class RenderBoardModel : BoardModel
    {
        public RenderBoardModel(BoardData boardData) : base(boardData)
        {

            Sprites = boardData.Sprites.Select(s => new RenderSpriteInstanceModel(s)).ToArray();
        }

        public void Render(GameModel gameModel, ScreenModel screenModel)
        {

            ClientHelper.CanvasWrapper((canvas) =>
            {
                for (var i = 0; i < BgTiles.Count; i++)
                {
                    var tile = BgTiles[i];

                    ((RenderTileModel)gameModel.Tiles[tile]).Render(gameModel,this,canvas);
                }
            }, screenModel.CanvasBgCanvas);
            ClientHelper.CanvasWrapper((canvas) =>
            {
            }, screenModel.CanvasSpritesCanvas);
            ClientHelper.CanvasWrapper((canvas) =>
            {
            }, screenModel.CanvasFgCanvas);
        }
    }
}