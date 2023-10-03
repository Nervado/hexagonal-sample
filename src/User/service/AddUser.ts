import CryptoInverter from "../../Adapters/CryptoInverter.ts";
import UserCollection from '../../Adapters/UserCollectionInMemory.ts';
import UseCase from "../../shared/UseCase.ts";
import User from '../model/User.ts';


export default class AddUser implements UseCase<User, void> {

  constructor (
    private userCollection: UserCollection,
    private cryptoProvider: CryptoInverter) { }

  async execute (user: Required<User>): Promise<void> {
    const criptoPassword = await this.cryptoProvider.encrypt(user.password);
    const criptUser = { ...user, password: criptoPassword };
    await this.userCollection.add(criptUser);
  }
}


