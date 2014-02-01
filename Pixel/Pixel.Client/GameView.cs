using System.Runtime.CompilerServices;
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

        [IntrinsicProperty]
        
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
            var board = (RenderBoardModel)gameModel.Boards.First(b => b.BoardName == CurrentBoard);
            board.Render(gameModel,screenModel);
        }
    }
}