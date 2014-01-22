using System.Runtime.CompilerServices;

namespace WebLibraries.UglifyJS
{
    [Imported]
    public class AST_DWLoop : AST_StatementWithBody
    {
        [IntrinsicProperty]
        public AST_Node Condition { get; set; }
    }
}