import { Module } from '@nestjs/common';
import { ApiSpaceGatewayService } from './apispace-gateway.service';
import { JuheGatewayService } from './juhe-gateway.service';
import { MhGatewayService } from './mh-gateway.service';
import { ZnghGatewayService } from './zngh-gateway.service';

@Module({
  providers: [
    MhGatewayService,
    JuheGatewayService,
    ZnghGatewayService,
    ApiSpaceGatewayService,
  ],
  exports: [
    MhGatewayService,
    JuheGatewayService,
    ZnghGatewayService,
    ApiSpaceGatewayService,
  ],
})
export class GatewayModule {}
