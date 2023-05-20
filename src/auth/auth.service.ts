import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { UsersService } from 'src/users/users.service';

interface JwtPayload  {
  id: User['id'];
  email: User['email'];
}

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private usersService: UsersService) {}

  async validateUser(username: string, password: string): Promise<User> {
    const user = await this.usersService.getUserByEmail(username)
    if (user && bcrypt.compareSync(password, user.password)) {
      return user
    }
    return null
  }

  sign(user: User) {
    const payload: JwtPayload = { id: user.id, email: user.email }
    return { access_token: this.jwtService.sign(payload) };
  }
}
