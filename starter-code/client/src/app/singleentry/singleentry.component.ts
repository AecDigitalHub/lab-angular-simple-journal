import { Component, OnInit } from '@angular/core';
import { JournalService } from 'services/journal.serv';
import { ActivatedRoute } from '@angular/router';
import { Observable} from 'rxjs';


@Component({
  selector: 'app-singleentry',
  templateUrl: './singleentry.component.html',
  styleUrls: ['./singleentry.component.css']
})
export class SingleentryComponent implements OnInit {

entryId: String;
entry: Observable <any>;

  constructor(public journal: JournalService, private route: ActivatedRoute) { }

    
      ngOnInit() {
        this.route.params
          .subscribe((params) => {
            this.entryId = params['id'],
            this.journal.get(this.entryId).subscribe(res=>this.entry=res)
        
          });
  }
}

