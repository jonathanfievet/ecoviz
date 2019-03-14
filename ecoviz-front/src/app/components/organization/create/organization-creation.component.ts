/*******************************************************************************
 * Copyright (C) 2018 Eclipse Foundation
 * 
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 * 
 * SPDX-License-Identifier: EPL-2.0
 ******************************************************************************/
import {
    Component,
    OnInit
  } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';
import { TagService } from '../../../services/tag-service';
import { Observable } from 'rxjs';

  @Component({
    selector: 'organization-creation',
    styleUrls: [ './organization-creation.component.scss' ],
    templateUrl: './organization-creation.component.html'
  })
  export class OrganizationCreationComponent implements OnInit {

    public tags: any[];
    public organizationForm: FormGroup;

    constructor(
        private router: Router,
        private tagService: TagService
    ) {
      this.organizationForm = new FormGroup({
        name: new FormControl(),
        description: new FormControl(),
        street: new FormControl(),
        city: new FormControl(),
        zip_code: new FormControl(),
        country: new FormControl(),
        longitude: new FormControl(),
        latitude: new FormControl(),
        tagsSelect: new FormControl()
      });
    }

    public ngOnInit() {
      this.tagService.getTags().then(tags => {
        console.log(tags);
        this.tags = tags;
      });
    }

}
