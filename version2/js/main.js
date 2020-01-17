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
                $('#wrapper').append(`<div class="tile-container" id='tile-container-${i}'><div class="tile" id='tile-${i}' draggable="true">${i}</div></div>`);
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

        const tile = $('.tile');
        const tileContainer = $('.tile-container');

        //drag functions
        let dragTileId;
        let dragTileContainerId;
        const dragStart = function () {
            $(this).addClass('hold');
            dragTileId = $(this).attr('id');
            dragTileContainerId = $(this).parent().attr('id');
            console.log(dragTileContainerId);
            // let realThis = $(this);
            // setTimeout(function () {
            //     realThis.addClass('invisible');
            // }, 0);
        };

        const dragEnd = function () {
            console.log('dragend');
            // let realThis = $(this);
            // setTimeout(function () {
            //     realThis.removeClass('invisible');
            // }, 0);
        };

        const dragOver = function (e) {
            e.preventDefault();
        };

        const dragEnter = function (e) {
            e.preventDefault()
            // $(this).addClass('hover');
        };

        const dragLeave = function () {
            // $(this).removeClass('hover');
        };

        const dragDrop = function () {
            console.log($(this).attr('id'));
            let swap = $(this).children().attr('id');
            let stash = $(`#${swap}`);
            console.log(swap);
            $(this).html($(`#${dragTileId}`));
            $(`#${dragTileContainerId}`).html(stash);
        };

        //containers listeners
        tileContainer.on('dragover', dragOver);
        tileContainer.on('dragenter', dragEnter);
        tileContainer.on('dragleave', dragLeave);
        tileContainer.on('drop', dragDrop);

        //tile listeners

        tile.on('dragstart', dragStart);
        tile.on('dragend', dragEnd);





    });
})();