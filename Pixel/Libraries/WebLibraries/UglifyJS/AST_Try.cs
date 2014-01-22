using System.Runtime.CompilerServices;

namespace WebLibraries.UglifyJS
{
    [Imported]
    public class AST_Try : AST_Block
    {
        [IntrinsicProperty]
        public AST_Catch Bcatch { get; set; }

        [IntrinsicProperty]
        public AST_Finally Bfinally { get; set; }
    }
}