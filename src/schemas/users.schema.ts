import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';
// import { getEnumValuesFromObject } from '../helpers/utils.helper'; // Import any necessary helpers
// import { USER_ROLES, USER_STATUS } from '../constants/enums'; // Import any necessary constants

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ default: '' })
  firstName: string;

  @Prop({ default: '' })
  lastName: string;

  @Prop({ default: '' })
  email: string;

  @Prop({ default: '' })
  salt: string;

  @Prop({ default: '' })
  password: string;

  //   @Prop({ enum: getEnumValuesFromObject(USER_STATUS), default: USER_STATUS.PENDING_REGISTRATION.dbValue })
  //   userStatus: string;

  //   @Prop({ enum: getEnumValuesFromObject(USER_ROLES), default: USER_ROLES.USER.dbValue })
  //   userRole: string;

  @Prop({ default: '' })
  telephone: string;

  @Prop({ default: '' })
  avatarId: string;

  @Prop({ default: '' })
  lastViewedAt: string;

  @Prop({ default: '' })
  verifyEmailToken: string;

  @Prop({ default: false })
  emailVerified: boolean;

  @Prop({ default: '' })
  forgotPasswordToken: string;

  @Prop({ default: '' })
  lastPasswordSetAt: string;

  @Prop({ default: '' })
  allowAuthTokenGeneratedAfter: string;

  @Prop({ default: false })
  isTfaEnabled: boolean;

  @Prop({ default: '', trim: true })
  secretKey: string;

  @Prop({ default: '', trim: true })
  otpAuthUrl: string;

  @Prop({
    google: { type: String, default: '' },
    facebook: { type: String, default: '' },
    apple: { type: String, default: '' },
  })
  socialAccounts: { google: string; facebook: string; apple: string };

  @Prop({ default: false })
  scheduledForDeletion: boolean;
}

export const UserEntity = SchemaFactory.createForClass(User);
