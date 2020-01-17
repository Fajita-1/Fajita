(() => {
    'use strict';
    $(document).ready(() => {
        const hex = () => {
            const vals = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
            let hexColor = ['#'];
            let i = 0;
            while (i <= 5) {
                hexColor.push(vals[Math.ceil(Math.random() * (vals.length))]);
                i++;
            }
            hexColor = hexColor.join('');
            return hexColor;
        };
        const createWrapper = () => {
            $('#title').parent().append(`<div id="wrapper"></div>`);
        };
        const makeTiles = (number) => {
            let i = 1;
            while (i < number + 1) {
                $('#wrapper').append(`<div class="tile"><div class="'number">${i}</div></div>`);
                i++
            };
        };
        createWrapper();
        makeTiles(9);
        $.each($('.tile'), function() {
            while ($(this).css('background-color') === 'rgba(0, 0, 0, 0)') {
                $(this).css('background-color', hex());
            }
        });


    });
})();