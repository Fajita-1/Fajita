export default class Cell {
    constructor(puzzle, ind) {
        //doing this to puzzle allows it to be global scope (outside of this block so i can use it in createDiv()
        this.puzzle = puzzle;
        this.index = ind
        //
        this.el = this.createDiv();
        puzzle.el.appendChild(this.el);
    }

    createDiv() {
        const div = document.createElement('div');
        div.style.backgroundImmage = `url(${this.puzzle.imageSrc})`;
        div.style.position = 'absolute';
        let blockWidth = this.puzzle.width / this.puzzle.dimension;
        div.style.width = `${blockWidth}px`;
        let blockHeight = this.puzzle.width / this.puzzle.dimension;
        div.style.height = `${blockHeight}px`;
        const left = blockWidth * (this.index % this.puzzle.dimension);
        const top = blockHeight * Math.floor((this.index / this.puzzle.dimension));


        div.style.left = `${left}px`;
        div.style.top = `${top}px`;
        return div;
    }
}