export default class Cell {
    constructor(puzzle, ind) {
        //doing this to puzzle allows it to be global scope (outside of this block so i can use it in createDiv()
        this.puzzle = puzzle;
        //
        this.el = this.createDiv();
        puzzle.el.appendChild(this.el);
    }

    createDiv() {
        const div = document.createElement('div');
        div.style.backgroundImmage = `url(${this.puzzle.imageSrc})`;
        div.style.position = 'absolute';
        div.style.width = `${this.puzzle.width / this.puzzle.dimension}px`;
        div.style.height = `${this.puzzle.width / this.puzzle.dimension}px`;


        return div;
    }
}