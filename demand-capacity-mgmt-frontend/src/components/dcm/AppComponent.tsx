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

import React from 'react';
import { Route, Routes } from "react-router-dom";
import AddressBookProvider from '../../contexts/AdressBookContextProvider';
import AlertsContextProvider from "../../contexts/AlertsContextProvider";
import CapacityGroupsProvider from '../../contexts/CapacityGroupsContextProvider';
import CompanyContextProvider from '../../contexts/CompanyContextProvider';
import DemandCategoryContextProvider from '../../contexts/DemandCategoryProvider';
import DemandContextProvider from '../../contexts/DemandContextProvider';
import EventsContextProvider from '../../contexts/EventsContextProvider';
import FavoritesContextProvider from "../../contexts/FavoritesContextProvider";
import ThresholdContextProvider from '../../contexts/ThresholdsContextProvider';
import UnitsofMeasureContextContextProvider from '../../contexts/UnitsOfMeasureContextProvider';
import YearlyReportContextProvider from '../../contexts/YearlyReportContextProvider';
import AuthenticatedRoute from "../../util/AuthenticatedRoute";
import AdminPage from '../pages/AdminPage';
import AddressBookPage from '../pages/AdressBookPage';
import AlertsPage from '../pages/AlertsPage';
import AuthenticationComponent from '../pages/AuthenticationPage';
import CapacityGroupDetailsPage from "../pages/CapacityGroupDetailsPage";
import Home from "../pages/CapacityGroupPage";
import DownStatusPage from '../pages/DownStatusPage';
import ErrorPage from '../pages/ErrorPage';
import EventsPage from "../pages/EventsPage";
import FavoritesPage from "../pages/FavoritesPage";
import TodoListPage from '../pages/TodoListPage';
import UpStatusPage from '../pages/UpStatusPage';
import Layout from './Layout';
import ToastContainerComponent from './ToastContainerComponent';


