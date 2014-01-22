using System.Runtime.CompilerServices;

namespace WebLibraries.UglifyJS
{
    [Imported]
    public class AST_Symbol : AST_Node
    {
        [IntrinsicProperty]
        public AST_Scope Scope { get; set; }

        [IntrinsicProperty]
        public string Name { get; set; }

        [IntrinsicProperty]
        public SymbolDef Thedef { get; set; }

        public SymbolDef Definition()
        {
            return default(SymbolDef);
        }

        public bool Global()
        {
            return default(bool);
        }

        public bool Undeclared()
        {
            return default(bool);
        }

        public bool Unreferenced()
        {
            return default(bool);
        }
    }
}