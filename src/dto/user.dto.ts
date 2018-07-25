import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsDefined, IsEmail, IsDate, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';
import { IUser } from '../repository/schema/user.entity';
import { Role } from '../repository/enum/role.enum';

export class UserDto implements IUser {

  @IsString()
  @ApiModelProperty()
  _id?: string;

  @IsEmail()
  @IsDefined()
  @ApiModelProperty()
  email: string;

  @IsString()
  @IsDefined()
  @ApiModelProperty()
  password: string;

  @IsDefined()
  @IsEnum(Role)
  @ApiModelProperty()
  role: Role;

  @IsString()
  @IsDefined()
  @ApiModelProperty()
  name: string;

  @IsString()
  @Type(() => Date)
  @ApiModelProperty()
  lastLoginAttempt?: Date;

  @IsDate()
  @Type(() => Date)
  @ApiModelProperty()
  lastLoginSuccessful?: Date;

  @ApiModelProperty()
  @Type(() => Date)
  @IsDate()
  createdOn?: Date;

  @ApiModelProperty()
  @Type(() => Date)
  @IsDate()
  updatedOn?: Date;
}
