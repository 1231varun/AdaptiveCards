import { IPoint } from "./miscellaneous";

export class Splitter {
    private _isVertical: boolean = false;
    private _isAttachedAfter: boolean = false;
    private _sizedELement: HTMLElement;
    private _isPointerDown: boolean;
    private _lastClickedOffset: IPoint;

    private processNewSize(newSize: number): string {
        return this.onProcessNewSize ?  this.onProcessNewSize(this, newSize) : newSize + "px";
    }

    private pointerDown(e: PointerEvent) {
        e.preventDefault();

        this.attachedTo.setPointerCapture(e.pointerId);

        this._lastClickedOffset = { x: e.x, y: e.y };

        this._isPointerDown = true;
    }

    private pointerMove(e: PointerEvent) {
        if (this._isPointerDown) {
            e.preventDefault();

            let sizeApplied = false;
            let newSize: number;

            if (this._isVertical) {
                if (this._isAttachedAfter) {
                    newSize = this._sizedELement.getBoundingClientRect().width - (this._lastClickedOffset.x - e.x);
                }
                else {
                    newSize = this._sizedELement.getBoundingClientRect().width - (e.x - this._lastClickedOffset.x);
                }

                if (newSize >= this.minimum) {
                    this._sizedELement.style.width = this.processNewSize(newSize);

                    sizeApplied = true;
                }
            }
            else {
                if (this._isAttachedAfter) {
                    newSize = this._sizedELement.getBoundingClientRect().height - (this._lastClickedOffset.y - e.y);
                }
                else {
                    newSize = this._sizedELement.getBoundingClientRect().height - (e.y - this._lastClickedOffset.y);
                }

                if (newSize >= this.minimum) {
                    this._sizedELement.style.height = this.processNewSize(newSize);

                    sizeApplied = true;
                }
            }

            if (sizeApplied) {
                if (this.onResized) {
                    this.onResized(this);
                }

                this._lastClickedOffset = { x: e.x, y: e.y };
            }
        }
    }

    private pointerUp(e: PointerEvent) {
        e.preventDefault();

        this.attachedTo.releasePointerCapture(e.pointerId);

        this._isPointerDown = false;
    }

    onProcessNewSize: (sender: Splitter, newSize: number) => string;
    onResized: (sender: Splitter) => void;

    readonly attachedTo: HTMLElement;

    minimum: number = 50;

    constructor(
        attachedTo: HTMLElement,
        sizedElement: HTMLElement,
        isVertical: boolean = false,
        isAttachedAfter: boolean = false,
        minimumSize: number = 140) {
        this.attachedTo = attachedTo;
        this._sizedELement = sizedElement;
        this._isVertical = isVertical;
        this._isAttachedAfter = isAttachedAfter;
        this.minimum = minimumSize;

        this.attachedTo.onmousedown = (e: MouseEvent) => {e.preventDefault(); };
        this.attachedTo.onpointerdown = (e: PointerEvent) => { this.pointerDown(e); };
        this.attachedTo.onpointermove = (e: PointerEvent) => { this.pointerMove(e); };
        this.attachedTo.onpointerup = (e: PointerEvent) => { this.pointerUp(e); };
    }
}