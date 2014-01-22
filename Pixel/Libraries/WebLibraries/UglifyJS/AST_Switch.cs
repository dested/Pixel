using System.Runtime.CompilerServices;

namespace WebLibraries.UglifyJS
{
    [Imported]
    public class AST_Switch : AST_Block
    {
        [IntrinsicProperty]
        public AST_Node Expression { get; set; }
    }
}