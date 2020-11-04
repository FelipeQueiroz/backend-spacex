import {
  ObjectID,
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectIdColumn,
  OneToMany,
} from 'typeorm';

import Post from '../../posts/schemas/Post';

@Entity('users')
class User {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  role: string;

  @Column()
  email: string;

  @Column()
  avatar: string;

  @OneToMany(() => Post, post => post.owner)
  posts: Post[];

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}

export default User;
