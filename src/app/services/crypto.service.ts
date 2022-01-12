import { Injectable } from '@angular/core';
import CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  constructor() {}

  b64EncodeUnicode(str) {
    return btoa(
      encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
        return String.fromCharCode(parseInt(p1, 16));
      })
    );
  }

  static b64DecodeUnicode(str) {
    return decodeURIComponent(
      atob(str)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
  }

  encrypt(word) {
    return this.encryptFromServer(word, 'abcdefgabcdefg12');
  }

  encryptFromServer(word, securityKey: string): string {
    const key = CryptoJS.enc.Utf8.parse(securityKey);
    const srcs = CryptoJS.enc.Utf8.parse(word);
    const encrypted = CryptoJS.AES.encrypt(srcs, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    });
    return encrypted.toString();
  }

  decrypt(word) {
    return this.decryptFromServer(word, 'abcdefgabcdefg12');
  }

  decryptFromServer(word, securityKey: string): string {
    // console.log(securityKey);
    // console.log('000000');
    const key = CryptoJS.enc.Utf8.parse(securityKey);
    const decrypt = CryptoJS.AES.decrypt(word, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    });
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
  }

  md5Encrypt(word) {
    return CryptoJS.MD5(word).toString();
  }

  random() {
    return CryptoJS.lib.WordArray.random(8).toString();
  }
}
