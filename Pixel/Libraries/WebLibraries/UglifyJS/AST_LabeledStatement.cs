using System.Runtime.CompilerServices;

namespace WebLibraries.UglifyJS
{
    [Imported]
    public class AST_LabeledStatement : AST_StatementWithBody
    {
        [IntrinsicProperty]
        public AST_Label Label { get; set; }
    }
}