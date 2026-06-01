### Flowchart Editor Demo

This demo showcases a flowchart editor built with VisuallyJS in an Angular application.

#### How it works

The demo uses the `vjs-diagram` component to create an interactive flowcharting environment. It allows users to drag shapes from a palette, connect them, and inspect their properties.

#### Components Used

- `vjs-diagram`: The main editor surface.
- `vjs-diagram-palette`: Provides flowchart symbols (Process, Decision, Start/End, etc.).
- `vjs-controls`: Zoom and navigation tools.
- `vjs-export-controls`: Tools for exporting the flowchart.
- `vjs-miniview`: A small navigation window for large flowcharts.

#### Component Options

The `vjs-diagram` component is configured with comprehensive `options`:
- `shapes`: Includes `FLOWCHART_SHAPES` and `BASIC_SHAPES`.
- `edges`: Uses `CONNECTOR_TYPE_ORTHOGONAL` with rounded corners, avoids overlapping vertices, and allows unattached edges.
- `grid`: Defined as 50x50 units.
- `lasso`: Enabled for group selection.

#### Stylesheets

For the VisuallyJS components to render correctly, the following stylesheets must be included in the project (usually in `styles.css`):

```css
@import "@visuallyjs/browser-ui/css/visuallyjs.css";
@import "@visuallyjs/browser-ui-angular/css/visuallyjs-angular.css";
```
