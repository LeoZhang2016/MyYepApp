import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '@env/environment';
import {from, observable, Observable, of} from 'rxjs';
// import {ReturnTypeTransform} from '@angular/compiler-cli/src/ngtsc/transform';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    apiUrl: string;
    geoCoder: any;


    constructor(private http: HttpClient) {
        this.apiUrl = environment.SERVER_URL.concat('/api');
    }

    getAllEnvironments() {
        return this.http.get(`${this.apiUrl}/anon/environments`);
    }


    searchProject(projectName?, country?, state?, area?, projectTypeIds?, bedRooms?, betweenPrice1?, betweenPrice2?, betweenTotalArea1?, betweenTotalArea2?, minLandSize?, maxLandSize?, bathRooms?, carParks?, tagIds?, projectStatus?, postCodeRange?, logics?, sort?, page?, pageSize?) {
        // String projectName,
        //     String country,
        //     String state,
        //     String area,
        //     Integer[] projectTypeIds,
        //     Integer[] bedRooms,
        //     BigDecimal betweenPrice1,
        //     BigDecimal betweenPrice2,
        //     BigDecimal betweenTotalArea1,
        //     BigDecimal betweenTotalArea2,
        //     BigDecimal betweenLandArea1,
        //     BigDecimal betweenLandArea2,
        //     Integer[] bathRooms,
        //     Byte projectStatus,
        //     Integer[] tagIds,
        //     Integer page,
        //     Integer pageSize
        // console.log(totalArea1);
        let params = new HttpParams();
        if (projectName) {
            params = params.set('projectName', projectName);
        }
        if (country) {
            params = params.set('country', country);
        }
        if (state) {
            console.log(state);
            params = params.set('state', state);
        }
        if (area) {
            params = params.set('suburb', area);
        }
        if (projectTypeIds && projectTypeIds.length > 0) {
            params = params.set('projectTypeIds', projectTypeIds.toString());
        }
        if (bedRooms && bedRooms.length > 0) {
            // console.log(bedRooms);
            params = params.set('bedRooms', bedRooms[0].toString());
        }
        if (betweenPrice1 || betweenPrice1 === 0) {
            params = params.set('betweenPrice1', betweenPrice1);
        }
        if (betweenPrice2 || betweenPrice2 === 0) {
            params = params.set('betweenPrice2', betweenPrice2);
        }
        if (betweenTotalArea1 || betweenTotalArea1 === 0) {
            params = params.set('betweenTotalArea1', betweenTotalArea1);
        }
        if (betweenTotalArea2 || betweenTotalArea2 === 0) {
            params = params.set('betweenTotalArea2', betweenTotalArea2);
        }
        if (minLandSize) {
            params = params.set('betweenLandArea1', minLandSize);
        }
        if (maxLandSize) {
            params = params.set('betweenLandArea2', maxLandSize);
        }
        if (bathRooms && bathRooms.length > 0) {
            // console.log(bathRooms);
            params = params.set('bathRooms', bathRooms[0].toString());
        }

        if (carParks && carParks.length > 0) {
            // console.log(carParks);
            params = params.set('carParks', carParks[0].toString());
        }

        if (tagIds && tagIds.length > 0) {
            params = params.set('tagIds', tagIds.toString());
        }

        // console.log(stateRange, countryRange);

        if (projectStatus) {
            // console.log(projectStatus);
            const sentProjectIds = [];
            if (projectStatus.indexOf('10') >= 0) {
                sentProjectIds.push(3);
            }
            if (projectStatus.indexOf('100') >= 0) {
                sentProjectIds.push(4);
            }
            // console.log(sentProjectIds);
            params = params.set('projectStatus', sentProjectIds.toString());
        }

        // if (countryRange) {
        //     params = params.set('countryRange', countryRange);
        // }
        // if (stateRange) {
        //     params = params.set('stateRange', stateRange);
        // }

        if (postCodeRange) {
            params = params.set('postCodeRange', postCodeRange);
        }

        if (logics) {
            params = params.set('logics', logics);
        }
        // console.log(sort);
        if (sort) {
            switch (sort) {
                case '1':
                    params = params.set('sorts', JSON.stringify({price: 'asc'}));
                    break;
                case '2':
                    params = params.set('sorts', JSON.stringify({price: 'desc'}));
                    break;
                case '3':
                    params = params.set('sorts', JSON.stringify({createTime: 'asc'}));
                    break;
                case '4':
                    params = params.set('sorts', JSON.stringify({createTime: 'desc'}));
                    break;
                case '5':
                    params = params.set('sorts', JSON.stringify({bedRoom: 'asc'}));
                    break;
                case '6':
                    params = params.set('sorts', JSON.stringify({bedRoom: 'desc'}));
                    break;
            }
        }
        if (page || page === 0) {
            params = params.set('page', page);
        }
        // console.log(pageSize);

        if (pageSize) {
            // console.log(pageSize);
            params = params.set('pageSize', pageSize);
        }

        return this.http.get(`${this.apiUrl}/anon/projects/complex`, {
            params
        });
    }

    getAllTagsByUser() {
        // 用户查询tags; page,pageSize选填
        return this.http.get(`${this.apiUrl}/anon/tags/by-user`);
    }

    getSuburbBoundary(country, state, suburb) {
        return this.http.get(`${this.apiUrl}/anon/map/boundary?country=${country}&state=${state}&suburb=${suburb}`);
    }


    getPlacePrediction(text) {
        return this.http.get(`${this.apiUrl}/anon/map/postcode?search=${text}`);
    }


    applyAgent(fd) {
        return this.http.post(`${this.apiUrl}/anon/apply-agent`, fd);
    }

    getSimilarProject(projectId) {
        return this.http.get(`${this.apiUrl}/anon/projects/similar/${projectId}`);
    }

    projectNameAutoCompelete(projectName, logics) {
        let params = new HttpParams();
        params = params.set('projectName', projectName);
        params = params.set('logics', logics);


        return this.http.get(`${this.apiUrl}/anon/projects/auto-complete`, {
            params
        });
    }

    getPropertySummary(projectId) {
        return this.http.get(`${this.apiUrl}/anon/projects/summary/${projectId}`);
    }

    getPropertySummaryWithPropertyDetail(projectId) {
        return this.http.get(`${this.apiUrl}/anon/projects/summary-properties/${projectId}`);
    }

    updateUserByAuth(fd) {
        return this.http.put(`${this.apiUrl}/auth/users/by-auth`, fd);
    }

    getUserProjectHistory() {
        return this.http.get(`${this.apiUrl}/auth/projects/history`);
    }

    getUserProjectLike() {
        return this.http.get(`${this.apiUrl}/auth/projects/like`);
    }

    getProjectOperationByType(type) {
        return this.http.get(`${this.apiUrl}/anon/operator/type?type=${type}`);
    }

    getAllNewsByLanguage(type) {
        return this.http.get(`${this.apiUrl}/anon/operator/type?type=${type}`);
    }

    getNormalNewsByLanguage(lang, page, pageSize) {
        return this.http.get(`${this.apiUrl}/anon/news/more?language=${lang}&page=${page}&pageSize=${pageSize}`);
    }

    getNewsDetailById(id) {
        return this.http.get(`${this.apiUrl}/anon/news/${id}`);
    }

    leaveMessage(fd) {
        return this.http.post(`${this.apiUrl}/anon/agent-message-board`, fd);
    }

    sendForgetPasswordEmail(fd) {
        return this.http.post(`${this.apiUrl}/anon/users/mail/forget-password`, fd);
    }

    resetPassword(fd) {
        return this.http.post(`${this.apiUrl}/anon/users/mail/auth-password`, fd);
    }


    getProjectDetail(projectId) {
        return this.http.get(`${this.apiUrl}/anon/projects/${projectId}`);
    }

    getProjectSimple(projectId) {
        return this.http.get(`${this.apiUrl}/anon/projects/simple/${projectId}`);
    }

    public login(email, password, verifyCode, isRememberMe) {
        const fd = new FormData();
        fd.append('email', email);
        fd.append('password', password);
        fd.append('verifyCode', verifyCode);
        if (isRememberMe) {
            fd.append('isRememberMe', 'true');
        }
        return this.http.post(`${this.apiUrl}/anon/users/login`, fd);

    }

    public logout() {
        return this.http.post(`${this.apiUrl}/anon/users/logout`, null);
    }

    public reLogin() {
        // const formData = new FormData();
        // formData.append('sessionId', sessionId);
        return this.http.get(`${this.apiUrl}/anon/users/re-login`);
    }

    getUserInfoByRememberMe() {
        return this.http.get(`${this.apiUrl}/anon/users/get`);
    }

    public register(fd) {
        return this.http.post(`${this.apiUrl}/anon/users/create`, fd);
    }

    // 用户收藏或取消收藏
    likeProject(fd) {
        const optionsArgs = {withCredentials: true};
        return this.http.put(`${this.apiUrl}/auth/users/like`, fd, optionsArgs);
    }

    // 记录用户浏览的项目
    addProjectHistory(fd) {
        // fd传projectId
        return this.http.put(`${this.apiUrl}/auth/users/history`, fd);
    }

    getAllAgentsRandom() {
        return this.http.get(`${this.apiUrl}/anon/users/agents/random`);
    }

    getAgentsRandomByPage(page, pageSize) {
        return this.http.get(`${this.apiUrl}/anon/users/agents/random?page=${page}&pageSize=${pageSize}`);
    }

    // public sendEmail() {
    //     return this.http.post(`/auth/users/sendmail/1`, null);
    // }
    //
    // public validateEmail(authCode) {
    //     return this.http.get(this.apiUrl + '/anon/users/auth/' + authCode);
    // }

    // public sendEmailToRetrieveUsername(email, verifyCode) {
    //     const formData = new FormData();
    //     formData.append('email', email);
    //     formData.append('mailType', '1');
    //     formData.append('verifyCode', verifyCode);
    //     return this.http.post(this.apiUrl + '/anon/users/sendmail/forget-username', formData);
    // }

    // public sendEmailToResetPassword(email, verifyCode) {
    //     const formData = new FormData();
    //     formData.append('email', email);
    //     formData.append('mailType', '1');
    //     formData.append('verifyCode', verifyCode);
    //     return this.http.post(this.apiUrl + '/anon/users/sendmail/forget-password', formData);
    // }


    // public getAddressFromCoordinates(lat, lng) {
    //     const latlng = {lat: lat, lng: lng};
    //     return new Observable(observer => {
    //         this.geoCoder.geocode({'location': latlng}, (results) => {
    //             if (results && results[0]) {
    //                 // console.log(results[0]);
    //                 observer.next(results[0]);
    //             } else {
    //                 // console.log('No results found');
    //                 observer.next(null);
    //             }
    //             observer.complete();
    //         });
    //     });
    // }


    mailPreAuth(fd) {
        return this.http.post(`${this.apiUrl}/anon/users/mail/pre-auth`, fd);
    }

    mailAuth(fd) {
        return this.http.post(`${this.apiUrl}/anon/users/mail/auth`, fd);
    }

    getAllClouds() {
        return this.http.get(`${this.apiUrl}/anon/projects/vr`);
    }

    googleLogin(fd) {
        return this.http.post(`${this.apiUrl}/anon/users/google-login`, fd);
    }

    getAreaPrediction() {
        return this.http.get('./assets/json/postcodes.json');
    }


    getAgentStoreDetail(userId) {
        return this.http.get(`${this.apiUrl}/anon/user-agent/show/${userId}`);
    }

    getLanguagePrediction() {
        return this.http.get('./assets/json/language.json');
    }

    getRegionDetailById(id) {
        console.log(id);
        return this.http.get(`${this.apiUrl}/anon/map/postcode/${id}`);
    }

    // 通过地址的经纬度查询地址详情
    getRegionDetailByCoordinates(lat, lgt) {
        return this.http.get(`${this.apiUrl}/anon/map/postcode-lat-lgt?lat=${lat}&lgt=${lgt}`);
    }

    getAgentDetailIncludeStore(agentId) {
        return this.http.get(`${this.apiUrl}/anon/user-agent/show/detail/${agentId}`);
    }

    getProjectRelatedAgent(projectId, agentId) {
        return this.http.get(`${this.apiUrl}/anon/projects/agent/${agentId}?projectId=${projectId}`);
    }

    // project eoi
    sendEoiForProject(fd) {
        return this.http.post(`${this.apiUrl}/anon/lottery-message-board`, fd);
    }

    downloadEventBrochure(lang) {
        return this.http.get(`${environment.SERVER_URL}/download/lottery/file?language=${lang}`);
    }

    getRental(postCode) {
        return this.http.get(`${this.apiUrl}/anon/map/rental?postcodeOrSuburb=${postCode}`);
    }

    getPopulation(postCode) {
        return this.http.get(`${this.apiUrl}/anon/map/population?postcode=${postCode}`);
    }

    // validate reservation token
    validateToken(fd) {
        return this.http.post(`${this.apiUrl}/anon/order-form/validate-token`, fd);
    }

    // Reserve
    reserve(fd) {
        return this.http.post(`${this.apiUrl}/anon/order-form/create-reserve`, fd);
    }

    // Get property detail
    showPropertyDetail(propertyId) {
        return this.http.get(`${this.apiUrl}/anon/properties/${propertyId}`);
    }

    // bank transfer
    createBankTransfer(fd) {
        return this.http.post(`${this.apiUrl}/anon/order-form/create-manual-reserve`, fd);
    }

    getLotDetailById(lotId) {
        return this.http.get(`${this.apiUrl}/anon/lots/${lotId}`);
    }

    searchOrderByOrderNumber(orderNumber) {
      return this.http.get(`${this.apiUrl}/anon/order-form/order-number/${orderNumber}`);
    }

}


