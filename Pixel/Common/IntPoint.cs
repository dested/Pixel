using System.Runtime.CompilerServices;

namespace Common
{
    public class IntPoint
    {
        [IntrinsicProperty]
        public int X { get; set; }

        [IntrinsicProperty]
        public int Y { get; set; }

        public IntPoint(int x, int y)
        {
            X = x;
            Y = y;
        }
    }
}