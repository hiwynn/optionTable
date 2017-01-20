    angular.module('myApp')
    .directive('optionTable', function() {
        return {
            restrict: 'E',
            scope: {
                config: '='
            },
            templateUrl: 'optionTable.html',
            replace: true,
            controllerAs: 'card',
            bindToController: true,
            controller: CardController
        }

        function CardController($scope){
            let card = this;
            card.data = [];

            angular.copy(card.config.dataSource, card.data);
            card.columns = [];
            for(var j = 0; j < card.config.columns.length - 1; j ++){
                card.columns.push(card.config.columns[j]);
            }

            card.sortConfig = {
                //containment: '#board',
                accept: function (sourceItemHandleScope, destSortableScope) {
                    //console.log(sourceItemHandleScope);
                    return true;
                },//override to determine drag is allowed or not. default is true.
                itemMoved: function (event) {
                    //Do what you want,
                    console.log('itemMoved');
                    console.dir(event);
                },
                orderChanged: function(event) {
                    card.data.forEach(function(item,index){
                        item.SortOrder = index;
                    })
                    //console.dir(event.dest.index);
                }
            }
            
            // add confirm
            card.delete = function(i) {
                if(confirm("Are you sure to delete?")){
                    card.data.splice(i, 1);
                }
            }

            card.edit = function($index) {
                let item = getItemById($index);
                // 点edit时把当时的老数据保存到临时变量temp中
                let temp = {};
                angular.copy(item, temp);
                // 记录点击前的信息，当取消操作时恢复信息
                item._origin = temp;
                item.isEditing = true;
                card.data[$index] = item;
            }

            card.cancel = function($index) {
                let item = getItemById($index);
                console.log(this);
                // 先取消编辑状态
                item.isEditing = false;
                // 如果存在旧数据则恢复
                let origin = item._origin;
                if(origin) {
                    angular.copy(origin, item);
                }else{
                    card.data.pop();
                }

            }

            card.save = function(item) {
                item.isEditing = false;
            }

            card.add = function() {
                var attributeOptionId = card.data[card.data.length - 1].AttributeOptionId + 1;
                card.data.push({
                    first: attributeOptionId,
                    second: "",
                    "SortOrder": card.data.length + 1,
                    "isEditing": true
                })
            }

            function getItemById(index) {
                return card.data[index];
            }
        }
    })