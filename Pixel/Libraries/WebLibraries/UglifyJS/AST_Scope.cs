using System;
using System.Runtime.CompilerServices;

namespace WebLibraries.UglifyJS
{
    [Imported]
    public class AST_Scope : AST_Block
    {
        [IntrinsicProperty]
        public string[] Directives { get; set; }

        [IntrinsicProperty]
        public Object Variables { get; set; }

        [IntrinsicProperty]
        public Object Functions { get; set; }

        [IntrinsicProperty]
        public bool Uses_with { get; set; }

        [IntrinsicProperty]
        public bool Uses_eval { get; set; }

        [IntrinsicProperty]
        public AST_Scope Parent_scope { get; set; }

        [IntrinsicProperty]
        public SymbolDef[] Enclosed { get; set; }

        [IntrinsicProperty]
        public int Cname { get; set; }

        [ScriptName("find_variable")]
        public SymbolDef FindVariable(string name)
        {
            return default(SymbolDef);
        }

        public object References(SymbolDef name)
        {
            return default(object);
        }
    }
}