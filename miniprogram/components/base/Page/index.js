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
                console.log('容器组件生命周期调用');
            }
        };
        return _this;
    }
    return Component;
}(WeChat_1.default.BasePage));
WeChat_1.default.createComponent(Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBd0M7QUFDeEM7SUFBd0IsNkJBQWU7SUFDckM7UUFBQSxZQUNFLGlCQUFPLFNBQ1I7UUFDRCxnQkFBVSxHQUFHO1lBRVgsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxlQUFlO2FBQ3ZCO1NBQ0YsQ0FBQTtRQUNELGVBQVMsR0FBRztZQUNWLFFBQVE7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUMzQixDQUFDO1NBQ0YsQ0FBQTs7SUFaRCxDQUFDO0lBYUgsZ0JBQUM7QUFBRCxDQUFDLEFBaEJELENBQXdCLGdCQUFNLENBQUMsUUFBUSxHQWdCdEM7QUFFRCxnQkFBTSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZUNoYXQgZnJvbSAnLi4vLi4vLi4vbGliL1dlQ2hhdCdcbmNsYXNzIENvbXBvbmVudCBleHRlbmRzIFdlQ2hhdC5CYXNlUGFnZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgfVxuICBwcm9wZXJ0aWVzID0ge1xuICAgIC8vIOi/memHjOWumuS5ieS6hmlubmVyVGV4dOWxnuaAp++8jOWxnuaAp+WAvOWPr+S7peWcqOe7hOS7tuS9v+eUqOaXtuaMh+WumlxuICAgIGlubmVyOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJ2RlZmF1bHQgdmFsdWUnLFxuICAgIH1cbiAgfVxuICBsaWZldGltZXMgPSB7XG4gICAgYXR0YWNoZWQoKSB7XG4gICAgICBjb25zb2xlLmxvZygn5a655Zmo57uE5Lu255Sf5ZG95ZGo5pyf6LCD55SoJylcbiAgICB9XG4gIH1cbn1cblxuV2VDaGF0LmNyZWF0ZUNvbXBvbmVudChDb21wb25lbnQpOyJdfQ==