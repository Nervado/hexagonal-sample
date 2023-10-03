import User from "./User.ts";

export default interface UserCollection {
  add (user: User): Promise<void>
  searchByEmail (email: string): Promise<User | null>
}