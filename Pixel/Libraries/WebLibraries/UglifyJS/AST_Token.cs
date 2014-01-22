using System.Runtime.CompilerServices;

namespace WebLibraries.UglifyJS
{
    [Imported]
    public class AST_Token
    {
        [ScriptName("col")]
        [IntrinsicProperty]
        public int Column { get; set; }

        [ScriptName("comments_before")]
        [IntrinsicProperty]
        public string[] CommentsBefore { get; set; }

        [ScriptName("endpos")]
        [IntrinsicProperty]
        public int EndPosition { get; set; }

        [IntrinsicProperty]
        public string File { get; set; }

        [IntrinsicProperty]
        public int Line { get; set; }

        [ScriptName("pos")]
        [IntrinsicProperty]
        public int Position { get; set; }

        [IntrinsicProperty]
        public AST_TokenType Type { get; set; }

        [IntrinsicProperty]
        public string Value { get; set; }
    }
}