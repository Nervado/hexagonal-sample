export default interface CryptoProvider {
  encrypt (password: string): Promise<string>
  compare (password: string, criptoPassword: string): Promise<boolean> // this is a door
}