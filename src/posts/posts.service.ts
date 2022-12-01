import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostInput } from './dto/create-post.input';
import { Post } from './entities/post.entity';
import { UpdatePostInput } from './dto/update-post.input';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly userRepository: Repository<Post>,
  ) {}

  async create(createPostInput: CreatePostInput): Promise<Post> {
    const post = this.userRepository.create(createPostInput);
    return await this.userRepository.save(post);
  }

  async findAll(): Promise<Array<Post>> {
    return await this.userRepository.find();
  }

  async findOne(postId: string): Promise<Post> {
    const post = await this.userRepository.findOne({ where: { postId } });
    if (!post) {
      throw new NotFoundException(`User #${postId} not found`);
    }
    return post;
  }

  async update(
    postId: string,
    updatePostInput: UpdatePostInput,
  ): Promise<Post> {
    const post = await this.userRepository.preload({
      postId: postId,
      ...updatePostInput,
    });
    if (!post) {
      throw new NotFoundException(`Post #${postId} not found`);
    }
    return this.userRepository.save(post);
  }

  async remove(postId: string): Promise<Post> {
    const post = await this.findOne(postId);
    await this.userRepository.remove(post);
    return {
      postId: postId,
      title: '',
      content: '',
      comments: '',
    };
  }
}
