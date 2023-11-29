import Config from '../config';
import axios from 'axios';
import Basics from '../helpers/Basics';
import { fetchToken } from '../helpers/Basics';
import { Platform } from "react-native";

export const getHeader = async (formData) => {
    return {
        "Accept": formData ? 'multipart/form-data' : "application/json",
        "Content-Type": formData ? 'multipart/form-data' : "application/json",
        "versionNumber": Config.versionNumber,
        "version": Config.versionNumber,
        "xaccesstoken": await fetchToken(),
        'platform': Platform.OS
    }
}

const getUpdatedHeader = async (formData) => {
    return {
        "Accept": formData ? 'multipart/form-data' : "application/x-www-form-urlencoded; charset=UTF-8",
        "Content-Type": formData ? 'multipart/form-data' : "application/x-www-form-urlencoded; charset=UTF-8",
        "versionNumber": Config.versionNumber,
        "version": Config.versionNumber,
        "xaccesstoken": await fetchToken(),
        'platform': Platform.OS
    }

}

export const getResponseSecondary = async (url, params) => {
    const URL = Config.BaseUrlSecondary + url;
    return new Promise(async (resolve, reject) => {
        axios(URL, {
            params,
            method: 'GET',
            headers: await getHeader()
        }).then(response => {
            resolve(response)
        }).catch(error => {
            // console.log('err ===',url)
            if (error?.response?.status === 403 && !error.response.success) {
                logout()
                window.location.href = '/'
            }
            reject(error)
        })
    })
}

export const getResponse = async (url, params) => {
    const URL = Config.BaseUrl + url;
    // console.log('URL >>>>>',URL)
    // console.log(await getHeader())
    return new Promise(async (resolve, reject) => {
        axios(URL, {
            params,
            method: 'GET',
            headers: await getHeader()
        }).then(response => {
            resolve(response)
        }).catch(error => {
            // console.log('err ===',url)
            if (error?.response?.status === 403 && !error.response.success) {
                logout()
                window.location.href = '/'
            }
            reject(error)
        })
    })

}

export const putResponse = async (url, payload) => {
    const URL = Config.BaseUrl + url;
    return new Promise(async (resolve, reject) => {
        axios(URL, {
            method: 'PUT',
            headers: await getHeader(),
            data: payload
        }).then(response => {
            resolve(response)
        }).catch(error => {
            // console.log('err ===',url)
            if (error?.response?.status === 403 && !error.response.success) {
                logout()
                window.location.href = '/'
            }
            reject(error)
        })
    })
}

export const deleteResponse = async (url) => {
    const URL = Config.BaseUrl + url;
    return new Promise(async (resolve, reject) => {
        axios(URL, {
            method: 'DELETE',
            headers: await getHeader(),
        }).then(response => {
            resolve(response)
        }).catch(error => {
            // console.log('err ===',url)
            if (error?.response?.status === 403 && !error.response.success) {
                logout()
                window.location.href = '/'
            }
            reject(error)
        })
    })
    
}


export const postResponse = async (url, payload) => {
    const URL = Config.BaseUrl + url;
    return new Promise(async (resolve, reject) => {
        axios(URL, {
            method: 'POST',
            headers: await getHeader(),
            data: payload
        }).then(response => {
            resolve(response)
        }).catch(error => {
            // console.log('err ===',url)
            if (error?.response?.status === 403 && !error.response.success) {
                logout()
                window.location.href = '/'
            }
            reject(error)
        })
    })
   
}



export const postResponseUpdated = async (url, payload) => {
    const URL = Config.BaseUrl + url;
    return new Promise(async (resolve, reject) => {
        axios(URL, {
            method: 'POST',
            headers: await getUpdatedHeader(),
            data: payload
        }).then(response => {
            resolve(response)
        }).catch(error => {
            // console.log('err ===',url)
            if (error?.response?.status === 403 && !error.response.success) {
                logout()
                window.location.href = '/'
            }
            reject(error)
        })
    })
   
}



export const postResponseFormData = async (url, payload) => {
    const URL = Config.BaseUrl + url;
    return new Promise(async (resolve, reject) => {
        axios.post(URL, payload, { headers: await getHeader(true) })
            .then(response => {
                resolve(response)
            }).catch(error => {
                // console.log('err ===',url)
                if (error?.response?.status === 403 && !error.response.success) {
                    logout()
                    window.location.href = '/'
                }
                reject(error)
            })
    })

}