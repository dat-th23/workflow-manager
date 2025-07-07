import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
    ConflictException,
    BadRequestException,
  } from '@nestjs/common';
  import { Request, Response } from 'express';
  import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

  @Catch(PrismaClientKnownRequestError)
  export class PrismaClientExceptionFilter implements ExceptionFilter {
    catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      const request = ctx.getRequest<Request>();
  
      let status = 400;
      let message = 'Database error';
  
      switch (exception.code) {
        case 'P2002':
          status = 409;
          message = 'Duplicate key error';
          break;
        case 'P2025':
          status = 404;
          message = 'Record not found';
          break;
      }
  
      response.status(status).json({
        statusCode: status,
        message,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    }
  }
  