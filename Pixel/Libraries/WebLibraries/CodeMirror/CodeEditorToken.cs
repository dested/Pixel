using System;
using System.Runtime.CompilerServices;

namespace WebLibraries.CodeMirror
{
    [Imported]
    [Serializable]
    public class CodeEditorToken
    {
        public int Start { get; set; }
        public string String { get; set; }
        public int End { get; set; }
    }
}