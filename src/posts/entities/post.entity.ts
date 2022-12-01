import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Post {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'id of the post' })
  postId: string;

  @Column()
  @Field(() => String, { description: 'title of the post' })
  title: string;

  @Column()
  @Field(() => String, { description: 'post content' })
  content: string;

  @Column()
  @Field(() => String, { description: 'post comments' })
  comments: string;
}
