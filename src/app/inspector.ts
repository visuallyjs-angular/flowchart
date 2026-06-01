import {InspectorComponent, VisuallyJsModule} from '@visuallyjs/browser-ui-angular';
import {Component} from '@angular/core';
import {LINE_WIDTHS} from './constants';

@Component({
  selector:"flowchart-inspector",
  imports:[VisuallyJsModule],
  template:`<div>

    @if(currentObjectType === "Node") {
      <div class="vjs-inspector-section">
        <div>Label</div>
        <input type="text" vjs-att="label" vjs-focus="true"/>
      </div>

      <div class="vjs-inspector-section">
        <div>Fill Color</div>
        <vjs-color propertyName="fill"/>
      </div>

      <div class="vjs-inspector-section">
        <div>Text Color</div>
        <vjs-color propertyName="color"/>
      </div>

      <div class="vjs-inspector-section">
        <div>Outline Color</div>
        <vjs-color propertyName="outline"/>
      </div>

      <div class="vjs-inspector-section">
        <div>Outline width</div>
        <select vjs-att={PROPERTY_OUTLINE_WIDTH} vjs-datatype="integer">
          @for(lw of this.lineWidths; track lw) {
            <option [value]="lw">{{lw}}</option>
          }
        </select>
      </div>
    }

    @if(currentObjectType === "Edge") {
      <div class="vjs-inspector-section">
        <div>Label</div>
        <input type="text" vjs-att="label"/>
      </div>
      <div class="vjs-inspector-section">
        <div>Line style</div>
        <vjs-edge-type propertyName="lineStyle"/>
      </div>
      <div class="vjs-inspector-section">
        <div>Markers</div>
        <vjs-edge-type propertyName="markers"/>
      </div>
      <div class="vjs-inspector-section">
        <div>Line width</div>
        <select vjs-att="lineWidth" vjs-datatype="integer">
          @for(lw of this.lineWidths; track lw) {
            <option [value]="lw">{{lw}}</option>
          }
        </select>
      </div>
    }
  </div>`
})
export class FlowchartInspector extends InspectorComponent {

  lineWidths = LINE_WIDTHS
}
