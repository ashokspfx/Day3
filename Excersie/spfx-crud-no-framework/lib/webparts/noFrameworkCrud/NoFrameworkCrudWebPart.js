var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, PropertyPaneTextField } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';
import { SPHttpClient } from '@microsoft/sp-http';
import styles from './NoFrameworkCrudWebPart.module.scss';
import * as strings from 'NoFrameworkCrudWebPartStrings';
var NoFrameworkCrudWebPart = (function (_super) {
    __extends(NoFrameworkCrudWebPart, _super);
    function NoFrameworkCrudWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listItemEntityTypeName = undefined;
        return _this;
    }
    NoFrameworkCrudWebPart.prototype.render = function () {
        this.domElement.innerHTML = "\n      <div class=\"" + styles.noFrameworkCrud + "\">\n        <div class=\"" + styles.container + "\">\n          <div class=\"" + styles.row + "\">\n            <div class=\"" + styles.column + "\">\n              <span class=\"" + styles.title + "\">CRUD operations</span>\n              <p class=\"" + styles.subTitle + "\">No Framework</p>\n              <p class=\"" + styles.description + "\">Name: " + escape(this.properties.listName) + "</p>\n\n              <div class=\"ms-Grid-row ms-bgColor-themeDark ms-fontColor-white " + styles.row + "\">\n                <div class=\"ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1\">\n                  <button class=\"" + styles.button + " create-Button\">\n                    <span class=\"" + styles.label + "\">Create item</span>\n                  </button>\n                  <button class=\"" + styles.button + " read-Button\">\n                    <span class=\"" + styles.label + "\">Read item</span>\n                  </button>\n                </div>\n              </div>\n\n              <div class=\"ms-Grid-row ms-bgColor-themeDark ms-fontColor-white " + styles.row + "\">\n                <div class=\"ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1\">\n                  <button class=\"" + styles.button + " update-Button\">\n                    <span class=\"" + styles.label + "\">Update item</span>\n                  </button>\n                  <button class=\"" + styles.button + " delete-Button\">\n                    <span class=\"" + styles.label + "\">Delete item</span>\n                  </button>\n                </div>\n              </div>\n\n              <div class=\"ms-Grid-row ms-bgColor-themeDark ms-fontColor-white " + styles.row + "\">\n                <div class=\"ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1\">\n                  <div class=\"status\"></div>\n                  <ul class=\"items\"><ul>\n                </div>\n              </div>\n\n            </div>\n          </div>\n        </div>\n      </div>";
        this.setButtonsEventHandlers();
    };
    NoFrameworkCrudWebPart.prototype.setButtonsEventHandlers = function () {
        var webPart = this;
        this.domElement.querySelector('button.create-Button').addEventListener('click', function () { webPart.createItem(); });
        this.domElement.querySelector('button.read-Button').addEventListener('click', function () { webPart.readItem(); });
        this.domElement.querySelector('button.update-Button').addEventListener('click', function () { webPart.updateItem(); });
        this.domElement.querySelector('button.delete-Button').addEventListener('click', function () { webPart.deleteItem(); });
    };
    NoFrameworkCrudWebPart.prototype.createItem = function () {
        var _this = this;
        var body = JSON.stringify({
            'Title': "Item " + new Date()
        });
        this.context.spHttpClient.post(this.context.pageContext.web.absoluteUrl + "/_api/web/lists/getbytitle('" + this.properties.listName + "')/items", SPHttpClient.configurations.v1, {
            headers: {
                'Accept': 'application/json;odata=nometadata',
                'Content-type': 'application/json;odata=nometadata',
                'odata-version': ''
            },
            body: body
        })
            .then(function (response) {
            return response.json();
        })
            .then(function (item) {
            _this.updateStatus("Item '" + item.Title + "' (ID: " + item.Id + ") successfully created");
        }, function (error) {
            _this.updateStatus('Error while creating the item: ' + error);
        });
    };
    NoFrameworkCrudWebPart.prototype.updateStatus = function (status, items) {
        if (items === void 0) { items = []; }
        this.domElement.querySelector('.status').innerHTML = status;
        this.updateItemsHtml(items);
    };
    NoFrameworkCrudWebPart.prototype.updateItemsHtml = function (items) {
        this.domElement.querySelector('.items').innerHTML = items.map(function (item) { return "<li>" + item.Title + " (" + item.Id + ")</li>"; }).join("");
    };
    NoFrameworkCrudWebPart.prototype.readItem = function () {
        var _this = this;
        this.getLatestItemId()
            .then(function (itemId) {
            if (itemId === -1) {
                throw new Error('No items found in the list');
            }
            _this.updateStatus("Loading information about item ID: " + itemId + "...");
            return _this.context.spHttpClient.get(_this.context.pageContext.web.absoluteUrl + "/_api/web/lists/getbytitle('" + _this.properties.listName + "')/items(" + itemId + ")?$select=Title,Id", SPHttpClient.configurations.v1, {
                headers: {
                    'Accept': 'application/json;odata=nometadata',
                    'odata-version': ''
                }
            });
        })
            .then(function (response) {
            return response.json();
        })
            .then(function (item) {
            _this.updateStatus("Item ID: " + item.Id + ", Title: " + item.Title);
        }, function (error) {
            _this.updateStatus('Loading latest item failed with error: ' + error);
        });
    };
    NoFrameworkCrudWebPart.prototype.updateItem = function () {
        var _this = this;
        var latestItemId = undefined;
        this.updateStatus('Loading latest item...');
        this.getLatestItemId()
            .then(function (itemId) {
            if (itemId === -1) {
                throw new Error('No items found in the list');
            }
            latestItemId = itemId;
            _this.updateStatus("Loading information about item ID: " + itemId + "...");
            return _this.context.spHttpClient.get(_this.context.pageContext.web.absoluteUrl + "/_api/web/lists/getbytitle('" + _this.properties.listName + "')/items(" + latestItemId + ")?$select=Title,Id", SPHttpClient.configurations.v1, {
                headers: {
                    'Accept': 'application/json;odata=nometadata',
                    'odata-version': ''
                }
            });
        })
            .then(function (response) {
            return response.json();
        })
            .then(function (item) {
            _this.updateStatus("Item ID1: " + item.Id + ", Title: " + item.Title);
            var body = JSON.stringify({
                'Title': "Updated Item " + new Date()
            });
            _this.context.spHttpClient.post(_this.context.pageContext.web.absoluteUrl + "/_api/web/lists/getbytitle('" + _this.properties.listName + "')/items(" + item.Id + ")", SPHttpClient.configurations.v1, {
                headers: {
                    'Accept': 'application/json;odata=nometadata',
                    'Content-type': 'application/json;odata=nometadata',
                    'odata-version': '',
                    'IF-MATCH': '*',
                    'X-HTTP-Method': 'MERGE'
                },
                body: body
            })
                .then(function (response) {
                _this.updateStatus("Item with ID: " + latestItemId + " successfully updated");
            }, function (error) {
                _this.updateStatus("Error updating item: " + error);
            });
        });
    };
    NoFrameworkCrudWebPart.prototype.deleteItem = function () {
        var _this = this;
        if (!window.confirm('Are you sure you want to delete the latest item?')) {
            return;
        }
        this.updateStatus('Loading latest items...');
        var latestItemId = undefined;
        var etag = undefined;
        this.getLatestItemId()
            .then(function (itemId) {
            if (itemId === -1) {
                throw new Error('No items found in the list');
            }
            latestItemId = itemId;
            _this.updateStatus("Loading information about item ID: " + latestItemId + "...");
            return _this.context.spHttpClient.get(_this.context.pageContext.web.absoluteUrl + "/_api/web/lists/getbytitle('" + _this.properties.listName + "')/items(" + latestItemId + ")?$select=Id", SPHttpClient.configurations.v1, {
                headers: {
                    'Accept': 'application/json;odata=nometadata',
                    'odata-version': ''
                }
            });
        })
            .then(function (response) {
            etag = response.headers.get('ETag');
            return response.json();
        })
            .then(function (item) {
            _this.updateStatus("Deleting item with ID: " + latestItemId + "...");
            return _this.context.spHttpClient.post(_this.context.pageContext.web.absoluteUrl + "/_api/web/lists/getbytitle('" + _this.properties.listName + "')/items(" + item.Id + ")", SPHttpClient.configurations.v1, {
                headers: {
                    'Accept': 'application/json;odata=nometadata',
                    'Content-type': 'application/json;odata=verbose',
                    'odata-version': '',
                    'IF-MATCH': etag,
                    'X-HTTP-Method': 'DELETE'
                }
            });
        })
            .then(function (response) {
            _this.updateStatus("Item with ID: " + latestItemId + " successfully deleted");
        }, function (error) {
            _this.updateStatus("Error deleting item: " + error);
        });
    };
    NoFrameworkCrudWebPart.prototype.getLatestItemId = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.context.spHttpClient.get(_this.context.pageContext.web.absoluteUrl + "/_api/web/lists/getbytitle('" + _this.properties.listName + "')/items?$orderby=Id desc&$top=1&$select=id", SPHttpClient.configurations.v1, {
                headers: {
                    'Accept': 'application/json;odata=nometadata',
                    'odata-version': ''
                }
            })
                .then(function (response) {
                return response.json();
            }, function (error) {
                reject(error);
            })
                .then(function (response) {
                if (response.value.length === 0) {
                    resolve(-1);
                }
                else {
                    resolve(response.value[0].Id);
                }
            });
        });
    };
    Object.defineProperty(NoFrameworkCrudWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    NoFrameworkCrudWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('listName', {
                                    label: strings.ListNameFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return NoFrameworkCrudWebPart;
}(BaseClientSideWebPart));
export default NoFrameworkCrudWebPart;

//# sourceMappingURL=NoFrameworkCrudWebPart.js.map
