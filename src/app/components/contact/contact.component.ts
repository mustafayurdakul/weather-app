import { Component, OnInit } from '@angular/core'
import { webSocket } from "rxjs/webSocket";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    message = "hello"
    subject = webSocket("");

    constructor() {

    }

    ngOnInit(): void {

    }

    sendToServer($event) {
        this.subject.subscribe(
            msg => console.log('message received: ' + msg), // Called whenever there is a message from the server.
            err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
            () => console.log('complete') // Called when connection is closed (for whatever reason).
        )
        this.subject.next(this.message)
        this.subject.complete()
    }

}
