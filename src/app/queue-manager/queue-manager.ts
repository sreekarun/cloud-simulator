import { Observable } from 'rxjs';
import { QueueSubscription } from './queue-subscription';

export class QueueManager {
    private subscriptions: Array<QueueSubscription>;

    public subscribeToTopic(subscriptionTopic: string, payload: any) {
        const subscriptionEntry = new QueueSubscription(
            123,
            payload.subcriberName,
            subscriptionTopic
        );

        this.subscriptions.push(subscriptionEntry);
    }

    public publishMessageForTopic( topic: string, message: any ) {

    }
}
