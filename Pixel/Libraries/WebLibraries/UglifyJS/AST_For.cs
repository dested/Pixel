using System.Runtime.CompilerServices;

namespace WebLibraries.UglifyJS
{
    [Imported]
    public class AST_For : AST_StatementWithBody
    {
        [IntrinsicProperty]
        public AST_Node Init { get; set; }

        [IntrinsicProperty]
        public AST_Node Condition { get; set; }

        [IntrinsicProperty]
        public AST_Node Step { get; set; }
    }
}