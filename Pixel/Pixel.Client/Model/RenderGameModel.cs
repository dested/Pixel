using System.Html.Media.Graphics;
using Common;
using Pixel.Common.Data;
using Pixel.Common.Model;

namespace Pixel.Client.Model
{
    public class RenderGameModel : GameModel
    {
        public RenderGameModel(GameData gameData) : base(gameData)
        { 
            Tiles = gameData.Tiles.Select(t => new RenderTileModel(t)).ToArray();
            Boards = gameData.Boards.Select(t => new RenderBoardModel(t)).ToArray();
            Sprites = gameData.Sprites.Select(t => new RenderSpriteModel(t)).ToArray();
        }

        public void Render(CanvasRenderingContext2D canvas)
        {
        }
    }
}