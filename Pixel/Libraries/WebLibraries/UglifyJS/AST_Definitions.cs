using System.Runtime.CompilerServices;

namespace WebLibraries.UglifyJS
{
    [Imported]
    public class AST_Definitions : AST_Statement
    {
        [IntrinsicProperty]
        public AST_VarDef[] Definitions { get; set; }
    }
}