using System.Runtime.CompilerServices;

namespace WebLibraries.UglifyJS
{
    [Imported]
    public class AST_VarDef : AST_Node
    {
        [ScriptName("name")]
        [IntrinsicProperty]
        public AST_SymbolVar Name_Var { get; set; }

        [ScriptName("name")]
        [IntrinsicProperty]
        public AST_SymbolConst Name_Const { get; set; }

        [IntrinsicProperty]
        public AST_Node Value { get; set; }
    }
}