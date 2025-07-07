import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService, private jwt: JwtService) {}

    async register(dto: RegisterDto){
        const existing = await this.prisma.user.findUnique({
            where: {email: dto.email}
        });

        if(existing) throw new ConflictException('Email already exists');
        
        const hashedPassword = await bcrypt.hash(dto.password, 10);

        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                name: dto.name,
                password: hashedPassword,
            }
        })

        return this.signToken(user.id, user.email)
    };

    async login(dto: LoginDto) {
        const user = await this.prisma.user.findUnique({
            where: {email: dto.email}
        })
        if (!user) throw new UnauthorizedException('Invalid credentials');

        const isMatch = await bcrypt.compare(dto.password, user.password);
        if (!isMatch) throw new UnauthorizedException('Invalid credentials');
    
        return this.signToken(user.id, user.email )
    }

    private signToken(id: string, email: string) {
        const payload = {sub: id, email};
        return {
            access_token: this.jwt.sign(payload),
            expires_in: 24*60*60,
            token_type: "Bearer",
        }
    };
}
