import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import axios, { AxiosInstance } from 'axios';
import { response } from 'express';

@Injectable()
export class HttpdataService {
  private readonly axios: AxiosInstance = axios;
  private advertiser: String;

  //@Cron(CronExpression.EVERY_10_SECONDS)
  async bindata(data) {
    const resp = await this.axios.post('https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search', data);
    const respData = resp.data.data;
    for(let i = 0; i < respData.length; i++){
      if(respData[i].adv.price == "1.000"){
        this.advertiser = respData[i].adv.advNo;
        console.log(respData[i].adv.advNro);
        return respData[i].adv;
      }
    }
  }

  async advData(data){
    const url = `https://p2p.binance.com/bapi/c2c/v2/public/c2c/adv/detail-with-advertiser?advNo=${this.advertiser}`;
    const resp = await this.axios.get(url);
    const respAdv = resp.data.data;
    if(respAdv.adv.tradeMethods[0].payType == "BANK"){
      console.log(respAdv.adv.tradeMethods[0]);
      return console.log("RING RING OFERTA DISPONIBLE");
    }
    return console.log("No tiene oferta de compra valida");
  }
}
