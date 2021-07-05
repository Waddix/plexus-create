import { Base } from "./Base"
import { Field, ObjectType } from "type-graphql";
import { Profile } from "./Profile";
import { Column, Entity, ManyToOne, JoinTable, ManyToMany } from "typeorm";
// import { FollowProject } from "./FollowProject";
// import { Follow } from "./Follow";
import { Tag } from "./Tag";

@ObjectType()
@Entity()
export class Project extends Base {
  @Field()
  @Column()
  title!: string;

  @Field()
  @Column()
  description!: string;

  @Field()
  @Column()
  ownerId!: number;

  @Field(() => Profile)
  @ManyToOne(() => Profile, (p: Profile) => p.projects, {cascade: true})
  owner!: Profile;

  // // //* Allow users to follow the project by establishing jointable with Profile via Follow entity
  // @Field()
  // @ManyToMany(() => Profile, (profile: Profile) => profile.followedProjects)
  // followers: Promise<Profile[]>;

  @Field(() => [Tag])
  @ManyToMany(() => Tag, (t: Tag) => t.name, {cascade: true})
  @JoinTable()
  tags: Tag[];


  // @Field(() => [Profile])
  // @ManyToMany(() => Profile)
  // @JoinTable()
  // followers: Profile[];
}