/*
 *  *******************************************************************************
 *  Copyright (c) 2023 BMW AG
 *  Copyright (c) 2023 Contributors to the Eclipse Foundation
 *
 *    See the NOTICE file(s) distributed with this work for additional
 *    information regarding copyright ownership.
 *
 *    This program and the accompanying materials are made available under the
 *    terms of the Apache License, Version 2.0 which is available at
 *    https://www.apache.org/licenses/LICENSE-2.0.
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 *    WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 *    License for the specific language governing permissions and limitations
 *    under the License.
 *
 *    SPDX-License-Identifier: Apache-2.0
 *    ********************************************************************************
 */

package org.eclipse.tractusx.demandcapacitymgmt.demandcapacitymgmtbackend.controllers;

import eclipse.tractusx.demand_capacity_mgmt_specification.api.CompanyApi;
import eclipse.tractusx.demand_capacity_mgmt_specification.model.CompanyDto;
import java.util.List;
import java.util.UUID;
import lombok.AllArgsConstructor;
import org.eclipse.tractusx.demandcapacitymgmt.demandcapacitymgmtbackend.services.CompanyService;
import org.eclipse.tractusx.demandcapacitymgmt.demandcapacitymgmtbackend.utils.UserUtil;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class CompanyController implements CompanyApi {

    private final CompanyService companyService;

    @Override
    public ResponseEntity<Void> deleteCompanyById(String companyId) throws Exception {
        companyService.deleteCompany(UUID.fromString(companyId));
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @Override
    public ResponseEntity<List<CompanyDto>> getCompany() throws Exception {
        List<CompanyDto> companyDtoList = companyService.getAllCompany();
        return ResponseEntity.status(HttpStatus.OK).body(companyDtoList);
    }

    @Override
    public ResponseEntity<List<CompanyDto>> getTopCompanies() throws Exception {
        List<CompanyDto> companyDtoList = companyService.getTopCompanies();
        return ResponseEntity.status(HttpStatus.OK).body(companyDtoList);
    }

    @Override
    public ResponseEntity<CompanyDto> postCompany(CompanyDto companyDto) throws Exception {
        CompanyDto company = companyService.createCompany(companyDto);
        return ResponseEntity.status(HttpStatus.OK).body(company);
    }
}
