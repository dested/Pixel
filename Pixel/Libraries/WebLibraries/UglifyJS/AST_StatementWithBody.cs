using System.Runtime.CompilerServices;

namespace WebLibraries.UglifyJS
{
    [Imported]
    public class AST_StatementWithBody : AST_Statement
    {
        [IntrinsicProperty]
        public AST_Statement Body { get; set; }
    }
}