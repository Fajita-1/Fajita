export default class PicturePuzzle {
    constructor(el, imageSrc, width){
        this.parentEl = el;
        this.dimension = 3
        this.imageSrc = imageSrc;
        this.width = width;
        this.cells = [];

        this.el = this.createWrapper();
        this.init();
        //image info
        const img = new Image();
        img.onload = () => {
            console.log(img.width, img.height)
            /**
             * this.height          img.height
             * -----------    =     ----------
             * this.width           img.width
             *
             */
            //solve for height using ole algebra. thanks middle school.
            this.height = img.height * this.width / img.width
            //
            //based on that info set the size of the divs
            this.el.style.width = `${this.width}px`;
            this.el.style.height = `${this.height}px`;

        };
        img.src = this.imageSrc
        //

    }
    init() {
        this.el = this.createWrapper();
        this.parentEl.appendChild(this.el);
    }

    createWrapper() {
        const div = document.createElement('div');
        return div
    }
    setup() {


        for (let i = 0; i < this.dimension * this.dimension -1; i++) {
            this.ceils.push(new Cell(this, i);
        }
    }
}