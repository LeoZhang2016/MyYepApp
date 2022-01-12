import {Injectable} from '@angular/core';
import {of, Subject} from 'rxjs';
import {HttpService} from './http.service';
import {map, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})

export class LanguageService {
    lang: any;
    langSubject: Subject<any>;
    langFile: any;



    constructor(private httpService: HttpService) {
        this.lang = 'en';
        this.langSubject = new Subject<any>();
    }

    changeLang(lang) {
       this.lang = lang;
       this.langSubject.next(lang);
    }

    findLanguageByCode(code) {
        if (this.langFile) {
            return of({
                code,
                name: this.langFile[code].name,
                native: this.langFile[code].native
            });
        } else {
            return this.httpService.getLanguagePrediction().pipe(
                map((r) => {
                    this.langFile = r;
                    console.log(r[code]);
                    return {
                        code,
                        name: r[code].name,
                        native:  r[code].native
                    };
                })
            );
        }
    }

    getLangFile() {
        return this.httpService.getLanguagePrediction().pipe(
            tap(r => {
                this.langFile = r;
            })
        );
    }
}
