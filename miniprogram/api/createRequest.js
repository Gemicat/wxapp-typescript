"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("../utils/request");
function createRequest(apis) {
    if (apis === void 0) { apis = {}; }
    var apiList = {};
    Object.keys(apis).forEach(function (key) {
        apiList[key] = function (options) {
            var _a = options.data, data = _a === void 0 ? {} : _a;
            return request_1.default.request(__assign({}, apis[key], { data: data }));
        };
    });
    return apiList;
}
exports.default = createRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZVJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUFzQztBQUV0QyxTQUFTLGFBQWEsQ0FBQyxJQUFTO0lBQVQscUJBQUEsRUFBQSxTQUFTO0lBQzlCLElBQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQTtJQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQUMsT0FBTztZQUNiLElBQUEsaUJBQVMsRUFBVCw4QkFBUyxDQUFZO1lBQzdCLE9BQU8saUJBQU8sQ0FBQyxPQUFPLGNBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFDWixJQUFJLE1BQUEsSUFDSixDQUFBO1FBQ0osQ0FBQyxDQUFBO0lBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDRixPQUFPLE9BQU8sQ0FBQTtBQUNoQixDQUFDO0FBRUQsa0JBQWUsYUFBYSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vdXRpbHMvcmVxdWVzdCdcblxuZnVuY3Rpb24gY3JlYXRlUmVxdWVzdChhcGlzID0ge30pIHtcbiAgY29uc3QgYXBpTGlzdCA9IHt9XG4gIE9iamVjdC5rZXlzKGFwaXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICBhcGlMaXN0W2tleV0gPSAob3B0aW9ucykgPT4ge1xuICAgICAgY29uc3QgeyBkYXRhID0ge30gfSA9IG9wdGlvbnNcbiAgICAgIHJldHVybiByZXF1ZXN0LnJlcXVlc3Qoe1xuICAgICAgICAuLi5hcGlzW2tleV0sXG4gICAgICAgIGRhdGFcbiAgICAgIH0pXG4gICAgfVxuICB9KVxuICByZXR1cm4gYXBpTGlzdFxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZXF1ZXN0Il19