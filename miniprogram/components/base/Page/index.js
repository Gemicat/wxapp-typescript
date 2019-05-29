"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var WeChat_1 = require("../../../lib/WeChat");
var Component = (function (_super) {
    __extends(Component, _super);
    function Component() {
        var _this = _super.call(this) || this;
        _this.properties = {
            inner: {
                type: String,
                value: 'default value',
            }
        };
        _this.lifetimes = {
            attached: function () {
                console.log(11112);
            }
        };
        return _this;
    }
    Component.prototype.onLoad = function () {
        var query = wx.createSelectorQuery();
        query.select('#slot').boundingClientRect();
        console.log(query);
    };
    return Component;
}(WeChat_1.default.BasePage));
WeChat_1.default.createComponent(Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBd0M7QUFDeEM7SUFBd0IsNkJBQWU7SUFDckM7UUFBQSxZQUNFLGlCQUFPLFNBQ1I7UUFDRCxnQkFBVSxHQUFHO1lBRVgsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxlQUFlO2FBQ3ZCO1NBQ0YsQ0FBQTtRQUNELGVBQVMsR0FBRztZQUNWLFFBQVE7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUNwQixDQUFDO1NBQ0YsQ0FBQTs7SUFaRCxDQUFDO0lBYUQsMEJBQU0sR0FBTjtRQUNFLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFBO1FBQ3RDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtRQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3BCLENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQUFyQkQsQ0FBd0IsZ0JBQU0sQ0FBQyxRQUFRLEdBcUJ0QztBQUVELGdCQUFNLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdlQ2hhdCBmcm9tICcuLi8uLi8uLi9saWIvV2VDaGF0J1xuY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgV2VDaGF0LkJhc2VQYWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICB9XG4gIHByb3BlcnRpZXMgPSB7XG4gICAgLy8g6L+Z6YeM5a6a5LmJ5LqGaW5uZXJUZXh05bGe5oCn77yM5bGe5oCn5YC85Y+v5Lul5Zyo57uE5Lu25L2/55So5pe25oyH5a6aXG4gICAgaW5uZXI6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnZGVmYXVsdCB2YWx1ZScsXG4gICAgfVxuICB9XG4gIGxpZmV0aW1lcyA9IHtcbiAgICBhdHRhY2hlZCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKDExMTEyKVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgY29uc3QgcXVlcnkgPSB3eC5jcmVhdGVTZWxlY3RvclF1ZXJ5KClcbiAgICBxdWVyeS5zZWxlY3QoJyNzbG90JykuYm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zb2xlLmxvZyhxdWVyeSlcbiAgfVxufVxuXG5XZUNoYXQuY3JlYXRlQ29tcG9uZW50KENvbXBvbmVudCk7Il19