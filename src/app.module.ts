import { Module } from '@nestjs/common';
import { HttpdataModule } from './httpdata/httpdata.module';
import { ScheduleModule } from '@nestjs/schedule';


@Module({
  imports: [HttpdataModule,
    ScheduleModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
