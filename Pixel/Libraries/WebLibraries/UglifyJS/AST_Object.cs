using System.Runtime.CompilerServices;

namespace WebLibraries.UglifyJS
{
    [Imported]
    public class AST_Object : AST_Node
    {
        [IntrinsicProperty]
        public AST_ObjectProperty[] Properties { get; set; }
    }
}