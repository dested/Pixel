using System.Runtime.CompilerServices;

namespace WebLibraries.UglifyJS
{
    [Imported]
    public class AST_PropAccess : AST_Node
    {
        [IntrinsicProperty]
        public AST_Node Expression { get; set; }

        [ScriptName("property")]
        [IntrinsicProperty]
        public AST_Node Property_Node { get; set; }

        [ScriptName("property")]
        [IntrinsicProperty]
        public string Property_String { get; set; }
    }
}