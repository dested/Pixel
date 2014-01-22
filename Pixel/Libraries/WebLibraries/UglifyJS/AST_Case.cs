using System.Runtime.CompilerServices;

namespace WebLibraries.UglifyJS
{
    [Imported]
    public class AST_Case : AST_SwitchBranch
    {
        [IntrinsicProperty]
        public AST_Node Expression { get; set; }
    }
}