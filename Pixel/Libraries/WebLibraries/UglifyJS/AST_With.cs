using System.Runtime.CompilerServices;

namespace WebLibraries.UglifyJS
{
    [Imported]
    public class AST_With : AST_StatementWithBody
    {
        [IntrinsicProperty]
        public AST_Node Expression { get; set; }
    }
}