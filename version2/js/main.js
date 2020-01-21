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
            let posArr = [];
            // let usedNumArr = [];
            while (i < number + 1) {
                posArr.push(`<div class="tile-container" id='tile-container-${i}'><div class="tile" id='tile-${i}' draggable="true">${i}</div></div>`);
                $('#wrapper').append(`<div class="tile-container" id='tile-container-${i}'><div class="tile" id='tile-${i}' draggable="true">${i}</div></div>`);
                i++
            };
            // let j = 0
            // while (j < posArr.length) {
            //     let randomNumber = Math.ceil(Math.random() * number -1);
            //     while (usedNumArr.includes(randomNumber)) {
            //         randomNumber = Math.ceil(Math.random() * number -1);
            //     }
            //     $('#wrapper').append(posArr[randomNumber]);
            //     usedNumArr.push(randomNumber);
            //     j++
            // };
            //test
            // setTimeout(function () {
            //     console.log(`In timeout`);
            //     let i = 1;
            //     let posArr = [];
            //     let number = 9;
            //     let usedNumArr = [];
            //     while (i < number + 1) {
            //         posArr.push(`<div class="tile-container" id='tile-container-${i}'><div class="tile" id='tile-${i}' draggable="true">${i}</div></div>`);
            //         // $('#wrapper').append(`<div class="tile-container" id='tile-container-${i}'><div class="tile" id='tile-${i}' draggable="true">${i}</div></div>`);
            //         i++
            //         console.log(`In timeout while i`);
            //         console.log(posArr);
            //     };
            //     i = 0
            //     let j = 1;
            //     while (i < posArr.length) {
            //         let randomNumber = Math.ceil(Math.random() * number - 1);
            //         while (usedNumArr.includes(randomNumber)) {
            //             randomNumber = Math.ceil(Math.random() * number -1);
            //         }
            //         // console.log($(`#tile-container-${j}`).children())
            //         $(`#tile-container-${j}`).children().remove();
            //         $(`#tile-container-${j}`).html(posArr[randomNumber]);
            //         usedNumArr.push(randomNumber);
            //         j++;
            //         i++;
            //         console.log(`In timeout while j`);
            //         console.log(usedNumArr);
            //     };
            // }, 3000);


        };
        // const generatePuzzle = (number) => {
        //     console.log(`In generate puzzle.`)
        //     let i = 1;
        //     let posArr = [];
        //     let usedNumArr = [];
        //     while (i < number + 1) {
        //         posArr.push(`<div class="tile-container" id='tile-container-${i}'><div class="tile" id='tile-${i}' draggable="true">${i}</div></div>`);
        //         // $('#wrapper').append(`<div class="tile-container" id='tile-container-${i}'><div class="tile" id='tile-${i}' draggable="true">${i}</div></div>`);
        //         i++
        //     };
        //     let j = 0
        //     while (j < posArr.length) {
        //         let randomNumber = Math.ceil(Math.random() * number -1);
        //         while (usedNumArr.includes(randomNumber)) {
        //             randomNumber = Math.ceil(Math.random() * number -1);
        //         }
        //         $(`#tile-container-${i}`).html(posArr[randomNumber]);
        //         usedNumArr.push(randomNumber);
        //         j++
        //     };
        // };
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
                        console.log(`If ${i}`);
                    } else {
                        puzzleCompletion[`cont${i}`]= false;
                        console.log(`Else ${i}`);
                    };
                });
                console.log(puzzleCompletion);
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
        //





        //colors
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
            console.log("drag start");
            dragTileId = $(this).attr('id');
            dragTileContainerId = $(this).parent().attr('id');
            console.log(dragTileId)
            console.log(dragTileContainerId);
        };

        const dragEnd = function () {

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

        const dragDrop = function (e) {
            console.log(`This was drop target ${$(this).attr('id')}`);
            let swap = $(this).children().attr('id');
            let stash = $(`#${swap}`);
            console.log(`This was swapped: ${swap}`);
            $(this).html($(`#${dragTileId}`));
            $(`#${dragTileContainerId}`).html(stash);
            tile.on('dragstart', dragStart);
            checkPuzzle();
        };

        //containers listeners
        tileContainer.on('dragover', dragOver);
        tileContainer.on('dragenter', dragEnter);
        tileContainer.on('dragleave', dragLeave);
        tileContainer.on('drop', dragDrop);

        //tile listeners

        tile.on('dragstart', dragStart);
        tile.on('dragend', dragEnd);
        $('#wrapper').append(`<button type="button" id="generate-puzzle-button">Generate Puzzle</button>`);
        // $('#generate-puzzle-button').click(generatePuzzle(9));


    });
})();