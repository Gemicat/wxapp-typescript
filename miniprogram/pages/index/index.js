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
        this.api.user.getUserInfo({ data: '1111111' }).then(function () {
            console.log(1111);
        }).catch(function () {
            console.log('失败咯');
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBcUM7QUFDckM7SUFBbUIsd0JBQWU7SUFDaEM7UUFBQSxZQUNFLGlCQUFPLFNBUVI7UUFQQyxLQUFJLENBQUMsY0FBYyxDQUFDO1lBQ2xCLEtBQUssRUFBRSxlQUFlO1lBQ3RCLEdBQUcsRUFBRSxLQUFLO1lBQ1YsUUFBUSxFQUFFLEVBQUU7WUFDWixXQUFXLEVBQUUsS0FBSztZQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztTQUNwRCxDQUFDLENBQUE7O0lBQ0osQ0FBQztJQUVELDBCQUFXLEdBQVg7UUFDRSxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLGNBQWM7U0FDcEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELHFCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNuQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3BCLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVE7WUFDbEMsV0FBVyxFQUFFLElBQUk7U0FDbEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELDBCQUFXLEdBQVgsVUFBWSxDQUFNO0lBQ2xCLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FBQyxBQS9CRCxDQUFtQixnQkFBTSxDQUFDLFFBQVEsR0ErQmpDO0FBRUQsZ0JBQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2VDaGF0IGZyb20gJy4uLy4uL2xpYi9XZUNoYXQnXG5jbGFzcyBQYWdlIGV4dGVuZHMgV2VDaGF0LkJhc2VQYWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuc2V0RGVmYXVsdERhdGEoe1xuICAgICAgbW90dG86ICfngrnlh7sg4oCc57yW6K+R4oCdIOS7peaehOW7ujEzJyxcbiAgICAgIGFiczogJzIyMicsXG4gICAgICB1c2VySW5mbzoge30sXG4gICAgICBoYXNVc2VySW5mbzogZmFsc2UsXG4gICAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXG4gICAgfSlcbiAgfVxuICAvL+S6i+S7tuWkhOeQhuWHveaVsFxuICBiaW5kVmlld1RhcCgpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy4uL2xvZ3MvbG9ncydcbiAgICB9KVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLmFwaS51c2VyLmdldFVzZXJJbmZvKHtkYXRhOiAnMTExMTExMSd9KS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKDExMTEpXG4gICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ+Wksei0peWSrycpXG4gICAgfSlcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgdXNlckluZm86IHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbyxcbiAgICAgIGhhc1VzZXJJbmZvOiB0cnVlLFxuICAgIH0pXG4gIH1cblxuICBnZXRVc2VySW5mbyhlOiBhbnkpIHtcbiAgfVxufVxuXG5XZUNoYXQuY3JlYXRlUGFnZShQYWdlKTsiXX0=