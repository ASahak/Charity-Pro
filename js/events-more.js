function Events_More(){
    this.__functions.call(this);
}
Events_More.prototype = {
    __functions:function(){
        this.__addEvent();    
        this.__datePicker();    
    },
    __addEvent:()=>{
        document.querySelector('.addWorkButton').addEventListener("click", (e)=>{
            document.querySelector('.addWorkWrap').style.display = (document.querySelector('.addWorkWrap').style.display) ==  "block"?"none":"block"
        })
    },
    __datePicker:()=>{
        // Datepicker
        jQuery(document).ready(function ($) {
            var getField = function (id) {
                var el = $('#' + id + '-select');
                return el.length ? el : null;
            };

            var pickerSetup = function (id, date) {
                var el = getField(id);
                if (el) {
                    var checkin = id === 'checkin';
                    el.datepicker({
                        altField: el.get(0).form[id],
                        altFormat: 'yy-mm-dd',
                        dateFormat: 'dd/mm/yy',
                        onSelect: function () {
                            if (checkin && getField('checkout') !== null) {
                                var constraint = new Date(el.datepicker('getDate'));
                                constraint.setDate(constraint.getDate() + 1);
                                getField('checkout').datepicker("option", 'minDate', constraint);
                            }
                        },
                        numberOfMonths: 1,
                        mandatory: true,
                        firstDay: 1,
                        minDate: checkin ? 0 : 1,
                        maxDate: '+2y'
                        //changeMonth: true,
                        //changeYear: true,
                        //showOtherMonths: true,
                        //selectOtherMonths: true
                    });
                    el.datepicker("setDate", date);
                }
            };
            pickerSetup("checkin", "+0");
            pickerSetup("checkout", "+1");
        });
        $(function () {
            $("#checkin-select").datepicker();
            $("#checkin-select2").datepicker();
        });

    // Datepicker
    }
    
    
}
let Events_MoreClass = new Events_More();