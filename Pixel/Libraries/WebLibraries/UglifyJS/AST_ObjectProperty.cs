using System.Runtime.CompilerServices;

namespace WebLibraries.UglifyJS
{
    [Imported]
    public class AST_ObjectProperty : AST_Node
    {
        [IntrinsicProperty]
        public string Key { get; set; }

        [IntrinsicProperty]
        public AST_Node Value { get; set; }
    }
}