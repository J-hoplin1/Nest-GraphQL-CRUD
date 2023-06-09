import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateProductInput {
  @Field()
  id: string;

  @Field()
  name?: string;

  @Field()
  price?: number;

  @Field()
  description?: string;
}
