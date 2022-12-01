import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'id of the post' })
  postId: string;

  @Column('int')
  @Field(() => Int, { description: 'title of the post' })
  title: string;

  @Column()
  @Field(() => String, { description: 'post content' })
  content: string;

  @Column()
  @Field(() => String, { description: 'post comments' })
  comments: string;
}
