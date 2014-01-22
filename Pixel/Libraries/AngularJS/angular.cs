using System;
using System.Collections;
using System.Collections.Generic;
using System.Html;
using System.Runtime.CompilerServices;
using jQueryApi;

namespace ng
{
    [Imported()]
    public static class angular
    {
        public static ng.IAngularStatic _;

        public static ng.IModule Module(string name)
        {
            return null;
        }

        public static ng.IModule Module(string name, string[] requires)
        {
            return null;
        }

        public static void Bootstrap(DocumentInstance document, params string[] parms)
        {
        }

        public static AngularElement Element(DocumentInstance document)
        {
            return null;
        }

        public static AngularElement Element(string document)
        {
            return null;
        }

        public static AngularElement Element(Element document)
        {
            return null;
        }

        public static AngularElement Element(jQueryObject document)
        {
            return null;
        }

        public static void ForEach<T>(List<T> items, Action<T> item)
        {
        }

        public static void ForEach(JsDictionary items, Action<string, object> item)
        {
        }
    }
}