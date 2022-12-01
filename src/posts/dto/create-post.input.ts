import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field(() => String, { description: 'title of the post' })
  title: string;

  @Field(() => String, { description: 'post content' })
  content: string;

  @Field(() => String, { description: 'post comments' })
  comments: string;
}
