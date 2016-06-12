/**
 * Created by husnu on 11.06.2016.
 */
import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {InputText,Button,Dialog} from 'primeng/primeng';

declare var jQuery:any;
declare var $:any;

@Component({
    selector: 'my-mask',
    templateUrl:'app/component/inputmask/inputmask.html',
    directives:[InputText,Button,Dialog]
})

export class InputmaskComponent implements OnInit{
    displayDialog:boolean=false;
    placeholder:string;
    time:string;
    date_time:string;
    cep:string;
    phone:string;

    ngOnInit():any {
        $(document).ready(function ($) {
            $('#placeholder').mask("00/00/0000", {placeholder: "__/__/____"});
            $('#time').mask('00:00:00');
            $('#date_time').mask('00/00/0000 00:00:00');
            $('#cep').mask('00000-000');
            $('#phone').mask('0000-0000');
            $('#phone_with_ddd').mask('(00) 0000-0000');
            $('#phone_us').mask('(000) 000-0000');
            $('#mixed').mask('AAA 000-S0S');
            $('#cpf').mask('000.000.000-00', {reverse: true});
            $('#cnpj').mask('00.000.000/0000-00', {reverse: true});
            $('#money').mask('000.000.000.000.000,00', {reverse: true});
            $('#money2').mask("#.##0,00", {reverse: true});
            $('#ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
                translation: {
                    'Z': {
                        pattern: /[0-9]/, optional: true
                    }
                }
            });
            $('#ip_address').mask('099.099.099.099');
            $('#percent').mask('##0,00%', {reverse: true});
            $('#clear-if-not-match').mask("00/00/0000", {clearIfNotMatch: true});
            $('#placeholder').mask("00/00/0000", {placeholder: "__/__/____"});
            $('#fallback').mask("00r00r0000", {
                translation: {
                    'r': {
                        pattern: /[\/]/,
                        fallback: '/'
                    },
                    placeholder: "__/__/____"
                }
            });
            $('#selectonfocus').mask("00/00/0000", {selectOnFocus: true});
        });
    }

    onReset(){
        this.placeholder='';
        this.time='';
        this.date_time='';
        this.cep='';
        this.phone='';
    }


    onClick(){
        this.displayDialog=true;
    }

}