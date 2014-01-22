using System.Runtime.CompilerServices;

namespace WebLibraries.UglifyJS
{
    [Imported]
    public class AST_Binary : AST_Node
    {
        [IntrinsicProperty]
        public AST_Node Left { get; set; }

        [IntrinsicProperty]
        public string Operator { get; set; }

        [IntrinsicProperty]
        public AST_Node Right { get; set; }
    }
}