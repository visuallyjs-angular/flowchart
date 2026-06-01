import { type DiagramPaletteOptions } from "@visuallyjs/browser-ui"

export interface FlowchartOptions {

    showControls?:boolean
    showExportControls?:boolean

    showPalette?:boolean
    paletteContainer?:HTMLElement
    paletteOptions?:DiagramPaletteOptions

    inspectorContainer?:HTMLElement
}
