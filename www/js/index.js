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

var films = [
        ["LOTR 1", "Super vette film"],
        ["LOTR 2", "Super vette 2de film"],
        ["LOTR 3", "Super vette 3de film"]
    ];    

var series = [
    ["Breaking Bad", "Bad serie"],
    ["Prison Break", "Kapotte gevangenis"],
    ["How I met your mother", "via de hoeren"]
];   

var cartoons = [
    ["Spongebob", "Patrick is beter"],
    ["My little pony", "If you know what I mean"],
    ["Winx Club", "Magische cartoon"]
];   

 var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    generateFilms: function() {

        var content = "";

        $.each(films, function(i, val) {
            content += '<li><a href="#detailed" onclick="app.getDetailed(films, films[' + i + '][0], ' + i + ')">' + films[i][0] + '</a></li>';
        });

        $("#filmslist").append(content);
    },
    generateSeries: function() {

        var content = "";

        $.each(series, function(i, val) {
            content += '<li><a href="#detailed" onclick="app.getDetailed(series, series[' + i + '][0], ' + i + ')">' + series[i][0] + '</a></li>';
        });

        $("#serieslist").append(content);
    },
    generateCartoons: function() {

        var content = "";

        $.each(cartoons, function(i, val) {
            content += '<li><a href="#detailed" onclick="app.getDetailed(cartoons, cartoons[' + i + '][0], ' + i + ')">' + cartoons[i][0] + '</a></li>';
        });

        $("#cartoonslist").append(content);
    },
    generateFilm: function() {
        var content = "";
    },
    getDetailed: function(collection, name, id) {
        console.log("getdetailed called");
        $("#content").html("");
        $("#title").text("");
        $("#title").text(name);

        var content = "";

        content +=  "<p>" + collection[id][0] + "</p>";
        content +=  "<p>" + collection[id][1] + "</p>";

        $("#content").append(content);
    },
    getFilm: function(id){
        $("#content").html("");
        var content = "";

            content +=  "<p>" + films[id][0] + "</p>";
            content +=  "<p>" + films[id][1] + "</p>";

        $("#content").append(content);
    },
    getSerie: function(id){
        $("#content2").html("");
        var content = "";

            content +=  "<p>" + series[id][0] + "</p>";
            content +=  "<p>" + series[id][1] + "</p>";

        $("#content2").append(content);
    },
    getCartoon: function(id){
        $("#content3").html("");
        var content = "";

            content +=  "<p>" + cartoons[id][0] + "</p>";
            content +=  "<p>" + cartoons[id][1] + "</p>";

        $("#content3").append(content);
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
