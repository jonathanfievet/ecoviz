/*******************************************************************************
 * Copyright (C) 2018 Eclipse Foundation
 * 
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 * 
 * SPDX-License-Identifier: EPL-2.0
 ******************************************************************************/
import {Component, OnInit} from '@angular/core';

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

  constructor(private router: Router, private organizationService: OrganizationService) {}

  public ngOnInit() {
    this.organizationService.getOrganizations().then(organizations => {
      console.log(organizations)
      this.organizations = organizations
    });
  }

}
