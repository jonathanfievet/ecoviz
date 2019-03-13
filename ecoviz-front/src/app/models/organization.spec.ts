/*******************************************************************************
 * Copyright (C) 2018 Eclipse Foundation
 * 
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 * 
 * SPDX-License-Identifier: EPL-2.0
 ******************************************************************************/
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  inject,
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';

/**
 * Load the implementations that should be tested
 */
import { AppComponent } from './app.component';
import { AppState } from './app.service';
import {Organization} from "./organization";

describe(`Organization`, () => {

  const organizationJson = JSON.parse("{\"description\":\"Une compagnie aérienne\",\"id\":\"5c8910d9e532c804ebe732e1\",\"locations\":[{\"city\":\"Toulouse\",\"country\":\"France\",\"latitude\":43.6,\"longitude\":1.433333,\"street\":\"3 rue des arbres\",\"zipCode\":\"3100\"}],\"name\":\"Air France\",\"tags\":[{\"id\":\"ecoviz:tag:1\",\"name\":\"Compagnie aérienne\"},{\"id\":\"ecoviz:country:FR\",\"name\":\"FR\"}]}")
  const organization = Organization.fromApi(organizationJson)

  it('#getLocationsAsString should display the complete location as string', () => {
    expect(organization.getLocationsAsString()).toBe('3 rue des arbres 3100 Toulouse France');
  });

  it('#getTagsAsString should display the complete tags as string', () => {
    expect(organization.getTagsAsString()).toBe('Compagnie aérienne, FR');
  });


});
