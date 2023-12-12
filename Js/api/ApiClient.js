import axios from 'axios';
import RNFS from 'react-native-fs';
import { baseurl } from '../Constants';



// const pinnedCertificate = require("../../assets/mycert.cer");

const sourcePath = 'file:///assets/';

const assetPath = 'mycert.cer'; // Replace with the name of your certificate file

const destinationPath = `${RNFS.CachesDirectoryPath}/mycert.cer`;
let certificateContenet = ""
RNFS.readFileAssets('mycert.cer', "base64")
    .then(fileContent => {
        certificateContenet = fileContent
        console.log('File content:', fileContent);
        // Now you can work with the file content (e.g., parse it as a certificate)
    })
    .catch(error => {
        console.error('Error reading the .pem file from assets:', error);
    });



RNFS.copyFileAssets(assetPath, destinationPath)
    .then((e) => {
        console.log(e, 'Certificate file copied successfully');
        // performSSLPinning(destinationPath);

        // Now you can use the certificatePath in your Axios or other network requests
    })
    .catch((error) => {
        console.log('Error copying certificate:', error);
    });


const apiEndpoint = "https://api.ssllabs.com/api/v3/analyze?host="
const apiBaseUrl = baseurl;

const apiKey = 'eX5RiDNT8vpcOArGybKZOZIVKm6cqcwNheD'; // Replace with your actual API key

const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 5000,
    httpsAgent: {
      ca: "898yoghaubkjsnkdf",
    },
});

class ApiClient {
    static async headersPromise(token) {
        axios.defaults.timeout = 150000;
        axios.defaults.headers.common['Content-Type'] = 'application/json';
        axios.defaults.headers.common['Content-Type'] = 'application/json';
        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        // axios.defaults.headers.common['User-Agent'] = 'Qualys-SSL-Labs-API-Test';
        // axios.defaults.headers.common['X-Api-Key'] = "eX5RiDNT8vpcOArGybKZOZIVKm6cqcwNheD";

        // axios.defaults.httpsAgent = {
        //     // rejectUnauthorized: true,
        //     // requestCert: false,
        //     // agent: false,
        //     // rejectUnauthorized: true, // Ensure strict SSL certificate verification
        //     // ca: "asdf",
        // }
        if (token) {
            axios.defaults.headers.common['Authorization'] = token;
            // axios.defaults.httpsAgent = {
            //     // rejectUnauthorized: true,
            //     // requestCert: false,
            //     // agent: false,
            //     // rejectUnauthorized: true, // Ensure strict SSL certificate verification
            //     // ca: certificateContenet,
            // }
            // axios.defaults.headers.common['Bearer-Token'] = token;
        }


    //     const apiEndpoint = "https://api.ssllabs.com/api/v3/analyze"
    //     const websiteUrl = "mdm.apdcl.co/v1"
    //     // Set your API key as a request header
    //     const apiKey = 'eX5RiDNT8vpcOArGybKZOZIVKm6cqcwNheD'; // Replace with your actual API key
    //     const headers = { 'User-Agent': 'Qualys-SSL-Labs-API-Test', 'X-Api-Key': apiKey };

    //    await axiosInstance.get(`${apiEndpoint}?host=${websiteUrl}&publish=off&all=done`, { headers }).then(e => {
    //         if(e.data.status == "READY"){
    //             alert("SSL Verified")
    //             return "Errorr"
    //         } else {
    //             alert("SSL not verified")
    //         }
    //         console.log("ssllabs Success ",e);
    //     }).catch(e => {
    //         console.log("ssllabs failure ",e.response);
    //     })
    }

    async httpGet(url, token, additionalHeaders) {
        ApiClient.headersPromise(token);
        if (additionalHeaders) {
            let keys = Object.keys(additionalHeaders);
            keys.forEach(h => {
                axios.defaults.headers.common[h] = additionalHeaders[h].value;
            });
        }
        return (await axios.get(apiBaseUrl + url, {
            h, headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "Application/json",
                "X-Requested-With": "XMLHttpRequest",
                "Authorization": `Bearer ${token}`
            }
        }));
    }

    async httpPost(url, token, body, additionalHeaders) {
        console.log(apiBaseUrl + url, body);
        body = body || {};
        ApiClient.headersPromise(token);
        if (additionalHeaders) {
            let keys = Object.keys(additionalHeaders);
            keys.forEach(h => {
                axios.defaults.headers.common[h] = additionalHeaders[h].value;
            });
        }

        console.log("apiClirnt", apiBaseUrl + url, body);

        // let resp = await fetch(apiBaseUrl + url, {
        //     method: "POST",
        //     body: JSON.stringify(body),
        //     sslPinning: {
        //         certs: ["mycert"] // your certificates name (without extension), for example cert1.cer, cert2.cer
        //     },
        //     headers: {
        //         "Access-Control-Allow-Origin": "*",
        //         "Access-Control-Allow-Headers": "*",
        //         "Access-Control-Allow-Methods": "PUT",
        //         "Content-type": "Application/json",
        //         "X-Requested-With": "XMLHttpRequest",
        //         "Access-Control-Expose-Headers": "Authorization",
        //         "Authorization": `Bearer ${token}`
        //     }
        // })
        //     .then(response => {
        //         console.log("fas9udiopfokalsdf", response);
        //         return response.blob()
        //     })
        //     .then(data => console.log("y7980aohusdf", data, body))
        //     .catch(err => {
        //         console.log(`error: ${err}`)
        //     })
        let resp = (await axios.post(apiBaseUrl + url, body, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "Application/json",
                "X-Requested-With": "XMLHttpRequest",
                "Authorization": `Bearer ${token}`
            }
        }));
        
        console.log("apiClirnt", resp, apiBaseUrl + url, body);
        return resp
    }

    async httpPut(url, token, body, additionalHeaders) {
        body = body || {};
        ApiClient.headersPromise(token);

        if (additionalHeaders) {
            let keys = Object.keys(additionalHeaders);
            keys.forEach(h => {
                axios.defaults.headers.common[h] = additionalHeaders[h].value;
            });
        }
        console.log("put", apiBaseUrl + url, token, body)
        let resp = (await axios.put(apiBaseUrl + url, body, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "Application/json",
                "X-Requested-With": "XMLHttpRequest",
                "Authorization": `Bearer ${token}`
            }
        }));
        console.log("apiClient put", resp);
        return resp
    }

    async httpDelete(url, token, body, additionalHeaders) {
        body = body || {};
        ApiClient.headersPromise(token);

        if (additionalHeaders) {
            let keys = Object.keys(additionalHeaders);
            keys.forEach(h => {
                axios.defaults.headers.common[h] = additionalHeaders[h].value;
            });
        }
        console.log("put", apiBaseUrl + url, body)
        let resp = (await axios.delete(apiBaseUrl + url, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "Application/json",
                "X-Requested-With": "XMLHttpRequest",
                "Authorization": `Bearer ${token}`
            }, data: body
        }));
        console.log("apiClient delete", resp);
        return resp
    }

    async httpGetWithoutBaseUrl(url, additionalHeaders, token) {
        // token && ApiClient.headersPromise(token);
        // if(additionalHeaders){
        //     let keys = Object.keys(additionalHeaders);
        //     keys.forEach(h =>{
        //         axios.defaults.headers.common[h] = additionalHeaders[h].value;
        //     });
        // }
        delete axios.defaults.headers.common["Authorization"];
        axios.defaults.headers.common['accept'] = 'application/json, text/plain, */*';

        return (await axios.get(url));
    }

}
const apiClient = new ApiClient();
export { apiClient };
