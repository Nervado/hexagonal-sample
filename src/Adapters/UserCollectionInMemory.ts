import User from '../User/model/User.ts';
import UserCollection from "../User/model/UserCollection.ts";

export default class UserCollectionInMemory implements UserCollection {

  static readonly users: User[] = []
  async add (user: User): Promise<void> {
    await UserCollectionInMemory.users.push(user)
  }

  async searchByEmail (email: string): Promise<User | null> {
    return await UserCollectionInMemory.users.find(user => user.email == email)!
  }
}