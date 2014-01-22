using System.Runtime.CompilerServices;

namespace WebLibraries.UglifyJS
{
    [Imported]
    public class AST_If : AST_StatementWithBody
    {
        [IntrinsicProperty]
        public AST_Node Condition { get; set; }

        [IntrinsicProperty]
        public AST_Statement Alternative { get; set; }
    }
}