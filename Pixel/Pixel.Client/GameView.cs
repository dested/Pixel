using Common;
using Pixel.Client.Model;
using Pixel.Client.Utils;
using Pixel.Common.Model;

namespace Pixel.Client
{
    public class GameView
    {
        private readonly GameModel gameModel;
        private readonly ScreenModel screenModel;

        public GameView(ScreenModel screenModel, GameModel gameModel)
        {
            this.screenModel = screenModel;
            this.gameModel = gameModel;
            CurrentBoard = "First Level";

            Init();
        }

        public string CurrentBoard { get; set; }

        public void Init()
        {
            ClientHelper.CanvasDraw(Render);
        }

        public void Tick()
        {
        }

        public void Render()
        {
            var board = gameModel.Boards.First(b => b.BoardName == CurrentBoard);

            ClientHelper.CanvasWrapper((canvas) =>
                                       {
                                           for (var i = 0; i < board.BgTiles.Count; i++)
                                           {
                                               var tile = board.BgTiles[i];
                                               gameModel.Tiles[tile].Render(canvas);
                                           }
                                           canvas.FillStyle = "red";
                                           canvas.FillRect(100, 100, 200, 200);
                                       }, screenModel.CanvasBgCanvas);
            ClientHelper.CanvasWrapper((canvas) =>
                                       {
                                           canvas.FillStyle = "blue";
                                           canvas.FillRect(300, 300, 200, 200);
                                       }, screenModel.CanvasSpritesCanvas);
            ClientHelper.CanvasWrapper((canvas) =>
                                       {
                                           canvas.FillStyle = "green";
                                           canvas.FillRect(500, 500, 200, 200);
                                       }, screenModel.CanvasFgCanvas);
        }
    }
}