using System.Runtime.CompilerServices;

namespace WebLibraries.UglifyJS
{
    [Imported]
    public class AST_SimpleStatement : AST_Statement
    {
        [IntrinsicProperty]
        public AST_Node Body { get; set; }
    }
}