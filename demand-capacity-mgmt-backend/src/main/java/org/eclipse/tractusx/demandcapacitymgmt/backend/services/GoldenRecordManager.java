/*
 * ******************************************************************************
 * Copyright (c) 2023 BMW AG
 * Copyright (c) 2023, 2024 Contributors to the Eclipse Foundation
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Apache License, Version 2.0 which is available at
 * https://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 * *******************************************************************************
 */

package org.eclipse.tractusx.demandcapacitymgmt.backend.services;

import eclipse.tractusx.demandcapacitymgm.specification.model.AddressBookRequest;
import org.eclipse.tractusx.demandcapacitymgmt.backend.entities.AddressBookRecordEntity;

public interface GoldenRecordManager {
    AddressBookRecordEntity queryGoldenRecord(String recordQuery);

    AddressBookRecordEntity createRecord(AddressBookRequest addressBookRequest);
    AddressBookRecordEntity updateRecord(AddressBookRequest request, String id);
}
