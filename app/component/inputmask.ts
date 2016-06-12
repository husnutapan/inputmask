/**
 * Created by husnu on 12.06.2016.
 */
import {Directive, AfterViewInit} from '@angular/core';
import {Input} from '@angular/core';

declare var jQuery:any;
declare var $:any;

@Directive({
    selector: '[pMask]',
})

export class Inputmask implements AfterViewInit {

    @Input() placeholder:any;

    @Input() time:any;

    @Input() date_time:any;

    @Input() cep:any;

    @Input() phone:any;

    @Input() money:any;

    @Input() ip_address:any;


    ngAfterViewInit():any {
        $(document).ready(function ($) {
            $('#placeholder').mask("00/00/0000", {placeholder: "__/__/____"});
            $('#time').mask('00:00:00');
            $('#date_time').mask('00/00/0000 00:00:00');
            $('#cep').mask('00000-000');
            $('#phone').mask('0000-0000');
            $('#ip_address').mask('099.099.099.099');
        });
    }

}