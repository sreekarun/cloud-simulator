import { AbstractResource } from './abstract-resource';

export class WebapiResource extends AbstractResource {
    constructor(resourceName: string) {
        const resourceMinimumInherentDelay = 0;
        const resourceMaximumInherentDelay = 10000;
        resourceName = `WebApi - ${ resourceName }`;
        super(resourceName, resourceMinimumInherentDelay, resourceMaximumInherentDelay );
    }
}
