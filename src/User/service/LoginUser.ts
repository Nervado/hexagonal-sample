import CryptoInverter from "../../Adapters/CryptoInverter.ts";
import UserCollection from '../../Adapters/UserCollectionInMemory.ts';
import UseCase from "../../shared/UseCase.ts";

import User from '../model/User.ts';


export type UserLoginDTO = {
  email: string
  password: string
}

export default class UserLogin implements UseCase<UserLoginDTO, User> {

  constructor (
    private userCollection: UserCollection,
    private cryptoProvider: CryptoInverter) { }

  async execute (dto: UserLoginDTO): Promise<User | null> {

    const user = await this.userCollection.searchByEmail(dto.email);
    if (!user) {
      return null; // No user found
    }

    const isEqual = await this.cryptoProvider.compare(dto.password, user.password!)

    if (!isEqual) {
      return null; // Password doesn't match
    }
    // User found and password matches, return the User object
    return {
      name: user.name,
      email: user.email,
    };
  }
}




