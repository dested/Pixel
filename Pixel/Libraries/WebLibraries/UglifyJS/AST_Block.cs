using System.Runtime.CompilerServices;

namespace WebLibraries.UglifyJS
{
    [Imported]
    public class AST_Block : AST_Statement
    {
        [IntrinsicProperty]
        public AST_Statement[] Body { get; set; }
    }
}