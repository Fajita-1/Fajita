(() => {
    'use strict';
    $(document).ready(() => {
        let dragTileId;
        let dragTileContainerId;

        const dragStart = function () {
            console.log("drag start");
            dragTileId = $(this).attr('id');
            dragTileContainerId = $(this).parent().attr('id');
            console.log(dragTileId);
            console.log(dragTileContainerId);
        };

        const dragOver = function (e) {
            e.preventDefault();
        };
        //
        const dragEnter = function (e) {
            e.preventDefault()
        };

        const dragDrop = function (e) {
            console.log(`This was drop target ${$(this).attr('id')}`);
            let swap = $(this).children().attr('id');
            let stash = $(`#${swap}`);
            console.log(`This was swapped: ${swap}`);
            $(this).html($(`#${dragTileId}`));
            $(`#${dragTileContainerId}`).html(stash);
            //reattach listeners
            $(this).off();
            $(this).children().off();
            $(this).on('dragover', dragOver);
            $(this).on('dragenter', dragEnter);
            $(this).on('drop', dragDrop);
            $(this).children().on('dragstart', dragStart);
            //reattach 2nd half
            $(`#${dragTileContainerId}`).off();
            $(`#${dragTileContainerId}`).children().off();
            $(`#${dragTileContainerId}`).on('dragover', dragOver);
            $(`#${dragTileContainerId}`).on('dragenter', dragEnter);
            $(`#${dragTileContainerId}`).on('drop', dragDrop);
            $(`#${dragTileContainerId}`).children().on('dragstart', dragStart);
            checkPuzzle();
        };
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
            let posArr = [];
            // let usedNumArr = [];
            while (i < number + 1) {
                posArr.push(`<div class="tile-container" id="tile-container-${i}"><div class="tile" id="tile-${i}" draggable="true">${i}</div></div>`);
                $('#wrapper').append(`<div class="tile-container" id="tile-container-${i}"><div class="tile" id="tile-${i}" draggable="true">${i}</div></div>`);
                i++
            };
        };
        const generatePuzzle = (number) => {
            let i = 1;
            let posArr = [];
            let usedNumArr = [];
            while (i < number + 1) {
                posArr.push(`<div class="tile" id="tile-${i}" draggable="true">${i}</div>`);
                i++
            };
            i = 1;
            let j = 0;
            while (j < posArr.length) {
                let randomNumber = Math.floor(Math.random() * number);
                while (usedNumArr.includes(randomNumber)) {
                    randomNumber = Math.floor(Math.random() * number);
                };
                $(`#tile-container-${i}`).html(posArr[randomNumber]);
                $(`#tile-container-${i}`).on('dragover', dragOver);
                $(`#tile-container-${i}`).on('dragenter', dragEnter);
                $(`#tile-container-${i}`).on('drop', dragDrop);
                $(`#tile-container-${i}`).children().on('dragstart', dragStart);
                usedNumArr.push(randomNumber);
                j++;
                i++;
            };
        };
        //checks to see if puzzle is in proper places
        const checkPuzzle = () => {
            setTimeout(function() {
                let puzzleCompletion = {
                    'cont1': false,
                    'cont2': false,
                    'cont3': false,
                    'cont4': false,
                    'cont5': false,
                    'cont6': false,
                    'cont7': false,
                    'cont8': false,
                    'cont9': false
                };
                $('.tile-container').each(function(i) {
                    i++
                    console.log(`tile-container number: ${i}`)
                    if ($(`#tile-container-${i}`).children().attr('id') === `tile-${i}`) {
                        puzzleCompletion[`cont${i}`]= true;
                    } else {
                        puzzleCompletion[`cont${i}`]= false;
                    };
                });
                if (puzzleCompletion['cont1']) {
                    if (puzzleCompletion['cont2']) {
                        if (puzzleCompletion['cont3']) {
                            if (puzzleCompletion['cont4']) {
                                if (puzzleCompletion['cont5']) {
                                    if (puzzleCompletion['cont6']) {
                                        if (puzzleCompletion['cont7']) {
                                            if (puzzleCompletion['cont8']) {
                                                if (puzzleCompletion['cont9']) {
                                                    alert('You have won!')
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }, 0)
        };
        //runs the app
        createWrapper();
        makeTiles(9);
        //end runs the app
        //colors
        $.each($('.tile'), function() {
            while ($(this).css('background-color') === 'rgba(0, 0, 0, 0)') {
                $(this).css('background-color', hex());
            }
        });
        //end colors
        //add button and attach listener
        $('#wrapper').append(`<button type="button" id="generate-puzzle-button">Generate Puzzle</button>`);
        $('#generate-puzzle-button').click(function() {
            generatePuzzle(9);
        });
        //end add button and attach listener

    });
})();