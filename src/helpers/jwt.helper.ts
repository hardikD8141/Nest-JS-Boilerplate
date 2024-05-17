import { Injectable } from '@nestjs/common';
import { JwtPayload } from '../interfaces/jwt.payload.interface';
import * as jwt from 'jsonwebtoken';

import { AuthTerms } from '../config/constants';

@Injectable()
export class JwtHelper {
  /**
   * It extracts token from header
   * @param request request object
   */
  getTokenFromHeader(request: Request): string {
    const token: string =
      request.headers[AuthTerms.accessToken] ||
      request.headers[AuthTerms.authorization];

    if (token && token.startsWith('Bearer ')) {
      // Remove Bearer from string
      return token.slice(7, token.length);
    }
    return token;
  }

  /**
   * It signs given payload to generate jwt-token
   * @param payload data that is to be signed
   */
  sign = (payload: JwtPayload): string => {
    return jwt.sign(payload, process.env.JWT_SECRET);
  };

  /**
   * It verifies if passed token is valid or not
   * @param token jwt-token
   */
  verify = async (token: string): Promise<JwtPayload | boolean> => {
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;

      return payload;
    } catch (e) {
      return false;
    }
  };
}
