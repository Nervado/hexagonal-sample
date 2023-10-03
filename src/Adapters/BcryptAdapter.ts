import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.1/mod.ts";
import CryptoProvider from "../User/model/CryptoProvider.ts";

export default class BcryptAdapter implements CryptoProvider {
  async encrypt (password: string): Promise<string> {
    return await bcrypt.hash(password)
  }
  async compare (password: string, criptoPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, criptoPassword)
  }
}