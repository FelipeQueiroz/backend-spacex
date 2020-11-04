import {
  ObjectID,
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectIdColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import User from '../../users/schemas/User';

@Entity('news')
class Post {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  title: string;

  @Column()
  body: string;

  @ManyToOne(() => User, user => user.posts, {
    eager: true,
  })
  @JoinColumn({ name: 'owner_id' })
  owner: User;

  @Column()
  owner_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Post;
