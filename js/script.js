    let app = angular.module('myApp', ['as.sortable']);
    app.controller('ctrl', ctrl);
    ctrl.$inject = ['$scope', '$http', '$compile'];
    function ctrl($scope, $http, $compile) {
        $scope.config1 = {
            title     : 'Table1',
            PrimaryKey: 'AttributeOptionId',
            dataSource: [
                {
                    "AttributeOptionId": 118,
                    "DisplayText": "Certification",
                    "SortOrder": 0,
                    "isEditing": false
                }, {
                    "AttributeOptionId": 119,
                    "DisplayText": "Endorsement",
                    "SortOrder": 1,
                    "isEditing": false
                }, {
                    "AttributeOptionId": 120,
                    "DisplayText": "Licensure",
                    "SortOrder": 2,
                    "isEditing": false
                }, {
                    "AttributeOptionId": 121,
                    "DisplayText": "Other",
                    "SortOrder": 3,
                    "isEditing": false
                }, {
                    "AttributeOptionId": 122,
                    "DisplayText": "Registration",
                    "SortOrder": 4,
                    "isEditing": false
                }
            ],
            emptyItem : {
                "AttributeOptionId": 0,
                "DisplayText"      : "",
                "SortOrder"        : 0,
                "isEditing"        : false
            },
            columns   : [
                {
                    name   : 'AttributeOptionId',
                    title  : 'Id',
                    editing: null
                },
                {
                    name   : 'DisplayText',
                    title  : 'Display Text',
                    editing: 'input'
                },
                {
                    name : 'Action',
                    title: 'Action'
                }
            ]
        };
    }
    app.config(function($compileProvider) {
        $compileProvider.preAssignBindingsEnabled(true);
    })
