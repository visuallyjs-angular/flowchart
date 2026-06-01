import {Component} from '@angular/core';
import {
  FLOWCHART_SHAPES, BASIC_SHAPES,
  CONNECTOR_TYPE_ORTHOGONAL, FlowchartBasicEdgeMappings
} from "@visuallyjs/browser-ui"
import {VisuallyJsModule} from '@visuallyjs/browser-ui-angular';
import {FlowchartInspector} from './inspector';

@Component({
  selector: 'app-root',
  imports: [VisuallyJsModule, FlowchartInspector],
  templateUrl: './app.html'
})
export class App {

  options = {
    zoomToFit: true,
    shapes:[FLOWCHART_SHAPES, BASIC_SHAPES],
    edges: {
      avoidVertices: true,
      propertyMappings: FlowchartBasicEdgeMappings(),
      allowUnattached: true,
      connector: {
        type: CONNECTOR_TYPE_ORTHOGONAL,
        options: {
          cornerRadius: 10
        }
      },
      showLabels: true
    },
    cells: {
      rotationStops: 4,
    },
    grid: {
      size: {
        width: 50,
        height: 50
      }
    },
    lasso: true,
    beforeStartConnect: () => {
      return {markers: "targetArrow"}
    }
  }


}
