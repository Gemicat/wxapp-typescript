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
var WeChat_1 = require("../../lib/WeChat");
var Page = (function (_super) {
    __extends(Page, _super);
    function Page() {
        var _this = _super.call(this) || this;
        _this.setDefaultData({
            motto: '点击 “编译” 以构建13',
            abs: '222',
            userInfo: {},
            hasUserInfo: false,
            canIUse: wx.canIUse('button.open-type.getUserInfo'),
        });
        return _this;
    }
    Page.prototype.bindViewTap = function () {
        wx.navigateTo({
            url: '../logs/logs'
        });
    };
    Page.prototype.onLoad = function () {
        this.api.user.getUserInfo({ data: '1111111' });
        this.setData({
            userInfo: this.globalData.userInfo,
            hasUserInfo: true,
        });
    };
    Page.prototype.getUserInfo = function (e) {
    };
    return Page;
}(WeChat_1.default.BasePage));
WeChat_1.default.createPage(Page);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBcUM7QUFDckM7SUFBbUIsd0JBQWU7SUFDaEM7UUFBQSxZQUNFLGlCQUFPLFNBUVI7UUFQQyxLQUFJLENBQUMsY0FBYyxDQUFDO1lBQ2xCLEtBQUssRUFBRSxlQUFlO1lBQ3RCLEdBQUcsRUFBRSxLQUFLO1lBQ1YsUUFBUSxFQUFFLEVBQUU7WUFDWixXQUFXLEVBQUUsS0FBSztZQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztTQUNwRCxDQUFDLENBQUE7O0lBQ0osQ0FBQztJQUVELDBCQUFXLEdBQVg7UUFDRSxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLGNBQWM7U0FDcEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELHFCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQTtRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUTtZQUNsQyxXQUFXLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsMEJBQVcsR0FBWCxVQUFZLENBQU07SUFDbEIsQ0FBQztJQUNILFdBQUM7QUFBRCxDQUFDLEFBM0JELENBQW1CLGdCQUFNLENBQUMsUUFBUSxHQTJCakM7QUFFRCxnQkFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZUNoYXQgZnJvbSAnLi4vLi4vbGliL1dlQ2hhdCdcbmNsYXNzIFBhZ2UgZXh0ZW5kcyBXZUNoYXQuQmFzZVBhZ2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5zZXREZWZhdWx0RGF0YSh7XG4gICAgICBtb3R0bzogJ+eCueWHuyDigJznvJbor5HigJ0g5Lul5p6E5bu6MTMnLFxuICAgICAgYWJzOiAnMjIyJyxcbiAgICAgIHVzZXJJbmZvOiB7fSxcbiAgICAgIGhhc1VzZXJJbmZvOiBmYWxzZSxcbiAgICAgIGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcbiAgICB9KVxuICB9XG4gIC8v5LqL5Lu25aSE55CG5Ye95pWwXG4gIGJpbmRWaWV3VGFwKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vbG9ncy9sb2dzJ1xuICAgIH0pXG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHRoaXMuYXBpLnVzZXIuZ2V0VXNlckluZm8oe2RhdGE6ICcxMTExMTExJ30pXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHVzZXJJbmZvOiB0aGlzLmdsb2JhbERhdGEudXNlckluZm8sXG4gICAgICBoYXNVc2VySW5mbzogdHJ1ZSxcbiAgICB9KVxuICB9XG5cbiAgZ2V0VXNlckluZm8oZTogYW55KSB7XG4gIH1cbn1cblxuV2VDaGF0LmNyZWF0ZVBhZ2UoUGFnZSk7Il19