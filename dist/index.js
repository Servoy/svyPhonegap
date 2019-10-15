/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {

    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        //setup iframe
        document.getElementById('iframe').addEventListener('load',
            function() {
                Bridge.init(this);
            }
        )
    },
    onDeviceReady: function() {
        document.addEventListener("pause", onPause, false);
        document.addEventListener("resume", onResume, false);

        document.addEventListener("backbutton", function(e) {
            e.preventDefault();
            onBack();
        }, false);

        function onBack() {
            console.log('back');
            // Handle the hardware back button event            
            try {
                if (Servoy.onBackMethod) {
                    Servoy.onBackMethod();
                }
            } catch (e) {
                console.log(e)
            }
        }

        //runs when the app is on background
        function onPause() {
            console.log('pause');
            // Handle the pause event            
            try {
                if (Servoy.onPauseMethod) {
                    Servoy.onPauseMethod();
                }
            } catch (e) {
                console.log(e)
            }
        }

        //runs when the app resumes
        function onResume() {
            console.log('resume');
            // Handle the resume event          
            try {
                if (Servoy.onResumeMethod) {
                    Servoy.onResumeMethod();
                }
            } catch (e) {
                console.log(e)
            }   
        }
    }
};