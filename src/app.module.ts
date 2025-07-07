import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TasksModule } from './modules/tasks/tasks.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { MembersModule } from './modules/members/members.module';
import { CommentsModule } from './modules/comments/comments.module';
import { TaskAssigneesModule } from './modules/task-assignees/task-assignees.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {expiresIn: '1d'}
    }),
    PrismaModule,
    UsersModule, 
    AuthModule,
    ProjectsModule,
    TasksModule,
    MembersModule,
    CommentsModule,
    TaskAssigneesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}