const AppComponent: React.FC = () => {
    return (
        <Routes>
            <Route path="/login" element={<ToastContainerComponent><AuthenticationComponent /></ToastContainerComponent>} />
            <Route path="*" element={<ToastContainerComponent><ErrorPage /></ToastContainerComponent>} />

            <Route path="/" element={
                <AuthenticatedRoute>
                    <FavoritesContextProvider>
                        <DemandContextProvider>
                            <CompanyContextProvider>
                                <AddressBookProvider>
                                    <ToastContainerComponent>
                                        <Layout>
                                            <Home />
                                        </Layout>
                                    </ToastContainerComponent>
                                </AddressBookProvider>
                            </CompanyContextProvider>
                        </DemandContextProvider>
                    </FavoritesContextProvider>
                </AuthenticatedRoute>
            } />

            <Route path="/details/:id" element={
                <AuthenticatedRoute>
                    <FavoritesContextProvider>
                        <DemandContextProvider>
                            <ToastContainerComponent>
                                <CompanyContextProvider>
                                    <AddressBookProvider>
                                        <Layout>
                                            <CapacityGroupsProvider>
                                                <EventsContextProvider>
                                                    <DemandCategoryContextProvider>
                                                        <YearlyReportContextProvider>
                                                            <ThresholdContextProvider>
                                                                <CapacityGroupDetailsPage />
                                                            </ThresholdContextProvider>
                                                        </YearlyReportContextProvider>
                                                    </DemandCategoryContextProvider>
                                                </EventsContextProvider>
                                            </CapacityGroupsProvider>
                                        </Layout>
                                    </AddressBookProvider>
                                </CompanyContextProvider>
                            </ToastContainerComponent>
                        </DemandContextProvider>
                    </FavoritesContextProvider>
                </AuthenticatedRoute>
            } />
            <Route path="/alerts" element={
                <AuthenticatedRoute>
                    <FavoritesContextProvider>
                        <DemandContextProvider>
                            <CapacityGroupsProvider>
                                <CompanyContextProvider>
                                    <AddressBookProvider>
                                        <AlertsContextProvider>
                                            <ToastContainerComponent>
                                                <Layout>
                                                    <AlertsPage />
                                                </Layout>
                                            </ToastContainerComponent>
                                        </AlertsContextProvider>
                                    </AddressBookProvider>
                                </CompanyContextProvider>
                            </CapacityGroupsProvider>
                        </DemandContextProvider>
                    </FavoritesContextProvider>
                </AuthenticatedRoute>
            } />

            < Route path="/addressBook" element={
                < AuthenticatedRoute >
                    <FavoritesContextProvider>
                        <DemandContextProvider>
                            <CompanyContextProvider>
                                <AddressBookProvider>
                                    <ToastContainerComponent>
                                        <Layout>
                                            <AddressBookPage />
                                        </Layout>
                                    </ToastContainerComponent>
                                </AddressBookProvider>
                            </CompanyContextProvider>
                        </DemandContextProvider>
                    </FavoritesContextProvider>
                </AuthenticatedRoute >
            } />
            < Route path="/up" element={
                < AuthenticatedRoute >
                    <FavoritesContextProvider>
                        <DemandContextProvider>
                            <CompanyContextProvider>
                                <AddressBookProvider>
                                    <ToastContainerComponent>
                                        <Layout>
                                            <EventsContextProvider>
                                                <UpStatusPage />
                                            </EventsContextProvider>
                                        </Layout>
                                    </ToastContainerComponent>
                                </AddressBookProvider>
                            </CompanyContextProvider>
                        </DemandContextProvider>
                    </FavoritesContextProvider>
                </AuthenticatedRoute >
            } />
            < Route path="/down" element={
                < AuthenticatedRoute >
                    <FavoritesContextProvider>
                        <DemandContextProvider>
                            <CompanyContextProvider>
                                <AddressBookProvider>
                                    <ToastContainerComponent>
                                        <Layout>
                                            <EventsContextProvider>
                                                <DownStatusPage />
                                            </EventsContextProvider>
                                        </Layout>
                                    </ToastContainerComponent>
                                </AddressBookProvider>
                            </CompanyContextProvider>
                        </DemandContextProvider>
                    </FavoritesContextProvider>
                </AuthenticatedRoute >
            } />
            < Route path="/todo" element={
                < AuthenticatedRoute >
                    <FavoritesContextProvider>
                        <DemandContextProvider>
                            <CapacityGroupsProvider>
                                <UnitsofMeasureContextContextProvider>
                                    <CompanyContextProvider>
                                        <AddressBookProvider>
                                            <ToastContainerComponent>
                                                <Layout>
                                                    <EventsContextProvider>
                                                        <TodoListPage />
                                                    </EventsContextProvider>
                                                </Layout>
                                            </ToastContainerComponent>
                                        </AddressBookProvider>
                                    </CompanyContextProvider>
                                </UnitsofMeasureContextContextProvider>
                            </CapacityGroupsProvider>
                        </DemandContextProvider>
                    </FavoritesContextProvider>
                </AuthenticatedRoute >
            } />

            < Route path="/events" element={
                < AuthenticatedRoute >
                    <FavoritesContextProvider>
                        <DemandContextProvider>
                            <CompanyContextProvider>
                                <AddressBookProvider>
                                    <ToastContainerComponent>
                                        <Layout>
                                            <EventsContextProvider>
                                                <EventsPage />
                                            </EventsContextProvider>
                                        </Layout>
                                    </ToastContainerComponent>
                                </AddressBookProvider>
                            </CompanyContextProvider>
                        </DemandContextProvider>
                    </FavoritesContextProvider>
                </AuthenticatedRoute >
            } />

            < Route path="/favorites" element={
                < AuthenticatedRoute >
                    <DemandContextProvider>
                        <FavoritesContextProvider>
                            <CompanyContextProvider>
                                <AddressBookProvider>
                                    <ToastContainerComponent>
                                        <Layout>
                                            <FavoritesPage />
                                        </Layout>
                                    </ToastContainerComponent>
                                </AddressBookProvider>
                            </CompanyContextProvider>
                        </FavoritesContextProvider>
                    </DemandContextProvider>
                </AuthenticatedRoute >
            } />

            < Route path="/admin" element={
                < AuthenticatedRoute >
                    <FavoritesContextProvider>
                        <DemandContextProvider>
                            <CompanyContextProvider>
                                <AddressBookProvider>
                                    <CapacityGroupsProvider>
                                        <CompanyContextProvider>
                                            <ThresholdContextProvider>
                                                <ToastContainerComponent>
                                                    <Layout>
                                                        <AdminPage />
                                                    </Layout>
                                                </ToastContainerComponent>
                                            </ThresholdContextProvider>
                                        </CompanyContextProvider>
                                    </CapacityGroupsProvider>
                                </AddressBookProvider>
                            </CompanyContextProvider>
                        </DemandContextProvider>
                    </FavoritesContextProvider>
                </AuthenticatedRoute >
            } />
        </Routes >
    );
}

export default AppComponent;