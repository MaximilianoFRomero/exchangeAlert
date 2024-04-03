import { Module } from '@nestjs/common';
import { HttpdataService } from './httpdata.service';
import { HttpdataController } from './httpdata.controller';

@Module({
  controllers: [HttpdataController],
  providers: [HttpdataService],
})
export class HttpdataModule {}
