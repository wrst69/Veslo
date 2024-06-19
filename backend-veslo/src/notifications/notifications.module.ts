import { Module } from "@nestjs/common";
import { DbModule } from "src/db/db.module";
import { NotificationsService } from "./notifications.service";
import { NotificationsController } from "./notifications.controller";

@Module({
  imports: [DbModule],
  controllers:[NotificationsController],
  providers:[NotificationsService],
})
export class NotificationsModule {}
