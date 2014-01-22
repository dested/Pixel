using Pixel.Common.Data;
using Pixel.Common.Model;

namespace Pixel.Server.Model
{
    public class ServerGameModel : GameModel
    {
        public ServerGameModel(GameData gameData) : base(gameData)
        {
            Tiles = gameData.Tiles.Select(t => new ServerTileModel(t)).ToArray();
            Boards = gameData.Boards.Select(t => new ServerBoardModel(t)).ToArray();
            Sprites = gameData.Sprites.Select(t => new ServerSpriteModel(t)).ToArray();
        }
 
    }
}