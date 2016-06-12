import {Component} from '@angular/core';
import {InputmaskComponent} from "./component/inputmask/inputmaskComponent";
@Component({
    selector: 'my-app',
    template:`
        <my-mask></my-mask>
    `,
    directives:[InputmaskComponent]

})
export class AppComponent {

}
