import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { GridData, GridColumn, GridRowData } from 'src/app/shared/models/grid.model';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public isDataLoaded = false;
  public gridData: GridData;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAll().subscribe((result: User[]) => {

      this.gridData = {} as GridData;
      this.gridData.routeSuffix = 'detail';
      this.gridData.columns = [
        { columnType: 'Number', displayName: 'ID', name: 'id', isHidden: false, orderNum: 0 },
        { columnType: 'Text', displayName: 'Full Name', name: 'displayName', isHidden: false, orderNum: 1 },
        { columnType: 'Text', displayName: 'Username', name: 'username', isHidden: false, orderNum: 2 }
      ] as GridColumn[];

      this.gridData.dataset = [] as GridRowData[];

      result.forEach(element => {
        this.gridData.dataset.push(
          {
            values: [
              element.id,
              element.displayName,
              element.username
            ]
          }
        );
      });

      this.isDataLoaded = true;
    });
  }

}
