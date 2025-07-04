// src/auth/modules/jwt.strategy.ts
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JWtStrategy extends PassportStrategy(Strategy) {
    constructor(config: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.get<string>('JWT_SECRET') || 'ZzLoRrCG0W8WViBp3Br3',
        });
    }
    
    async validate(payload: any) {
        // JWT payload (decoded)
        return {
            userId: payload.sub,
            email: payload.email,
            role: payload.role
        }
    }
}