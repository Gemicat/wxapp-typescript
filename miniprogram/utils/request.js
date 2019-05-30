"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Request = (function () {
    function Request(params) {
        this.baseUrl = params.baseUrl;
    }
    Request.prototype.request = function (config) {
        var _a = config.method, method = _a === void 0 ? 'get' : _a, _b = config.url, url = _b === void 0 ? '' : _b, _c = config.data, data = _c === void 0 ? {} : _c;
        var that = this;
        return new Promise(function (resolve, reject) {
            wx.request({
                url: "" + that.baseUrl + url,
                data: data,
                method: method,
                success: function (res) {
                    resolve(res);
                },
                fail: function () {
                    reject({
                        msg: '请求失败',
                        url: that.baseUrl + url,
                        method: method,
                        data: data
                    });
                }
            });
        });
    };
    return Request;
}());
var request = new Request({
    baseUrl: 'http://dxy.net'
});
exports.default = request;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUNFLGlCQUFZLE1BQTRCO1FBQ3RDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQTtJQUMvQixDQUFDO0lBQ0QseUJBQU8sR0FBUCxVQUFRLE1BQU07UUFDSixJQUFBLGtCQUFjLEVBQWQsbUNBQWMsRUFBRSxlQUFRLEVBQVIsNkJBQVEsRUFBRSxnQkFBUyxFQUFULDhCQUFTLENBQVc7UUFDdEQsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2pCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUNULEdBQUcsRUFBRSxLQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBSztnQkFDNUIsSUFBSSxNQUFBO2dCQUNKLE1BQU0sUUFBQTtnQkFDTixPQUFPLFlBQUMsR0FBRztvQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ2QsQ0FBQztnQkFDRCxJQUFJO29CQUNGLE1BQU0sQ0FBQzt3QkFDTCxHQUFHLEVBQUUsTUFBTTt3QkFDWCxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHO3dCQUN2QixNQUFNLFFBQUE7d0JBQ04sSUFBSSxNQUFBO3FCQUNMLENBQUMsQ0FBQTtnQkFDSixDQUFDO2FBQ0YsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0gsY0FBQztBQUFELENBQUMsQUExQkQsSUEwQkM7QUFFRCxJQUFNLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQztJQUMxQixPQUFPLEVBQUUsZ0JBQWdCO0NBQzFCLENBQUMsQ0FBQTtBQUVGLGtCQUFlLE9BQU8sQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFJlcXVlc3Qge1xuICBjb25zdHJ1Y3RvcihwYXJhbXM6IHsgW1Q6IHN0cmluZ106IGFueSB9KSB7XG4gICAgdGhpcy5iYXNlVXJsID0gcGFyYW1zLmJhc2VVcmxcbiAgfVxuICByZXF1ZXN0KGNvbmZpZykge1xuICAgIGNvbnN0IHsgbWV0aG9kID0gJ2dldCcsIHVybCA9ICcnLCBkYXRhID0ge30gfSA9IGNvbmZpZ1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6IGAke3RoYXQuYmFzZVVybH0ke3VybH1gLFxuICAgICAgICBkYXRhLFxuICAgICAgICBtZXRob2QsXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwoKSB7XG4gICAgICAgICAgcmVqZWN0KHtcbiAgICAgICAgICAgIG1zZzogJ+ivt+axguWksei0pScsXG4gICAgICAgICAgICB1cmw6IHRoYXQuYmFzZVVybCArIHVybCxcbiAgICAgICAgICAgIG1ldGhvZCxcbiAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHtcbiAgYmFzZVVybDogJ2h0dHA6Ly9keHkubmV0J1xufSlcblxuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdCJdfQ==