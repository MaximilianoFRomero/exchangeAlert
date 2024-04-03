import { Body, Controller, Get, Post } from '@nestjs/common';
import { HttpdataService } from './httpdata.service';
import { CreateHttpdatumDto } from './dto/create-httpdatum.dto';

@Controller('httpdata')
export class HttpdataController {
  constructor(private readonly httpdataService: HttpdataService) {}

  @Post()
  create(@Body()data) {
    return this.httpdataService.bindata(data);
  }

  @Get()
  find(advertiser){
    return this.httpdataService.advData(advertiser);
  }


}
