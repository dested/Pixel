using Common;
using Pixel.Common.Data;
using Pixel.Common.Model;

namespace Pixel.Server.Model
{
    public class ServerBoardModel : BoardModel
    {
        public ServerBoardModel(BoardData boardData)
            : base(boardData)
        {
            Sprites = boardData.Sprites.Select(s => new ServerSpriteInstanceModel(s)).ToArray();

        }
         
    }
}