import { Component, OnInit } from '@angular/core';
import { JournalService } from 'services/journal.serv';
import { Observable} from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entrylist',
  templateUrl: './entrylist.component.html',
  styleUrls: ['./entrylist.component.css']
})
export class EntrylistComponent implements OnInit {
entries: Observable<Array<object>>

  constructor(public journal: JournalService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.journal.getList().subscribe((entries) => {
      this.entries = entries;
    });
  }
}

