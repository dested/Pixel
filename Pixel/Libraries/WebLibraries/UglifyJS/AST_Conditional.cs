using System.Runtime.CompilerServices;

namespace WebLibraries.UglifyJS
{
    [Imported]
    public class AST_Conditional : AST_Node
    {
        [IntrinsicProperty]
        public AST_Node Condition { get; set; }

        [IntrinsicProperty]
        public AST_Node Consequent { get; set; }

        [IntrinsicProperty]
        public AST_Node Alternative { get; set; }
    }
}