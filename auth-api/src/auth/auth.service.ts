// Contains the business logic for authentication and token management.
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { SignupDto } from './dto/signup.dto';
import { SigninDto } from './dto/signin.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        private jwtService: JwtService,
        private configService: ConfigService,
    ) {}

    async signup(signupDto: SignupDto): Promise<User> {
        const hashedPassword = await bcrypt.hash(signupDto.password, 10);
        const user = new this.userModel({ ...signupDto, password: hashedPassword });
        return user.save();
    }

    async signin(signinDto: SigninDto): Promise<{ access_token: string; refresh_token: string }> {
        const user = await this.userModel.findOne({ email: signinDto.email }).exec();
        if (!user) throw new UnauthorizedException('Invalid credentials');
        const isMatch = await bcrypt.compare(signinDto.password, user.password);
        if (!isMatch) throw new UnauthorizedException('Invalid credentials');
        const payload = { sub: user._id, email: user.email, name: user.name };
        const access_token = this.jwtService.sign(payload, { expiresIn: '1h', secret: this.configService.get<string>('JWT_SECRET') });
        const refresh_token = this.jwtService.sign(payload, { expiresIn: '7d', secret: this.configService.get<string>('JWT_REFRESH_SECRET') });
        return { access_token, refresh_token };
    }

    async refreshToken(refreshToken: string): Promise<{ access_token: string }> {
        try {
            const payload = this.jwtService.verify(refreshToken, { secret: this.configService.get<string>('JWT_REFRESH_SECRET') });
            const newAccessToken = this.jwtService.sign({ sub: payload.sub, email: payload.email, name: payload.name }, { expiresIn: '1h', secret: this.configService.get<string>('JWT_SECRET') });
            return { access_token: newAccessToken };
        } catch (e) {
            throw new UnauthorizedException('Invalid refresh token');
        }
    }
}
