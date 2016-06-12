import {Component} from '@angular/core';
import {ElementRef} from '@angular/core';
import {OnInit} from '@angular/core';

declare var jQuery:any;

@Component({
    selector: 'my-jquery',
    template:`
        <button>Click me</button>
    `
})

export class jQueryComponent implements OnInit{

    constructor(private _elRef:ElementRef){}


    ngOnInit():any {
        jQuery(this._elRef.nativeElement).find('button').on('click',function () {
            alert('This is work');
        })
    }

}