using System.Runtime.CompilerServices;

namespace WebLibraries.UglifyJS
{
    [Imported]
    public class AST_Node
    {
        [IntrinsicProperty]
        public AST_Token Start { get; set; }

        [IntrinsicProperty]
        public AST_Token End { get; set; }

        [ScriptName("TYPE")]
        [IntrinsicProperty]
        public NodeType Type { get; set; }
    }
}