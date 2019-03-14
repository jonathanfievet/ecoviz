/*******************************************************************************
 * Copyright (C) 2018 Eclipse Foundation
 * 
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 * 
 * SPDX-License-Identifier: EPL-2.0
 ******************************************************************************/
import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";

import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';
import {OrganizationService} from "../../../services/organization-service";
import {Organization} from "../../../models/organization";

@Component({
  selector: 'organization-list',
  styleUrls: [ './organization-list.component.scss' ],
  templateUrl: './organization-list.component.html'
})
export class OrganizationListComponent implements OnInit {

  public organizations: Organization[];
  public displayedColumns = ['name', 'locations', 'tags', 'options']

  constructor(private router: Router, private organizationService: OrganizationService, private dialog: MatDialog) {}

  ngOnInit() {
    this.organizationService.getOrganizations().then(organizations => {
      console.log(organizations)
      this.organizations = organizations
    });
  }

  deleteOrganization(organization: Organization) {
    const dialogRef = this.dialog.open(ConfirmDeleteOrganizationModalComponent, {width: '250px', data: organization});

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("delete")
      }
    });
  }
}

@Component({
  selector: 'confirm-delete-organization-modal-component',
  template:
    '<div mat-dialog-content>' +
    '  <p>Are you sure tou want to delete the "{{ organization.name }}" organization ?</p>' +
    '</div>' +
    '<div mat-dialog-actions>' +
    '  <button mat-button (click)="onNoClick()">No</button>' +
    '  <button mat-button [mat-dialog-close]="true" cdkFocusInitial>Yes</button>' +
    '</div>',
})
export class ConfirmDeleteOrganizationModalComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDeleteOrganizationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public organization: Organization) {}

  onNoClick(): void { this.dialogRef.close(); }
}
