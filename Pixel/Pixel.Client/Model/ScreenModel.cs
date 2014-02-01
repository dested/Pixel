using System;
using System.Html;
using System.Html.Media.Graphics;
using System.Runtime.CompilerServices;

namespace Pixel.Client.Model
{
    public class ScreenModel
    {
        public ScreenModel(CanvasElement canvasBgElement, CanvasElement canvasSpritesElement, CanvasElement canvasFgElement)
        {
            CanvasBgElement = canvasBgElement;
            CanvasSpritesElement = canvasSpritesElement;
            CanvasFgElement = canvasFgElement;


            CanvasBgCanvas = (CanvasRenderingContext2D) CanvasBgElement.GetContext("2d");
            CanvasSpritesCanvas = (CanvasRenderingContext2D) CanvasSpritesElement.GetContext("2d");
            CanvasFgCanvas = (CanvasRenderingContext2D) CanvasFgElement.GetContext("2d");
        }
        [IntrinsicProperty]
        public CanvasElement CanvasBgElement { get; set; }
        [IntrinsicProperty]
        public CanvasElement CanvasSpritesElement { get; set; }
        [IntrinsicProperty]
        public CanvasElement CanvasFgElement { get; set; }
        [IntrinsicProperty]
        public CanvasRenderingContext2D CanvasBgCanvas { get; set; }
        [IntrinsicProperty]
        public CanvasRenderingContext2D CanvasSpritesCanvas { get; set; }
        [IntrinsicProperty]
        public CanvasRenderingContext2D CanvasFgCanvas { get; set; }
    }
}