using System.Runtime.CompilerServices;

namespace WebLibraries.UglifyJS
{
    [Imported]
    public class AST_Array : AST_Node
    {
        [IntrinsicProperty]
        public AST_Node[] Elements { get; set; }
    }
}