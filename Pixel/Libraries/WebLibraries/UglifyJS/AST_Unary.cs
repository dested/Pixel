using System.Runtime.CompilerServices;

namespace WebLibraries.UglifyJS
{
    [Imported]
    public class AST_Unary : AST_Node
    {
        [IntrinsicProperty]
        public string Operator { get; set; }

        [IntrinsicProperty]
        public AST_Node Expression { get; set; }
    }
}