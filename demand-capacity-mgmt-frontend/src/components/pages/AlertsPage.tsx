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

import React, { useContext, useEffect, useState } from "react";
import { FcHighPriority } from "react-icons/fc";
import {LoadingCustomMessage, LoadingMessage} from "../common/LoadingMessages";
import RulesModal from "../alerts/RulesModal";
import TriggeredAlertsTable from "../alerts/TriggeredAlertsTable";
import  {AlertsContext} from "../../contexts/AlertsContextProvider";


function AlertsPage() {
    const [loading, setLoading] = useState(false);
    const [showRulesModal, setShowRulesModal] = useState(false);
    const {triggeredAlerts, fetchTriggeredAlertsWithRetry } = useContext(AlertsContext)!;

    const openRulesModalClick = () => {
        setShowRulesModal(true);
    };
    const hideRulesModal = () => {
        setShowRulesModal(false);
    };

    useEffect(() => {
        fetchTriggeredAlertsWithRetry();
    }, []);

    if (loading) {
        return <LoadingMessage />; // Show loading spinner when data is loading
    }
    return (
        <>
            <br />
            <div className="container-xl">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <FcHighPriority size={35} />
                        <h3 className="icon-text-padding">Alerts</h3>
                    </div>
                    <RulesModal showRulesModal={showRulesModal} hideRulesModal={hideRulesModal}/>
                    <button className="rules-button" onClick={openRulesModalClick}>Rules</button>
                </div>
                <div className="table">
                    <div className="table-wrapper">
                        <TriggeredAlertsTable triggeredAlerts={triggeredAlerts} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AlertsPage;