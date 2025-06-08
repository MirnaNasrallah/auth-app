import { Body, Controller, Post, Get, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { SigninDto } from './dto/signin.dto';
import { RefreshDto } from './dto/refresh.dto';
import { JwtGuard } from './jwt.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    /**
     * Signup endpoint
     * POST /auth/signup
     * Body: { name, email, password }
     */
    @Post('signup')
    async signup(@Body() signupDto: SignupDto) {
        return this.authService.signup(signupDto);
    }

    /**
     * Signin endpoint
     * POST /auth/signin
     * Body: { email, password }
     * Returns: { access_token, refresh_token }
     */
    @Post('signin')
    async signin(@Body() signinDto: SigninDto) {
        return this.authService.signin(signinDto);
    }

    /**
     * Refresh endpoint
     * POST /auth/refresh
     * Body: { refresh_token }
     * Returns: { access_token }
     */
    @Post('refresh')
    async refresh(@Body() refreshDto: RefreshDto) {
        return this.authService.refreshToken(refreshDto.refresh_token);
    }

    /**
     * Protected profile endpoint
     * GET /auth/profile
     * Header: Authorization: Bearer <token>
     */
    @Get('profile')
    @UseGuards(JwtGuard)
    profile(@Req() req) {
        return req.user;
    }
}
