import { Component, OnInit } from '@angular/core'
import { ChatService } from "../../services/chatService/chat.service";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


    constructor(private chatService: ChatService) {
        chatService.messages.subscribe();
    }

    ngOnInit(): void {

    }

    public message = {
        author: "",
        message: ""
    };

    sendMsg() {
        console.log("New Message: ", this.message);
        this.chatService.messages.next(this.message);
        this.message.message = "";
    }

}
