/*******************************************************************************
 * Copyright (C) 2018 Eclipse Foundation
 * 
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 * 
 * SPDX-License-Identifier: EPL-2.0
 ******************************************************************************/
package org.ecoviz.rest;

import java.io.IOException;
import java.util.List;

import javax.annotation.security.RolesAllowed;
import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.eclipse.microprofile.openapi.annotations.parameters.RequestBody;
import org.ecoviz.domain.Address;
import org.ecoviz.domain.Organization;
import org.ecoviz.domain.dto.OrganizationDto;
import org.ecoviz.services.MemberService;

@Path("/members")
@RequestScoped
public class MemberResource {

    @Inject
    private MemberService memberService;

    @POST
    @Path("/organizations")
    @RolesAllowed({"admin"})
    @Consumes({MediaType.APPLICATION_JSON})
    @Produces({MediaType.TEXT_PLAIN})
    public void createOrganization(OrganizationDto member) {
        memberService.createOrganization(member);
    }

    @GET
    @Path("/organizations")
    @Produces({MediaType.APPLICATION_JSON})
    public List<Organization> findOrganizations() {
        return memberService.findOrganizations();
    }

    @POST
    @Path("/organizations/import")
    @RolesAllowed({"admin"})
    @Consumes({MediaType.TEXT_PLAIN})
    public void importOrganizations(@RequestBody String data) throws IOException {
        memberService.importOrganizations(data);
    }

    @POST
    @Path("/organizations/{organizationId}/merge")
    @RolesAllowed({"admin"})
    @Consumes({MediaType.TEXT_PLAIN})
    public void mergeOrganizations(@PathParam("organizationId") String organizationId, @RequestBody String partnerId) {
        memberService.mergeOrganizations(organizationId, partnerId);
    }

    @PUT
    @Path("/organizations/{organizationId}")
    @RolesAllowed({"admin"})
    @Consumes({MediaType.APPLICATION_JSON})
    public void updateOrganization(@PathParam("organizationId") String organizationId, @RequestBody Organization organization) {
        memberService.updateOrganization(organizationId, organization);
    }

    @PUT
    @Path("/organizations/{organizationId}/addresses/{index}")
    @RolesAllowed({"admin"})
    @Consumes({MediaType.APPLICATION_JSON})
    public void updateOrganizationAddress(@PathParam("organizationId") String organizationId, @PathParam("index") Integer index,
                                          @RequestBody Address organization) {
        memberService.updateOrganizationAddress(organizationId, index, organization);
    }

    @Path("/organizations/{organizationId}")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public Organization getOrganization(@PathParam("organizationId") String id) {
        return memberService.findOrganizationById(id);
    }

    @DELETE
    @Path("/organizations/{organizationId}")
    @RolesAllowed({"admin"})
    @Produces({MediaType.TEXT_PLAIN})
    public void deleteOrganization(@PathParam("organizationId") String id) {
        memberService.deleteOrganization(id);
    }
    
}
