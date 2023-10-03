import AddUser from "./User/service/AddUser.ts";
import UserLogin from './User/service/LoginUser.ts';
//import CryptoInverter from "./Adapters/CryptoInverter.ts";
import UserCollectionInMemory from "./Adapters/UserCollectionInMemory.ts";
import BcryptAdapter from "./Adapters/BcryptAdapter.ts";

const userCollection = new UserCollectionInMemory()
const cryptoProvider = new BcryptAdapter() //new CryptoInverter()
const addUser = new AddUser(userCollection, cryptoProvider)

// add user
await addUser.execute({
  name: "John",
  email: "john@john.land",
  password: "1234567"
})

// user login
const login = new UserLogin(userCollection, cryptoProvider)

const user = await login.execute({
  email: "john@john.land",
  password: "1234567"
})

console.log(user)