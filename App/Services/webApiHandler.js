import {Image, View, Dimensions, Text, Alert, TextInput, TouchableOpacity, NetInfo, ScrollView} from 'react-native';
export function callPostApi(urlStr, params, access_token) {
    return fetch(urlStr, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
				'Authorization': 'Bearer '+access_token,
            },
            body: JSON.stringify(params)
        })
        .then((response) => response.json())
        .then((responseData) => {
            result = responseData
        })
        .catch((error) => {
             console.error(error);
             Alert.alert('Alert Title failure' + JSON.stringify(error))
        });
}
export function callGetApi(urlStr, params) {
    return fetch(urlStr, {
            method: "GET",
            headers: {   
                'Content-Type': 'application/json',
				'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjgyMmQ5ODdkY2I3NmZhNWQxYWU3MjhmY2VkNWFiNWE3ZTc3YjY5NGJiY2NiOGQwNDA4ZjgwYjY3MWYyNjg3NWU4YjA3YjAyZDhjOWRkZTk1In0.eyJhdWQiOiI0IiwianRpIjoiODIyZDk4N2RjYjc2ZmE1ZDFhZTcyOGZjZWQ1YWI1YTdlNzdiNjk0YmJjY2I4ZDA0MDhmODBiNjcxZjI2ODc1ZThiMDdiMDJkOGM5ZGRlOTUiLCJpYXQiOjE1MDY1MTQ3NzQsIm5iZiI6MTUwNjUxNDc3NCwiZXhwIjoxNTM4MDUwNzc0LCJzdWIiOiIxMSIsInNjb3BlcyI6W119.mb3NrZRaGWviaGnJriBjoAdyFHIyg_S9JGFDz_u63PaABpk5gkoD77d8r5V9JeYMfgXL3VvVvrhiLl6QgA3sOqKVIkLdRkrs3jBrLn5Jgk4bwr89ozpNOZ79-2LNfIerv9X6ZOx_pt7qOJgBAG2OSIEGfWsM8aSANnN3SXeH0QJQR6ZSQa1eJ1xajzFRERBUG0cJ6VsNoAl7jtD3UofpKO2wtVwVeWry9ygweIpJPNoBKerYxiCdQDuXQ8Q1-K9YjSSOnZ6TpGbYgp_Epc5UOZ30pPtOdEfm0YivcVKREzFyB4IV-e5cQo15v07EE4jUtb17i5yTSXDpxmpAchrnlm-R6S15KssCaXMzCqF3MIhQz9S1S8Y2aK54_Rx-pxv7XMlIeibrjYcScbblfxYR2qcjeeTiieYrakkTXFGbhksOjGroKCFNKC5tvHWDIt8xlw6a0j080Pgcp2nO-IYcSWCvMJHyBUyFLyT8l3KKm-3JfxyNmAgHXeE9ORF0kypakEbIStiBVSJuMtC-jaMLyoBYO02UrnYyNEG6Zl6tt6nLBfkL1d1wEJVfi05ddvvKHL6tkU7Q45mosJ7uSY51T-YIGqy1wjxmyGdGSlOmauvqB8wbFM2Ai8sl01zN2n3P2wNvoBmxylvU7YdAKL4_h8-r2Kuh97nodN6iNF3GrQ8',
            }
        })
        .then((response) => response.json())
        .then((responseData) => {
            result = responseData
        })
        .catch((error) => {
             console.error(error);
             Alert.alert('Alert Title failure' + JSON.stringify(error))
        });
}
