using System.Runtime.CompilerServices;

namespace WebLibraries.UglifyJS
{
    [NamedValues]
    public enum AST_TokenType
    {
        [ScriptName("string")] String,
        [ScriptName("num")] Number,
        [ScriptName("regexp")] Regexp,
        [ScriptName("operator")] Operator,
        [ScriptName("atom")] Atom,
        [ScriptName("name")] Name,
        [ScriptName("punc")] Punc,
        [ScriptName("keyword")] Keyword,
    }
}