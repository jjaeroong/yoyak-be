import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from '../prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { ContentController } from 'layer/controllers/content.controller';
import { ContentService } from 'layer/services/content.service';
import { ReviewService } from './layer/services/review.service';
import { ReviewController } from './layer/controllers/review.controller';
import { ReviewModule } from './layer/modules/review.module';
import { ReviewRepository } from './layer/repositories/review.repository';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule, 
    ReviewModule,
  ],
  controllers: [AppController, ContentController, ReviewController],
  providers: [AppService, ContentService, ReviewService, ReviewRepository],
})
export class AppModule {}