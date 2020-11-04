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

  @Column()
  owner_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'owner_id' })
  owner: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Post;
