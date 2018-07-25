import { ReflectMetadata } from '@nestjs/common';

export const Authenticate = () => ReflectMetadata('authenticate', true);
