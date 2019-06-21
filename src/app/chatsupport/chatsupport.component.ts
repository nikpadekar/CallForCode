import { Component, OnInit } from "@angular/core";
import { HelpinghandService } from "../service/helpinghand.service";

@Component({
  selector: "app-chatsupport",
  templateUrl: "./chatsupport.component.html",
  styleUrls: ["./chatsupport.component.css"],
  host: {
    class: "w-full"
  }
})
export class ChatsupportComponent implements OnInit {
  object: any;
  constructor(private helpinghandservice: HelpinghandService) {}

  ngOnInit() {}

  getWatsonRes(message) {
    this.helpinghandservice.getWatsonResp(message).subscribe(res => {
      console.log(res);
    });
  }
}
