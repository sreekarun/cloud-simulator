import { Subject, from, Observable } from 'rxjs';

export abstract class AbstractResource {

    private requestPool = [];
    private $requestPool = new Subject();

    constructor(
        private resourceName,
        private resourceMinimumInherentDelay,
        private resourceMaximumInherentDelay
    ) {
        console.log(`Starting ${ this.resourceName }`);
        this.$requestPool.subscribe(val => {
            console.log(val);
            console.log(this.requestPool.length);
        });
    }

    public  acceptRequest(request: string) {
        setTimeout(() => {
            this.requestPool.push(request);
            this.$requestPool.next(request);
        }, this.randomizeWithInRange(this.resourceMinimumInherentDelay, this.resourceMaximumInherentDelay));
    }

    private randomizeWithInRange( min: number, max: number ): number {
        return min + ( Math.random() * ( max - min ) );
    }
}
