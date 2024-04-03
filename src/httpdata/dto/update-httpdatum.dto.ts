import { PartialType } from '@nestjs/mapped-types';
import { CreateHttpdatumDto } from './create-httpdatum.dto';

export class UpdateHttpdatumDto extends PartialType(CreateHttpdatumDto) {}
