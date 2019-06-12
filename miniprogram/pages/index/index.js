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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var _a = getApp(), WeChat = _a.WeChat, app = __rest(_a, ["WeChat"]);
console.log('app', app);
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
    Page.prototype.userInfoReadyCallback = function () {
        this.api.user.getUserInfo({ data: '1111111' }).then(function () {
            console.log('请求成功咯');
        }).catch(function () {
            console.log('请求失败咯');
        });
        console.log(app.globalData.userInfo);
        this.setData({
            userInfo: app.globalData.userInfo,
            hasUserInfo: true,
        });
    };
    Page.prototype.getUserInfo = function (e) {
    };
    return Page;
}(WeChat.BasePage));
WeChat.createPage(Page);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU0sYUFBMkIsRUFBMUIsa0JBQU0sRUFBRSw0QkFBa0IsQ0FBQTtBQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQTtBQUN2QjtJQUFtQix3QkFBZTtJQUNoQztRQUFBLFlBQ0UsaUJBQU8sU0FRUjtRQVBDLEtBQUksQ0FBQyxjQUFjLENBQUM7WUFDbEIsS0FBSyxFQUFFLGVBQWU7WUFDdEIsR0FBRyxFQUFFLEtBQUs7WUFDVixRQUFRLEVBQUUsRUFBRTtZQUNaLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO1NBQ3BELENBQUMsQ0FBQTs7SUFDSixDQUFDO0lBRUQsMEJBQVcsR0FBWDtRQUNFLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsY0FBYztTQUNwQixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0Qsb0NBQXFCLEdBQXJCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDdEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN0QixDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsUUFBUSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUTtZQUNqQyxXQUFXLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsMEJBQVcsR0FBWCxVQUFZLENBQU07SUFDbEIsQ0FBQztJQUNILFdBQUM7QUFBRCxDQUFDLEFBaENELENBQW1CLE1BQU0sQ0FBQyxRQUFRLEdBZ0NqQztBQUVELE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7V2VDaGF0LCAuLi5hcHB9ID0gZ2V0QXBwKClcbmNvbnNvbGUubG9nKCdhcHAnLCBhcHApXG5jbGFzcyBQYWdlIGV4dGVuZHMgV2VDaGF0LkJhc2VQYWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuc2V0RGVmYXVsdERhdGEoe1xuICAgICAgbW90dG86ICfngrnlh7sg4oCc57yW6K+R4oCdIOS7peaehOW7ujEzJyxcbiAgICAgIGFiczogJzIyMicsXG4gICAgICB1c2VySW5mbzoge30sXG4gICAgICBoYXNVc2VySW5mbzogZmFsc2UsXG4gICAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXG4gICAgfSlcbiAgfVxuICAvL+S6i+S7tuWkhOeQhuWHveaVsFxuICBiaW5kVmlld1RhcCgpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy4uL2xvZ3MvbG9ncydcbiAgICB9KVxuICB9XG4gIHVzZXJJbmZvUmVhZHlDYWxsYmFjaygpIHtcbiAgICB0aGlzLmFwaS51c2VyLmdldFVzZXJJbmZvKHtkYXRhOiAnMTExMTExMSd9KS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCfor7fmsYLmiJDlip/lkq8nKVxuICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCfor7fmsYLlpLHotKXlkq8nKVxuICAgIH0pXG4gICAgY29uc29sZS5sb2coYXBwLmdsb2JhbERhdGEudXNlckluZm8pXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHVzZXJJbmZvOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyxcbiAgICAgIGhhc1VzZXJJbmZvOiB0cnVlLFxuICAgIH0pXG4gIH1cblxuICBnZXRVc2VySW5mbyhlOiBhbnkpIHtcbiAgfVxufVxuXG5XZUNoYXQuY3JlYXRlUGFnZShQYWdlKTsiXX0=