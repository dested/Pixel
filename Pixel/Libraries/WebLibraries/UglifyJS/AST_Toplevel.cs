using System;
using System.Runtime.CompilerServices;

namespace WebLibraries.UglifyJS
{
    [Imported]
    public class AST_Toplevel : AST_Scope
    {
        [ScriptName("figure_out_scope")]
        public void FigureOutScope()
        {
        }

        [IntrinsicProperty]
        public Object Globals { get; set; }

        public void Walk(TreeWalker walker)
        {
        }
    }
}