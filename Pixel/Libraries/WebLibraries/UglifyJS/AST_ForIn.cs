using System.Runtime.CompilerServices;

namespace WebLibraries.UglifyJS
{
    [Imported]
    public class AST_ForIn : AST_StatementWithBody
    {
        [IntrinsicProperty]
        public AST_Node Init { get; set; }

        [IntrinsicProperty]
        public AST_SymbolRef Name { get; set; }

        [IntrinsicProperty]
        public AST_Node Object { get; set; }
    }
}