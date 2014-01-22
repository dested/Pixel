using System.Runtime.CompilerServices;

namespace WebLibraries.UglifyJS
{
    public class SymbolDef
    {
        [IntrinsicProperty]
        public string Name { get; set; }

        [IntrinsicProperty]
        public AST_SymbolDeclaration[] Orig { get; set; }

        [IntrinsicProperty]
        public AST_Scope Scope { get; set; }

        [IntrinsicProperty]
        public AST_SymbolRef[] References { get; set; }

        [IntrinsicProperty]
        public bool Global { get; set; }

        [IntrinsicProperty]
        public bool Undeclared { get; set; }

        [IntrinsicProperty]
        public bool Constant { get; set; }

        [IntrinsicProperty]
        public bool Mangled_name { get; set; }
    }
}