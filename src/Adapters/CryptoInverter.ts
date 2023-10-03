// deno-lint-ignore-file require-await
import CryptoProvider from "../User/model/CryptoProvider.ts";

export default class CryptoInverter implements CryptoProvider {
  async encrypt (password: string): Promise<string> {
    return password.split(" ").reverse().join()
  }
  async compare (password: string, criptoPassword: string): Promise<boolean> {
    return password.split(" ").reverse().join('') === criptoPassword
  }
}