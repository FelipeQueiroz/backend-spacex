import {
  ObjectID,
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectIdColumn,
} from 'typeorm';
import User from '../../users/schemas/User';

@Entity('posts')
class Post {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  title: string;

  @Column()
  body: string;

  @Column(() => User)
  owner: User;

  @Column()
  owner_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Post;
