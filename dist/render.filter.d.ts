import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { RenderService } from './render.service';
import { ErrorResponse } from './types';
import { ApplicationConfig } from '@nestjs/core';
export declare class RenderFilter implements ExceptionFilter {
    private readonly service;
    private readonly nestConfig;
    constructor(service: RenderService, nestConfig: ApplicationConfig);
    catch(err: any, host: ArgumentsHost): Promise<void>;
    serializeError(err: any): ErrorResponse;
}
