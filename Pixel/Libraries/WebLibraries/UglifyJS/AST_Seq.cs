using System.Runtime.CompilerServices;

namespace WebLibraries.UglifyJS
{
    [Imported]
    public class AST_Seq : AST_Node
    {
        [IntrinsicProperty]
        public AST_Node Car { get; set; }

        [IntrinsicProperty]
        public AST_Node Cdr { get; set; }
    }
}